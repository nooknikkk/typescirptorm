"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class List extends sequelize_1.Model {
}
exports.List = List;
List.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    createBy: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    createDate: sequelize_1.DataTypes.DATE,
    updateBy: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    updateDate: sequelize_1.DataTypes.DATE
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'list'
});
