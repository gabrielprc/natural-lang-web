import { connect } from 'react-redux';
import Signup from './Signup';
import AuthActions from 'js/actions/auth';

export default connect(null, AuthActions)(Signup);