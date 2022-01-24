// eslint-disable
import { type } from "@testing-library/user-event/dist/type"
import React from "react"

function PageHeader() {
	let name: string = "kim"

	name = "kim"

	function 함수(x: number): number {
		return x * 2
	}

	함수(34)
	console.log(함수(34))

	type Member = {
		[key: string]: string
	}
	let john: Member = { name: "3232" }

	let 이름: string = "kim" // 선언문 변수명: 타입 = "값"
	let 나이: number = 50 // type: number
	let 결혼: boolean = true // type: boolean
	let 회원들: string[] = ["kim", "park"] // type : string[]
	let 유니온타입: number | string | boolean = 123 //타입 | 타입 | 타입 가능
	let 배열유니온: (number | string)[] = [1, "23", 4] // 배열 유니온 설정 시 () 주의!
	let 오브젝트유니온: { a: string | number } = { a: "123" }
	let 애니타입: any // 타입해제 문법.. 막 쓰지 말아야함 js 변수로써 활용하고 싶을 때 사용
	let 언노운타입: unknown // 모든 타입을 허용해줌
	// 언노운타입 - 3 // -> 숫자가 아니므로 연산 불가 any, number 등 가능
	// 유니온타입 - 3 // 유니온 타입에 경우 연산 불가

	let 회원정보: {
		member1: string
		member2: string
	} = {
		member1: "kim",
		member2: "park",
	} // type : string[]

	let 회원 = "park"

	let musicInfo: {
		singer: string
		song: string
	} = {
		singer: "아이유",
		song: "좋은 날",
	}

	let project: {
		member: string[]
		days: number
		started: boolean
	} = {
		member: ["kim", "park"],
		days: 30,
		started: true,
	}

	let 학교: {
		score: (string | boolean | number)[]
		teacher: string
		friend: string[] | string
	} = {
		score: [100, 97, 84],
		teacher: "Phil",
		friend: "John",
	}
	학교.score[4] = false
	학교.friend = ["Lee", 학교.teacher]

	let 무슨정보: "대머리" | "솔로"

	type StringToNumber = (a: string) => number
	type StringToString = (a: string) => string
	type NumberToNumber = (a: number) => number
	type NumberToString = (a: number) => string

	const cutZero: StringToString = (a) => {
		let result = a.replace(/^0+/, "")
		return result
	}

	const removeDash: StringToNumber = (a) => {
		let result = a.replace(/-/g, "")
		return parseFloat(result)
	}

	type 만들함수타입 = (
		a: string,
		b: StringToString,
		c: StringToNumber
	) => number
	const 만들함수: 만들함수타입 = (a, b, c) => {
		let value: string = a
		let result_1 = b(value)
		let result_2 = c(result_1)
		console.log(result_2)
		return result_2
	}

	interface 학생타입 {
		name: string
	}

	interface 선생타입 extends 학생타입 {
		age: number
	}

	let 학생: 학생타입 = { name: "kim" }
	let 선생: 선생타입 = { name: "kim", age: 30 }

	class Car {
		model: string
		price: number
		constructor(a: string, b: number) {
			this.model = a
			this.price = b
		}
		tax(): number {
			return this.price * 0.1
		}
	}

	let car1 = new Car("소나타", 3000)
	console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
	console.log(car1.tax()) //콘솔창 출력결과는 300

	만들함수("010-1111-2222", cutZero, removeDash)

	return (
		<>
			<header>{name}</header>
			<div></div>
		</>
	)
}

export default PageHeader
