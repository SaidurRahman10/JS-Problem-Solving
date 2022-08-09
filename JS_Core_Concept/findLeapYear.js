

function findLeapYear(num){
    var result=[];
  
    for(let i =0; i<arr.length; i++){
  
      let index = i;
      let years = num[i]
  
     
      if(years % 4 === 0){
        if(years%100===0){
          if(years % 400 ===0){
  
              console.log('This year is LeapYear:', years);
  
          } else{
            console.log('This year is Not a Leap Year: ', years);
          }
      }
      else{
        console.log('This year is LeapYear:', years); 
      }
    } 
    else{
      console.log('This year is Not a Leap Year: ', years);
    }
  
  }
  }
  
  var arr = [2023,2024,2025,2028,2030]
  
  // var arr =[2016,2000,1700,1800]
  
  console.log(findLeapYear(arr));