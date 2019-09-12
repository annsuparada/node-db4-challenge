exports.seed = function(knex, Promise) {
  return knex('recipe_ingrediant').insert([
    { recipe_id: 1, ingrediant_id: 1, quantity: '1 Tbl'},
    { recipe_id: 1, ingrediant_id: 2, quantity: '1 Tbl' },
    { recipe_id: 1, ingrediant_id: 3, quantity: '1 Tbl' },
    { recipe_id: 1, ingrediant_id: 5, quantity: '2 Cups' },
    { recipe_id: 1, ingrediant_id: 6, quantity: '1/2 slice' },
    { recipe_id: 2, ingrediant_id: 1, quantity: '1 Tbl' },
    { recipe_id: 2, ingrediant_id: 6, quantity: '1 Lime' },
    { recipe_id: 2, ingrediant_id: 7, quantity: '10 Shrimps' },
    { recipe_id: 3, ingrediant_id: 1, quantity: '1 Tbl' },
    { recipe_id: 3, ingrediant_id: 2, quantity: '1 Tbl' },
    { recipe_id: 3, ingrediant_id: 4, quantity: '1/2 Cup' },
    { recipe_id: 3, ingrediant_id: 8, quantity: '1 Cup' },
  ]);
};
