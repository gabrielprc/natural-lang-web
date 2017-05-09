'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerTools = require('swagger-tools');

var _swaggerTools2 = _interopRequireDefault(_swaggerTools);

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerDoc = _yamljs2.default.load(__dirname + '/api.yaml');

// App
var app = (0, _express2.default)();
var PORT = process.env.PORT || 8080;
var logger = (0, _morgan2.default)('tiny');

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT + ' ...');
});

// Config
app.set('json spaces', 2);

// Middlewares
app.use(_bodyParser2.default.json());
app.use(logger);

_swaggerTools2.default.initializeMiddleware(swaggerDoc, function (middleware) {
  app.use(middleware.swaggerUi());
});

// Static content
app.use(_express2.default.static('dist'));

// Routes
app.use('/', _routes.home);
app.use('/exercises', _routes.exercises);
app.use('/pseudocode', _routes.pseudocode);