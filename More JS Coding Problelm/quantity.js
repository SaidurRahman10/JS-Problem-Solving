const shoppingCart = [
    {name:'shoe' , price:2000, quantity: 2 },
    {name:'shirt' , price:1000,quantity: 5  },
    {name:'pant' , price:1200, quantity: 4 },
    {name:'belt' , price:800, quantity: 3}
  ]
  
  function sumOfShopping(products){
  
   let totalPrice = 0;
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      const productTotal= product.price * product.quantity;
  
     
  
      totalPrice = product.price + totalPrice;
  
      
    }
    return totalPrice;
  }
  
  const shoppingTotal = sumOfShopping(shoppingCart);
  console.log('Total Shoping Cost: ',shoppingTotal);