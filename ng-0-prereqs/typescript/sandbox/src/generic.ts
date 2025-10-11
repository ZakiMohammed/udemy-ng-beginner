class Stack<T> {
  private readonly _stack: T[] = [];

  push(item: T) {
    this._stack.push(item);
  }

  pop(): T | undefined {
    return this._stack.pop();
  }

  get size(): number {
    return this._stack.length;
  }

  get top(): T | undefined {
    return this._stack[this.size - 1];
  }
}

const stack = new Stack<number>();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.size); // 3
console.log(stack.top); // 300

stack.pop();

console.log(stack.size); // 2
console.log(stack.top); // 200

const stack2 = new Stack<string>();

stack2.push('hello');
stack2.push('world');

console.log(stack2.size); // 2
console.log(stack2.top); // world

stack2.pop();

console.log(stack2.size); // 1
console.log(stack2.top); // hello
