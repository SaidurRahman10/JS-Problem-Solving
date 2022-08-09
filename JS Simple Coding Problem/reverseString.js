function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0;i--){             //  text.length = 0,1,2,3,4,5,6 
        let index=  i;                                //  text.length-1 = 0,1,2,3,4,5
        let elements = text[index]
        reversed = reversed + elements
        console.log(elements,reversed);            // This line Just for Understand
    }
    return reversed;

}

const myString = 'Sabbir is a Good Boy';

const Result  = reverseString(myString)
console.log('Reversed Output : ', Result);