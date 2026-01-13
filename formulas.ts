export const formulas = {
  medical: [
    {
      slug: "iv-drip-rate",
      title: "IV Drip Rate Calculator",
      formula: "(Total volume × Drop factor) ÷ Time",
      inputs: [
        { key: "volume", label: "Total Volume (mL)" },
        { key: "dropFactor", label: "Drop Factor (gtt/mL)" },
        { key: "time", label: "Time (minutes)" }
      ],
      quickTip:
        "Most IV tubing is 10, 15, or 20 gtt/mL. Longer time means slower drip.",
      calculate: (volume: number, dropFactor: number, time: number) =>
        (volume * dropFactor) / time
    },
    {
      slug: "medication-dosage",
      title: "Medication Dosage Calculator",
      formula: "(Ordered ÷ On Hand) × Volume",
      inputs: [
        { key: "ordered", label: "Ordered Dose (mg)" },
        { key: "onHand", label: "Dose On Hand (mg)" },
        { key: "volume", label: "Volume (mL)" }
      ],
      quickTip:
        "Divide what you want by what you have, then multiply by the bottle volume.",
      calculate: (ordered: number, onHand: number, volume: number) =>
        (ordered / onHand) * volume
    }
  ],

  electrical: [],
  mechanical: [],
  home: [],
  cooking: [],
  science: []
};
