
// 1. Число Фибоначчи - рекурсия
// function fib(n) {
// 	return n <= 1 ? n : fib(n-1) + fib(n - 2); 
// }
// alert(fib(77));

// 2. Число Фибоначчи - цикл
function fib(n) {
	var a = 1, b = 1, c;

	for( i = 2; i < n; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}
alert(fib(98));
