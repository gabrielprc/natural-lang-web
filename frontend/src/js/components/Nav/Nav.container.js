import { connect } from 'react-redux';
import Nav from './Nav';

const mapStateToProps = state => {
  return { loggedIn: state.auth.loggedIn };  
}

export default connect(mapStateToProps, null)(Nav);