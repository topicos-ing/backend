const auth = require("../models/auth");
const router = require("../server");

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.addUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});
