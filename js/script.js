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

// Методы и свойства строк и чисел

// const str = "test";
// const arr = [1, 2, 3];
// console.log(str.toUpperCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';
// console.log(logg.slice(6, 7));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseFloat(test));