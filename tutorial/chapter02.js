// 배열
let ranking = ["Jason", "Alice", "Chris"];
console.log(ranking);
console.log(ranking[0]);

// Array.length
console.log(ranking.length);

// 배열 메서드
// push() : 배열의 가장 뒤에 데이터를 추가해주는 메서드
ranking.push("Adams");
console.log(ranking[3]);

ranking.push("Jane");
console.log(ranking);

// pop()
// 배열에서 가장 마지막 인덱스에 위치한 요소를 삭제
ranking.pop();
console.log(ranking);

// includes()
// 데이터가 특정 배열에 존재하는지 판단하는 메서드
console.log(ranking.includes("Jane")); // pop()로 마지막 요소를 삭제했기 때문에 false가 뜬다
console.log(ranking.includes("Alice"));

// indexOf()
// 배열 특정 값의 인덱스를 모를때 사용하는 메서드
console.log(ranking.indexOf("Adams"));
