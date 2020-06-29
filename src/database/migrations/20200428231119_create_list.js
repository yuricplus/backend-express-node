
exports.up = function(knex) {
  return knex.schema.createTable('list', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('date').notNullable();
    table.string('priority').notNullable();

    table.string('id').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('list')
};
