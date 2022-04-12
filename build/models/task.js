"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class Task extends sequelize_1.Model {
}
exports.Task = Task;
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    thumbnail: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    startDate: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    endDate: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    labels: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    member: {
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
    updateDate: sequelize_1.DataTypes.DATE,
    list_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    }
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'task'
});
