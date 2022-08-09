// function getSumOfAnArray(numbers){

//    let sum = 0;

//     for(let i =0; i<numbers.length; i++){
//         var index = i;
//         var elements = numbers[index];
//         sum += elements;
       

//     }
//     return sum;
// }

// const myNumber = [1,2,3,4,5,6,7,8,9]
// const getSumOfAnArray = getSumOfAnArray(myNumber);
console.log(getSumOfAnArray);




function getOddNumberOfAnArray(numbers) {
    let oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
      var index = i;
      var elements = numbers[index];
     
      if(elements % 2 !==0){
        console.log(index,elements);
       oddNumber.push(elements)

      }
    }
    return oddNumber;

  }
  const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const oddNumbers =  getOddNumberOfAnArray(myNumber);

 console.log(oddNumbers);























