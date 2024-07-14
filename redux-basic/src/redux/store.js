
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';


// create aor first middleware using curry function 

const myLogger = (store) => (next) => (action) => {
    console.log(`Action:${JSON.stringify(action)}`);
    console.log(`Before state: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming state: ${JSON.stringify(upcomingState)}`);

    // pass action

    return next(action);

}
const store = createStore(rootReducer, applyMiddleware(myLogger));
export default store