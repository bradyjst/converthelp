import { Link, useParams, useNavigate } from "react-router-dom";
import { formulas } from "../../formulas";
import FormulaModal from "../../components/modal/FormulaModal";
import "./Medical.css";

export default function Medical() {
	const { slug } = useParams();
	const navigate = useNavigate();

	const medicalFormulas = formulas.medical;
	const active = medicalFormulas.find((f) => f.slug === slug);

	return (
		<div className="category">
			<div className="categoryHeader">
				<h1>Medical Conversions</h1>
				<p className="subtitle">Common nursing and medication calculations.</p>
			</div>

			<div className="list">
				{medicalFormulas.map((f) => (
					<Link key={f.slug} to={`/medical/${f.slug}`} className="item">
						<div className="item-title">{f.title}</div>
						<div className="item-formula">{f.formula}</div>
					</Link>
				))}
			</div>

			{active && (
				<FormulaModal formula={active} onClose={() => navigate("/medical")} />
			)}
		</div>
	);
}
