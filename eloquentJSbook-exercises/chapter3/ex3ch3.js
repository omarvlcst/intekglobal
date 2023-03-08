const string = "BABYLON";
N = string.length;
const countBs = function(string){
    return countChar(string,"B");
}

const countChar = function(string,char){
    let x=0;
    for (let i=0; i<N; i++){
        if (string[i]==char) x++;
    }
    return x;
}
console.log(countBs(string,"B"));