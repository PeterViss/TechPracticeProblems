var smallestPrime = N => {
  let i = N + 1;
  // if(N <= 11){
  //  for(let j = 2; j <=11; j++){

  //  }
  // }
  if (N === 11) {
    return N;
  }
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 || i % 11 === 0 || j % 11 === 0) {
      i++;
    } else {
      return isPalindrome(i);
    }
  }
};

var isPalindrome = n => {
  let nString = n.toString().split("");

  let nuNum = parseFloat(nString.reverse().join(""));
  if (n === nuNum) {
    return nuNum;
  } else {
    return smallestPrime(n);
  }
};

smallestPrime(13);
