/*let N = 8;
let white = " ";
let black = "#";
let board = "";
for (let i = 1; i<=N; i++) {
    if (i % 2 !== 0) board=board+white;
    else board=board+black;
}    
board=board+"\n";
console.log(board);
*/

let N = 8;
let white = " ";
let black = "#";
let board = "";
for (let i = 1; i<=N; i++) {
    board=board+"\n";
    for (let j=1; j<=N; j++) {
        if (j % 2 !== 0) {
            if (i % 2 !== 0) board=board+white;
            else board=board+black;}
        else {
            if (i % 2 !== 0) board=board+black;
            else board=board+white;
        }
    }
}    
console.log(board);