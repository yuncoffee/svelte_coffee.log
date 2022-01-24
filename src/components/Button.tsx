import React, { useState } from "react"
import "../styles/scss/_Button.scss"

interface ButtonType {
	type: string
	size: string
	name: string
	use?: string
	className?: string
	onClick?: (arg?: any) => void
	disabled?: boolean
	length?: string
	icon?: boolean
	iconName?: string
}

// ;(className = ""), // 버튼 클래스 이름 :string |
// 	(type = "block"), // 버튼 타입 :string | "box" | "box-line" | "block" | "block-line" | "round" | "round-line" | "text" | "box-ghost" | "block-ghost" | "round-ghost"
// 	(size = "sm"), // 버튼 크기 :string | "xl" | "lg" | "mid" | "sm"
// 	(name = "버튼"), // 버튼 이름 :string |
// 	(use = "default"), // 버튼 사용처 :string | "default" | "cancel" | "warning" | "csp"
// 	(length = "auto"), // 버튼 길이 :string | "px" | "%" | "em" |
// 	(disabled = ""), // disabled 여부 :string disabled  | ""
// 	(icon = false), // 아이콘 포함 여부 :boolean | true | false
// 	(iconName = ""), // 아이콘 포함 시 이름 :string |
// 	(onClick = () => {
// 		console.log("전달받은 이벤트가 없어요")
// 	}),
function Button({
	className = "",
	name = "기본버튼",
	size = "sm",
	type = "block",
	use = "default",
	onClick = () => {
		console.log("전달받은 이벤트가 없어요")
	},
	length = "auto",
	disabled = false,
	icon = false,
	iconName = "",
}: ButtonType): JSX.Element {
	return (
		<>
			<button
				className={"button " + className}
				ly-size={size}
				ly-type={type}
				ly-use={use}
				disabled={disabled}
				onClick={onClick}
				style={{ width: `${length}` }}
				type="button"
			>
				{/* 아이콘이 있을 경우만 생성 */}
				{icon ? (
					<div className="icon">
						<i className={iconName + " ri-1x"}></i>
					</div>
				) : (
					""
				)}
				{name}
			</button>
		</>
	)
}

export default Button
