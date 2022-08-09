function leapYear(year) {
  const reminder = year % 4;

  if (reminder === 0)  {
    console.log("isLeepYear", year);
  } else {
    console.log("Your year is Not a Leap Year", year);
  }
}
leapYear(1997);
