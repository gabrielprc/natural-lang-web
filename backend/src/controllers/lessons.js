import { lessons } from '../utils/examples';
import { isNumber } from 'lodash';  

const getLessons = (req, res) => {
	res.json(lessons);
};

const getExercisesById = (req, res) => {
	const id = +req.params.id;
	const exercises = isNumber(id) 
		? lessons.find(lesson => lesson.id === id && lesson)
		: 'Not found';
	
	res.send(exercises);
}

export default { getLessons, getExercisesById };