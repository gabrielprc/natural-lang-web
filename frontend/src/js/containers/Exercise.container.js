import { connect } from 'react-redux';
import Exercise from 'js/components/Exercise'

const mapStateToProps = state => {
  const exercise = state.exercise; 
  return { ...exercise };
}

export default connect(mapStateToProps, null)(Exercise);