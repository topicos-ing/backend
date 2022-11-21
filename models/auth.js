const firebase = require("firebase/app");
const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
 } = require("firebase/auth");

 const apiKey = process.env.FIREBASE_API_KEY;

firebase.initializeApp({apiKey
});
const authTokenVerify = (req, res, next) => {
  var admin = require("firebase-admin");
  var serviceAccount = require("../serviceAccountKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const tokenString = req.headers["authorization"] ? req.headers["authorization"].split(" ") : null;
  if(!tokenString){
    res.send("No header provider");
  }else if(!tokenString[1]){
    res.send("No header provider");
  }else{
    const { getAuth } = require("firebase-admin/auth");
    getAuth().
    verifyIdToken(tokenString[1])
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid);
      next()
    })
    .catch((error) => {
      res.send(error);
    });
  }

}
const auth = getAuth();

exports.addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);


exports.authTokenVerify = (req, res, next) =>
  authTokenVerify(req, res, next);
