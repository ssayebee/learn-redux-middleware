const myLogger = store => next => action => {
    // print action
    console.log(action);
    // send action to reducer
    const result = next(action);

    // print action after update
    console.log ('\t', store.getState());


    return result;
}

export default myLogger;