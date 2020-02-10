import Sequelize, { Model } from 'sequelize';

class Appointments extends Model {
  static init(sequelize) {
    super.init(
      {
        // Fields that can handle information, but does not need to exist in DB
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Link foreign key to Users database
  // ('as' is required since we have 2 relationships with the same table/model)
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointments;
