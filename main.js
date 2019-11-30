//1
const name = prompt('Как тебя зовут?');
console.log(`Привет, ${name}!`)

//2
// const yearBirthday = +prompt ('Введите год вашего рождения');
// const yearNow = 2019;
// console.log(`Вам : ${yearNow - yearBirthday} года.`);

//3
// const a = +prompt('Введите длину стороны квадрата');
// console.log('Периметр квадрата = '+ 4 * a);

//4
// const radius = +prompt('Введите радиус');
// console.log('S=' +( Math.PI * radius * radius).toFixed(4));

//5
// const km = +prompt('Введите растояние между 2-ма городами:');
// const time = +prompt('Введите время, за которое вы желаете добраться:');
// console.log(`${(km / time).toFixed(1)} км/час-скорость,с которой нужно ехать`);

//6
// const dollar = +prompt('Введите количество долларов:');
// const euro = 0.91;
// console.log(`Курс евро: ${dollar * euro}`);

//7
// const sizeHb = +prompt('Введите размер флешки в ГБ: ');
// const sizeMb = 820;
// const countFiles = sizeHb * 1024 / sizeMb;
// console.log(Math.trunc(countFiles));

//8
// const moneySumm = +prompt('Введите сумму денег в кошельке:');
// const sweetCost = +prompt('Введите цену 1 шоколадки:');
// const sweetMake = moneySumm / sweetCost;
// console.log(`У вас получиться шоколадок: ${Math.trunc(sweetMake)} и останеться  такая сдача: ${(sweetMake -Math.trunc(sweetMake)).toFixed(2)}коп. `);

//9
// const number = +prompt('Введите 3-x значное число:');
// const step1 = number % 10;
// const step2 = Math.trunc(number / 10);
// const step3 = step2 % 10;
// const step4 = Math.trunc(number / 100);
// console.log(step1  + '' + step3 + '' + step4);

//10
// const sumMoney = +prompt('Введите сумму вклада:');
// const depositCountMonth = 2;
// const depositPercent = 0.05;
// const depositMonth = depositPercent / 12;
// const profit = depositMonth * depositCountMonth * sumMoney;
// console.log(`Сумма начисленных процентов: ${profit.toFixed(2)}%`);