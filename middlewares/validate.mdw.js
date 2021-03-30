const Ajv = require("ajv").default;

module.exports = (schema) => (req, res, next) => {
    //check data is empty
    const data = req.body;
    if (Object.keys(data).length === 0) {
        return res.status(400).json({ object: "is empty" });
    }
    //check schema data
    const ajv = new Ajv({ strict: false });
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        return res.status(400).json(validate.errors);
    }

    next();
};
