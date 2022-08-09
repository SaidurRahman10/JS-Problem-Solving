/*
1.if ticket number is lees than 100, per ticket price = 100,
2.if ticket number is more than 100 and lese then 200 per ticket price = 90,
3.2.if ticket number is more than 200 
 first 100 --> 100
 101 - 200 ----> 90
 200+ -------> 70

*/

function ticketPrice(ticketQuantity) {
  const first100 = 100;
  const second100 = 90;
  const restTicket = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100price = 100 * first100;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100;
    const totalPrice = first100 + restTicketPrice;

    return totalPrice;
  } else {
    const first100price = 100 * first100;
    const second100 = 100 * second100;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicket;

    const totalCost = first100price + second100 + restTicketPrice;
    return totalCost;
  }
}

const price = ticketPrice(200);
console.log(price);
