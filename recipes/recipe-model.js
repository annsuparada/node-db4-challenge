const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    // return db('recipe_ingrediant as RI')
    //     .join('recipes as R', 'R.id', 'RI.recipe_id')
    //     .join('ingrediants as I', 'I.id', 'RI.ingrediant_id')
    //     .select('R.id', 'R.recipe_name', 'RI.quantity', 'I.ingrediant_name' )
    //     .where({ recipe_id }) 
    return db('recipes as R')
        .join('recipe_ingrediant as RI', 'R.id', 'RI.recipe_id')
        .join('ingrediants as I', 'I.id', 'RI.ingrediant_id')
        .select('R.recipe_name', 'RI.quantity', 'I.ingrediant_name' )
        .where( 'RI.recipe_id', recipe_id)
}