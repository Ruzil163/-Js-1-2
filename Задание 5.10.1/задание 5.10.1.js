//Задание 5.10.2
let num;
    num = +prompt(`Введите число`);
    if (typeof num === `number`) {
        Math.pow(num, 2)
        num1 = Math.pow(num, 2)
        num2 = Math.pow(num, 3)
        alert(`Введено число: ${num} \n Квадрат числа: ${num1} \n Куб числа: ${num2}`);
    }
