import React, { useEffect } from "react";

const psoResults = [
  { dataset: "Leukemia", features: 24, accuracy: 95.45, precision: 96.3, recall: 88.89, f1Score: 91.37 },
  { dataset: "Ovarian", features: 33, accuracy: 97.57, precision: 98.04, recall: 96.3, f1Score: 97.08 },
  { dataset: "Lung", features: 41, accuracy: 98.1, precision: 99.53, recall: 99.52, f1Score: 99.51 },
  { dataset: "Lymphoma", features: 13, accuracy: 97.78, precision: 97.78, recall: 97.62, f1Score: 97.62 },
  { dataset: "MLL", features: 30, accuracy: 90.91, precision: 91.9, recall: 90.48, f1Score: 90.13 },
  { dataset: "SRBCT", features: 6, accuracy: 90.5, precision: 90.6, recall: 90.62, f1Score: 90.5 },
];

const KeyFindings = () => {
  useEffect(() => {
    const canvas = document.getElementById("chartCanvas");
    const ctx = canvas.getContext("2d");

    const labels = psoResults.map((d) => d.dataset);
    const accuracyData = psoResults.map((d) => d.accuracy);

    const width = canvas.width;
    const height = canvas.height;
    const barWidth = 40;
    const gap = 30;
    const max = 100;
    const padding = 50;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#fff";
    ctx.textAlign = "right";
    ctx.font = "12px Arial";
    for (let i = 0; i <= 5; i++) {
      const y = height - padding - (i * (height - 2 * padding)) / 5;
      const label = (i * 20).toString();
      ctx.fillText(label + "%", padding - 10, y + 5);
      ctx.beginPath();
      ctx.moveTo(padding - 5, y);
      ctx.lineTo(padding, y);
      ctx.stroke();
    }

    accuracyData.forEach((val, i) => {
      const barHeight = (val / max) * (height - 2 * padding);
      const x = padding + i * (barWidth + gap) + 10;
      const y = height - padding - barHeight;

      ctx.fillStyle = "#60a5fa";
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(val.toFixed(2) + "%", x + barWidth / 2, y - 10);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 14px Arial";
      ctx.fillText(labels[i], x + barWidth / 2, height - padding + 20);
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="p-6 space-y-10 bg-gray-900 min-h-screen text-white">
      <div className="fade-in-section">
        <h1 className="text-4xl font-bold text-center text-blue-400">
          Key Findings: PSO Feature Selection
        </h1>
      </div>

      <div className="fade-in-section">
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
          Particle Swarm Optimization (PSO) significantly reduces feature dimensions while improving model performance across all datasets.
        </p>
      </div>

      <div className="fade-in-section overflow-x-auto bg-gray-800 rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-bold text-blue-300 mb-4">Comparison Table for PSO Feature Selection Across Various Datasets</h2>
        <table className="table-auto w-full text-sm text-left text-white border border-gray-700">
          <thead className="text-xs uppercase bg-gray-700 text-blue-200">
            <tr>
              <th className="px-4 py-2 border border-gray-600">Dataset</th>
              <th className="px-4 py-2 border border-gray-600">Features Selected</th>
              <th className="px-4 py-2 border border-gray-600">Accuracy</th>
              <th className="px-4 py-2 border border-gray-600">Precision</th>
              <th className="px-4 py-2 border border-gray-600">Recall</th>
              <th className="px-4 py-2 border border-gray-600">F1-Score</th>
            </tr>
          </thead>
          <tbody>
            {psoResults.map((row) => (
              <tr key={row.dataset} className="hover:bg-gray-700">
                <td className="px-4 py-2 border border-gray-600">{row.dataset}</td>
                <td className="px-4 py-2 border border-gray-600">{row.features}</td>
                <td className="px-4 py-2 border border-gray-600">{row.accuracy}</td>
                <td className="px-4 py-2 border border-gray-600">{row.precision}</td>
                <td className="px-4 py-2 border border-gray-600">{row.recall}</td>
                <td className="px-4 py-2 border border-gray-600">{row.f1Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fade-in-section bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-300 mb-4">Accuracy Chart</h3>
        <canvas id="chartCanvas" width="600" height="400" className="mx-auto"></canvas>
      </div>

      <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {psoResults.map((result) => (
          <div key={result.dataset} className="bg-gray-800 rounded-xl p-4 shadow-md hover:bg-gray-700 transition-colors">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">{result.dataset}</h2>
            <ul className="text-gray-200 space-y-1">
              <li><strong>No. of Features:</strong> {result.features}</li>
              <li><strong>Accuracy:</strong> {result.accuracy}</li>
              <li><strong>Precision:</strong> {result.precision}</li>
              <li><strong>Recall:</strong> {result.recall}</li>
              <li><strong>F1-Score:</strong> {result.f1Score}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="fade-in-section bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-300 mb-3">Why PSO Outperformed Other Methods</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Unlike filter-based methods that rely solely on statistical properties and ignore model performance, PSO evaluates subsets based on actual classification accuracy.</li>
          <li>Compared to traditional wrapper methods that often get trapped in local optima, PSO’s swarm-based global search escapes local minima.</li>
          <li>PSO reduces redundancy by selecting subsets that yield high model performance with fewer variables.</li>
          <li>In high-dimensional biological datasets, PSO is more stable and consistent across multiple runs.</li>
          <li>PSO integrates smoothly with both shallow ML models and deep learning, making it ideal for hybrid pipelines.</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyFindings;
