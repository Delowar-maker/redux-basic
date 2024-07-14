import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.log(`Action:${JSON.stringify(action)}`);
    console.log(`Before state: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming state: ${JSON.stringify(upcomingState)}`);

    // pass action

    return next(action);

}

export default myLogger;