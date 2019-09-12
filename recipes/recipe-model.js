const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingrediant as RI')
        .join('recipes as R', 'R.id', 'R.recipe_id')
        .select('R.recipe_id', 'R.recipe_name' )
        .where({ recipe_id }) 
}