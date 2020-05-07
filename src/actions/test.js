const calc = (operator, num) => {
  switch (operator) {
    case "+":
      return (other) => num + other;
    case "-":
      return (other) => num - other;
    case "*":
      return (other) => num * other;
    default:
      return (other) => num / other;
  }
};

console.log(calc("+", 8)(5)); //13
// console.log((other = 5) => 8 + other))
console.log(calc("-", 8)(5));
