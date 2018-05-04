# Learn-JS
## Функции

+ **Функция min**
  
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
    
          ucFirst("вася") == "Вася";
          ucFirst("") == ""; // нет ошибок при пустой строке

     P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt()
  
     Результат: [ucFirst(str)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/ucFirst(str))
    
   + **Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.**
   
     Результатом функции должна быть (при необходимости) усечённая строка.

     Например:
     
           truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
           truncate("Всем привет!", 20) = "Всем привет!"
     
     Результат: [truncate(str, maxlength)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/truncate(str%2C%20maxlength))
     
   + **Выделить число**
     
        Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

        Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.
        
        Результат: [extractCurrencyValue(str)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/extractCurrencyValue(str))
 
 
  + **Первый объект**
  
      Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

      1.  Создайте пустой объект user.
      2.  Добавьте свойство name со значением Вася.
      3.  Добавьте свойство surname со значением Петров.
      4.  Поменяйте значение name на Сергей.
      5.  Удалите свойство name из объекта.

    Результат: [Object](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/obj)
    
  
  + **Определите, пуст ли объект**
  
      Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

      Работать должно так:
    
          function isEmpty(obj) {
            /* ваш код */
          }
          
          var schedule = {};
          
          alert( isEmpty(schedule) ); // true
          
          schedule["8:30"] = "подъём";
          
          alert( isEmpty(schedule) ); // false
    
    Результат: [isEmpty](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/isEmpty(obj))
    
   + **Сумма свойств**
   
      Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

      Если объект пустой, то результат должен быть 0.

      Например: 
      
          "use strict";

          var salaries = {
            "Вася": 100,
            "Петя": 300,
            "Даша": 250
          };

          //... ваш код выведет 650
          
       Результат: [sumObj](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/sumObj)
      
   + **Свойство с наибольшим значением**
      
       Есть объект **salaries** с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

       Если объект пустой, то пусть он выводит «нет сотрудников».

       Например:
        
            "use strict";

            var salaries = {
              "Вася": 100,
              "Петя": 300,
              "Даша": 250
             };

            // ... ваш код выведет "Петя"
      
        Результат: [maxValue](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/maxValueObj)
        
   + **Умножьте численные свойства на 2**
     
        Создайте функцию **multiplyNumeric**, которая получает объект и умножает все численные свойства на 2. 
        
        Например:
        
              // до вызова
              var menu = {
                width: 200,
                height: 300,
                title: "My menu"
              };

              multiplyNumeric(menu);

              // после вызова
              menu = {
                width: 400,
                height: 600,
                title: "My menu"
              };
        
        Результат: [multiplyNumeric](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/multiplyNumeric)
        
        
  + **Получить последний элемент массива**
        
       Как получить последний элемент из произвольного массива?

       У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.

       Напишите код для получения последнего элемента goods.
        
        
       Результат: [operationArray](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/lastElemArray)
      
  + **Добавить новый элемент в массив**

       Как добавить элемент в конец произвольного массива?

       У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
       
       Результат: [operationArray](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/lastElemArray)
       
       
  +  **Создание массива**
  
       Задача из 5 шагов-строк:

       Создайте массив styles с элементами «Джаз», «Блюз».
       
       Добавьте в конец значение «Рок-н-Ролл»
       
       Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов     любой длины.
       
       Удалите первое значение массива и выведите его alert.
       
       Добавьте в начало значения «Рэп» и «Регги».
       
       Массив в результате каждого шага:
       
            Джаз, Блюз
            Джаз, Блюз, Рок-н-Ролл
            Джаз, Классика, Рок-н-Ролл
            Классика, Рок-н-Ролл
            Рэп, Регги, Классика, Рок-н-Ролл

       Результат: [operationArray](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/lastElemArray)
       
       
       
  + **Получить случайное значение из массива**
  
       Напишите код для вывода alert случайного значения из массива:

          var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

       P.S. Код для генерации случайного целого от min to max включительно:

          var rand = min + Math.floor(Math.random() * (max + 1 - min));
      
       Результат: [randElemArray](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/randElemArray)
       
       
       
  + **Создайте калькулятор для введённых значений**
  
      Напишите код, который:

      + Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
      
      + Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
      
      + При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
      
      + Выводит сумму всех значений массива
  
     Результат: [calcArray](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/calcArray)ґ
     
     
  + **Поиск в массиве**
      
      Создайте функцию **find(arr, value)**, которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
      
      Например:
      
          arr = ["test", 2, 1.5, false];

          find(arr, "test"); // 0
          find(arr, 2); // 1
          find(arr, 1.5); // 2

          find(arr, 0); // -1 
     
     Результат: [find(arr, value)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/find(arr%2C%20value))
     
   + **Фильтр диапазона**
   
        Создайте функцию **filterRange(arr, a, b)**, которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

        Пример работы:
        
            var arr = [5, 4, 3, 8, 0];

            var filtered = filterRange(arr, 3, 5);
            // теперь filtered = [5, 4, 3]
            // arr не изменился
     
      
      Результат: [filterRange(arr, a, b)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/filterRange(arr%2C%20a%2C%20b))
      
   + **Добавить класс в строку**
   
       В объекте есть свойство **className**, которое содержит список «классов» – слов, разделенных пробелом:

          var obj = {
            className: 'open menu'
          }
          
       Создайте функцию **addClass(obj, cls)**, которая добавляет в список класс cls, но только если его там еще нет:

          addClass(obj, 'new'); // obj.className='open menu new'
          addClass(obj, 'open'); // без изменений (класс уже существует)
          addClass(obj, 'me'); // obj.className='open menu new me'

          alert( obj.className ); // "open menu new me"
          
       P.S. Ваша функция не должна добавлять лишних пробелов.
      
      
       Результат: [addNewClass](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/addNewClass)
       
   + **Перевести текст вида border-left-width в borderLeftWidth**
      
      
        Напишите функцию **camelize(str)**, которая преобразует строки вида «my-short-string» в «myShortString».

        То есть, дефисы удаляются, а все слова после них получают заглавную букву.

        Например:

            camelize("background-color") == 'backgroundColor';
            camelize("list-style-image") == 'listStyleImage';
            camelize("-webkit-transition") == 'WebkitTransition';
        
        Такая функция полезна при работе с CSS.
   
   
      Результат: [camelize(str)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/camelize(str))
      
   + **Функция removeClass**
   
        У объекта есть свойство **className**, которое хранит список «классов» – слов, разделенных пробелами:

             var obj = {
               className: 'open menu'
             };

        Напишите функцию **removeClass(obj, cls)**, которая удаляет класс cls, если он есть:

            removeClass(obj, 'open'); // obj.className='menu'
            removeClass(obj, 'blabla'); // без изменений (нет такого класса)

        P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

             obj = {
               className: 'my menu menu'
             };
             removeClass(obj, 'menu');
             alert( obj.className ); // 'my'
      
      Результат: [removeClass](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/removeClass)
      
   
   + **Фильтрация массива "на месте"**
   
        Создайте функцию **filterRangeInPlace(arr, a, b)**, которая получает массив с числами arr и удаляет из него все числа вне диапазона **a..b**. То есть, проверка имеет вид **a ≤ arr[i] ≤ b**. Функция должна менять сам массив и ничего не возвращать.

        Например:

            arr = [5, 3, 8, 1];

            filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

            alert( arr ); // массив изменился: остались [3, 1]
      
      
      
        Результат: [filterRangeInPlace(arr, a, b)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/filterRangeInPlace(arr%2C%20a%2C%20b))
        
   + **Сортировка Бульбашкой**
   
        Напишите код, который сортирует значения массива **arr**, методом Бульбашки.
        
     
     Результат: [sortBulb](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/sortBulb)
     
     
     
     
   + **Сортировать в обратном порядке**
   
       Как отсортировать массив чисел в обратном порядке?

          var arr = [5, 2, 1, -10, 8];

          // отсортируйте?

          alert( arr ); // 8, 5, 2, 1, -10
   
      Результат: [reverseSort](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/reverseSort)
      
   + **Скопировать и отсортировать массив**
   
      Есть массив строк **arr**. Создайте массив **arrSorted** – из тех же элементов, но отсортированный.

      Исходный массив не должен меняться.

            var arr = ["HTML", "JavaScript", "CSS"];

            // ... ваш код ...

            alert( arrSorted ); // CSS, HTML, JavaScript
            alert( arr ); // HTML, JavaScript, CSS (без изменений)
      
      Результат: [arrSorted](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/arrSorted)
      
   + **Случайный порядок в массиве**

      Используйте функцию **sort** для того, чтобы «перетрясти» элементы массива в случайном порядке.

            var arr = [1, 2, 3, 4, 5];

            arr.sort(ваша функция);

            alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
      
      
      Результат: [randomSorted](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/randomSort)
      
      
   + **Сортировка объектов**
      
      Напишите код, который отсортирует массив объектов **people** по полю **age**.

      Например:

            var vasya = { name: "Вася", age: 23 };
            var masha = { name: "Маша", age: 18 };
            var vovochka = { name: "Вовочка", age: 6 };

            var people = [ vasya , masha , vovochka ];

            ... ваш код ...

            // теперь people: [vovochka, masha, vasya]
            alert(people[0].age) // 6
      
      Выведите список имён в массиве после сортировки.
      
      Результат: [sortObjAge](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/sortObjAge)
      
   + **Вывести односвязный список**
      
      
          Задачи:

          Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
          Напишите функцию printList(list) при помощи рекурсии.

      
      Результат: [objListProperties](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/objListProperties)
      
   + **Отфильтровать анаграммы**
   
      Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

          воз - зов
          киборг - гробик
          корсет - костер - сектор
      
      Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

      Например:

            var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

            alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

      Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
      
      
      Результат: [anagramm](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/anagram)
      
   + **Оставить уникальные элементы массива**
   
      Пусть **arr** – массив строк.

      Напишите функцию **unique(arr)**, которая возвращает массив, содержащий только уникальные элементы arr.

      Например:

            function unique(arr) {
              /* ваш код */
            }

            var strings = ["кришна", "кришна", "харе", "харе",
              "харе", "харе", "кришна", "кришна", "8-()"
            ];

            alert( unique(strings) ); // кришна, харе, 8-()
      
      
      Результат: [unique(arr)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/unique(arr))
      
      
   + **Перепишите цикл через map**
   
      Код ниже получает из массива строк новый массив, содержащий их длины:

            var arr = ["Есть", "жизнь", "на", "Марсе"];

            var arrLength = [];
            for (var i = 0; i < arr.length; i++) {
              arrLength[i] = arr[i].length;
            }

            alert( arrLength ); // 4,5,2,5
      
      Перепишите выделенный участок: уберите цикл, используйте вместо него метод **map**.
           
      Результат: [methodMap](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/metodMap)
