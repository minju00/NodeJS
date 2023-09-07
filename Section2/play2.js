const person = {
    name:'MAX',
    age : 29,
    greet() {
        console.log('Hi, I am '+ this.name);
    }
};
// console.log(person);
// person.greet();

const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies){
//    console.log(hobby);
//}

// console.log(hobbies.map(hobby =>'Hobby: '+hobby));
// console.log(hobbies);

// 'Sports'와 'Cooking'은 참조 타입이므로 상수는 바뀌어서는 안된다는 제한을
// 위배하지 않고 편집 가능
// Reference type 은 배열이 저장된 메모리 위치를 가리키는 주소만을 저장하므로 


hobbies.push('Programming');
console.log(hobbies);

