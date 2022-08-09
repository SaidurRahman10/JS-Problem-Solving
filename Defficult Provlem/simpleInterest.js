function simpleInterest(P,R,T){   //P = Principal , R = Interest Rate , T = Time;

    var interestAmount = (P*R*T) / 100;
    return interestAmount;
}

console.log(simpleInterest(9000,0.07,5));