"use strict"

/*
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?
*/

let i = 0;

setTimeout(() => alert(i), 100); 


for(let j = 0; j < 100000000; j++) {
  i++;
}

//Последним значением i будет: 100000000.
//Любой вызов setTimeout будет выполнен только после того, как текущий код завершится.
//alert покажет 100000000
