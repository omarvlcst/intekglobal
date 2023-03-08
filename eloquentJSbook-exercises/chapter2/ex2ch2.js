/**let i = 1;
let N = 100;
while (i<N) {
    if (i % 3 ==0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else {console.log(i);}
    i++;
};**/

let i = 1;
let N = 101;
while (i<N) {
    if (i % 3 == 0) {
        if (i % 5 ==0) console.log('FizzBuzz');
        else console.log('Fizz');
    }
    else if (i % 5 == 0) console.log('Buzz');
    else {console.log(i);}
    i++;
};