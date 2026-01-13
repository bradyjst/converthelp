import "./Homepage.css";
import { Link } from "react-router-dom";

const categories = [
	{ id: "medical", name: "Medical", icon: "🏥" },
	{ id: "electrical", name: "Electrical", icon: "⚡" },
	{ id: "cooking", name: "Cooking & Baking", icon: "🍞" },
	{ id: "home", name: "Home & Everyday", icon: "🏠" },
	{ id: "science", name: "Science & Lab", icon: "🧪" },
	{ id: "mechanical", name: "Mechanical", icon: "🛠" },
];

export default function Homepage() {
	return (
		<div className="homepage">
			<p className="subtitle">
				Fast, simple unit conversions for real-world work.
			</p>

			<div className="grid">
				{categories.map((cat) => (
					<Link key={cat.id} to={`/${cat.id}`} className="card">
						<div className="icon">{cat.icon}</div>
						<div className="name">{cat.name}</div>
					</Link>
				))}
			</div>
		</div>
	);
}
