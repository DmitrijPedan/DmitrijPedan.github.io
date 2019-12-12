// Алгоритм Луна:

let userInp = prompt('Введите 16-значный номер карты:', ''); 
let cardNum = userInp.split('');
let cardNumRev = [];
let summ = 0;
if (cardNum.length == 16 && userInp == +userInp) {
    for (let i = 0; i < cardNum.length; i++) {
        cardNum[i] = +cardNum[i];    
    }  
    for (let i = cardNum.length - 1; i >= 0; i--) {
        cardNumRev.push(cardNum[i]);
    };
    for (let i = 1; i < cardNumRev.length; i += 2) {
        cardNumRev[i] *= 2;
        if (cardNumRev[i] > 9) {
            cardNumRev[i] = cardNumRev[i] - 9;
        };
    };
    for(let i = 0; i < cardNumRev.length; i++) {
        summ += cardNumRev[i];
        };
    (summ % 10 == 0)?alert('Ваша карта прошла проверку'):alert('Ваша карта не прошла проверку');
} else {
    alert('Проверьте правильность ввода карты');
    history.back();
};
