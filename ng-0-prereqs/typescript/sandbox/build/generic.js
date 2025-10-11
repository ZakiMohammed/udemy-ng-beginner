"use strict";
class Stack {
    constructor() {
        this._stack = [];
    }
    push(item) {
        this._stack.push(item);
    }
    pop() {
        return this._stack.pop();
    }
    get size() {
        return this._stack.length;
    }
    get top() {
        return this._stack[this.size - 1];
    }
}
const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.size); // 3
console.log(stack.top); // 300
stack.pop();
console.log(stack.size); // 2
console.log(stack.top); // 200
const stack2 = new Stack();
stack2.push('hello');
stack2.push('world');
console.log(stack2.size); // 2
console.log(stack2.top); // world
stack2.pop();
console.log(stack2.size); // 1
console.log(stack2.top); // hello
