function reverseString(str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i].split('').reverse().join('') + " ";
  }
  return result
}
console.log(reverseString("I am A Great human"))

// reverseString("I am A Great human");//"I ma A Taerg namuh"

