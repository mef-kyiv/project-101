
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

let num = 56;

while (num<55) {
    console.log('num');
    num++;
}