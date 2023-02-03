// // Место для первой задачи
// function firstTask() {
//   // Пишем решение вот тут
//   for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
// }

// // Место для второй задачи
// function secondTask() {
//   // Пишем решение вот тут
//   for (let i = 20; i > 10; i--) {
//     if (i === 13) {
//       break;
//     }
//     console.log(i);
//   }
// }

// // Место для третьей задачи
// function thirdTask() {
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   // Пишем решение вот тут
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//   // Пишем решение вот тут
//   let i = 2;
//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// // Место для пятой задачи

// function fifthTask() {
//   const arrayOfNumbers = [];

//   // Пишем решение вот тут
//   for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }
//   console.log(arrayOfNumbers);
//   // Не трогаем
//   return arrayOfNumbers;
// }

// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         result[i] = element;
//     }
//     console.log(arr);
//     console.log(result);

//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number'){
//             data[i] = data[i] * 2;
//         }
//         if (typeof(data[i]) === 'string'){
//             data[i] = `${data[i]} - done`
//         }
//     }
//     console.log(data);

//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i < data.length; i++) {
//         result[i - 1] = data[data.length - i];

//     }
//     console.log(data);
//     console.log(result);
//     // Не трогаем
//     return result;
// }
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let k = 0; k < i; k++) {
//     result += "*";
//   }
//   result += '\n';
// }
// console.log(result)
// const lines = 5;
// let result = '';

// for (let i = 1; i < lines; i++) {
//   for (let k = 0; k < i; k++) {
//     result = 2*i '*';
//   }

//   result += '\n';
// }

// console.log(result);
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// Место для первой задачи
// function sayHello(name) {
//     return `Привет, ${name}`;
// }
// console.log(sayHello('Антон'));
// // Место для второй задачи
// function returnNeighboringNumbers(i) {
//     return [i - 1, i, i + 1];
// }
// console.log(returnNeighboringNumbers(5));
// // Место для третьей задачи
// function getMathResult(a, b) {
//     if (b <= 0 || typeof b === 'string') {
//         return a;
//     }

//     let str = '';

//     for (let i = 1; i <= b; i++) {
//         if (i === b){
//             str += `${a * i}`
//         } else {
//             str += `${a * i}---`
//         }
//     }
//     return str
// }

// console.log(getMathResult(2, 5));

// function calculateVolumeAndArea(num) {
//     if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return 'При вычислении произошла ошибка';
//     }

//    let volume = num * num * num;
//    let square = num * num * 6;

//    return `Объем куба: ${volume}, площадь всей поверхности: ${square}`

// }

// console.log(calculateVolumeAndArea(15))

// function getCoupeNumber(num) {
//     if (num == 0 || num >= 37) {
//         return 'Таких мест в вагоне не существует';
//     }
//     if (typeof(num) === 'string' || num < 0 || !Number.isInteger(num)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     if (num == 1 || num <= 4) {
//         return 1;
//     }
//     if (num == 5 || num <= 8) {
//         return 2;
//     }
//     if (num == 9 || num <= 12) {
//         return 3;
//     }
//     if (num == 13 || num <= 16) {
//         return 4;
//     }
//     if (num == 17 || num <= 20) {
//         return 5;
//     }
//     if (num == 21 || num <= 24) {
//         return 6;
//     }
//     if (num == 25 || num <= 28) {
//         return 7;
//     }
//     if (num == 29 || num <= 32) {
//         return 8;
//     }
//     if (num == 33 || num <= 36) {
//         return 9;
//     }
// }

// console.log(getCoupeNumber('2'));

// function getCoupeNumber(num) {
//     if (num === 0 || num > 36) {
//         return 'Таких мест в вагоне не существует';
//     }
//     if ((num % 1 !== 0) || num < 0 || typeof(num) === 'string') {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     return Math.ceil(num/4);
//  }

//  console.log(getCoupeNumber(1));

// function getTimeFromMinutes(time) {
//   if (typeof time === 'string' || time < 0 || !Number.isInteger(time)) {
//     return 'Ошибка, проверьте данные';
//   }

//   let hours = Math.floor(time / 60);
//   let minutes = time % 60;

//   let str = '';

//   switch (hours) {
//     case 0:
//       str = 'часов';
//       break;
//     case 1:
//       str = 'час';
//       break;
//     case 2:
//     case 3:
//     case 4:
//       str = 'часа';
//       break;
//     default:
//       str = 'часов';
//       break;
//   }

//   return `Это ${hours} ${str} и ${minutes} минут`
// }

// console.log(getTimeFromMinutes(205))

// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number'){
//         return 0
//     } else {
//         return Math.max(a, b, c, d)
//     }
// }

// console.log(findMaxNumber(1, 5, '10', -12))

// function fib(num) {
//   if (typeof num === 'string' || num < 0 || !Number.isInteger(num)) {
//     return '';
//   }

//   let result = '';
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//           result += `${a}`;
//           // Без пробела в конце
//       } else {
//           result += `${a} `;
//       }

//       let c = a + b;
//       a = b;
//       b = c;
//   }

//   return result;
// }

// console.log(fib(6));

// const options = {
//     name: 'Test',
//     cfrtridg: {
//         corpus: 'black',
//         foto: 'green',
//         toner: 'black'
//     },
//     box: {
//         name: 'q2612a',
//         color: 'green'
//     },
//     creslo: 'black',
//     stol: 'gray'
// }

// console.log(Object.keys(options['box']).length)

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month',
    },
};

// function showExperience(plan) {
    
//     const {name, age, skills: {languages, programmingLangs:{js, php}, exp}} = personalPlanPeter;

//     return (plan = exp);
// }

// function showExperience(plan) {
//     const copy = {...personalPlanPeter};

//     return plan = copy['skills']['exp'];
// }


function showProgrammingLangs(plan) {
    const {name, age, skills: {languages, programmingLangs:{js, php}, exp}} = personalPlanPeter;

    return plan = `Язык js изучен на ${js} Язык php изучен на ${php}`
}
console.log(showProgrammingLangs(personalPlanPeter));

