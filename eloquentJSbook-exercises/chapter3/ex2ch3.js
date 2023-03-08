const N = 23;
const isEven = function(x) {
    if (x==1) return false;
    else if (x==2 || x==0) return true;
    else {
        if (x>0) return isEven(x-2);
        else return isEven(2-x);
    }
}
console.log(isEven(N));