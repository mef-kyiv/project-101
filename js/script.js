// "use strict";

// !Простое общение с пользователем

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt('Вам есть 18?', "18");
// console.log(answer+5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", " ");
// answers[1] = prompt("Как ваша фамилия?", " ");
// answers[2] = prompt("Сколько вам лет?", " ");

// document.write(answers);

// !Интерполяция

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);

// !Операторы

// console.log('arr' + '- object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(112%5);

// console.log(2*4 == '8');

// const isChecked = false,
//       isClosed = false;

// console.log(isChecked || !isClosed);

// console.log(2 + 2 * 2 === 8);

// Условия

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log ('Too much');
// } else { 
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');

// const num2 = 100;

// switch (num2) {
//     case 49: 
//              console.log('Error');
//     break;
//     case 100: 
//              console.log('Too much');
//     break;
//     case 50: 
//              console.log('Ok!');
//     break;
//     default: 
//              console.log('Not Ok!');
// }

// Циклы

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// Функции

// let num = 20;

// function ShowFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);

//     num = 10;
// }

// ShowFirstMessage('Hello world!');
// console.log(num);

// function calc (a, b) {
//     return(a + b);
// }

// console.log(calc(4, 7));
// console.log(calc(8, 15));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// }

// // Методы и свойства строк и чисел

// // const str = "test";
// // const arr = [1, 2, 3];
// // console.log(str.toUpperCase());

// // const fruit = "Some fruit";
// // console.log(fruit.indexOf('fruit'));

// // const logg = 'Hello world';
// // console.log(logg.slice(6, 7));

// // const num = 12.2;
// // console.log(Math.round(num));

// // const test = "12.2px";
// // console.log(parseFloat(test));

// //CALLBACK ФУНКЦИИ

// // function first() {
// //     // do something
// //     setTimeout(function() {
// //         console.log(1);
// //     }, 500);
// // }

// // function second() {
// //     console.log(2);
// // }

// // first();
// // second();

// // function learnJS(lang, callback) {
// //     console.log(`Я учу: ${lang}`);
// //     callback();
// // }

// // function done() {
// //     console.log('Я прошел этот урок');
// // }

// // learnJS('JavaScript', done);

// // Объекты деструктуризация объектов

// const options = {
//     name: `test`,
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // console.log(Object.keys(options).length);

// // console.log(options[`colors`][`border`]);

// // delete options.name;

// // console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }

// console.log(counter);

// Масивы и псевдомасивы

const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри масива ${arr}`);
// });

// console.log(arr.length);
// // arr.pop();
// // arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));