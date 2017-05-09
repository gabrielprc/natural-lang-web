'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proseJs = require('prose-js');

var _proseJs2 = _interopRequireDefault(_proseJs);

var _examples = require('../utils/examples');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPseudocodeFromNatural = function getPseudocodeFromNatural(req, res) {
	var text = req.body.text;

	var pseudocode = _proseJs2.default.compileToPseudocode(text);
	res.send(pseudocode);
};

// Remove this later
var getPseudocodeExample = function getPseudocodeExample(req, res) {
	var pseudocode = _proseJs2.default.compileToPseudocode(_examples.natural.toString());
	res.send(pseudocode);
};

exports.default = { getPseudocodeFromNatural: getPseudocodeFromNatural, getPseudocodeExample: getPseudocodeExample };