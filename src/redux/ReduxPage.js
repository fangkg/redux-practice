import React, { Component } from "react";
import store from "../sotre";

export default class ReduxPage extends Component {
    // 组件订阅 store中的数据改变时更新页面
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            // store state 改变
            this.forceUpdate();
        })
    }
    // 取消订阅
    componentWillUnmount() {
        this.unsubscribe && this.unsubscribe()
    }
    add = () => {
        // dispatch传递一个对象
        store.dispatch({type: "ADD"});
    }
    // redux 本身只支持同步更新state
    asyAdd = () => {
        // dispatch 传递一个函数
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                // store.dispatch({type: "ADD"});
                dispatch({type: "ADD"});
                console.log("state:", getState())
            }, 1000);
        });
    };

    // promise
    promiseMinus = () => {
        store.dispatch(
            Promise.resolve({
                type: "MINUS",
                payload: 100
            })
        );
    };

    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.asyAdd}>asyAdd</button>
                <button onClick={this.promiseMinus}>Promise minus</button>
            </div>
        )
    }
}