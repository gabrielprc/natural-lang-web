import { connect } from 'react-redux';
import Exercise from 'js/components/Exercise'
import { completeExercise } from 'js/actions/tutorial';

const mapStateToProps = state => {
  const exercise = state.exercise; 
  const javascript = state.workspace.javascript;

  return { ...exercise, javascript };
};

const actions = {
  completeExercise,
}

export default connect(mapStateToProps, actions)(Exercise);