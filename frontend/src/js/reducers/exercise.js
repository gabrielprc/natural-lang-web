import { GET_CURRENT_EXERCISE } from 'js/actions/constants';

const exercise = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_EXERCISE: 
      return { ...action.exercise };
    default:
      return state;
  }
} 

export default exercise;