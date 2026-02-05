//Reducer only task: a pure function that takes state and action, then returns new state.
//#1 Declare store:
const reducer = (state = 5) => {
  return state;
};
const store = Redux.createStore(reducer);
//#2 Get state/data from it:
const currentState = store.getState();
//#3 Defining Redux action:
const action = {
  type: 'LOGIN',
};
//#4 Dispatch action:
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: 'LOGIN',
  };
};
// HERE
store.dispatch(loginAction());

//Combining multiple reducers:
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const store = Redux.createStore(rootReducer);

//Object assign:
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp',
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      return Object.assign({}, state, { status: 'online' });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE',
  };
};

const store = Redux.createStore(immutableReducer);

// ====================================

const ADD = 'ADD'; //action type ADD

const addMessage = (message) => {
  //action creator addMessage()
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  //reducer
  switch (action.type) {
    case ADD:
      return [...state, action.message];
      break;
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer); // Redux store
