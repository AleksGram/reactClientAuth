import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reduser';


const rootReducer = combineReducers({
  // form: form the same as
    form,
    auth: authReducer
});

export default rootReducer;
