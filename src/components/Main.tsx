import React from "react"
import { Link } from "react-router-dom"
import Button from "./Button"

function Main() {
	return (
		<>
			<main>
				<Link to={"/"}>
					<Button
						name={"버튼"}
						size={"sm"}
						type={"block"}
						onClick={(e) => {
							console.log(e.target)
						}}
					/>
				</Link>
			</main>
		</>
	)
}

export default Main
