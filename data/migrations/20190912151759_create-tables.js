
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name').notNullable();
    })
    .createTable('ingrediants', tbl => {
        tbl.increments();
        tbl.string('ingrediant_name').notNullable().unique();
    })
    .createTable('recipe_ingrediant', tbl => {
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('ingrediant_id')
            .unsigned()
            .references('id')
            .inTable('ingrediants')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('quantity')
        tbl.primary(['recipe_id', 'ingrediant_id'])
    })
    .createTable('instructions', tbl => {
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.text('steps').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingrediant')
    .dropTableIfExists('ingrediants')
    .dropTableIfExists('recipes');
};
