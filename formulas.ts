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

  electrical: [
  {
    slug: "amps-to-watts",
    title: "Amps to Watts",
    formula: "Watts = Amps × Volts",
    inputs: [
      { key: "amps", label: "Amps (A)" },
      { key: "volts", label: "Volts (V)" }
    ],
    quickTip:
      "On a 120V circuit, just multiply amps by 120 for a quick estimate.",
    calculate: (amps: number, volts: number) => amps * volts
  },
  {
    slug: "watts-to-amps",
    title: "Watts to Amps",
    formula: "Amps = Watts ÷ Volts",
    inputs: [
      { key: "watts", label: "Watts (W)" },
      { key: "volts", label: "Volts (V)" }
    ],
    quickTip:
      "Most household outlets are 120V, so divide watts by 120.",
    calculate: (watts: number, volts: number) => watts / volts
  },
  {
    slug: "ohms-law",
    title: "Ohm’s Law",
    formula: "Volts = Amps × Ohms",
    inputs: [
      { key: "amps", label: "Amps (A)" },
      { key: "ohms", label: "Resistance (Ω)" }
    ],
    quickTip:
      "Voltage drop is current times resistance.",
    calculate: (amps: number, ohms: number) => amps * ohms
  }
],
  mechanical: [],
  home: [],
  cooking: [],
  science: []
};
