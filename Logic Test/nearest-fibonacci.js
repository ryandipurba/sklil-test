nearestFibonacci = (arr) => {

  let num = 0;
  for (i = 0; i < arr.length; i++) {
    num += arr[i];
  }

  if (num == 0) {
    console.log(0);
  }

  let first = 0, second = 1;
  let third = first + second;

  while (third <= num) {
    first = second;
    second = third;
    third = first + second;
  }

  let ans = (Math.abs(third - num)
    >= Math.abs(second - num))
    ? second
    : third;

  // Print the result
  console.log(ans - num);
}

let arr = [15, 1, 3]
nearestFibonacci(arr)