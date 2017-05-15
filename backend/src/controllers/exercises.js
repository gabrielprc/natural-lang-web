import { exercises } from '../utils/examples';

const getExerciseList = (req, res) => {
	res.json(exercises);
};

const getExercise = (req, res) => {
	var id = req.params.id;

	var exercise = 'Not found';

	if (id) {
		for (var i = 0; i < exercises.length; i++) {
			if (exercises[i].id == id) {
				exercise = exercises[i];
				break;
			}
		}
	}

	res.send(exercise);
}

export default { getExerciseList, getExercise };