// =============================Practice1=====================================================
var num = [45, 55, 12, 32, 58, 69, 10, 25, 88];

var element = num[1];
// console.log(element);

num[1] = 00;
// console.log(num);

var position = num.indexOf(32);
// console.log(position);

num.push(189);

// console.log(num);

num.pop();
// console.log(num);

// ========================================Practice2========================================

// var iphone=40000
// var budget=25000

//  if(iphone <= budget){
//     console.log('Done');
//  }else{
//     console.log('not ddone');
//  }


//  ===============================================multiple Condition Js======================

var isGraduated = true;
var salary = 75000;
var car = 0;




// && a sob condition true hote hoy
// if(isGraduated == true && salary >= 50000 && car >= 1){  
//     console.log("LEts Maried");
// }else{
//     console.log('tor copal a biya nai');
// }

//  or  || a jekono eak ta condition true hole hoy
// if(isGraduated === true || salary > 50000 || car > 1){  
//     console.log('Lets build a companay');
// }else{
//     console.log('Yoiu need more money');
// }



// ========================================Practice3========================================

// var rost = 0;

// while(rost < 10){
//    console.log('rost');
//    console.log(rost);
//    rost++;
// }




// =====================================Practice4========================================

//Even number
// var num =0;
// while(num <= 10){
//     console.log(num);
//     num+=2;
// }


//odd number

// var num =1;
// while(num <= 10){
//     console.log(num);
//     num+=2;
// }

// =====================================Practice5========================================
var num= [45,55,48,55,44,29,100]



// for(let i = 0; i<7; i++){

//  var   Number = num[i];
//     console.log(Number);

// }

// =====================================Practice6========================================

// for(let i = 0; i<100; i++){
//     console.log(i);
//     if(i >=10){
//         break;
//     }

// }

// var i=0;

// while( i < 100){

//     console.log(i);
//     i++
//     if(i > 20){
//         break
//     }

// }


// =====================================Practice6========================================

// var num= [45,55,48,55,44,29,100,50]

// for( let i = 0; i < num.length; i++){
//     var number = num[i];

//     if(number > 50  ){
//        break;
//     } 
    
//     console.log(number);
//   }
   

// =====================================Practice6========================================

// var n = 10;

// while( n >= 1){
//     console.log(n);
//     n--;
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }



// var arr = [55,33,55,88,99,22,56,956]
// arr[5] = 'hello Js'

// arr.unshift('srs')
// console.log(arr);






// var myMoney = 61000;

// if( myMoney >= 80000){
//     console.log('I will buy Mac');
// }
// else if( myMoney >= 60000){
//     console.log('I will buy Gaming Laptop');
// }
//  else if( myMoney >= 40000){
//     console.log('I will buy Lenovo');
// }
// else if( myMoney >= 20000){
//     console.log('I will buy second hand Laptop');
// }
// else{
//     console.log('I will use mobile');
// }





// Loop Practice======================================================

// var  i=0;
// while( i <= 39){
//     console.log("Ajke amar mon valo nei");
//     i++;
// }




// for(let i = 58; i <= 98; i++){

//     console.log(i);

// }


// even Number
// var e=412

// while( e <= 456){
//     console.log(e);
//     e+=2;
// }

//odd

// var odd=581

// while( odd <= 623){
//     console.log(odd);
//     odd+=2;
// }



for(let i = 30; i<= 86; i++){
    
   var cp = i
   if( cp == 56){
    break;
   }
   console.log(cp);
}





var myBookPrice = 250;

if(myBookPrice > 200){
    console.log('Book price 200');
}else{
    console.log('Book price 150');
}