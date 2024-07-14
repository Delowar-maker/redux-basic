
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import myLogger from './middlewares/myLogger';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from "redux-logger";
import rootReducer from './rootReducer';


// create aor first middleware using curry function 


// const store = createStore(rootReducer, applyMiddleware(myLogger));

// npm i @redux-devtools/extension

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export default store