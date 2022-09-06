// js 는 웹은 싱글 스레드 == 모바일은 ui 스레드 + 멀티 스레드  
// react 18 suspense 우선순위 queue 타이밍 scheduler => multi thread를 이용할 수 있음
//함수형 프로그래밍은 동시성에서 유리함 => 불변의 원칙이 있음 계산이 여러 스레드에 걸쳐도 안전함 ==> 변화가 되는 상태 공유는 어려움 
//multi thread  => run cound 10개? counting이 안됨 oop => 자기 자신을 공유 상태로 사용
// 새와포어,, 크리티컬 xx? 

//프론트엔드에서 왜 함수형 프로그래밍을 저극적으로 쓸까 ?? => 1. js 태생 함수형임 리스프의 모습을 상상하며 만듬 그때는 인기가 없어서 문법을 바꿈 하지만 불변성은 없지만  일급객채인 고차함수를 구현할 수 있게 함
//깊게 들어가면 함수형 선호할것임 커피스크립트 => ?
//ui 비동기 액션 => 에러날것임
//class 가 없어도 단순한 상태
//반응형 디자인도 함수형 프로그래밍에서 더 간결하고 용이함
//멀티스레드 비동기

//아일랜드 아키텍쳐  http stayless 프로토콜 => 함수형 패러다임 , 불변성  http/ http stateless 그럼에도 상태가 유지되어야 할 땐 ?  => 쿠키 세션 쿠키가 왜 위험해 지는가?!?

//재귀함수

///재귀함수 
//명령적 -> 루프로 작성된 합산 함수
//특정 조건 종료 ,, 자기 자신 다시 호출         반복조건 종료조건 식별
// list는 재귀적 // 재귀적인 자료구조
// 1. 팩토리얼을 재귀 for loop를 재귀 구현
//재귀함수 연습해라,,,
//재귀함수 재귀적인 자료구조 관계성 .. 재귀 기본 구조
//수학적 귀납법과 재귀
// 1~n 까지의 합 for loop/ 재귀
// function sum(n) {
//     for (i < n)
// }

// function sum_() {
//     if (n == 0)
// }
///

function f(n) {
    if (n <= 1) {
        return 1
    }
    return n + f(n - 1)
}
console.log(f(100));

//문자열 뒤집기
function strReverse(str) {
    if (str.length == 1) {
        return str
    }
    return str[str.length - 1] + strReverse(str.slice(0, str.length - 1)) //순서 더하는 순서
}
console.log(strReverse('kimjiha'));

// 유클리드 호재법 - 인자로 주어진 두 수의 최대공약수를 찾는 함수를 재귀함수로 만들어 보라
function gcd(a, b) {
    const remainder = a % b;
    if (remainder === 0) return b;
    return gcd(b, remainder);
}

console.log(gcd(1, 5));

