const Joi = require("joi");

module.exports = (schema) => async (req, res, next) => {
  try {
    const result = await schema.validateAsync(req.body);
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error?.details[0]?.message });
  }
};
