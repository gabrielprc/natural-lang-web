import { connect } from 'react-redux';
import ClassCard from './ClassCard';

const mapStateToProps = state => {
  return { userInSession: state.auth.user };  
}

export default connect(mapStateToProps, null)(ClassCard);