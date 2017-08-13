import { connect } from 'react-redux';
import Tutorial from './Tutorial';
import { getTutorialExercise } from 'js/actions/exercise';

const TutorialActions = {
  getTutorialExercise,
};

export default connect(null, TutorialActions)(Tutorial);
