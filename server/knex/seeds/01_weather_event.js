exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('weather')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('weather').insert([
        {
          city: 'Houston',
          state: 'Texas',
          date: 'Sun Jun 28 2020 11:21:41 GMT-0500 (Central Daylight Time)',
          temp: '87.04',
          humidity: 66,
        },
      ]);
    });
};
