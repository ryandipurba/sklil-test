leapYear = (yearStart, yearEnd) => {
  var yearRange = [];
  for (var i = yearStart; i <= yearEnd; i++) {
    yearRange.push(i);
  }
  var new_array = [];

  yearRange.forEach((year) => {
    if (result(year))
      new_array.push(year);
  });

  return new_array;
}

function result(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
  } else {
    return false;
  }
}

console.log(leapYear(1900, 2020));