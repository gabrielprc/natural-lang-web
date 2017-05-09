'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _examples = require('../utils/examples');

var getExerciseList = function getExerciseList(req, res) {
  res.json(_examples.exercises);
};

var getExercise = function getExercise(req, res) {
  res.send('NOT IMPLEMENTED yet');
};

exports.default = { getExerciseList: getExerciseList, getExercise: getExercise };