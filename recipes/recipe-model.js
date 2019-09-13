const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as R')
        .join('recipe_ingrediant as RI', 'R.id', 'RI.recipe_id')
        .join('ingrediants as I', 'I.id', 'RI.ingrediant_id')
        .select('R.recipe_name', 'RI.quantity', 'I.ingrediant_name' )
        .where( 'RI.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('recipes as R')
        .join('instructions as I', 'R.id', 'I.recipe_id')
        .select('I.steps', 'R.recipe_name')
        .where('I.recipe_id', recipe_id)
}