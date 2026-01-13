import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<div>© {new Date().getFullYear()} ConvertHelp</div>

				<div className="footer-links">
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/privacy">Privacy</a>
				</div>
			</div>
		</footer>
	);
}
