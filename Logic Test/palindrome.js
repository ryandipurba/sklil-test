// Radar                 # --> palindrome
// Malam                 # --> palindrome
// Kasur ini rusak       # --> palindrome
// Ibu Ratna antar ubi   # --> palindrome
// Malas                 # --> not palindrome
// Makan nasi goreng     # --> not palindrome
// Balonku ada lima      # --> not palindrome

palindrome = (string) => {
  let newStr = string.toLowerCase().split('').join('')
  let reverseString = [...newStr].reverse().join('');

  if (newStr === reverseString) {
    console.log('palindrome');
  }
  else {
    console.log('not palindrome');
  }
}

palindrome("Radar")
palindrome("Malam")
palindrome("kasur ini rusak")
palindrome("Ibu Ratna antar ubi")
palindrome("Malas")
palindrome("Makan nasi goreng")
palindrome("Balonku ada lima")
