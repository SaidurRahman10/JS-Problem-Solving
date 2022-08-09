// Write a function of tallest in array

// function maxInArray(number){
//       let largest = number[0];
  
//     for( let i = 0; i < number.length; i++){
//         let index = i;
//         let elements = number[index]
//         if( elements > largest ){
//             largest = elements;
//         }
//     }
//     return largest;


//   }


//   const heights = [167,190,170,180,140]
//   const tallest = maxInArray(heights);

//   console.log('Tallest Person is: ',tallest);



// Write a function of smallest in array


function maxInArray(number){
    let smallest = number[0];

  for( let i = 0; i < number.length; i++){
      let index = i;
      let elements = number[index]
      if( elements < smallest ){
        smallest = elements;
      }
  }
  return smallest;


}


const heights = [167,190,170,180,140]
const smallest = maxInArray(heights);

console.log('Tallest Person is: ',smallest);