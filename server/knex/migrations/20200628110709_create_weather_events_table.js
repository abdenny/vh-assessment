exports.up = function (knex) {
  return knex.schema.createTable('weather', function (table) {
    table.increments();
    table.string('city');
    table.string('state');
    table.string('date');
    table.string('temp');
    table.integer('humidity');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('weather');
};
