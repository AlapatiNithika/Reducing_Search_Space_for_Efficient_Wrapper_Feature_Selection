import React, { useEffect } from "react";

const datasetResults = {
  Leukemia: {
    Method: ["No FS", "PSO FS", "Filter FS", "GOA FS", "GA FS"],
    Accuracy: [86.99, 95.45, 89.43, 79.06, 69.05],
  },
  Ovarian: {
    Method: ["No FS", "PSO FS", "Filter FS", "GOA FS", "GA FS"],
    Accuracy: [91.45, 97.57, 97.37, 86.91, 80.25],
  },
  Lung: {
    Method: ["No FS", "PSO FS", "Filter FS", "GOA FS", "GA FS"],
    Accuracy: [86.99, 98.14, 91.82, 72.18, 75.01],
  },
  Lymphoma: {
    Method: ["No FS", "PSO FS", "Filter FS", "GOA FS", "GA FS"],
    Accuracy: [91.18, 97.78, 90.91, 90.02, 84.12],
  },
  MLL: {
    Method: ["No FS", "PSO FS", "Filter FS", "GOA FS", "GA FS"],
    Accuracy: [89.59, 90.91, 89.43, 79.02, 69.05],
  },
  SRBCT: {
    Method: ["No FS", "PSO FS", "Filter FS", "GOA FS", "GA FS"],
    Accuracy: [89.62, 90.54, 89.52, 56.02, 80.14],
  },
};

const methodColors = {
  "No FS": "#f97316",
  "PSO FS": "#60a5fa",
  "Filter FS": "#10b981",
  "GOA FS": "#f472b6",
  "GA FS": "#c084fc",
};

