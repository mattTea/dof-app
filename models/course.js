module.exports = function (sequelize, DataTypes) {
	return sequelize.define('course', {
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
			// unique: true,
		},
		urlLink: {
			type: DataTypes.TEXT,
			validate: {
				isUrl: true
			}
		},
		rating: {
			type: DataTypes.FLOAT
		},
		level: {
			type: DataTypes.ENUM('Beginner', 'Intermediate'),
			allowNull: false
		},
		discipline: {
			type: DataTypes.ENUM('Analysis', 'Test', 'Development', 'Delivery Leadership', 'Core Skills'),
			allowNull: false
			// defaultValue: 'Analysis'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		duration: {
			type: DataTypes.INTEGER
		},
		skill: {
			type: DataTypes.ENUM(skills),
			allowNull: false
		}
	}, {
		hooks: {
			beforeValidate: function (course, options) {
				if (typeof course.urlLink === 'string') {
					course.urlLink = course.urlLink.toLowerCase();
				}
			}
		}
	});
}

const skills = [
	'Co-ownership',
	'Continuous Learning',
	'Requirements Management'
	// ...
]