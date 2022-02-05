exports.seed = async function seed(knex) {
  // Create projects
  await knex('projects').insert([
    {
      id: 1,
      name: 'yocargo',
    },
    {
      id: 2,
      name: 'makershoes',
    },
    {
      id: 3,
      name: 'warehouse',
    },
    {
      id: 4,
      name: 'pospery',
    },
  ]);

  // Create templates
  await knex('templates').insert([
    {
      id: 1,
      name: 'extracto',
      project_id: 1,
    },
    {
      id: 2,
      name: 'factura',
      project_id: 2,
    },
    {
      id: 3,
      name: 'contracto',
      project_id: 3,
    },
    {
      id: 4,
      name: 'factura2',
      project_id: 4,
    },
  ]);

  // Create projects keys
  await knex('keys').insert([
    {
      id: 1,
      key_project: 1,
    },
    {
      id: 2,
      key_project: 2,
    },
    {
      id: 3,
      key_project: 3,
    },
    {
      id: 4,
      key_project: 4,
    },
  ]);
};
