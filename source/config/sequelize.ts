import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('sqlite::memory:');

export const sequelize = new Sequelize('typeormm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
