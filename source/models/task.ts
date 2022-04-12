import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { sequelize } from '../config/sequelize';
export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
    declare id: string;
    declare list_id: number;
    declare sort_table: number;
    declare title: string;
    declare description: string;
    declare thumbnail: string;
    declare startDate: Date;
    declare endDate: Date;
    declare labels: string[];
    declare member: string[];
    declare createBy: string;
    declare createDate: CreationOptional<Date>;
    declare updateBy: string;
    declare updateDate: CreationOptional<Date>;
}

Task.init(
    {
        id: {
            type: DataTypes.STRING,
            // autoIncrement: true,
            primaryKey: true
        },
        list_id: {
            type: DataTypes.TEXT
        },
        sort_table:{
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        labels: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        member: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        createBy: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createDate: DataTypes.DATE,
        updateBy: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        updateDate: DataTypes.DATE

        
    },
    {
        sequelize,
        tableName: 'task'
    }
);
