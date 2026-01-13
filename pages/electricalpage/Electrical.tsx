import { Link, useParams, useNavigate } from "react-router-dom";
import { formulas } from "../../formulas";
import FormulaModal from "../../components/modal/FormulaModal";
import "../styles/Category.css";

export default function Electrical() {
	const { slug } = useParams();
	const navigate = useNavigate();

	const electricalFormulas = formulas.electrical;
	const active = electricalFormulas.find((f) => f.slug === slug);

	return (
		<div className="category">
			<div className="categoryHeader">
				<h1>Electrical Conversions</h1>
				<p className="subtitle">Quick formulas for electricians and techs.</p>
			</div>

			<div className="list">
				{electricalFormulas.map((f) => (
					<Link key={f.slug} to={`/electrical/${f.slug}`} className="item">
						<div className="item-title">{f.title}</div>
						<div className="item-formula">{f.formula}</div>
					</Link>
				))}
			</div>

			{active && (
				<FormulaModal
					formula={active}
					onClose={() => navigate("/electrical")}
				/>
			)}
		</div>
	);
}
