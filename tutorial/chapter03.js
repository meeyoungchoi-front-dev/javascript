// 객체를 사용하지 않는 경우 john에 대한 데이터를 관리하기 위해 변수를 여러개 만들어야 한다
let johnName = "John";
let johnAge = 25;
let johnGender = "Male";

// 관리하려는 사람이 늘어나면 변수도 늘어나게된다
let aliceName = "Alice";
let aliceAge = 18;
let aliceGender = "Female";

let chrisName = "Chris";
let chrisAge = 31;
let chrisGender = "Male";

let janeName = "Jane";
let janeAge = 26;
let janeGender  = "Female";

// 각 사람의 데이터를 배열에 담으면 사람이 늘어나도 관리하기 편하다
// 하지만, 배열에 어떤 데이터가 담겨있는지 미리 알고 있어야 하는 문제점과
// 데이터가 무엇을 의미하는지 알고 있어야 한다는 문제점이 있다
let johnData = ["John", 25, "Male"];
let aliceData = ["Alice", 18, "Female"];
let chrisData = ["Chris", 31, "Male"];
let janeData = ["Jane", 26, "Female"];

// 객체 : 여러개의 속성(property)으로 구성된 데이터 타입
// key, value 쌍으로 객체에 데이터를 담을 수 있다
// 관리해야 하는 사람이 들어나도 명시적으로 데이터를 관리할 수 있게 된다
let userData = {
    name: 'Jason',
    age: 25,
    gender: 'Male'
};

//객체의 데이터타입에 접근하는 방법
// Dot notation
console.log(userData.name);
console.log(userData.age);
console.log(userData.gender);

// Bracket notation
console.log(userData["name"]);
console.log(userData["age"]);
console.log(userData["gender"]);
// key와 value를 추가할 수 있다
userData["email"] = "test@naver.com";
console.log(userData["email"]);
console.log(userData.email);

let key = "name";
console.log(userData[key]);

// 객체 메서드
// Object.keys() : 객체의 프로퍼티에서 key값만을 가져온다
console.log(Object.keys(userData));

// Object.values() : 객체 프로퍼티에서 value값만을 가져온다
console.log(Object.values(userData));
let result = Object.values(userData);
console.log(result);
console.log(result[1]); // Object.values() 메서드가 배열을 반환하기 때문에 인덱스를 사용하여 특정 위치의 value 값을 가져올 수 있다
console.log(result.includes("Male")); // value 값이 모여있는 배열에 Male이 있기 때문에 True가 출력된다

userData.favoriteFood = ["rice", "noodle", "chicken"];
console.log(userData["favoriteFood"]);
