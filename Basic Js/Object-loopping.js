var mobile = {
        Brand    : 'Xomi',
        subBrand : 'Redmi' ,
        Name     : 'Redmi k50i',
      frontCamera : 64,
      BackCamera  : 25,
       Processor  : 'Disnity 8100 (6nm)',
       display    : 6.6,
}

var Keys = Object.keys(mobile)

var Values = Object.values(mobile)

// console.log(Keys);
// console.log(Values);


for(let i =0; i <Keys.length; i++){

    var propertyName = Keys[i]
    var propertyValue = mobile[propertyName]
   console.log(propertyName , propertyValue);
}
