let a = 7;
let b = 7;

let obj1 = { a: 1, b: 2};
let obj2 = { a: 1, b: 2};

console.log("obj1 === obj2(주소를 가진 객체): ", obj1 === obj2);
// 레퍼런스가(참조값, 주소) 다른 객체

let obj3 = obj1;
console.log("obj1 === obj3(주소복사): ", obj1 === obj3);
// 같은 레퍼런스를 가지는 객체

obj3.c = 3;
console.log("obj1 === obj3(obj3값만 변경): ",obj1 === obj3);
console.log("obj1: ",obj1);
//obj3의 값을 변경하였는데, obj1의 값도 변경됨.

let arr1 = [0, 1, 2, 3, 4];
let arr2 = arr1;
arr2.push(5);
console.log("arr1 === arr2: ",arr1 === arr2);

// 객체안의 객체안의 객체 같은, 깊은 곳에 있는 객체값을 변경할 때
// 원본을 유지하고, 원하는 값만 변경하기 어려움.
// 그래서 했던 것이 전개연산자로(...) 복사후 앞뒤를 slice하는 방법.








// let test = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 4,
//         e: 5,
//         f: {
//             g: 7
//         }
//     }
// };
// let test2 = {...test};

// console.log('----test: ',JSON.stringify(test));
// console.log('----test2: ',JSON.stringify(test2));
