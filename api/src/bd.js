require('dotenv').config();

const { Sequelize, Op } = require ( 'sequelize');
const fs = require ( 'fs' );
const path = require ( 'path' );
const { DB_HOST, DB_PASSWORD, DB_USER, DB_PORT } = process.env

const sequelize = new Sequelize(`postgres://${DB_HOST}:${DB_PASSWORD}@${DB_USER}:${DB_PORT}/sistemasClub` , {
    logging : false,
    native: false,
    timezone: '-03:00'
});

const basename = path.basename ( __filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners

fs.readdirSync( path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0 ) && ( file !== basename ) && (file.slice(-3) === '.js'))
    .forEach((file) => {modelDefiners.push(require(path.join(__dirname, '/models', file)))
    })

// Injectamos la conexion (sequelize) a todos los modelos

modelDefiners.forEach( model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: user => User

let entries = Object.entries(sequelize.models);
let capEntries = entries.map((entry) => [entry [0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capEntries);

// En sequelize.models están todos los modelos importados como propiedades para relacionarlos hacemos un destructuring

const { Associated, Bus, Category, Club, Discipline, Employe, Event, Rol } = sequelize.models;

// Relacionamos las tablas

Employe.hasMany(Club);
Club.hasMany(Employe);

Associated.belongsTo(Club);
Club.hasMany(Associated);

Bus.belongsTo(Club);
Club.hasMany(Bus);

Discipline.hasMany(Club);
Club.hasMany(Discipline);

Associated.belongsTo(Employe);
Employe.hasMany(Associated);

Employe.belongsTo(Rol);
Rol.hasMany(Employe);

Category.belongsTo(Discipline);
Discipline.hasMany(Category);

Employe.hasMany(Category);
Category.hasMany(Employe);

Associated.hasMany(Category);
Category.hasMany(Associated);

// Autenticamos y conectamos

sequelize.authenticate()
    .then(() => console.log('Database Connected'))
    .catch( err => console.log(err))

// exportamos los modelos y la conexion de Sequelize

module.exports = {
    ...sequelize.models,
    sequelize,
    conn: sequelize,
    Op
}