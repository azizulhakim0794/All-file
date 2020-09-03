// fibo[2]=fibo[2-1]+fibo[2-2]
// fibo[3]=fibo[3-1]+fibo[3-2]
// fibo[2]=fibo[2-1]+fibo[2-2]
// fibo[n]=fibo[n-1]+fibo[n-2]
// fibo[i]=fibo[i-1]+fibo[i-2]

// function fibonacci(n) {
//     var fibo = [0, 1];
//     for( var i = 2; i <=n; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// var result = fibonacci(13);
// console.log(result)
var fibo =[0, 1];
for(var i = 2; i <= 10; i++){
    fibo [i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo);
