// console.log('luna is started...');

let userInp = prompt('Введите 16-значный номер карты:', ''); 

let cardNum = userInp.split('');

if (cardNum.length == 16 && userInp == +userInp) {

    for (let i = 0; i < cardNum.length; i++) {
        cardNum[i] = +cardNum[i];    
    }  

    let cardNumRev = [];

    //реверс массива
    for (let i = cardNum.length - 1; i >= 0; i--) {
        cardNumRev.push(cardNum[i]);
    };

    // умножаем на 2 все четные элементы, если результат больше 9 то вычитаем 9
    for (let i = 1; i < cardNumRev.length; i += 2) {
        cardNumRev[i] *= 2;
        if (cardNumRev[i] > 9) {
            cardNumRev[i] = cardNumRev[i] - 9;
        };
    };

    //суммируем все элементы
    let summ = 0;
        for(let i = 0; i < cardNumRev.length; i++) {
        summ += cardNumRev[i];
        };

    (summ % 10 == 0)?alert('Ваша карта прошла проверку'):alert('Ваша карта не прошла проверку');
    history.back();
} else {
    alert('Проверьте правильность ввода карты');
    history.back();
};

console.log(userInp);
console.log(cardNum);
console.log(cardNumRev);
console.log(summ);