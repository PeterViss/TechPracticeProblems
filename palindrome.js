function palindrome(s) {
  let nuArr = [];

  let letters = s.replace(/\s/g, "");
  let nuString = letters.replace(/[^\w\s]/gi, "");
  let desiredString = nuString.toLowerCase();
  let arr = desiredString.split("");

  while (arr.length !== 0) {
    nuArr.push(arr[arr.length - 1]);
    arr.pop();
  }
  if (desiredString === nuArr.join("")) {
    return true;
  } else {
    return false;
  }
}
