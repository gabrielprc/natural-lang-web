'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proseJs = require('prose-js');

var _proseJs2 = _interopRequireDefault(_proseJs);

var _pseudoJs = require('pseudo-js');

var _pseudoJs2 = _interopRequireDefault(_pseudoJs);

var _examples = require('../utils/examples');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var translate = function translate(req, res) {
	var text = req.body.text;

	res.send(buildTranslation(text));
};

// Remove this later
var getExample = function getExample(req, res) {
	res.send(buildTranslation(_examples.natural.toString()));
};

function buildTranslation(text) {
	var pseudocode = _proseJs2.default.compileToPseudocode(text);
	var javascript = _pseudoJs2.default.compileToJS(pseudocode);

	return { pseudocode: pseudocode, javascript: javascript };
}

exports.default = { translate: translate, getExample: getExample };