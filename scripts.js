//1
let str1 = 'aaa@bbb@ccc';
console.log(str1);
console.log(str1.replace(/@/g, '!'));

//2
let date = '2025-12-31';
let Newdate = date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1');
console.log(Newdate.replace(/-/g, '/', '$5$4$3$2$1'));

//3
let str2 = 'Я учу javascript!';
console.log(str2.substr(2, [14]));
console.log(str2.slice(2,[16]));
console.log(str2.substring(2, [16]));

//4
let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let e = 0; e <= array.length; e++) {
sum += array[e] ** 3;
console.log(Math.sqrt(sum));
}

//5
let a = prompt('Введите число а');
let b = prompt('Введите число b');
let c = a - b;
//console.log(Math.abs(c));

//7
let str = 'aa aba abba abbba abca abea';
console.log(str.search(/aba/gi));

