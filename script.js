"use strict";

const globalVariable = "GLOBAL";

function calculate(height, width, depth) {
  const v1 = height * width;
  const v2 = 2 * (height + width);
  let v3;
  if (depth) {
    v3 = height * width * depth;
  }
  //'dsfsdf', v1, v2, 'asdasdsa'
  console.log(`${v1}cm^2 - ${v2}cm ${v3 ? `- ${v3}cm^3` : ""}`);

  return v1 + v2 + (v3 || 0);
}

calculate(6, 5);
calculate(4, 7);
calculate(5, 6, 7);

const value = calculate(6, 7);

console.log(value);

const addDigits = (value1, value2) => {
  console.log(value1, " -- ", value2);
  return value1 + value2;
};

const addResult = addDigits(4, 5);
console.log(addResult);

const pet = {
  age: 2,
  breed: "Husky",
  color: "white",
  // bark1(count) {
  //   for (let i = 0; i < count; i++) {
  //     console.log("*bark*!");
  //   }
  // },
  bark2: (count) => {
    for (let i = 0; i < count; i++) {
      console.log("*bark*!");
    }
  },
};

console.log(pet.age, "--", pet.breed);
pet.bark2(4);

//1. Глобальна
//2. Функціональна
//3. Блочна
// const, let - блочна область видимості
// var - функціональна область видимості
// глобальна майже = функціональна

const num = 1;
if (true) {
  var num_scope_1 = 12124124;
  if (true) {
    const num_scope_2 = 3;
    console.log(num);
  }
} else {
  console.log(num);
}

console.log(num_scope_1);

function funcScope() {
  if (true) {
    var variable = "dgadsfasd";
    console.log(globalVariable);
  }

  function checkScope() {
    return "checked";
  }

  console.log(variable);

  return checkScope();
}

// console.log(variable);

console.log(funcScope());

console.log("------------------------");

const a = 0;

if (true) {
  let a = 3;
  console.log(a);
  if (true) {
    let a = 5;
    console.log(a);
  }
}

console.log("------------------------");

const b = "abc";

for (let i = 0; i < 3; i++) {
  const b = "bcd";
  console.log(b);
}

console.log(b);

console.log("------------------------");

function test() {
  var c = 13;
  if (false) {
    console.log(c);
  } else {
    var d = 14;
  }

  console.log(d);
}

test();
//13
//14
//"123"

const test1 = () => {
  console.log(this);
};

function test2() {
  console.log(this);
}

test1();
test2();

const dsfasdfasdf = {
  test: 1,
  increment: function () {
    //dsfasdfasdf.test
    this.test++;

    const decrement = () => {
      console.log(this);
      if (this.test === 6) {
        this.test = this.test / 2;
      }
    };

    decrement();
  },
};

console.log(dsfasdfasdf.test);
dsfasdfasdf.increment();
dsfasdfasdf.increment();
dsfasdfasdf.increment();
dsfasdfasdf.increment();
console.log(dsfasdfasdf.test);
dsfasdfasdf.increment();
console.log(dsfasdfasdf.test);

console.log(this);

console.log("------------------------");

let count = 0;

const closureTest = () => {
  const increment = () => {
    count++;

    return count;
  };

  increment();
  console.log(count);
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
closureTest();
closureTest();
closureTest();
closureTest();
closureTest();
closureTest();
closureTest();
//addTwoNumbers(1)(2) => 3
