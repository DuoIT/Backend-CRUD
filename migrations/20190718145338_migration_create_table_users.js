
exports.up = function(knex) {
    return knex.schema.createTable('users',(table)=>{
        table.increments();
        table.string('name');
        table.string('username').unique().index();
        table.string('password');
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
  
};
