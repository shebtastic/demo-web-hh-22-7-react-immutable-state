console.log(Object.is("a", "a"));
console.log(Object.is("a", "z"));

console.log(Object.is({ x: 20 }, { x: 20 })); // equality vs identity

const state = {
  foo: "bar",
};
const prevState = state;
prevState.foo = "blubb";

console.log(Object.is(state, prevState));
console.dir({ state, prevState });

const x = 10;
let z = x;
z = z + 1;

console.log(Object.is(x, z));
