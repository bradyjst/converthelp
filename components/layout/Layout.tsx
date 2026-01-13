import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Layout.css";

export default function Layout() {
	return (
		<div className="layout">
			<Header />

			<main className="main">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
