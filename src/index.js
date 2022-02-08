import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Level from "./views/Level/Level";
import Home from "./views/Home/Home";
import Header from "./views/Header/Header";

export default function Index() {
	return (
		<div id="game">
			<HashRouter>
				<Header></Header>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/level/:levelId" element={<Level />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));