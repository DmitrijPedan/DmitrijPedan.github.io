const getUserInput = () => {
    inp = prompt('Введите 10 значный код ИНН:', '');
    let spl = inp.split('');
    let res;
    inp == +inp && spl.length == 10 ? res = spl.map(el => +el) : alert('Неправильный ввод');
    return res;
};

const checkITN = (inp) => {
    let x = [-1,5,7,9,4,6,10,5,7,0];
    let summ = 0;
    let res;
    for(let i = 0; i < inp.length; i++) {
        summ += inp[i]*x[i];    
    }
    ((summ % 11) % 10) == inp[9] ? res = true : res = false;
    return res;
}

const getUserGender = (inp) => {
    let res;
    inp[inp.length - 2] % 2 == 0 ? res = 'Женский' : res = 'Мужской';
    return res;
}

const getUserData = (inp) => {
    let days = +inp.splice(0,5).join('');
    let date = new Date(days * 86400000);
    let res = `${date.getFullYear() - 70}`; // `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()-70}`
    return res;
}
 const mainFunction = () => {
    let input = getUserInput()
    checkITN(input) ? alert(`Код действителен. \nГод рождения: ${getUserData(input)} \nПол: ${getUserGender(input)}`) : alert(`Код не действителен.`);
}

 mainFunction();
 history.back();
