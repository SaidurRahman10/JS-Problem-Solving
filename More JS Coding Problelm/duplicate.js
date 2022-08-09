
let names = ['sabbir','arman','ohin','muffasir','mehedi','ashraf','sohan','sabbir','topu','nadim','ohin','sara','nadim']


function removeDuplicate(names){

  let nameCollector = [];

  for(let i =0; i<=names.length;i++){
    let name = names[i]

    if( nameCollector.includes(name) === false){
      nameCollector.push(name);
    }
  }
  
  return nameCollector;
}

let Duplicate = removeDuplicate(names)
console.log(Duplicate);