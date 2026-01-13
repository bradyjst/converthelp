import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Homepage from "../components/homepage/Homepage";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Homepage />} />
				<Route path="/electrical" element={<div>Electrical</div>} />
				<Route path="/medical" element={<div>Medical</div>} />
				<Route path="/mechanical" element={<div>Mechanical</div>} />
				<Route path="/home" element={<div>Home</div>} />
				<Route path="/cooking" element={<div>Cooking</div>} />
				<Route path="/science" element={<div>Science</div>} />
			</Route>
		</Routes>
	);
}
