const { Sequelize } = require('sequelize');

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.db = new Sequelize({
            database: "inventory",
            host: "localhost",
            username: "root",
            dialect: "mysql",
            password: "@Password123"
        })
    }
}

module.exports = new Database();