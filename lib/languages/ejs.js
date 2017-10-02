const ejs = require('ejs');
const fs = require('fs');
const data = require('../data');

const template = fs.readFileSync(__dirname + '/../templates/simple.ejs', 'utf8');
const compiled = {};

exports.compile = (name, callback) => {
	compiled[name] = ejs.compile(template);
	callback();
};

exports.render = (name) => {
	return compiled[name](data);
};
