const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const apiKey = process.env.FIREBASE_API_KEY;

firebase.initializeApp({
  apiKey,
});

var serviceAccount = require(process.env.FIREBASE_ROUTE);
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const authTokenVerify = async (req, res, next) => {
  const tokenString = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")
    : null;
  if (!tokenString?.[1]) {
    res.status(401).json({ error: "No header provider" });
    return;
  }
  try {
    await admin.auth().verifyIdToken(tokenString[1]);
    next();
  } catch (e) {
    res.status(401).json({ error: e?.message });
  }
};

const getUserUId = async (req) => {
  const tokenString = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")
    : null;
  try {
    const id = (await admin.auth().verifyIdToken(tokenString[1])).uid;
    return id;
  } catch (e) {
    return undefined;
  }
};
exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);

exports.authTokenVerify = (req, res, next) => authTokenVerify(req, res, next);

exports.getUserUId = (req) => getUserUId(req);
