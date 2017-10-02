const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const data = require('../data');

const template = require('../templates/simple.react.js');
const compiled = {};

exports.compile = (name, callback) => {
	compiled[name] = React.createElement(template.default, data);
	callback();
};

exports.render = (name) => {
	return ReactDOMServer.renderToString(compiled[name]);
};
