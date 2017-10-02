const handlebars = require('handlebars');
const fs = require('fs');
const data = require('../data');

const template = fs.readFileSync(__dirname + '/../templates/simple.hbs', 'utf8');
const compiled = {};

exports.compile = (name, callback) => {
	compiled[name] = handlebars.compile(template);
	callback();
};

exports.render = (name) => {
	return compiled[name](data);
};
