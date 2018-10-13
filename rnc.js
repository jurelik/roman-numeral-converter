function convertToRoman(num) {

  // Variable declarations

  let normalArr = num.toString().split("").map(x => parseInt(x));
  let romanArr = [];
  let romanStr;

  // Function declarations 

  let converter = function(low, mid, high, digit) {
    if (digit <= 3) {
      for (let x = digit; x > 0; x--) {
        romanArr = romanArr.concat(low);
      }
    }
    else if (digit == 4) {
      romanArr = romanArr.concat([low, mid]);
    }
    else if (digit <= 8) {
      romanArr = romanArr.concat(mid);
      for (let x = digit; x > 5; x--) {
        romanArr = romanArr.concat(low);
      }
    }
    else if (digit == 9) {
      romanArr = romanArr.concat([low, high]);
    } 
  }

  let underTen = function(digit) {
    converter('I', 'V', 'X', digit);
  }

  let underHundred = function(digit) {
    converter('X', 'L', 'C', digit);
  }

  let underThousand = function(digit) {
    converter('C', 'D', 'M', digit);
  }

  let overThousand = function(digit) {
    for (let x = digit; x > 0; x--) {
      romanArr = romanArr.concat('M');
    }
  }

  // Check if num is over 10000

  if (normalArr.length > 4) {
    let amountOver = normalArr.length - 4;
    let newNum = ""
    for (let x = 0; x <= amountOver; x++) {
      newNum += `${normalArr[x]}`;
    }
    normalArr.splice(0, amountOver + 1, newNum);
  }

  // Main code

  if (num < 10) {
    underTen(normalArr[0]);
  }

  else if (num < 100) {
    underHundred(normalArr[0]);
    underTen(normalArr[1]);
  }

  else if (num < 1000) {
    underThousand(normalArr[0])
    underHundred(normalArr[1]);
    underTen(normalArr[2]);
  }

  else {
    overThousand(normalArr[0]);
    underThousand(normalArr[1])
    underHundred(normalArr[2]);
    underTen(normalArr[3]);
  }

  romanStr = romanArr.join("");
  return romanStr;
}

// DOM Operations

let docForm = document.getElementById('converter');

docForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let floatUp = function floatUp() {
    console.log(posVertical);
    if (pos == window.innerHeight + 30) {
      clearInterval(interval);
      newDiv.parentNode.removeChild(newDiv);
    }
    else {
      pos++;
      anim.style.bottom = pos + 'px';
    }
  };
 
  let value = document.getElementById('text-input').value;
  let result = document.getElementById('result');
  let button = document.getElementById('submit-btn');

  let target = document.getElementById('container');
  let newDiv = document.createElement('p');
  newDiv.className = 'animation';
  newDiv.innerHTML = `${convertToRoman(value)}`;
  target.parentNode.insertBefore(newDiv, target.nextSibling);
  
  let anim = document.querySelector('.animation');
  let interval = setInterval(floatUp, 1);
  let pos = 0;

  let posVertical = Math.random() * (window.innerWidth);
  anim.style.left = posVertical + 'px';

  floatUp;
  
  button.blur();
  result.textContent = convertToRoman(value);
});
