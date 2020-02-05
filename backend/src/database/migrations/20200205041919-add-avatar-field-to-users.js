module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Which table will receive new column
      'users',
      // Column name (new column)
      'avatar_id',
      {
        type: Sequelize.INTEGER,
        // Reference for model and foreign key
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
