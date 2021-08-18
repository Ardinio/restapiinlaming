const { Request, Response, NextFunction } = require('express');

// In-memory DB
const weaponIdIndex = 1;
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
    } else {
        res.status(200).json(weapon);
    }
}

module.exports = {
    getWeapons,
    getOneWeapon
}