function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- an array


const obj={name:"Faheem",};

const obj2={name:"Shajji",Age:23};

const obj3={name:"mujju",Age:13};

let obj4={...obj3,...obj2,...obj}

console.log(obj4);
