// задача 1
// если переменная А больше нуля-то в GGG запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !.

var a;
if ( a > 0 ) {
    var ggg = function () {
        console.log("!");
    }
}
else {
    var ggg = function () {
        console.log("!!");
    }
}

// задача 2
// заполните массив 10-ю иксами с помощью цикла

var arr = [];
for (var i = 1; i <= 10; i++) {
    arr[i] = 'x';
}
console.log(arr);

// задача 3
// сделайте функцию, котрая считает и выводит количество своих вызовов.

function counter() {
    var i = 1;
    return function () {
        return i++
    };
}
var func = counter();
console.log(func());
console.log(func());
console.log(func());
console.log(func());