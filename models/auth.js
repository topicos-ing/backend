const firebase = require("firebase/app");
const {
  getAuth,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const apiKey = process.env.FIREBASE_API_KEY;

firebase.initializeApp({
  apiKey
});

var serviceAccount = require("../serviceAccountKey.json");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const authTokenVerify = (req, res, next) => {
  const tokenString = req.headers["authorization"] ? req.headers["authorization"].split(" ") : null;
  if (!tokenString) {
    res.send("No header provider");
  } else if (!tokenString[1]) {
    res.send("No header provider");
  } else {
    const { getAuth } = require("firebase-admin/auth");
    getAuth().
      verifyIdToken(tokenString[1])
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        next()
      })
      .catch((error) => {
        res.send(error);
      });
  }

}
const auth = getAuth();

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);


exports.authTokenVerify = (req, res, next) =>
  authTokenVerify(req, res, next);
