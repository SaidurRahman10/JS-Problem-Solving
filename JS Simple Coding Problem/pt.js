function reversString(number){

    let reversed = ''
    for(let i = 0; i <= number.length; i++){
        let index = i;
        let elements  = number[index]
        
        reversed = reversed + elements
        console.log(elements, reversed);

    }

return reversed;
}

let arr  =  'Be The One Be A1'
const result = reversString(arr)
console.log(result);