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