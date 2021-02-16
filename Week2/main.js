console.log("connected week 2");

function displayText() {
    const text = document.getElementById("text").value;

    document.getElementById("display").innerHTML = text;
    
}

function factorial(n) {
    if (!Number.isInteger(n)) {
        document.getElementById("sum").innerHTML = "Invalid Number!!";
    }
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i; 
    }

    document.getElementById("sum").innerHTML = result;
}

function addUp() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const sum = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML = sum;
}

const addUp2 = function() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const sum = Number(num1) + Number(num2);
  document.getElementById("result").innerHTML = sum;
}

const addUp3 = () => {
  // 'this' is bound in the scope in which it is declared
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const sum = Number(num1) + Number(num2);
  document.getElementById("result").innerHTML = sum;
}

function calculateNumber(a, b, callback) {
  const x = document.getElementById(a);
  const y = document.getElementById(b);
  const answer = callback(Number(x.value), Number(y.value));
  document.getElementById("answer").innerText = answer;
}

function addNums(a, b) {
  return a + b;
}

function subtractNums(a, b) {
  return a - b;
}

class Something {
  myVariable = 25;
  myOtherVariable = this.myVariable + 5;
  myFunction = () => this;
  myFunction2 = function() {
    return this;
  };
}






