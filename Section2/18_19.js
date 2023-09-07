// const person = {
//     name:'MAX',
//     age : 29,
//     greet() {
//         console.log('Hi, I am '+ this.name);
//     }
// };

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const printName = (personData) => {
//     console.log(personData.name);
// };

// printName(person); // 이렇게 내가 원하는 name 만 가져오는 것도 가능

// // Object Destructuring (구조분해구문)

// const printName2 = ({name})=>{
//     console.log(name);
// }
// printName2(person);

// const {name, age} = person;
// console.log(name, age);





const hobbies = ['Sports', 'Cooking'];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// const copiedArray = hobbies.slice(); // 하나씩 쪼갬
// console.log(copiedArray); //사본 생성

// const copyArray = [hobbies]; 
// console.log(copyArray); //배열안에 배열이 있는 형태
// // 이건 사본이 아니라 첫 원소가 기존의 배열인 새로운 배열이다.

// // 스프레드 연산자
// const spreadCopy = [...hobbies];
// console.log(spreadCopy);

// const toArray = (arg1, arg2, arg3) =>{
//     return [arg1, arg2, arg3];
// };
// console.log(toArray(1,2,3)); // 이런식으로 다시 배열로 만들기 가능 but 유연하지 않음
// console.log(toArray(1,2,3,4));

// // 레스트 연산자
// const toArray2 = (...args) => {
//     return args;
// }; 
// console.log(toArray2(1,2,3,4));

