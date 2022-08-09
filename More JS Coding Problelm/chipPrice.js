const AllPhones =[
    {name:'Readmi k50' , camera:'44',storage: '124GB', price:50000,color:'red'},
    {name:'Readmi k50i' , camera:'64',storage: '124GB', price:35000,color:'sky'},
    {name:'POCO X3Pro' , camera:'64',storage: '124GB', price:25000,color:'black'},
    {name:'Iphone 12pro Max' , camera:'64',storage: '124GB', price:135000,color:'gold'},
    {name:'I phone 11' , camera:'64',storage: '124GB', price:110000,color:'sky'}
  ]
  
  function phonePriceCheck(phones){
  
    let chipPhone = phones[0]
  
    for (let i = 0; i < phones.length; i++) {
      const phone = phones[i];
  
      if(phone.price < chipPhone.price){
        chipPhone = phone;
  
      }
      
    }
    return chipPhone;
  
  }
  
  const Price = phonePriceCheck(AllPhones);
  console.log(Price);