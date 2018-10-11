function convertToRoman(num) {

  // Variable declarations

  let normalArr = num.toString().split("").map(x => parseInt(x));
  let romanArr = [];
  let romanStr;

  // Function declarations 

  let underTen = function(digit) {
    if (digit <= 3) {
      for (let x = digit; x > 0; x--) {
        romanArr = romanArr.concat('I');
      }
    }
    else if (digit == 4) {
      romanArr = romanArr.concat(['I', 'V']);
    }
    else if (digit <= 8) {
      romanArr = romanArr.concat('V');
      for (let x = digit; x > 5; x--) {
        romanArr = romanArr.concat('I');
      }
    }
    else if (digit == 9) {
      romanArr = romanArr.concat(['I', 'X']);
    }
  }

  let underHundred = function(digit) {
    if (digit <= 3) {
      for (let x = digit; x > 0; x--) {
        romanArr = romanArr.concat('X');
      }
    }
    else if (digit == 4) {
      romanArr = romanArr.concat(['X', 'L']);
    }
    else if (digit <= 8) {
      romanArr = romanArr.concat('L');
      for (let x = digit; x > 5; x--) {
        romanArr = romanArr.concat('X');
      }
    }
    else if (digit == 9) {
      romanArr = romanArr.concat(['X', 'C']);
    }
  }

  let underThousand = function(digit) {
    if (digit <= 3) {
      for (let x = digit; x > 0; x--) {
        romanArr = romanArr.concat('C');
      }
    }
    else if (digit == 4) {
      romanArr = romanArr.concat(['C', 'D']);
    }
    else if (digit <= 8) {
      romanArr = romanArr.concat('D');
      for (let x = digit; x > 5; x--) {
        romanArr = romanArr.concat('C');
      }
    }
    else if (digit == 9) {
      romanArr = romanArr.concat(['C', 'M']);
    }
  }

  let overThousand = function(digit) {
    for (let x = digit; x > 0; x--) {
      romanArr = romanArr.concat('M');
    }
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

  console.log(romanStr);
  return romanStr;
 }
 
 convertToRoman(2014);