"use strict"

//Сумма с помощью замыканий. Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1) ); // 4

/*
переменная a берется из внешнего лексического окружения
*/