console.log ('/// Random employees ///');
const firstName = ['Anthony', 'James', 'Aidan', 'Jackson', 'David', 'Mason', 'Logan', 'Alexander', 'Charles', 
'Bryan', 'Angel', 'Tyler', 'Isaac', 'John', 'Nathaniel', 'Samuel', 'Austin', 'Luis', 'Benjamin', 'Gabriel', 
'Carlos', 'Robert', 'Julian', 'Lucas', 'Brandon', 'Diego', 'Jose', 'Nicholas', 'Timothy', 'Kevin', 'Jonathan',
'Barbara', 'Julia', 'Anastasia', 'Kate', 'Maria', 'Ann', 'Bridget', 'Victoria', 'Angelina', 'Amanda', 'Christina'];

const lastName = ['Abramson', 'Gilson', 'Goodman', 'Hawkins', 'Gill', 'Gilbert', 'Fraser', 'Foster', 'Ford', 
'Fitzgerald', 'Adams', 'Fisher', 'Faber', 'Elmers', 'Eddington', 'Newton', 'Bach', 'Beethowen', 'Donaldson', 'Trump', 
'Obama', 'Putin', 'Creighton', 'Bond', 'Willis', 'Travolta', 'Tarantino', 'Roberts', 'Franklin', 'Karrey', 'Archibald'];

const getRandomFullName = () => `${firstName[Math.floor(Math.random() * firstName.length)]} ${lastName[Math.floor(Math.random() * lastName.length)]}`;

const getRandomSalary = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getArrayOfRandomObjects = (lenght) => {
    let employeesArray = []; 
        for (let i = 0; i < lenght; i++) {
            let x = getRandomFullName();
            let y = getRandomSalary(1000, 5000);
            employeesArray.push({fullname: x, salary: y});
    } 
    return employeesArray;   
};

const sortArrayToSalary = (obj, key) => {
    if (key == 1) {
        obj.sort((a, b) => {return a.salary - b.salary});
    } else if (key == 2){
        obj.sort((a, b) => {return b.salary - a.salary});
    } else {
        alert('Ключ не введен. Массив не отсортирован');
    }
    return obj;
};

const alertArrayOfObjects = (obj) => {
    let temp = [];
    let str = '';
    for (let i = 0; i < obj.length ; i++) {
        temp.push(`${obj[i].fullname}: ${obj[i].salary}$`);
        str += `${temp[i]}\n`;
    }
    alert(str);
    return str;
}

let x = getArrayOfRandomObjects(prompt('Введите количество сотрудников'));
let y = sortArrayToSalary(x, prompt('Введите ключ сортировки (1-ask, 2-desk)'));
let z = alertArrayOfObjects(y);
history.back();







