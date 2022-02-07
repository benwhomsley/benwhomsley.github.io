import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level from "./views/Level/Level";
import Home from "./views/Home/Home";
import Header from "./views/Header/Header";

export default function Index() {
	return (
		<div id="game">
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/level/:levelId" element={<Level />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));