function factorial(num) {
    result = 1;
  
    for (let i = num; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
  
  console.log(factorial(9));
  