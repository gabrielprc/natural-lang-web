'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('../controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _controllers.pseudocode.getPseudocodeFromNatural);

router.get('/example', _controllers.pseudocode.getPseudocodeExample);

exports.default = router;