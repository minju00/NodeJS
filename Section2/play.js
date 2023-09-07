const name = 'Max'; // string
let age = 29; 
const hasHobbies = true;
age = 30;


const sumerizerUser = (userName, userAge, userHasHobby) => {
    return ('Name is' +
    userName +
    ', age is' +
    userAge +
    ' and the user has hobbies : '+
    userHasHobby
    );
};

const add = (a,b) =>{
    return a+b;
};
console.log(add(1,2));
const addOne = a => a + 1;

console.log(addOne(1));

console.log(sumerizerUser(name, age, hasHobbies));
