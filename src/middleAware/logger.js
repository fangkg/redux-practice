function logger({getState}) {
    return next => action => {
        let prevState = getState()
        console.log("prev state:", prevState);

        const returnValue = next(action);
        let nextState = getState()
        console.log("next state:", nextState);

        return returnValue;
    }
}

export default logger;