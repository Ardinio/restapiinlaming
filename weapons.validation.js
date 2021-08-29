const { body, validationResult } = require('express-validator');

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    } else {
        next();
    }
}

const saveValidation = [
    body('name').notEmpty().isLength({ min: 3 }),
    body('type').notEmpty().isLength({ min: 2 }),
    body('durability').notEmpty().isLength({ min: 1 }),
    checkValidation
];

const updateValidation = [
    body('name').notEmpty().isLength({ min: 3 }),
    body('type').notEmpty().isLength({ min: 2 }),
    body('durability').notEmpty().isLength({ min: 1 }),
    checkValidation
];

module.exports = {
    saveValidation,
    updateValidation
};