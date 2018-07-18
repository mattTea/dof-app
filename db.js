import Sequelize from 'sequelize';
const env = process.env.NODE_ENV || 'development';
let sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-dof-app.sqlite'
	});
}

let db = {};

db.course = sequelize.import(__dirname + '/models/course.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;