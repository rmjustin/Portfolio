const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", 'X', 'IX', 'V', 'IV', 'I'];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const validity = () => {
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (number.value === "-1" || number.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convert(parseInt(number.value));
  }
};

const convert = (num) => {
  if (num <= 0) {
    return;
  } else {
    let index = 0;
    let currMax = 0;
    for (let i = 0; i < arabic.length; i++) {
      if (arabic[i] < parseInt(num)) {
        if (currMax < arabic[i]) {
          currMax = arabic[i];
          index = i;
        }
      } else if (arabic[i] == parseInt(num)) {
        currMax = arabic[i];
        index = i;
      }
    }
    let newNum = num - currMax;
    if (index < 0 || index > 12) return;
    if (newNum == 0) return roman[index];
    return roman[index] + convert(newNum);
  }
};

convertBtn.addEventListener("click", validity);