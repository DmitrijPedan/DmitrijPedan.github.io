console.log('max & min ...');

let array = [];
let arrayLen = prompt('Укажите размер массива:', '');

for (let i = 0; i < arrayLen; i++) {
    array.push(Math.round(Math.random()*100));
};

let maxValue = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
    }
}

let minValue = array[0];
console.log(maxValue);
for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
    }
}

console.log(array);
console.log(`Максимальное значение: ${maxValue}`);
console.log(`Минимальное значение: ${minValue}`);

alert(`Количество элементов в массиве: ${array.length}. 
Максимальное значение: ${maxValue}.
Минимальное значение: ${minValue}.`);

