
# Reducing the Search Space for Efficient Wrapper Feature Selection

## Overview

This project introduces a hybrid feature selection framework using **Particle Swarm Optimization (PSO)** integrated with wrapper-based evaluation to address the challenges of high-dimensional biomedical data. The goal is to reduce redundant features while maintaining or improving classification accuracy across various real-world datasets such as Lymphoma, Leukemia, MLL, Lung, SRBCT, and Ovarian.

## Key Contributions

- Achieved **over 99% feature reduction** while preserving high classification accuracy.
- Designed a **multi-objective PSO-based wrapper method** balancing accuracy and feature compactness.
- Developed an **interactive ReactJS dashboard** to visualize performance metrics, ROC curves, confusion matrices, and feature reduction.
- Evaluated the model on **six benchmark datasets**, achieving top accuracies:
  - Lung: 98.14%
  - Lymphoma: 97.78%
  - Ovarian: 97.50%
  - Leukemia: 95.45%
  - SRBCT: 90.54%
  - MLL: 90.91%

## Datasets

All datasets are high-dimensional gene/protein expression data:
- **Lymphoma:** 4,027 features, 66 samples
- **Leukemia:** 7,129 features, 72 samples
- **MLL:** 12,582 features, 72 samples
- **Lung:** 12,600 features, 203 samples
- **SRBCT:** 2,308 features, 83 samples
- **Ovarian:** 15,154 features, 253 samples

## Methodology

- **Optimization:** Binary PSO algorithm with adaptive parameter tuning for efficient subset search.
- **Classifier:** Random Forest (100 estimators) with 5-fold cross-validation.
- **Fitness Function:** Balances classification accuracy and number of selected features.
- **Evaluation Metrics:** Accuracy, Precision, Recall, F1-score, Feature Reduction Rate.

## Technology Stack

- **Backend:** Python 3.10, using `scikit-learn`, `numpy`, `pandas`, `matplotlib`, and custom implementations of PSO, GA, GOA.
- **Frontend:** ReactJS dashboard for interactive exploration of results.
- **Development Tools:** Google Colab, Visual Studio Code

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/AlapatiNithika/Reducing_Search_Space_for_Efficient_Wrapper_Feature_Selection.git
   cd search-space-dashboard
   ```


2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` to view the dashboard.

## Usage

* Select datasets from the sidebar to explore feature selection performance.
* Visualize metrics such as confusion matrices, convergence curves, and feature reduction plots.
* Compare different methods (PSO, GA, GOA, Filter) across datasets.


## License

This project is intended for academic and research use. Please cite appropriately if you build upon this work.

---

*Developed by A.Nithika, V. Sreenithya, M.Kumudvini, B.Shriya under the guidance of Dr. Venkatesh B*

```


```
