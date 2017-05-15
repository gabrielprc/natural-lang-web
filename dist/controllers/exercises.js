'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _examples = require('../utils/examples');

var getExerciseList = function getExerciseList(req, res) {
	res.json(_examples.exercises);
};

var getExercise = function getExercise(req, res) {
	var id = req.params.id;

	var exercise = 'Not found';

	if (id) {
		for (var i = 0; i < _examples.exercises.length; i++) {
			if (_examples.exercises[i].id == id) {
				exercise = _examples.exercises[i];
				break;
			}
		}
	}

	res.send(exercise);
};

exports.default = { getExerciseList: getExerciseList, getExercise: getExercise };