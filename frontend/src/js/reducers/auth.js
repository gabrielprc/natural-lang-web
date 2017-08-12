import { 
  REQUEST_LOGIN_USER, REQUEST_LOGIN_USER_SUCCESS, REQUEST_LOGIN_USER_ERROR,
} from 'js/actions/constants'; 

const initialState = {
  user: '',
  logged: '',
  token: '',
};

const auth = (state = initialState, action) => {
  let { user, logged } = action;    
  switch (action.type) {
    case REQUEST_LOGIN_USER:
      return { ...state, user};
    case REQUEST_LOGIN_USER_SUCCESS:
      return { ...state, user, logged };
    case REQUEST_LOGIN_USER_ERROR:
      return { ...state, user, logged };
    default:
      return state;
  }
};

export default auth;