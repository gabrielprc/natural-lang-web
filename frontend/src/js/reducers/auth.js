import { 
  REQUEST_LOGIN_USER, REQUEST_LOGIN_USER_SUCCESS, REQUEST_LOGIN_USER_ERROR,
} from 'js/actions/constants'; 

const initialState = {
  loggedIn: false,
  token: ''
};

const auth = (state = initialState, action) => {
  let { user, loggedIn } = action;    
  switch (action.type) {
    case REQUEST_LOGIN_USER:
      return { ...state, user};
    case REQUEST_LOGIN_USER_SUCCESS:
      return { ...state, user, loggedIn };
    case REQUEST_LOGIN_USER_ERROR:
      return { ...state, user, loggedIn };
    default:
      return state;
  }
};

export default auth;