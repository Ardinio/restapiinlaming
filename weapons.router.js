const express = require('express');
const { getWeapons, getOneWeapon, updateWeapon, saveWeapon, deleteWeapons } = require('./weapons.controllers');
const { saveValidation, updateValidation } = require('./weapons.validation');

// Create the router obeject 
const router = express.Router();

// Define the endpoints 
router.get('/api/weapons', getWeapons);
router.get('/api/weapons/:id', getOneWeapon);
router.post('/api/weapons', saveValidation, saveWeapon);
router.put('/api/weapons/:id', updateValidation, updateWeapon);
router.delete('/api/weapons/:id', deleteWeapons);

// Export the router object
module.exports = router;