import { connect } from 'react-redux';
import Login from './Login';
import AuthActions from 'js/actions/auth';

export default connect(null, AuthActions)(Login);