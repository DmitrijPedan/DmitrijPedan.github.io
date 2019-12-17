const cl = (arg) => {console.log(arg)};
cl('///// Price in numbers to letters /////');

const hundreds = {0: 0, 1: 'сто', 2: 'двести', 3: 'триста', 4: 'четыреста', 5: 'пятьсот', 6: 'шестьсот', 7: 'семьсот', 8: 'восемьсот', 9: 'девятьсот'};
const dozens = {0: 0, 1: 'десять', 2: 'двадцать', 3: 'тридцать', 4: 'сорок', 5: 'пятьдесят', 6: 'шестьдесят', 7: 'семьдесят', 8: 'восемьдесят', 9: 'девяносто'};
const units = {0: 0, 1: 'одна', 2: 'две', 3: 'три', 4: 'четыре', 5: 'пять', 6: 'шесть', 7: 'семь', 8: 'восемь', 9: 'девять', 10: 'десять', 11: 'одинадцать', 12: 'двенадцать', 13: 'тринадцать', 14: 'четырнадцать', 15: 'пятнадцать', 16: 'шестнадцать', 17: 'семнадцать', 18: 'восемнадцать', 19: 'девятнадцать'};
const currency = {0: 'гривен', 1: 'гривна', 2: 'гривны', 3: 'гривны', 4: 'гривны', 5: 'гривен', 6: 'гривен', 7: 'гривен', 8: 'гривен', 9: 'гривен'};

const getArrayOfUserInput = () => {
    let inp = prompt('Введите число от 1 до 999', '');
    inp == +inp && +inp > 0 && +inp < 1000 ? inp = inp.split('') : alert('Ввод не верен');
    return inp; 
}
const subCurrensy = (arr) => {
    (arr.length > 1 && arr[[arr.length - 2]] == 1) ? arr.push(`${currency[0]}`) : arr.push(`${currency[arr[arr.length - 1]]}`);
    return arr;
}
const getLettersFromNumbers = (arr) => {
    if (arr.length == 2) {
        arr[0] = `${units[arr[0]]}`;
    } else if (arr.length == 3 && arr[0] != 1) {
        arr[0] = `${dozens[arr[0]]}`;
        arr[1] = `${units[arr[1]]}`;
    } else if (arr.length == 3 && arr[0] == 1) {
        arr[1] = arr[0] + arr[1];
        arr.splice(0,1);
        arr[0] = `${units[arr[0]]}`;
    } else if (arr.length == 4 && arr[1] != 1) {
        arr[0] = `${hundreds[arr[0]]}`;
        arr[1] = `${dozens[arr[1]]}`;
        arr[2] = `${units[arr[2]]}`;
    } else if (arr.length == 4 && arr[1] == 1) {
        arr[0] = `${hundreds[arr[0]]}`;
        arr[2] = arr[1] + arr[2];
        arr.splice(1,1);
        arr[1] = `${units[arr[1]]}`;
    }
    let res = arr.filter(el => el != 0);
    return res;
}
const bigFunction = () => {
    let output = getLettersFromNumbers(subCurrensy(getArrayOfUserInput()));
    alert(output.join(' '));
}

bigFunction();
history.back();