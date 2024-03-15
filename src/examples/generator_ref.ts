interface Number {
  isEven(): boolean;
}

Number.prototype.isEven = function () {
  return this.valueOf() % 2 === 0;
};

function* genFun(n: number) {
//   yield "First";
  if (n === 0) {
    return "Goodbye then";
  } else if (n.isEven()) {
    yield "Got the even one";
  } else {
    yield "Got the odd one";
  }

  return "what are you?";
}

let genItself = genFun(3);
const numArr: Array<number> = [6, 3, 8, 4, 2, 0, 1];
numArr.forEach((_n) => {
  console.log(genItself.next());
//   console.log(genFun(n).next());
//   console.log(genFun(n).next());
});
