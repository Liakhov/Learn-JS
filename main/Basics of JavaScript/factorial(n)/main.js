
// 1.Факториал через цикл
/*
function factorial(n) {
    var result = 1;
    for(i = 1; i <= n; i++){
      result *= i;
    }
    return result;
}
alert(factorial(5));
*/

//2. Факториал через рекурсию

function factorial(n) {
   return (n != 1) ? n *= factorial(n - 1) : 1;
}
alert(factorial(5));
