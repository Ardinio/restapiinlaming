const express = require('express');
const { getWeapons, getOneWeapon, saveWeapon } = require('./weapons.controllers');
const { saveValidation } = require('./weapons.validation');

// Create the router obeject 
const router = express.Router();

// Define the endpoints 
router.get('/api/weapons', getWeapons);
router.get('/api/weapons/:id', getOneWeapon);
router.post('/api/weapons', saveValidation, saveWeapon);
router.put('/api/weapons/:id');
router.delete('/api/weapons/:id');

// Export the router object
module.exports = router;