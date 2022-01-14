
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([{
        id: 1,
        name: 'yocargo'
      }, {
        id: 2,
        name: 'makershoes'
      }, {
        id: 3,
        name: 'warehouse'
      }, {
        id: 4,
        name: 'pospery'
      }]);
    });
};
