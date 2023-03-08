const x = 10;
const y = 5;
const min= function(x,y) {
    if (x<y) return x;
    else if (x>y) return y;
    else return x;   
}

console.log(min(x,y));