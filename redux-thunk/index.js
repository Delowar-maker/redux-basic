
const { delayActionMiddlewar } = require("./delayActionMiddlewar");
const redux = require("redux");
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

// Initial State
const initialState = {
    todos: []
};

// Reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todosAdded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    }
                ]
            };
        case "todos/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            };
        default:
            return state;
    }
};

// Action Creators
const todosAdded = (title) => ({
    type: "todos/todosAdded",
    payload: title
});

const todoLoaded = (todos) => ({
    type: "todos/todoLoaded",
    payload: todos
});

// Store
const store = createStore(todoReducer, applyMiddleware(delayActionMiddlewar));

// Subscriptions
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatching Action
store.dispatch({
    type: "todos/todosAdded",
    payload: "Learn Redux"
}
)
console.log(store.getState());