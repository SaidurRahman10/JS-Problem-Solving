//Write a function that if i % 3 ===0 clg('foo') & if i % 5 ===0 clg('bar') than if the both (i % 3 === 0 && i % 5 === 0) clg('foobar')

function fooBar(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fooBaarMax");
    } else if (i % 3 === 0) {
      console.log("Foo");
    } else if (i % 5 == 0) {
      console.log("Bar");
    } else {
      console.log(i);
    }
  }
}
fooBar(50);
