import { useState } from "react";
import "./FormulaModal.css";

type Input = {
	key: string;
	label: string;
};

type Formula = {
	title: string;
	formula: string;
	inputs: Input[];
	quickTip: string;
	calculate: (...args: number[]) => number;
};

export default function FormulaModal({
	formula,
	onClose,
}: {
	formula: Formula;
	onClose: () => void;
}) {
	const [values, setValues] = useState<Record<string, number>>({});

	const args = formula.inputs.map((i) => values[i.key] || 0);
	const result = formula.calculate(...args);

	return (
		<div className="modalBackdrop" onClick={onClose}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<div className="modalHeader">
					<h2>{formula.title}</h2>
					<button className="closeBtn" onClick={onClose}>
						✕
					</button>
				</div>

				<p className="modalFormula">{formula.formula}</p>

				<div className="calc">
					{formula.inputs.map((input) => (
						<div key={input.key} className="field">
							<label>{input.label}</label>
							<input
								type="number"
								value={values[input.key] || ""}
								onChange={(e) =>
									setValues((v) => ({
										...v,
										[input.key]: Number(e.target.value),
									}))
								}
							/>
						</div>
					))}

					<div className="result">
						Result: {Number.isFinite(result) ? result.toFixed(2) : "—"}
					</div>

					<p className="quickTip">{formula.quickTip}</p>
				</div>
			</div>
		</div>
	);
}
