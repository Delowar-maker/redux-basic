const delayActionMiddlewar = (store) => (next) => (action) => {
    if (action.type === "todos/todosAdded") {
        console.log("delayActionMiddlewar");
        setTimeout(() => {
            next(action);
        }, 2000)
        return
    }
    return next(action);

}

module.exports = {
    delayActionMiddlewar,
}