const database = require('../database');
const Organization = require('./organization')

class Product {
        constructor(){
            this.model = database.db.define("products", {
                id: {
                    type: database.db.Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: database.db.Sequelize.STRING,
                    allowNull: false
                },
                description: {
                    type: database.db.Sequelize.STRING,
                },
                organizationId: {
                    type: database.db.Sequelize.INTEGER,
                    references: {
                        model: Organization,
                        key: "id"
                    }
                },
            })
    
            this.model.belongsTo(Organization, {
                foreignKey: 'organizationId'
            })
    
            Organization.hasMany(this.model, {
                foreignKey: 'organizationId'
            })
        }
    }

module.exports = new Product().model;