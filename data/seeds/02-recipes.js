
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'Fried Rice'},
    {recipe_name: 'Tomyum Soup'},
    {recipe_name: 'Red Curry'}
  ]);
};
