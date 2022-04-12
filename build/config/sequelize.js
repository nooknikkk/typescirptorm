"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
// export const sequelize = new Sequelize('sqlite::memory:');
exports.sequelize = new sequelize_1.Sequelize('nodetest', 'Lms_Md', 'Adm1nLmsMd2022!', {
    host: '203.150.199.24',
    dialect: 'mysql'
});
