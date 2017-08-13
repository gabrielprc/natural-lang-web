import { 
  REQUEST_LOGIN_USER, REQUEST_LOGIN_USER_SUCCESS, REQUEST_LOGIN_USER_ERROR,
} from 'js/actions/constants'; 

const requestLoginUser = (user) => ({
  type: REQUEST_LOGIN_USER,
  user,
});

const requestLoginUserSuccess = (user) => ({
  type: REQUEST_LOGIN_USER_SUCCESS,
  user,
  loggedIn: true,
});

const requestLoginUserError = (user) => ({
  type: REQUEST_LOGIN_USER_ERROR,
  user,
  loggedIn: false,
});


const loginUser = (user) => (dispatch) => {
  dispatch(requestLoginUser(user))
  dispatch(requestLoginUserSuccess(user));
};

const loginUserError = (user) => (dispatch) => {
  dispatch(requestLoginUser(user))
  dispatch(requestLoginUserError(user));
};

export default {
  loginUser, 
  loginUserError,
};
