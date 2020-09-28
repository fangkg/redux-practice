import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"; // 打印日志

function countReducer(state = 0, action) {
    switch(action.type) {
        case "ADD":
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            return state;
    }
}
// const store = createStore(countReducer);

// 引入中间件
const store = createStore(countReducer, applyMiddleware(thunk, logger));

export default store;