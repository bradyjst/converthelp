import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	const toggleTheme = () => {
		document.body.classList.toggle("theme-dark");
	};

	return (
		<header className="header">
			<div className="header-inner">
				<Link to="/" className="logo">
					ConvertHelp
				</Link>

				<button className="themeToggle" onClick={toggleTheme}>
					🌙 / ☀️
				</button>
			</div>
		</header>
	);
}
