import isPromise from "is-promise";

function promise({dispatch}) {
    return next => action => {
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
}

export default promise