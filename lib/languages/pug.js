const pug = require('pug');
const fs = require('fs');
const data = require('../data');

const template = fs.readFileSync(__dirname + '/../templates/simple.pug', 'utf8');
const compiled = {};

exports.compile = (name, callback) => {
	compiled[name] = pug.compile(template);
	callback();
};

exports.render = (name) => {
	return compiled[name](data);
};