const PerformanceAnalysis = () => {
  useEffect(() => {
    Object.entries(datasetResults).forEach(([dataset, data]) => {
      const canvas = document.getElementById(`chart-${dataset}`);
      const ctx = canvas.getContext("2d");

      const width = canvas.width;
      const height = canvas.height;
      const padding = 50;
      const barWidth = 25;
      const gap = 15;
      const max = 100;

      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, height - padding);
      ctx.lineTo(width - padding, height - padding);
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = "#ccc";
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

      data.Accuracy.forEach((val, i) => {
        const barHeight = (val / max) * (height - 2 * padding);
        const x = padding + i * (barWidth + gap) + 10;
        const y = height - padding - barHeight;

        ctx.fillStyle = methodColors[data.Method[i]];
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.font = "10px Arial";
        ctx.fillText(val + "%", x + barWidth / 2, y - 5);
        ctx.fillText(data.Method[i], x + barWidth / 2, height - padding + 12);
      });
    });

    // Animation logic
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
    <div className="bg-gray-900 text-white p-6 space-y-10 min-h-screen">
      <div className="fade-in-section">
        <h1 className="text-4xl font-bold text-center text-blue-400">
          Performance Analysis Across All Feature Selection Methods
        </h1>
      </div>

      <div className="fade-in-section">
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          This section compares performance metrics of various feature selection methods (No FS, PSO, Filter, GOA, GA) across all datasets.
        </p>
      </div>

      <div className="fade-in-section flex justify-center flex-wrap gap-4 mb-4">
        {Object.entries(methodColors).map(([method, color]) => (
          <div key={method} className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: color }}></div>
            <span className="text-sm text-gray-300">{method}</span>
          </div>
        ))}
      </div>

      <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(datasetResults).map(([dataset]) => (
          <div
            key={dataset}
            className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700"
          >
            <h2 className="text-xl font-bold text-blue-300 mb-2">{dataset} Dataset</h2>
            <canvas
              id={`chart-${dataset}`}
              width="300"
              height="250"
              className="mx-auto"
            ></canvas>
          </div>
        ))}
      </div>

      <div className="fade-in-section w-full mt-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">
            Performace Evaulation of Accuracy Measure for Various Feature Selection Methods
          </h2>
          <img
            src="/images/acc_chart.png"
            alt="Accuracy Chart"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="fade-in-section overflow-auto mt-10">
        <h2 className="text-2xl font-semibold text-center text-blue-300 mb-4">
          Detailed Performance Evaluation of Various Feature Selection Methods Across Datasets
        </h2>
        {/* Table remains unchanged here for brevity */}
        {/* You can leave it as is or wrap the actual <table> in a nested fade-in-section if desired */}
        <table className="min-w-full text-sm text-center border border-gray-600 text-white">
    <thead className="bg-gray-800">
      <tr>
        <th className="border border-gray-600 px-2 py-1">Dataset</th>
        <th className="border border-gray-600 px-2 py-1">Method</th>
        <th className="border border-gray-600 px-2 py-1">No. of Features</th>
        <th className="border border-gray-600 px-2 py-1">Accuracy</th>
        <th className="border border-gray-600 px-2 py-1">Precision</th>
        <th className="border border-gray-600 px-2 py-1">Recall</th>
        <th className="border border-gray-600 px-2 py-1">F1-Score</th>
      </tr>
    </thead>
    <tbody className="bg-gray-700">
      {[
        ["SRBCT", [
          ["No FS", 2308, 89.62, 89.83, 89.58, 89.63],
          ["Filter FS", 962, 89.52, 89.04, 88.72, 89.26],
          ["GOA FS", 29, 56.02, 78.57, 79.24, 78.82],
          ["GA FS", 19, 80.14, 69.02, 69.02, 69.04],
          ["PSO FS", 6, 90.54, 90.66, 90.62, 90.55],
        ]],
        ["Lymphoma", [
          ["No FS", 4026, 91.18, 91.47, 91.18, 91.21],
          ["Filter FS", 1668, 90.91, 91.09, 88.72, 88.87],
          ["GOA FS", 32, 90.02, 89.56, 90.24, 89.82],
          ["GA FS", 27, 84.12, 83.64, 83.68, 84.04],
          ["PSO FS", 13, 97.78, 97.62, 97.62, 97.62],
        ]],
        ["Leukemia", [
          ["No FS", 7129, 86.99, 85.02, 87.13, 86.09],
          ["Filter FS", 2621, 89.43, 90.29, 90.21, 90.35],
          ["GOA FS", 59, 79.06, 78.54, 79.24, 78.82],
          ["GA FS", 40, 69.05, 69.03, 69.01, 69.04],
          ["PSO FS", 24, 95.45, 96.32, 96.81, 91.67],
        ]],
        ["MLL", [
          ["No FS", 12582, 89.59, 89.86, 89.51, 89.60],
          ["Filter FS", 5339, 89.43, 90.29, 90.21, 90.35],
          ["GOA FS", 111, 79.02, 78.53, 79.24, 78.82],
          ["GA FS", 38, 69.05, 69.01, 69.02, 69.03],
          ["PSO FS", 30, 90.91, 91.95, 92.69, 91.60],
        ]],
        ["Lung", [
          ["No FS", 12600, 86.99, 85.02, 87.04, 86.07],
          ["Filter FS", 5967, 91.82, 92.49, 91.82, 91.71],
          ["GOA FS", 112, 72.18, 74.51, 72.13, 72.06],
          ["GA FS", 53, 75.01, 74.52, 74.15, 75.01],
          ["PSO FS", 41, 98.14, 99.53, 99.52, 99.51],
        ]],
        ["Ovarian", [
          ["No FS", 15154, 91.45, 92.22, 90.51, 91.05],
          ["Filter FS", 5663, 97.37, 97.37, 97.37, 97.34],
          ["GOA FS", 127, 86.91, 86.10, 86.07, 86.08],
          ["GA FS", 70, 80.25, 79.84, 80.62, 80.27],
          ["PSO FS", 33, 97.57, 98.04, 96.30, 97.08],
        ]],
      ].map(([dataset, rows], dIndex) =>
        rows.map(([method, features, acc, prec, rec, f1], idx) => {
          const isPSO = method === "PSO FS";
          return (
            <tr
              key={`${dataset}-${idx}`}
              className={`${isPSO ? "bg-blue-800 text-white font-semibold" : ""} ${
                idx === rows.length - 1 ? "border-b-4 border-gray-500" : ""
              }`}
            >
              {idx === 0 && (
                <td
                  rowSpan={rows.length}
                  className="border border-gray-600 font-bold px-2 py-1 bg-gray-800"
                >
                  {dataset}
                </td>
              )}
              <td className="border border-gray-600 px-2 py-1">{method}</td>
              <td className="border border-gray-600 px-2 py-1">{features}</td>
              <td className="border border-gray-600 px-2 py-1">{acc}</td>
              <td className="border border-gray-600 px-2 py-1">{prec}</td>
              <td className="border border-gray-600 px-2 py-1">{rec}</td>
              <td className="border border-gray-600 px-2 py-1">{f1}</td>
            </tr>
          );
        })
      )}
    </tbody>
  </table>
      </div>
    </div>
  );
};

export default PerformanceAnalysis;
