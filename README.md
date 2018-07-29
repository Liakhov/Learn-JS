# Learn-JS
## Основы JavaScript

+ **Функция min**
  
  Задача «Hello World» для функций :) 
  
  Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
  
  Результат: [min(a,b)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/min(a%2Cb))

+ **Функция pow(x,n)**

  Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
  
  Результат: [pow(x,n)](https://github.com/Liakhov/Learn-JS/tree/master/main/Basics%20of%20JavaScript/pow(x%2Cn))
        
  
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

      + 1.  Создайте пустой объект user.
      + 2.  Добавьте свойство name со значением Вася.
      + 3.  Добавьте свойство surname со значением Петров.
      + 4.  Поменяйте значение name на Сергей.
      + 5.  Удалите свойство name из объекта.

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

      + 1. Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
      
      + 2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
      
      + 3. При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
      
      + 4. Выводит сумму всех значений массива
  
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
      
   + **Массив частичных сумм** 
   
      На входе массив чисел, например: arr = [1,2,3,4,5].

      Напишите функцию **getSums(arr)**, которая возвращает массив его частичных сумм.

      Иначе говоря, вызов **getSums(arr)** должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

      То есть:

            для arr = [ 1, 2, 3, 4, 5 ]
            getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
            Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

      Функция не должна модифицировать входной массив.
      
      В решении используйте метод arr.reduce
      
      Результат: [getSummArr](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/getSumArr)
      
  + **Проверка на аргумент-undefined**
  
      Как в функции отличить отсутствующий аргумент от **undefined**?

            function f(x) {
              // ..ваш код..
              // выведите 1, если первый аргумент есть, и 0 - если нет
            }

            f(undefined); // 1
            f(); // 0
      
      Результат: [arguments](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/arguments)
      
      
 + **Сумма аргументов**

      Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

            sum() = 0
            sum(1) = 1
            sum(1, 2) = 3
            sum(1, 2, 3) = 6
            sum(1, 2, 3, 4) = 10   
      
      Результат:[summArguments](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/summArguments) 
      
      
  + **Создайте дату**
      
      Создайте объект **Date** для даты: 20 февраля 2012 года, 3 часа 12 минут.

      Временная зона – местная. Выведите его на экран.
       
      Результат: [Date](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/Date)
      
  + **Имя дня недели**
  
      Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

      Например:

          var date = new Date(2012,0,3);  // 3 января 2012
          alert( getWeekDay(date) );      // Должно вывести 'вт'
      
      Результат: [WeekDay](https://github.com/Liakhov/Learn-JS/blob/master/main/Data%20Structures/WeekDay)
     
   + **День недели в европейской нумерации**  
      
      Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

      День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

          var date = new Date(2012, 0, 3);  // 3 янв 2012
          alert( getLocalDay(date) );       // вторник, выведет 2
     
      Результат: [NumberDay](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/NumberDay)
      
  +   **День указанное количество дней назад**

        Создайте функцию **getDateAgo(date, days)**, которая возвращает число, которое было days дней назад от даты date.

        Например, для 2 января 2015:

            var date = new Date(2015, 0, 2);

            alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
            alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
            alert( getDateAgo(date, 365) ); // 2, (2 января 2014)    
      
      
      Результат: [getDateAgo](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/getDateAgo)
      
  + **Сколько секунд уже прошло сегодня?**
      
      Напишите функцию **getSecondsToday()** которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

      Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

          getSecondsToday() == 36000 // (3600 * 10)
          
      Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
      
      
      Результат: [getSecondToday](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/getSecondToday)
      
      
   + **Последний день месяца?**
      
      Напишите функцию **getLastDayOfMonth(year, month)**, которая возвращает последний день месяца.

      Параметры:

            year – 4-значный год, например 2012.
            month – месяц от 0 до 11.
      
      Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
      
      
      Результат: [LastDayMonth](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/LastDayMonth)
      
   + **Сколько секунд - до завтра?**
      
      Напишите функцию **getSecondsToTomorrow()** которая возвращает, сколько секунд осталось до завтра.

      Например, если сейчас 23:00, то:

          getSecondsToTomorrow() == 3600
      
      P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
      
      Результат: [getSecondsTomorrow](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/getSecondsTomorrow)



   + **Вывести дату в формате дд.мм.гг**
   
   
      Напишите функцию **formatDate(date)**, которая выводит дату date в формате дд.мм.гг:

      Например:

          var d = new Date(2014, 0, 30); // 30 января 2014
          alert( formatDate(d) ); // '30.01.14'
          
      P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
      
      Результат: [formatDate(date)](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/formatDate(date))
      
 + **Относительное форматирование даты**  
      
      Напишите функцию **formatDate(date)**, которая форматирует дату date так:

      Если со времени date прошло менее секунды, то возвращает "только что".
      
      Иначе если со времени date прошло менее минуты, то "n сек. назад".
      
      Иначе если прошло меньше часа, то "m мин. назад".
      
      Иначе полная дата в формате "дд.мм.гг чч:мм".
      
      Например:
      
          function formatDate(date) { /* ваш код */ }

          alert( formatDate(new Date(new Date - 1)) ); // "только что"

          alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

          alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

          alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
      
      Результат: [formatsDate](https://github.com/Liakhov/Learn-JS/tree/master/main/Data%20Structures/formatsDate)
      
 ## Замыкания, область видимости
      
  + **Сумма через замыкание**
      
      Напишите функцию **sum**, которая работает так: **sum(a)(b) = a+b**.

      Да, именно так, через двойные скобки (это не опечатка). Например:

        sum(1)(2) = 3
        sum(5)(-1) = 4
        
      Результат: [sum(a)(b)](https://github.com/Liakhov/Learn-JS/tree/master/main/Closures%2C%20scope/sum(a)(b))
      
  + **Функция - строковый буфер**
      
      В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:

      + 1. Добавить значение в буфер.
      
      + 2. Получить текущее содержимое.
      
     **Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:**

      + Создание объекта: var buffer = makeBuffer();.
      
      + Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
      
      Вот пример работы:

            function makeBuffer() { /* ваш код */ }

            var buffer = makeBuffer();

            // добавить значения к буферу
            buffer('Замыкания');
            buffer(' Использовать');
            buffer(' Нужно!');

            // получить текущее значение
            alert( buffer() ); // Замыкания Использовать Нужно!
            
      Буфер должен преобразовывать все данные к строковому типу:

            var buffer = makeBuffer();
            buffer(0);
            buffer(1);
            buffer(0);

            alert( buffer() ); // '010'
            
      Решение не должно использовать глобальные переменные.      
      
      Результат: [makeBuffer](https://github.com/Liakhov/Learn-JS/tree/master/main/Closures%2C%20scope/makeBuffer)
      
  + **Строковый буфер с очисткой**
      
      Добавьте буферу из решения задачи Функция - строковый буфер метод **buffer.clear()**, который будет очищать текущее содержимое буфера:
      
            function makeBuffer() {
              ...ваш код...
            }

            var buffer = makeBuffer();

            buffer("Тест");
            buffer(" тебя не съест ");
            alert( buffer() ); // Тест тебя не съест

            buffer.clear();

            alert( buffer() ); // ""
      
      Результат: [buffer.clear()](https://github.com/Liakhov/Learn-JS/tree/master/main/Closures%2C%20scope/buffer.clear())
      
  + **Сортировка**
        У нас есть массив объектов:
        
              var users = [{
                name: "Вася",
                surname: 'Иванов',
                age: 20
              }, {
                name: "Петя",
                surname: 'Чапаев',
                age: 25
              }, {
                name: "Маша",
                surname: 'Медведева',
                age: 18
              }];

       Обычно сортировка по нужному полю происходит так:

              // по полю name (Вася, Маша, Петя)
              users.sort(function(a, b) {
                return a.name > b.name ? 1 : -1;
              });

              // по полю age  (Маша, Вася, Петя)
              users.sort(function(a, b) {
                return a.age > b.age ? 1 : -1;
              });
       Мы хотели бы упростить синтаксис до одной строки, вот так:
       
              users.sort(byField('name'));
              users.forEach(function(user) {
                alert( user.name );
              }); // Вася, Маша, Петя

              users.sort(byField('age'));
              users.forEach(function(user) {
                alert( user.name );
              }); // Маша, Вася, Петя
              
       То есть, вместо того, чтобы каждый раз писать в sort **function...** – будем использовать **byField(...)**

       Напишите функцию **byField(field)**, которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.
      
      Результат: [byField(field)](https://github.com/Liakhov/Learn-JS/tree/master/main/Closures%2C%20scope/byField(field))
      
      
  + **Фильтрация через функцию**
      
      1. Создайте функцию **filter(arr, func)**, которая получает массив arr и возвращает новый, в который входят только те элементы **arr**, для которых **func** возвращает true.
      2. Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
     
      + filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
      
      + filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
      
      Пример, как это должно работать:

            /* .. ваш код для filter, inBetween, inArray */
            var arr = [1, 2, 3, 4, 5, 6, 7];

            alert(filter(arr, function(a) {
              return a % 2 == 0
            })); // 2,4,6

            alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

            alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
      
      Результат: [filter(arr, func)](https://github.com/Liakhov/Learn-JS/tree/master/main/Closures%2C%20scope/filter(arr%2C%20func))
      
      
  + **Армия функций**
      
      Следующий код создает массив функций-стрелков **shooters**. По замыслу, каждый стрелок должен выводить свой номер:
        
          function makeArmy() {

          var shooters = [];

          for (var i = 0; i < 10; i++) {
            var shooter = function() { // функция-стрелок
              alert( i ); // выводит свой номер
            };
            shooters.push(shooter);
          }

          return shooters;
          }

          var army = makeArmy();

          army[0](); // стрелок выводит 10, а должен 0
          army[5](); // стрелок выводит 10...
          // .. все стрелки выводят 10 вместо 0,1,2...9
      
      Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.
      
      Результат: [shooters](https://github.com/Liakhov/Learn-JS/tree/master/main/Closures%2C%20scope/shooters)
      
## Методы объектов и контекст вызова
      
   + **Создайте калькулятор**
      
      Создайте объект **calculator** с тремя методами:

     + **read()** запрашивает prompt два значения и сохраняет их как свойства объекта
        
     + **sum()** возвращает сумму этих двух значений
        
     + **mul()** возвращает произведение этих двух значений
        
             var calculator = {
             ...ваш код...
             }

             calculator.read();
             alert( calculator.sum() );
             alert( calculator.mul() );
      
      Результат: [calculator](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/calculator)
    
   +  **Цепочка вызовов**
   
       Есть объект «лестница» ladder:

              var ladder = {
                step: 0,
                up: function() { // вверх по лестнице
                  this.step++;
                },
                down: function() { // вниз по лестнице
                  this.step--;
                },
                showStep: function() { // вывести текущую ступеньку
                  alert( this.step );
                }
              };
        
        Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

              ladder.up();
              ladder.up();
              ladder.down();
              ladder.showStep(); // 1

         Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

              ladder.up().up().down().up().down().showStep(); // 1
              
         Как видно, такая запись содержит «меньше букв» и может быть более наглядной.

         Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.
      
         Результат: [ladder](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/ladder)
         
   + **Cумма произвольного количества скобок**
         
        Напишите функцию sum, которая будет работать так:

              sum(1)(2) == 3; // 1 + 2
              sum(1)(2)(3) == 6; // 1 + 2 + 3
              sum(5)(-1)(2) == 6
              sum(6)(-1)(-2)(-3) == 0
              sum(0)(1)(2)(3)(4)(5) == 15
              
        Количество скобок может быть любым.
         
        Результат: [sum](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/sum_numberіs_parentheses)
         
         
   + **Создать Calculator при помощи конструктора**
        
        Напишите функцию-конструктор **Calculator**, которая создает объект с тремя методами:

        + Метод **read()** запрашивает два значения при помощи **prompt** и запоминает их в свойствах объекта.
        
        + Метод **sum()** возвращает сумму запомненных свойств.
        
        + Метод **mul()** возвращает произведение запомненных свойств.
        
        Пример использования:
        
            var calculator = new Calculator();
            calculator.read();

            alert( "Сумма=" + calculator.sum() );
            alert( "Произведение=" + calculator.mul() );
         
        Результат: [new Calculator](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/new%20Calculator)

  + **Создать Accumulator при помощи конструктора**
        
       Напишите функцию-конструктор **Accumulator(startingValue)**. Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

       Более формально, объект должен:

       + Хранить текущее значение в своём свойстве **value**. Начальное значение свойства value ставится конструктором равным **startingValue**.

       + Метод **read()** вызывает **prompt**, принимает число и прибавляет его к свойству **value**.
      
      Таким образом, свойство **value** является текущей суммой всего, что ввел посетитель при вызовах метода **read()**, с учетом начального значения **startingValue**.

      Ниже вы можете посмотреть работу кода:

        var accumulator = new Accumulator(1); // начальное значение 1
        accumulator.read(); // прибавит ввод prompt к текущему значению
        accumulator.read(); // прибавит ввод prompt к текущему значению
        alert( accumulator.value ); // выведет текущее значение
        
      Результат: [Accumulator(srartingValue)](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/Accumulator(srartingValue))
      
 + **Создайте калькулятор**
      
      Напишите конструктор **Calculator**, который создаёт расширяемые объекты-калькуляторы.

      Эта задача состоит из двух частей, которые можно решать одна за другой.

      1. Первый шаг задачи: вызов **calculate(str)** принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

      Пример использования:

          var calc = new Calculator;

          alert( calc.calculate("3 + 7") ); // 10
          
      2. Второй шаг – добавить калькулятору метод **addMethod(name, func)**, который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов **func(a,b)**, которая должна её реализовывать.

      Например, добавим операции умножить *, поделить / и возвести в степень **:

          var powerCalc = new Calculator;
          powerCalc.addMethod("*", function(a, b) {
            return a * b;
          });
          powerCalc.addMethod("/", function(a, b) {
            return a / b;
          });
          powerCalc.addMethod("**", function(a, b) {
            return Math.pow(a, b);
          });

          var result = powerCalc.calculate("2 ** 3");
          alert( result ); // 8
          
      + Поддержка скобок и сложных математических выражений в этой задаче не требуется.
      
      + Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
      
      + Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
      
      Результат: [brainy Calculator](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/brainy%20Calculator)
      
  + **Добавить get/set-свойства**
      
      Вам попал в руки код объекта **User**, который хранит имя и фамилию в свойстве **this.fullName**:

            function User(fullName) {
              this.fullName = fullName;
            }

            var vasya = new User("Василий Попкин");

      Имя и фамилия всегда разделяются пробелом.

      Сделайте, чтобы были доступны свойства **firstName** и **lastName**, причём не только на чтение, но и на запись, вот так:

            var vasya = new User("Василий Попкин");

            // чтение firstName/lastName
            alert( vasya.firstName ); // Василий
            alert( vasya.lastName ); // Попкин

            // запись в lastName
            vasya.lastName = 'Сидоров';

            alert( vasya.fullName ); // Василий Сидоров
            
      Важно: в этой задаче **fullName** должно остаться свойством, а **firstName/lastName** – реализованы через **get/set**. Лишнее дублирование здесь ни к чему.

      Результат: [get, set propeties](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/get%2C%20set%20propeties)
      
 + **Счетчик объектов**
      
      Добавить в конструктор **Article**:

      + 1. Подсчёт общего количества созданных объектов.

      + 2. Запоминание даты последнего созданного объекта.

      Используйте для этого статические свойства.

      Пусть вызов **Article.showStats()** выводит то и другое.

      Использование:  
    
        function Article() {
        this.created = new Date();
        // ... ваш код ...
        }

        new Article();
        new Article();

        Article.showStats(); // Всего: 2, Последняя: (дата)

        new Article();

        Article.showStats(); // Всего: 3, Последняя: (дата)
      
      Результат: [Articles](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/Articles)
      
  + **Перепишите суммирование аргументов**  
      
      Есть функция **sum**, которая суммирует все элементы массива:

         function sum(arr) {
          return arr.reduce(function(a, b) {
            return a + b;
          });
        }

        alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
        
      Создайте аналогичную функцию **sumArgs()**, которая будет суммировать все свои аргументы:

          function sumArgs() {
            /* ваш код */
          }

          alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
          
      Для решения примените метод reduce к **arguments**, используя **call, apply** или одалживание метода.

      P.S. Функция **sum** вам не понадобится, она приведена в качестве примера использования **reduce** для похожей задачи.
      
      Результат: [sum](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/sum%20(call))
 
 + **Примените функцию к аргументам**
      
     Напишите функцию **applyAll(func, arg1, arg2...)**, которая получает функцию **func** и произвольное количество аргументов.

     Она должна вызвать **func(arg1, arg2...)**, то есть передать в **func** все аргументы, начиная со второго, и возвратить результат.

     Например:

        // Применить Math.max к аргументам 2, -2, 3
        alert( applyAll(Math.max, 2, -2, 3) ); // 3

        // Применить Math.min к аргументам 2, -2, 3
        alert( applyAll(Math.min, 2, -2, 3) ); // -2
        
     Область применения **applyAll**, конечно, шире, можно вызывать её и со своими функциями:


        function sum() { // суммирует аргументы: sum(1,2,3) = 6
          return [].reduce.call(arguments, function(a, b) {
            return a + b;
          });
        }

        function mul() { // перемножает аргументы: mul(2,3,4) = 24
          return [].reduce.call(arguments, function(a, b) {
            return a * b;
          });
        }

        alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
        alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
      
      Результат: [applyAll(func, arg1, arg2...)](https://github.com/Liakhov/Learn-JS/tree/master/main/Object%20methods%20and%20call%20context/applyAll(func%2C%20arg1%2C%20arg2...))
      
 ## ООП в функциональном стиле
      
   + **Написать объект с геттерами и сеттерами**
  
        Напишите конструктор **User** для создания объектов:

       +  С приватными свойствами имя **firstName** и фамилия **surname**.
       
       +  С сеттерами для этих свойств.
       
       +  С геттером **getFullName()**, который возвращает полное имя.

       Должен работать так:

            function User() {
              /* ваш код */
            }

            var user = new User();
            user.setFirstName("Петя");
            user.setSurname("Иванов");

            alert( user.getFullName() ); // Петя Иванов
      
      Результат: [User(get/set)](https://github.com/Liakhov/Learn-JS/tree/master/main/OOP%20in%20a%20functional%20style/User(get:set))
      
  + **Добавить геттер для power**
      
      Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

      Исходный код:
          
          function CoffeeMachine(power, capacity) {
            //...
            this.setWaterAmount = function(amount) {
              if (amount < 0) {
                throw new Error("Значение должно быть положительным");
              }
              if (amount > capacity) {
                throw new Error("Нельзя залить воды больше, чем " + capacity);
              }

              waterAmount = amount;
            };

            this.getWaterAmount = function() {
              return waterAmount;
            };

          }
          
       Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне обычна.

       Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем её можно прочитать, но нельзя изменить.
      
      Результат: [getPower](https://github.com/Liakhov/Learn-JS/tree/master/main/OOP%20in%20a%20functional%20style/getPower)
      
 + **Добавить публичный метод кофеварке**
      
      Добавьте кофеварке публичный метод **addWater(amount)**, который будет добавлять воду.

      При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.

      Исходный код:

          function CoffeeMachine(power, capacity) {
            var waterAmount = 0;

            var WATER_HEAT_CAPACITY = 4200;

            function getTimeToBoil() {
              return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
            }

            this.setWaterAmount = function(amount) {
              if (amount < 0) {
                throw new Error("Значение должно быть положительным");
              }
              if (amount > capacity) {
                throw new Error("Нельзя залить больше, чем " + capacity);
              }

              waterAmount = amount;
            };

            function onReady() {
              alert( 'Кофе готов!' );
            }

            this.run = function() {
              setTimeout(onReady, getTimeToBoil());
            };

          }
          
      Вот такой код должен приводить к ошибке:

          var coffeeMachine = new CoffeeMachine(100000, 400);
          coffeeMachine.addWater(200);
          coffeeMachine.addWater(100);
          coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
          coffeeMachine.run();
      
      Результат: [addWater(amount)](https://github.com/Liakhov/Learn-JS/tree/master/main/OOP%20in%20a%20functional%20style/addWater(amount))
      
  + **Создать сеттер для onReady**
      
      Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.

      Сейчас при готовности срабатывает функция **onReady**, но она жёстко задана в коде:


          function CoffeeMachine(power, capacity) {
            var waterAmount = 0;

            var WATER_HEAT_CAPACITY = 4200;

            function getTimeToBoil() {
              return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
            }

            this.setWaterAmount = function(amount) {
              // ... проверки пропущены для краткости
              waterAmount = amount;
            };

            this.getWaterAmount = function(amount) {
              return waterAmount;
            };

            function onReady() {
                alert( 'Кофе готов!' );
              }

            this.run = function() {
              setTimeout(onReady, getTimeToBoil());
            };

          }
        
       Создайте сеттер **setOnReady**, чтобы код снаружи мог назначить свой **onReady**, вот так:

            var coffeeMachine = new CoffeeMachine(20000, 500);
            coffeeMachine.setWaterAmount(150);

            coffeeMachine.setOnReady(function() {
              var amount = coffeeMachine.getWaterAmount();
              alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
            });

            coffeeMachine.run();
            
       P.S. Значение **onReady** по умолчанию должно быть таким же, как и раньше.
      
       Результат: [onReady](https://github.com/Liakhov/Learn-JS/tree/master/main/OOP%20in%20a%20functional%20style/onReady)

  ## Документ и объекты страницы
       
   + **DOM children**
       
       Для страницы:

          <!DOCTYPE HTML>
          <html>

          <head>
            <meta charset="utf-8">
          </head>

          <body>
            <div>Пользователи:</div>
            <ul>
              <li>Маша</li>
              <li>Вовочка</li>
            </ul>

            <!-- комментарий -->

            <script>
              // ... ваш код
            </script>

          </body>

          </html>
          
      + Напишите код, который получит элемент **HEAD**.
        
      + Напишите код, который получит **UL**.

      +  Напишите код, который получит второй **LI**. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами **LI**?
       
       Результат: [DOM Children](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/DOM%20Children)
       
  
  + **Выделите ячейки по диагонали**   
       
       Напишите код, который выделит все ячейки в таблице по диагонали.

       Вам нужно будет получить из таблицы **table** все диагональные **td** и выделить их, используя код:

          // в переменной td DOM-элемент для тега <td>
          td.style.backgroundColor = 'red';
       
       Результат: [TableCellsBackgoundRed](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/TableCellsBackgoundRed)
       
  + **Поиск элементов**
  
      Ниже находится документ с таблицей и формой.

      Найдите (получите в переменную) в нём:

      + Все элементы label внутри таблицы. Должно быть 3 элемента.
      
      + Первую ячейку таблицы (со словом "Возраст").
      
      + Вторую форму в документе.

      + Форму с именем search, без использования её позиции в документе.
      
      + Элемент input в форме с именем search. Если их несколько, то нужен первый.
      
      + Элемент с именем info[0], без точного знания его позиции в документе.
      
      + Элемент с именем info[0], внутри формы с именем search-person.
      
      Используйте для этого консоль браузера, открыв страницу table.html в отдельном окне.     

       Результат: [SearchElement](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/SearchElement)
       
   + **Дерево**
        
       Есть дерево из тегов ul,li.

       Напишите код, который для каждого элемента li выведет:

       1. Текст непосредственно в нём (без подразделов).
        
       2. Количество вложенных в него элементов li – всех, с учётом вложенных.
       
       Результат: [Tree](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/Tree)
       
   + **Получите пользовательский атрибут**
       
       + Получите div в переменную.
       + Получите значение атрибута "data-widget-name" в переменную.
       + Выведите его.
       
       Документ:
       
            <body>

              <div id="widget" data-widget-name="menu">Выберите жанр</div>

              <script>
                /* ... */
              </script>
            </body>
       
       Результат: [DataAttribute](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/DataAttribute)
       
   + **Поставьте класс ссылкам**
  
       Сделайте желтыми внешние ссылки, добавив им класс external.

       Все ссылки без **href**, без протокола и начинающиеся с **http://internal.com** считаются внутренними.
       
                <style>
                  .external {
                    background-color: yellow
                  }
                </style>

                <a name="list">список</a>
                <ul>
                  <li><a href="http://google.com">http://google.com</a></li>
                  <li><a href="/tutorial">/tutorial.html</a></li>
                  <li><a href="local/path">local/path</a></li>
                  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
                  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
                  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
                </ul>

       Результат:[ClassExternal](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/ClassExternal)
       
   + **insertAfter**
       
       Напишите функцию **insertAfter(elem, refElem)**, которая добавит **elem** после узла **refElem**.

          <div>Это</div>
          <div>Элементы</div>

          <script>
            var elem = document.createElement('div');
            elem.innerHTML = '<b>Новый элемент</b>';

            function insertAfter(elem, refElem) { /* ваш код */ }

            var body = document.body;

            // вставить elem после первого элемента
            insertAfter(elem, body.firstChild); // <--- должно работать

            // вставить elem за последним элементом
            insertAfter(elem, body.lastChild); // <--- должно работать
          </script>
       
       Результат: [insertAfter](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/insertAfter)
    
   + **removeChildren**

       Напишите функцию **removeChildren**, которая удаляет всех потомков элемента.

            <table id="table">
              <tr>
                <td>Это</td>
                <td>Все</td>
                <td>Элементы DOM</td>
              </tr>
            </table>

            <ol id="ol">
              <li>Вася</li>
              <li>Петя</li>
              <li>Маша</li>
              <li>Даша</li>
            </ol>

            <script>
              function removeChildren(elem) { /* ваш код */ }

              removeChildren(table); // очищает таблицу
              removeChildren(ol); // очищает список
            </script>
           
       Результат: [removeChildren](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/removeChildren)
   
   + **Часики с использованием "setInterval"**

       Создайте цветные часики
       
       Результат: [timeSetInterval](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/timeSetInterval)
      
   + **Создать список**
       
       Напишите интерфейс для создания списка.

       Для каждого пункта:

       + Запрашивайте содержимое пункта у пользователя с помощью prompt.
       
       + Создавайте пункт и добавляйте его к UL.
       
       + Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
      
       **Все элементы должны создаваться динамически.**

       Если посетитель вводит теги – пусть в списке они показываются как обычный текст.
      
       Результат: [createList](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/createList)
       
  + **Содайте дерево из объекта**
      
      Напишите функцию, которая создаёт вложенный список **UL/LI** (дерево) из объекта.

      Например:
      
        var data = {
            "Рыбы": {
              "Форель": {},
              "Щука": {}
            },

            "Деревья": {
              "Хвойные": {
                "Лиственница": {},
                "Ель": {}
              },
              "Цветковые": {
                "Берёза": {},
                "Тополь": {}
              }
            }
          };
       
       Синтаксис:

       var container = document.getElementById('container');
       
       createTree(container, data); // создаёт
       
     Результат:  [listObj](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/listObj)
     
 + **Дерево**
 
      Есть дерево, организованное в виде вложенных списков ul/li.

      Напишите код, который добавит каждому элементу списка li количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

      Результат:
      
             + Животные [9]
                + Млекопитающие [4]
                    Коровы
                    Ослы
                    Собаки
                    Тигры
             + Другие [3]
                    Змеи
                    Птицы
                    Ящерицы
             + Рыбы [5]
                 + Аквариумные [2]
                    Гуппи
                    Скалярии
             + Морские [1]
                  Морская форель
      
      Результат: [numberLi](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/numberLi)
     
 + **Создать календарь в виде таблицы**
      
      Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).

      Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен быть заголовок с названиями дней недели, каждый день – TH.

      Синтаксис: **createCalendar(id, year, month)**.

      Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным id.

      Например: createCalendar("cal", 2012, 9) сгенерирует в <div id=„cal“></div> следующий календарь:
      
          пн	вт	ср	чт	пт	сб	вс
                               1   2
          3	  4	   5	 6	 7	 8	 9
          10	11	12	13	14	15	16
          17	18	19	20	21	22	23
          24	25	26	27	28	29	30

     
      Результат: [createCalendar](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/createCalendar)
      
  + **Вставьте элементы в конец списка**

      Напишите код для вставки текста **html** в конец списка **ul** с использованием метода **insertAdjacentHTML**. Такая вставка, в отличие от присвоения **innerHTML+=**, не будет перезаписывать текущее содержимое.

     Добавьте к списку ниже элементы 
          
          <li>3</li><li>4</li><li>5</li>:

          <ul>
            <li>1</li>
            <li>2</li>
          </ul>  
      
      Результат: [insertAdjacentHTML](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/insertAdjacentHTML)
 
 + **Отсортировать таблицу**
 
      Есть таблица, строк в таблице много: может быть 20, 50, 100… Есть и другие элементы в документе.

      Как бы вы предложили отсортировать содержимое таблицы по полю Возраст? Обдумайте алгоритм, реализуйте его.

      Как сделать, чтобы сортировка работала как можно быстрее? А если в таблице 10000 строк (бывает и такое)?

      P.S. Может ли здесь помочь DocumentFragment?

      P.P.S. Если предположить, что у нас заранее есть массив данных для таблицы в JavaScript – что быстрее: отсортировать эту таблицу или сгенерировать новую?
        
      Результат: [tableSort](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/tableSort)
      
 + **Скругленая кнопка со стилями из JavaScript**
      
      Создайте кнопку в виде элемента **a** с заданным стилем, используя **JavaScript**.

      В примере ниже такая кнопка создана при помощи HTML/CSS. В вашем решении кнопка должна создаваться, настраиваться и добавляться в документ при помощи только **JavaScript**, без тегов **style** и **a**.
  
           <style>
              .button {
                -moz-border-radius: 8px;
                -webkit-border-radius: 8px;
                border-radius: 8px;
                border: 2px groove green;
                display: block;
                height: 30px;
                line-height: 30px;
                width: 100px;
                text-decoration: none;
                text-align: center;
                color: red;
                font-weight: bold;
              }
            </style>

            <a class="button" href="/">Нажми меня</a>
      Результат: [beautiful link](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Document%20and%20page%20objects/beautiful%20link)
      

## Основы работы с событиями

  + **Спрятать при клике**  
  
      Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".    
      
      
      Результат: [hide by click](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Basics%20of%20working%20with%20events/hide%20by%20click)
      
  + **Спрятаться**
      
      Создайте кнопку, при клике на которую, она будет скрывать сама себя.   
      
      Результат: [hide yourself when you click](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Basics%20of%20working%20with%20events/hide%20yourself%20when%20you%20click)
      
   + **Раскрывающееся меню**

      Создайте меню, которое раскрывается/сворачивается при клике
  
  
     Результат: [Hide menu](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Basics%20of%20working%20with%20events/Hide%20menu) 
     
   + **Спрятать сообщение**

     Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.  
     
     Результат: [Hide message](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Basics%20of%20working%20with%20events/Hide%20message)
     
   + **Карусель**

     Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.  
     
     Результат: [Carousel](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Basics%20of%20working%20with%20events/Carousel)
     
  + **Передвигать мяч по полю**
      
      Сделайте так, что при клике по полю мяч перемещался на место клика.
      
      Требования:

       + Мяч после перелёта должен становиться центром ровно под курсор мыши, если это возможно без вылета за край поля.

       + CSS-анимация не обязательна, но желательна.
       
       + Мяч должен останавливаться у границ поля, ни в коем случае не вылетать за них.
       
       + При прокрутке страницы с полем ничего не должно ломаться.
       
       Замечания:

       + Код не должен зависеть от конкретных размеров мяча и поля.
       
       + Вам пригодятся свойства event.clientX/event.clientY
  
   Результат: [Move ball over the field](https://github.com/Liakhov/Learn-JS/tree/master/main/Document%2C%20events%2C%20interfaces/Basics%20of%20working%20with%20events/Move%20Ball%20over%20the%20fields)  
