exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { recipe_id: 1, steps: 'step 1'},
    { recipe_id: 1, steps: 'step 2'},
    { recipe_id: 1, steps: 'step 3'},
    { recipe_id: 2, steps: 'step 1'},
    { recipe_id: 2, steps: 'step 2'},
    { recipe_id: 2, steps: 'step 3'},
    { recipe_id: 3, steps: 'step 1'},
    { recipe_id: 3, steps: 'step 2'},
    { recipe_id: 3, steps: 'step 3'},
  ]);
};
