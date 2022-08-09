// var num = 10;

// if( num % 2==0){
//     console.log('Even');
// }else{
//     console.log('odd');
// }

// function evenOdd(num){

//     if( num % 2==0){
//              console.log('Even');
//          }else{
//          console.log('odd');
//          }
// }

// evenOdd(7);
// evenOdd(83);
// evenOdd(145);
// evenOdd(1852);
// evenOdd(5003);


function evenOdd(num){

    const reminder = num % 2

    if(reminder === 0){
       return true;
    }else{
   return false;
    }
}
evenOdd(52)