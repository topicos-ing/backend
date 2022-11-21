const auth = require("../models/auth");
const router = require("../server");

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.authenticate(email, password);
    const userTokenId = await user.user.getIdToken();
    const query ={
      tokenID : userTokenId
    };

    res.end(JSON.stringify(query));
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

