export default function createStore(reducer, enhancer) {
    // 加强
    if (enhancer) {
        // 原版dispatch只能接收普通对象 加强之后可以处理多种形式，如callback, promise等
        return enhancer(createStore)(reducer);
    }
    let currentState;
    let currentListeners = [];
    function getState() {
        return currentState;
    }

    function dispatch(action) {
        currentState = reducer(currentState, action);
        currentListeners.forEach(listener => listener())
    }

    function subscribe(listener) {
        currentListeners.push(listener);

        return () => {
            currentListeners = [];
        }
    }

    return {
        getState, // 获取状态
        dispatch, // 触发改变state
        subscribe // 订阅
    }
}