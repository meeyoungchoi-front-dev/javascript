// console.log
console.log(1);
console.log(10 + 20);
console.log(123 * 987);


// 변수
// 변수 선언 및 데이터 할당
let box = 123 * 987;
console.log(box);

let word = 'abc';
console.log(word);

let num = 123;
console.log(num);


/**
 * 재할당 => 이미 데이터가 할당 되어있는 변수에 다시 데이터를 할당하는 것
 * let은 재할당이 가능하다
 */
box = 1;
console.log(box);
box = 5;
console.log(box);

/**
 * 재선언 => 이미 선언되어 있는 변수명으로 다시 선언하는 것
 * let은 재선언은 되지 않는다
 */
/*
    에러가 발생함 : Identifier 'box' has already been declared
    let box = "hello";
*/

// const : 상수 변 수
// const는 선언과 할당이 동시에 이루어 져야 한다
const data = 'abc';
// const는 재할당이 되지 않는다
// data = 'test';
console.log(data);
// const는 재선언이 되지 않는다
//const data = 'hello';

// var
// 재할당도 가능하고 재선언도 가능하기 때문에 사용할때 주의가 필요하며 장점은 아니다
var uniqueWord = 'unique';
var uniqueWord = 'ununiqueWord';
console.log(uniqueWord);

// 자바스크립트 변수 선언과 할당 동작과정 : https://minsoftk.tistory.com/84

/**
 * 변수명 주의사항
 * - 변수명은 동사가 아닌 명사로
 * - 첫글자는 숫자 사용 불가능
 * - 자바스크립트 예약어는 변수로 사용 불가능
 * - camelCase 형식으로 변수명을 작성
 * - snake_case도 가능
 * - PascalCase : 첫글자도 대문자, 띄어쓰기 대신 대문자로 구분
 */


// 데이터 타입
// 문자열
console.log('Hello ' + 'world');

// 숫자
// 문자열로 감싸진 숫자와 숫자 그자체는 다르다
console.log(1 + 2);
console.log(3 - 1);
console.log(10 / 2);
console.log('a' + 1); // 문자열과 숫자를 더해주면 문자열로 변환된다
console.log('1' + 1); // 문자열과 숫자를 더해주면 문자열로 변환된다
console.log(1 + ''); //  숫자와 공백 문자를 더해주면 문자열로 변환된다
console.log('a' * 1); // NaN => Not a Number 문자열을 포함한 연산에서 + 외의 연산을 수행하면 NaN이 발생된다

console.log('2' * 2); // 데이터가 숫자로 변환이 가능하다면 숫자로 변환해서 연산을 진행해 준다
