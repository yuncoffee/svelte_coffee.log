import React from "react"
import "./styles/main.css"
import "./App.css"
import "./styles/scss/_global.scss"
import { Link, Route, Switch } from "react-router-dom"
import Button from "./components/Button"
import Main from "./components/Main"
import Error404 from "./components/Error/Error404"
import PageHeader from "./components/PageHeader"

function App() {
	return (
		<div className="App">
			<PageHeader />

			<Switch>
				<Route exact path={"/"}>
					<Main></Main>
				</Route>
				<Route path={"/detail"}>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<img
									src="https://codingapple1.github.io/shop/shoes1.jpg"
									width="100%"
									alt="됐냐"
								/>
							</div>
							<div className="col-md-6 mt-4">
								<h4 className="pt-5">상품명</h4>
								<p>상품설명</p>
								<p>120000원</p>
								<button className="btn btn-danger">
									주문하기
								</button>
							</div>
						</div>
					</div>
				</Route>
				<Route path="*" component={Error404}></Route>
			</Switch>
		</div>
	)
}

export default App
