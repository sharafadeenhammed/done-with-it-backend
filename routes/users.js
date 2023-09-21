const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Joi = require("joi");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

const schema = Joi.object({
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
});

router.post("/", validateWith(schema), (req, res) => {
  const { name, email, password } = req.body;
  if (usersStore.getUserByEmail(email))
    return res
      .status(400)
      .send({ error: "A user with the given email already exists." });

  const user = usersStore.addUser({ name, email, password });

  const token = jwt.sign(
    { userId: user.id, name: user.name, email },
    "jwtPrivateKey"
  );
  res.status(201).json({ token, user });
});

router.get("/", (req, res) => {
  res.send(usersStore.getUsers());
});

module.exports = router;
