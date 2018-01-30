/*
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
3. С использованием формулы для суммы арифметической прогрессии.

Для проверки сумма для 100 = 5050
*/
// 1. C использование цикла
/*
function sumTo(n){
  var result = 0;
  for(i = 1; i <= n; i++){
      result = result + i;
  }
  return result;
}
alert(sumTo(100));
*/
// 2. С использованием Рекурсии
/*
function sumTo(n) {
  if(n != 1){
    return n + sumTo(n - 1);
  }else {
    return n;
  }
}
alert(sumTo(100));
*/

// 2. С использованием формулы арифметической прогрессии.

var firstValue = prompt('Введите первый член прогресии', '');
var elemNumb = prompt('Введите количество суммируемых членов', '');
var diffProgress = prompt('Введите разность прогресии', '');


function sumTo(){
  var result = 1;
  result = ((2 * firstValue) + (diffProgress * (elemNumb - 1)) ) / 2 * elemNumb;
  return result;
}
alert(sumTo());
