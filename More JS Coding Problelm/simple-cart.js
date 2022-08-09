const shoppingCart = [
    {name:'shoe' , price:2000},
    {name:'shirt' , price:1000,},
    {name:'pant' , price:1200,},
    {name:'belt' , price:800,}
  ]
  
  function sumOfShopping(products){
  
   let totalPrice = 0;
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
     
  
      totalPrice = product.price + totalPrice;
  
      
    }
    return totalPrice;
  }
  
  const shoppingTotal = sumOfShopping(shoppingCart);
  console.log('Total Shoping Cost: ',shoppingTotal);