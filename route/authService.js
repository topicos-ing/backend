const auth = require("../models/auth");
const router = require("../server");

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await auth.authenticate(email, password);
    const userTokenId = await result.user.getIdToken();
    const query = {
      tokenID: userTokenId,
    };

    res.status(200).json(query);
  } catch (err) {
    res.status(401).json({ error: "Datos enviados incorrectos" });
  }
});
