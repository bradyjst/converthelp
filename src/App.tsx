import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Homepage from "../pages/homepage/Homepage";
import Medical from "../pages/medicalpage/Medical";
import Electrical from "../pages/electricalpage/Electrical";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Homepage />} />
				<Route path="/electrical" element={<Electrical />} />
				<Route path="/electrical/:slug" element={<Electrical />} />
				<Route path="/medical" element={<Medical />} />
				<Route path="/medical/:slug" element={<Medical />} />
				<Route path="/mechanical" element={<div>Mechanical</div>} />
				<Route path="/home" element={<div>Home</div>} />
				<Route path="/cooking" element={<div>Cooking</div>} />
				<Route path="/science" element={<div>Science</div>} />
			</Route>
		</Routes>
	);
}
