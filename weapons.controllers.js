const { Request, Response, NextFunction } = require('express');

// In-memory DB
let weaponIdIndex = 1;
const weapons = [{
    id: 0,
    name: 'Blossomed Blade',
    type: 'Sword/Katana',
    durability: 'Medium'
}];

/**
 * Responds with all weapons from DB
 * @param {Request} req
 * @param {Response} res 
 * @param {NextFunction} next 
 */

const getWeapons = (req, res, next) => {
    res.json(weapons);
}

/**
 * Saves a new weapon to the DB
 * @param {Request} req
 * @param {Response} res 
 * @param {NextFunction} next 
 */

 const saveWeapon = (req, res, next) => {
    const weapon = { ...req.body, id: weaponIdIndex++ };
    weapons.push(weapon);
    res.json(weapon);
}

/**
 * Update a weapon in the DB
 * @param {Request} req
 * @param {Response} res 
 * @param {NextFunction} next 
 */

 const updateWeapon = (req, res, next) => {
    const { id } = req.params;
    const weapon = weapons.find(weapon => weapon.id == id);
    if (!weapon) {
        res.status(404).json(`Weapon with id ${id} was not found.`);
        return;
    }

    weapon.name = req.body.name;
    weapon.type = req.body.type;
    weapon.durability = req.body.durability;
    res.json(weapon);
}

/**
 * Responds with the requested weapon or send an error if that weapon is not in the list
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */

const getOneWeapon = (req, res, next) => {
    const { id } = req.params;
    const weapon = weapons.find(weapon => weapon.id == id);
    if (!weapon) {
        res.status(404).json(`Weapon with id ${id} was not found.`);
        return;
    } else {
        res.status(200).json(weapon);
    }
}

/**
 * Delete a weapon in the DB
 * @param {Request} req
 * @param {Response} res 
 * @param {NextFunction} next 
*/

const deleteWeapons = (req, res, next) => {
    const { id } = req.params;
    const weapon = weapons.find(weapon => weapon.id == id);
    if (!weapon) {
        res.status(404).json(`Weapon with id ${id} was not found.`);
        return;
    }

    const index = weapons.indexOf(weapon);
    weapons.splice(index, 1);

    res.json(weapon);
}

module.exports = {
    getWeapons,
    saveWeapon,
    updateWeapon,
    getOneWeapon,
    deleteWeapons
}