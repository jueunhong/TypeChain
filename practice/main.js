//array + bool → 배열이 사라지고 string으로 바뀜
array = [1,2,3]
console.log(array + false);

//divide → 입력값의 개수와 type다르게 해도, return값이 NaN일 뿐, 에러가 나지 않음
function divide(a,b){
    return a / b;
}

console.log(divide("dddd"));


//없는 함수를 불러와도 실행 전에 에러를 보여주지 않고, 사용자의 컴퓨터에서 실행 시 에러 발생
const a = {a: "A"};
console.log(a.hello());

//js 는 매우 유연해서 에러를 잘 보여주지 않음, ts 타입 안정성 , 버그 감소