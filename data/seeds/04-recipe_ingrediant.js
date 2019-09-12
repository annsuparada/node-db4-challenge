exports.seed = function(knex, Promise) {
  return knex('recipe_ingrediant').insert([
    { recipe_id: 1, ingrediant_id: 1 },
    { recipe_id: 1, ingrediant_id: 2 },
    { recipe_id: 1, ingrediant_id: 3 },
    { recipe_id: 1, ingrediant_id: 5 },
    { recipe_id: 1, ingrediant_id: 6 },
    { recipe_id: 2, ingrediant_id: 1 },
    { recipe_id: 2, ingrediant_id: 6 },
    { recipe_id: 2, ingrediant_id: 7 },
    { recipe_id: 3, ingrediant_id: 1 },
    { recipe_id: 3, ingrediant_id: 2 },
    { recipe_id: 3, ingrediant_id: 4 },
    { recipe_id: 3, ingrediant_id: 8 },
  ]);
};
