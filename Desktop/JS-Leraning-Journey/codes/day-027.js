function calc(num1, num2) {
  return num1 + num2;
}
let result = calc(10, 23);

console.log(result + 100);

function calculateNetSalaty(numA, numB, numC) {
  return numA + numB + numC;
}

let MarTa = calculateNetSalaty(34, 53, 53);

console.log(MarTa + 849);
/////////////////////////////////////////////////////////////////////////////////////
function calculaterFinalPrice(price, UserName, isFirstOrder) {
  let final = price;

  if (UserName === "vip") {
    final = final * 0.8;
  }
  if (isFirstOrder === true) {
    final = final - 10;
  }

  return final;
}

console.log(calculaterFinalPrice(100, "vip", true));
/////////////////////////////////////////////////////////////////////////////////////
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 17) {
      return ;
    }
    console.log(i);
  }
}

generate(10, 20);

