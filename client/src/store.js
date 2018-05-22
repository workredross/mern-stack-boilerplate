import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
/* import { compose } from "redux" */

const middleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
  /* TO MAKE THE USE OF REDUX BROWSER EXTENSION UNCOMMENT THE FOLLOWING IMPORT OF COMPOSE AND COMPOSE CALL AND REMOVE applyMiddleWare() CALL FROM ABOVE AS IT IS CALLED IN compose()*/
  /* compose(
     applyMiddleware(...middleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
   */
);

export default store;
