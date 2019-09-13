
exports.seed = function(knex, Promise) {
  return knex('ingrediants').insert([
    {ingrediant_name: 'Fish sause'},
    {ingrediant_name: 'Sugar'},
    {ingrediant_name: 'Soy sause'},
    {ingrediant_name: 'Curry paste'},
    {ingrediant_name: 'Rice'},
    {ingrediant_name: 'Lime'},
    {ingrediant_name: 'Shrimp'},
    {ingrediant_name: 'Coconut mlike'},
  ]);
};