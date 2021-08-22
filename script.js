/* alert('Задание 1');



do {
    var num = +prompt('Введите число');
} while (num <= 0 || isNaN(num));

do {
    var num2 = prompt('Введите степень числа');
} while (num <= 0 || isNaN(num2)){
    if(isNaN(num)){
        num2 = 2;
    }
}

let num1 = num;

for(let i = 1; i < num2; i++) {
    num = num * num1;
}

alert( num ); */







alert('Задание 2');



do {
    var count = +prompt('Введите количество ступенек');
} while (count <= 0 && !isNaN(count)){
    if(isNaN(count)){
        count = 5;
    }
    /* console.log('Количество ступенек: ' + count); */
}

do {
    var space = prompt('Введите символ отступов (буква или знак)');
} while (!isNaN(space)){
    /* console.log('Cимвол отступов: ' + space); */
} 

do {
    var end = prompt('Введите конечный символ (буква или знак)');
} while (!isNaN(end)){
    /* console.log('Конечный символ: ' + end); */
} 

var space1 = '';


for(let i = 0; i < count; i++){
    console.log(space1 + end);
    space1 = space + space1;
}

alert('Зайдите в консоль')