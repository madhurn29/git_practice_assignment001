function checkPrime(num){
    let factor=0;
    for(let i=1;i<=num**0.5;i++){
        if(num%i==0){
            factor++
        }
    }
    if(factor==1){
        return true;
    }
    
    return false;
}

let x=checkPrime(13)
if(x==true){ 
    console.log("Prime")
}
else {
console.log("Not Prime")
}

