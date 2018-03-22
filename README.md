# Learn-JS
## Функции

+ **Функция min</b>**
  
  Задача «Hello World» для функций :) 
  
  Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
  
  Результат: [min(a,b)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/min(a%2Cb))

+ **Функция pow(x,n)**

  Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
  
  Результат: [pow(x,n)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/pow(x%2Cn))
        

## Рекурсия, стек
  
  + **Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n**
    
    + 1. С использованием цикла.
    
    + 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.</br> 
    
    + 3. С использованием формулы для суммы арифметической прогрессии.
    
   Результат: [SumTo(n)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/SumTo(n))
     
  + **Напишите функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.**
  
     Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!
     
     Результат: [factorial(n)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/factorial(n))
     
   + **Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.**
  
      Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
      
      Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21.... 
      
      Результат: [fib(n)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/fib(n))

## Структуры данных
   
   + **Напишите функцию fibBinet(n), которая будет вычислять Fn (формулу Бине).**
   
      Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
      Существует  формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение.

      Результат: [fibBinet(n)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/fibBinet(n))

   + **Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min, max как возможные значения.**
   
     Любое число из интервала min..max должно иметь одинаковую вероятность.
     
     Результат: [randomInteger(min, max)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/randomInteger(min%2C%20max))
 
   + **Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом**
    
      '''
      
      ucFirst("вася") == "Вася";
      ucFirst("") == ""; // нет ошибок при пустой строке
      '''

     P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt()
  
     Результат: [ucFirst(str)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/ucFirst(str))
 
