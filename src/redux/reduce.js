const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

arr.reduce(reducer);


function f1(arg) {
    console.log('f1:', arg);
    return arg;
}

function f2(arg) {
    console.log('f2:', arg);
    return arg;
}

function f3(arg) {
    console.log('f3:', arg);
    return arg;
}

// 执行f3
f3("lucy");

// 执行f2
f2(f3("lucy"));


// 洋葱模型
let res = f1(f2(f3("nike")));
console.log('res:', res)


let result = compose(f1, f2, f3)("adidas");

function compose(...funcs) {
    // 考虑兼容性
    if (funcs.length === 0) {
        // 返回空函数
        // return () => {}
        return args => args;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(args)))
}


console.log('result:', result)