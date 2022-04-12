import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { sequelize } from '../config/sequelize';
export class List extends Model<InferAttributes<List>, InferCreationAttributes<List>> {
    declare id: string;
    declare sort_table: number;
    declare title: string;
    declare createBy: string;
    declare createDate: CreationOptional<Date>;
    declare updateBy: string;
    declare updateDate: CreationOptional<Date>;
}

List.init(
    {
        id: {
            type: DataTypes.STRING,
            // autoIncrement: true,
            primaryKey: true
        },
        sort_table:{
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
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
        tableName: 'list'
    }
);
