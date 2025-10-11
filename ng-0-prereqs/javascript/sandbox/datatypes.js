// data types - number, boolean, string, null, undefined, object, array

var a = 10;
var b = 'hello';
var c = true;
var d = null;
var e = undefined;
var f = {
  name: 'John',
  age: 25,
};
var g = new Object();
g.name = 'John';
g.age = 25;
var h = [1, 2, 3, 4, 5];
var i = new Array(1, 2, 3, 4, 5);
var j = ['John', 25, true, null, undefined, { name: 'John', age: 25 }, [1, 2, 3, 4, 5]];

console.log(a, b, c, d, e, f, g, h, i, j);

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j);