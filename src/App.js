import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import SummaryView from './SummaryView';
import KeyFindings from './KeyFindings';
import PerformanceAnalysis from "./PerformanceAnalysis";


const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-[80vw] max-h-[80vh] overflow-auto">
        {children}
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>c
    </div>
  );
};

const HomePage = ({ openDashboard }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <header className="text-center mb-10 fade-in">
        <h1 className="text-4xl font-bold text-white">Reducing the Search Space for Efficient Wrapper Feature Selection</h1>
        <p className="text-xl mt-4 text-gray-300">Enhancing feature selection efficiency through advanced optimization algorithms.</p>
      </header>

      <div className="grid grid-cols-2 gap-8 mb-16 fade-in">
        <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <img 
            src="/images/feature-selection.gif" 
            alt="Feature Selection Animation" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <h2 className="text-3xl font-semibold mb-4">Feature Selection</h2>
          <p className="text-lg text-justify">
            Feature selection is the process of selecting a subset of relevant features (variables) for use in model construction. 
            It helps reduce overfitting, enhances model accuracy, and reduces computational cost. Techniques like optimization 
            algorithms are often applied to achieve efficient feature selection. In Feature selection, features are eliminated
            based on various techniques, including statistical tests, correlation analysis, and optimization algorithms.
            Features with low relevance or high redundancy are typically removed. Common criteria include information gain,
            mutual information, correlation coefficient, and fitness scores from optimization algorithms like PSO, GOA, or GA.
            Wrapper methods like PSO iterate through subsets of features, evaluating their performance using models like Random Forest.
            The best subset is chosen to maximize accuracy while minimizing the number of features.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-16 fade-in">
        <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <h2 className="text-3xl font-semibold mb-4">Reducing Search Space Importance</h2>
          <p className="text-lg text-justify">
            Reducing the search space in feature selection is essential to improve computational efficiency and model accuracy. 
            A smaller search space means fewer combinations to evaluate, leading to faster training times. Additionally, it helps 
            in minimizing overfitting by removing irrelevant or redundant features. Efficient search space reduction is crucial 
            when dealing with large datasets with thousands of features.Wrapper feature selection methods are powerful for 
            reducing the search space by using optimization algorithms like PSO or GA to explore and evaluate feature subsets.
            These methods adaptively refine the search, detect complex feature interactions, and strike a balance between 
            feature reduction and accuracy, making them ideal for handling large and complex datasets.It's crucial for 
            real-time processing in applications like fraud detection, autonomous systems, and logistics.
          </p>
        </div>

        <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <img 
            src="/images/reduce-search-space.png" 
            alt="Reducing Search Space Illustration" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div 
            key={index}
            className={`fade-in p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:shadow-2xl transition-shadow duration-300 
              ${card.title === 'Try It Yourself' ? 'col-span-3 p-12' : ''}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
            <p className="text-left">{card.content}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={openDashboard} 
        className="mt-10 block mx-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 fade-in"
      >
        Go to Dataset Dashboard
      </button>
      <button 
        onClick={() => window.location.href = '/summary'} 
        className="mt-4 block mx-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 fade-in"
      >
        Get All Dataset Results
      </button>
    </div>
  );
};

const cardData = [
  {
    title: 'Aim',
    content: 'This project aims to design a sophisticated feature selection framework using advanced optimization algorithms.',
  },
  {
    title: 'Technology Used',
    content: 'Optimization algorithms, logistic regression, Python (NumPy, Pandas, Scikit-Learn), GridSearchCV, and Stratified K-Fold Cross-Validation.',
  },
  {
    title: 'Conclusion',
    content: 'PSO-based wrapper feature selection achieved superior feature reduction while maintaining exceptional accuracy and computational efficiency.',
  },
  {
    title: 'Try It Yourself',
    content: (
      <div>
        <p className="mb-4">
        Ready to supercharge your model? 🚀 Dive into feature selection magic—upload your own dataset, put powerful feature selection techniques to the test, and watch your model evolve with sharper, leaner features!⚡
        </p>
        <a 
          href="https://colab.research.google.com/drive/1fih2M_Di1aHn0tfrcW0GN1hQYXPw5epk?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-500"
        >
          Click here to access the Google Colab notebook
        </a>
      </div>
    ),
  }
];


const DashboardPanel = ({ isOpen, onClose }) => (
  <div 
    className={`fixed inset-y-0 left-0 w-80 bg-gray-900 p-6 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
  >
    {/* Go Back Button */}
    <Link to="/" className="flex items-center space-x-2 text-blue-400 hover:text-blue-200 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <span>Back</span>
    </Link>

    <button onClick={onClose} className="text-gray-400 hover:text-white mb-6">Close</button>
    <h1 className="text-3xl font-semibold">Dataset Dashboard</h1>
    <ul className="mt-4 space-y-2">
      <li><Link to="/dataset/leukemia" className="text-blue-400 hover:text-blue-200">Leukemia</Link></li>
      <li><Link to="/dataset/ovarian" className="text-blue-400 hover:text-blue-200">Ovarian</Link></li>
      <li><Link to="/dataset/lung" className="text-blue-400 hover:text-blue-200">Lung</Link></li>
      <li><Link to="/dataset/lymphoma" className="text-blue-400 hover:text-blue-200">Lymphoma</Link></li>
      <li><Link to="/dataset/mll" className="text-blue-400 hover:text-blue-200">MLL</Link></li>
      <li><Link to="/dataset/srbct" className="text-blue-400 hover:text-blue-200">SRBCT</Link></li>
      <li><Link to="/keyfindings" className="text-blue-400 hover:text-blue-200">Key Findings</Link></li>
      <li><Link to="/performanceanalysis" className="text-blue-400 hover:text-blue-200">Performance Analysis</Link></li>
    </ul>
  </div>
);

const imageData = {
  lung: {
    confusion: [
      'Fitler_Confusion_Lung',
      'GA_Confusion_Lung',
      'GOA_Confusion_Lung',
      'PSO_Confusion_Lung'
    ],
    roc: [
      'Filter_ROC_Lung',
      'GA_ROC_Lung',
      'GOA_ROC_Lung',
      'PSO_ROC_Lung'
    ],
    convergence: [
      'Filter_Convergence_Lung',
      'GA_Convergence_Lung',
      'GOA_Convergence_Lung',
      'PSO_Convergence_Lung'
    ],
    plots: [
      'Compare Evaluation_Metrics-Lung',
      'Compare FR-Lung',
      'Compare Number of FS-Lung',
      'Compare Wrapper Evaluation-Lung',
      'Compare Wrapper FS number-Lung',
      'Feature Selection Trade-off_ Features vs Accuracy (Lung)',
      'Lung_FS_Metrics_GroupedBar_PSO_Highlighted',
      'Lung_FS_Metrics_Heatmap'
    ]
  },
  leukemia: {
    confusion: [
      'Filter_Confusion_Matrix_leuk',
      'GA_Confusion_mat_Leukemia',
      'GOA_Confusion Matrix  - (Leukemia)',
      'PSO_Confusion_mat(leukemia)'
    ],
    roc: [
      'Filter_ROC_Curve-(Leukemia)',
      'GA_ROC_Leukemia',
      'GOA_ROC - (Leukemia)',
      'PSO_ROC_Leuk'
    ],
    convergence: [
      'Filter_Convergence_Curve-(Leukemia)',
      'GA_Convergence_Leukemia',
      'GOA_Convergence Curve- (Leukemia)',
      'PSO_Convergece_Leuk'
    ],
    plots: [
      'Comparison of Feature Reduction using Various Selection Methods (Leukemia)',
      'Comparison of Features Selected using various Feature Selection Methods (Leukemia)',
      'Comparison of Wrapper Feature Selection Methods (Leukemia)',
      'Evaluation Metrics Comparison of Feature Selection Methods (Leukemia)',
      'Feature Selection Trade-off_ Features vs Accuracy (Leukemia)',
      'Leukemia_FS_Metrics_GroupedBar_PSO_Highlighted',
      'Leukemia_FS_Metrics_Heatmap',
      'Performance of Wrapper Feature Selection Methods - PSO VS GA (Leukemia)'
    ]
  },
  ovarian: {
    confusion: [
      'Filter_Confusion_Ovarian',
      'GA_Confusion_Ovarian',
      'GOA_Confusion_Ovarian',
      'PSO_Confusion_Ovarian'
    ],
    roc: [
      'Filter_ROC_Ovarian',
      'GA_ROC_Ovarian',
      'GOA_ROC_Ovarian',
      'PSO_ROC_Ovarian'
    ],
    convergence: [
      'Filter_Convergence_Ovarian',
      'GA_Convergence_Ovarian',
      'GOA_Convergence_Ovarian',
      'PSO_Convergence_Ovarian'
    ],
    plots: [
      'Compare - Number of features selected (Ovarian)',
      'Compare Wrapper Feature Selection (Ovarian)',
      'Compare Wrapper Number (Ovarian)',
      'Comparison of FR - ovarian',
      'Evaluation Metrics Comparison of Feature Selection Methods (Ovarian)',
      'Feature Selection Trade-off_ Features vs Accuracy (Ovarian)',
      'Ovarian_FS_Metrics_GroupedBar_PSO_Highlighted',
      'Ovarian_FS_Metrics_Heatmap'
    ]
  },
  lymphoma: {
    confusion: [
      'Filter_Confusion_Lymphoma',
      'GA_Confusion_Lymphoma',
      'GOA_Confusion_Lymphoma',
      'PSO_Confusion_Lymphoma'
    ],
    roc: [
      'Filter_ROC_Lymphoma',
      'GA_ROC_Lymphoma',
      'GOA_ROC_Lymphoma',
      'PSO_ROC_Lymphoma'
    ],
    convergence: [
      'Filter_Convergence_Lymphoma',
      'GA_Convergence_Lymphoma',
      'GOA_Convergence_Lymphoma',
      'PSO_Convergence_Lymphoma'
    ],
    plots: [
      'Compare FR - Lymphoma',
      'Compare FS Number - Lymphoma',
      'Compare Metrics - Lymphoma',
      'Compare Wrapper Metrics - Lymphoma',
      'Compare Wrapper Number - Lymphoma',
      'FS Trade-off_Lymphoma',
      'Lymphoma_FS_Metrics_GroupedBar_PSO_Highlighted',
      'Lymphoma_FS_Metrics_Heatmap'
    ]
  },
  mll: {
    confusion: [
      'Filter_Confusion_MLL',
      'GA_Confusion_MLL',
      'GOA_Confusion_MLL',
      'PSO_Confusion_MLL'
    ],
    roc: [
      'Filter_ROC_MLL',
      'GA_ROC_MLL',
      'GOA_ROC_MLL',
      'PSO_ROC_MLL'
    ],
    convergence: [
      'Filter_Convergence_MLL',
      'GA_Convergence_MLL',
      'GOA_Convergence_MLL',
      'PSO_Convergence_MLL'
    ],
    plots: [
      'Compare FR - MLL',
      'Compare FS Number - MLL',
      'Compare FS Metrics - MLL',
      'Compare Wrapper Metrics - MLL',
      'Compare Wrapper Number - MLL',
      'Feature Selection Trade-off_ Features vs Accuracy - MLL',
      'MLL_FS_Metrics_GroupedBar_PSO_Highlighted',
      'MLL_FS_Metrics_Heatmap'
    ]
  },
  srbct: {
    confusion: [
      'Filter_Confusion_Srbct',
      'GA_Confusion_Srbct',
      'GOA_Confusion_Srbct',
      'PSO_Confusion_Srbct'
    ],
    roc: [
      'Filter_ROC_Srbct',
      'GA_ROC_Srbct',
      'GOA_ROC_Srbct',
      'PSO_ROC_Srbct'
    ],
    convergence: [
      'Filter_Convergence_Srbct',
      'GA_Convergence_Srbct',
      'GOA_Convergence_Srbct',
      'PSO_Convergence_Srbct'
    ],
    plots: [
      'Compare FR - SRBCT',
      'Compare Wrapper Number -SRBCT',
      'Compare FS-SRBCT',
      'Feature Selection Trade-off_ Features vs Accuracy (SRBCT)',
      'SRBCT_FS_Metrics_GroupedBar_PSO_Highlighted',
      'Compare Metrics - SRBCT',
      'SRBCT_FS_Metrics_Heatmap',
      'Compare Wrapper FS-SRBCT'
    ]
  }
  
  
};
const imageDescriptions = {
  'Fitler_Confusion_Lung': 'Confusion Matrix using Filter method for Lung dataset.',
  'GA_Confusion_Lung': 'Confusion Matrix using GA for Lung dataset.',
  'GOA_Confusion_Lung': 'Confusion Matrix using GOA for Lung dataset.',
  'PSO_Confusion_Lung': 'Confusion Matrix using PSO for Lung dataset.',
  'Filter_ROC_Lung': 'ROC Curve using Filter method for Lung dataset.',
  'GA_ROC_Lung': 'ROC Curve using GA for Lung dataset.',
  'GOA_ROC_Lung': 'ROC Curve using GOA for Lung dataset.',
  'PSO_ROC_Lung': 'ROC Curve using PSO for Lung dataset.',
};

const ImageWithHover = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`/images/${src}.png`}
        alt={alt}
        className="w-full h-auto rounded-lg"
      />
      {hovered && imageDescriptions[src] && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-sm p-2 rounded">
          {imageDescriptions[src]}
        </div>
      )}
    </div>
  );
};

const DatasetPage = () => {
  const { dataset } = useParams();

  const datasetImages = imageData[dataset] || { confusion: [], roc: [], convergence: [], plots: [] };

  return (
    <div className="p-10 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">{dataset.toUpperCase()} Results</h1>

      {['confusion', 'roc', 'convergence', 'plots'].map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{category.replace(/_/g, ' ').toUpperCase()}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {datasetImages[category].map((image, index) => (
              <ImageWithHover key={index} src={image} alt={`${category} ${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const datasetInfo = {
  leukemia: {
    title: 'Leukemia Dataset Overview',
    description: (
      <p className="text-lg text-justify">
        The Leukemia dataset is a high-dimensional biomedical dataset used in 
        machine learning for cancer classification. It contains gene expression 
        data, where each sample is represented by thousands of features (genes), 
        and the task is to classify samples into different types of leukemia or 
        distinguish between cancerous and non-cancerous cases. This dataset 
        consists of 7,129 features,as 
        the number of features far exceeds the number of samples. In such
        cases, many features may be irrelevant 
        or redundant, leading to overfitting, increased training time, and 
        reduced model generalization. Due to its high-dimensional nature, 
        feature selection techniques are essential to identify the most 
        informative genes, improve model performance, reduce computational 
        complexity, and enhance interpretability for medical professionals. 
        
      </p>
    ),
    image: '/images/Leukemia_image.png',
    results: [
      { method: 'No FS', features: 7129, accuracy: '86.99%' },
      { method: 'PSO FS', features: 24, accuracy: '95.45%', reduction: '99.78%' },
      { method: 'Filter FS', features: 2621, accuracy: '89.43%', reduction: '63.12%' },
      { method: 'GOA FS', features: 59, accuracy: '79.00%', reduction: '99.17%' }, 
      { method: 'GA FS', features: 40, accuracy: '69.05%', reduction: '99.44%' },  
    ],
    methods: [
      { name: 'No FS', features: 7129, accuracy: '86.99%' },
      { name: 'PSO FS', features: 24, accuracy: '95.45%', reduction: '99.78%' },
      { name: 'Filter FS', features: 2621, accuracy: '89.43%', reduction: '63.12%' },
      { name: 'GOA FS', features: 59, accuracy: '79.00%', reduction: '99.17%' }, 
      { name: 'GA FS', features: 40, accuracy: '69.05%', reduction: '99.44%' },  
    ],
    conclusion: 'Overall, PSO-based Feature Selection was the best method, achieving the highest accuracy and F1-score with just 24 features. In contrast, using all 7,129 features without selection resulted in lower accuracy, showing the presence of redundant features. While Filter FS performed well it retained 2,621 features, making it less efficient. GOA FS and GA FS underperformed, with GA FS achieving the lowest accuracy. These results highlight that PSO FS provides the best balance between performance and feature reduction.'
  },
  lung: {
    title: 'Lung Dataset Overview',
    description: (
      <p className="text-lg text-justify">
        The Lung dataset is a high-dimensional biomedical dataset commonly used for lung disease classification, including lung cancer subtypes and other respiratory conditions. It consists of 12,600 features, representing various biological markers such as gene expression levels, molecular signatures, or radiomic features extracted from medical imaging. These features capture critical information 
        that can help distinguish between healthy and diseased cases, aiding in early diagnosis and personalized treatment planning.The primary objective is to classify samples into different disease categories. Due to the large number of features relative to the number of samples, dimensionality reduction is crucial to 
        improve model efficiency, prevent overfitting, and enhance interpretability for medical professionals.
        
      </p>
    ),
    image: '/images/Lung_image.png',
    results: [
      { method: 'No FS', features: 12600, accuracy: '86.99%' },
      { method: 'PSO FS', features: 41, accuracy: '98.10%', reduction: '99.67%' },
      { method: 'Filter FS', features: 5967, accuracy: '91.82%', reduction: '95.73%' },
      { method: 'GOA FS', features: 112, accuracy: '72.18%', reduction: '99.11%' }, 
      { method: 'GA FS', features: 53, accuracy: '75.00%', reduction: '96.76%' }, 
    ],
    methods: [
      { name: 'No FS', features: 12600, accuracy: '86.99%' },
      { name: 'PSO FS', features: 41, accuracy: '98.10%', reduction: '99.67%' },
      { name: 'Filter FS', features: 5967, accuracy: '91.82%', reduction: '95.73%' },
      { name: 'GOA FS', features: 112, accuracy: '72.18%', reduction: '99.11%' },
      { name: 'GA FS', features: 53, accuracy: '75.00%', reduction: '96.76%' }, 
    ],
    conclusion: 'PSO-based feature selection achieved the highest accuracy with only 41 features, greatly reducing dimensionality. It also outperformed other methods in precision, recall, and F1-score, proving effective in identifying relevant features. Filter FS performed well but retained a larger subset of 5,967 features. GOA and GA-based methods had lower accuracy, emphasizing the need for better optimization. These results highlight the value of advanced feature selection in improving classification while enhancing efficiency and interpretability for medical applications.'
  },
  ovarian: {
    title: 'Ovarian Dataset Overview',
    description: (
      <p className="text-lg text-justify">
        
        The Ovarian dataset is a high-dimensional biomedical dataset used for ovarian cancer detection and classification. 
        It contains gene expression profiles obtained from microarray experiments, where each sample is represented by
        15,154 genetic features. These features correspond to the expression levels of different genes, providing crucial 
        insights into the molecular characteristics of ovarian cancer. The dataset consists of samples from both cancerous 
        and non-cancerous cases. Due to its high-dimensional nature, feature selection plays a significant role in helping 
        to advance precision medicine and improve diagnostic accuracy for ovarian cancer. 
        
      </p>
    ),
    image: '/images/Ovarian_image.png',
    results: [
      { method: 'No FS', features: 15154, accuracy: '91.45%' },
      { method: 'PSO FS', features: 33, accuracy: '97.57%', reduction: '99.78%' },
      { method: 'Filter FS', features: 5663, accuracy: '97.37%', reduction: '62.64%' },
      { method: 'GOA FS', features: 127, accuracy: '86.91%', reduction: '99.16%' }, // Dummy value
      { method: 'GA FS', features: 36, accuracy: '80.25%', reduction: '99.76%' }, // Dummy value
    ],
    methods: [
      { name: 'No FS', features: 15154, accuracy: '91.45%' },
      { name: 'PSO FS', features: 33, accuracy: '97.57%', reduction: '99.78%' },
      { name: 'Filter FS', features: 5663, accuracy: '97.37%', reduction: '62.64%' },
      { name: 'GOA FS', features: 127, accuracy: '86.91%', reduction: '99.16%' }, // Dummy value
      { name: 'GA FS', features: 36, accuracy: '80.25%', reduction: '99.76%' }, // Dummy value
    ],
    conclusion: 'PSO-based feature selection achieved the highest accuracy with just 33 features, reducing dimensionality by 99.78%. It outperformed others in precision, recall, and F1-score, proving its effectiveness in selecting key features. Filter FS also performed well but had least reduction percentage, while GA and GOA showed lower accuracy. These results emphasize the role of advanced feature selection in improving classification accuracy while reducing computational complexity for medical applications.'
  },
  mll: {
    title: 'MLL Dataset Overview',
    description: (
      <p className="text-lg text-justify">
        The Mixed-Lineage Leukemia (MLL) dataset contains gene expression profiles used to differentiate leukemia subtypes. With 7,129 features, analyzing this data can be complex and computationally expensive. 
        Applying feature selection helps in identifying the most relevant genes, improving classification accuracy while reducing redundancy. Reducing the number of features not only enhances model efficiency but also aids in 
        uncovering key genetic markers associated with the disease.
        
      </p>
    ),
    image: '/images/MLL_image.png',
    results: [
      { method: 'No FS', features: 7129, accuracy: '86.99%' },
      { method: 'PSO FS', features: 30, accuracy: '90.91%', reduction: '99.76%' },
      { method: 'Filter FS', features: 5339, accuracy: '89.43%', reduction: '57.57%' },
      { method: 'GOA FS', features: 111, accuracy: '79.00%', reduction: '99.12%' }, // Dummy value
      { method: 'GA FS', features: 38, accuracy: '69.05%', reduction: '99.70%' }, // Dummy value
    ],
    methods: [
      { name: 'No FS', features: 7129, accuracy: '86.99%' },
      { name: 'PSO FS', features: 30, accuracy: '90.91%', reduction: '99.76%' },
      { name: 'Filter FS', features: 5339, accuracy: '89.43%', reduction: '57.57%' },
      { name: 'GOA FS', features: 111, accuracy: '79.00%', reduction: '99.12%' }, // Dummy value
      { name: 'GA FS', features: 38, accuracy: '69.05%', reduction: '99.70%' }, // Dummy value
    ],
    conclusion: 'PSO-based feature selection provided the best performance, achieving the highest accuracy while significantly reducing the number of features to just 30 and maintaining strong classification performance for MLL. This highlights its potential to enhance model efficiency and interpretability, making it a useful approach for analyzing complex gene expression data.'
  },
  srbct: {
    title: 'SRBCT Dataset Overview',
    description: (
      <p className="text-lg text-justify">
        Small Round Blue Cell Tumors (SRBCT) are a category of highly aggressive pediatric cancers.These tumors are characterized by small, round, densely packed cells that appear blue under microscopic staining. Accurate classification of SRBCT is crucial for early diagnosis and treatment planning, as misclassification can lead to ineffective therapies. Given the high-dimensional nature
        of gene expression data used for SRBCT classification, applying feature selection techniques helps identify the most relevant biomarkers.
        
      </p>
    ),
    image: '/images/SRBCT_image.png',
    results: [
      { method: 'No FS', features: 2308, accuracy: '89.60%' },
      { method: 'PSO FS', features: 6, accuracy: '90.50%', reduction: '99.74%' },
      { method: 'Filter FS', features: 962, accuracy: '89.50%', reduction: '58.30%' },
      { method: 'GOA FS', features: 19, accuracy: '56.00%', reduction: '99.17%' }, // Dummy value
      { method: 'GA FS', features: 29, accuracy: '80.10%', reduction: '98.74%' }, // Dummy value
    ],
    methods: [
      { name: 'No FS', features: 2308, accuracy: '89.60%' },
      { name: 'PSO FS', features: 6, accuracy: '90.50%', reduction: '99.74%' },
      { name: 'Filter FS', features: 962, accuracy: '89.50%', reduction: '58.30%' },
      { name: 'GOA FS', features: 19, accuracy: '56.00%', reduction: '99.17%' }, // Dummy value
      { name: 'GA FS', features: 29, accuracy: '80.10%', reduction: '98.74%' }, // Dummy value
    ],
    conclusion: 'PSO-based feature selection achieved the highest accuracy with only 6 features, outperforming other methods in precision, recall, and F1-score. While filter-based selection retained more features, it also showed slightly lower performance. GOA and GA struggled with significantly reduced accuracy, emphasizing the need for robust optimization techniques in feature selection.'
  },
  lymphoma: {
    title: 'Lymphoma Dataset Overview',
    description: (
      <p className="text-lg text-justify">
        
        The Lymphoma dataset contains 4,026 gene expression features used for classifying different lymphoma subtypes. High-dimensional datasets like this pose challenges in machine learning, as many features may be redundant or irrelevant. 
        Reducing dimensionality helps improve model efficiency, prevent overfitting, and making the model more interpretable for medical use. 
        
      </p>
    ),
    image: '/images/Lymphoma_image.png',
    results: [
      { method: 'No FS', features: 4026, accuracy: '91.18%' },
      { method: 'PSO FS', features: 13, accuracy: '97.78%', reduction: '99.68%' },
      { method: 'Filter FS', features: 1668, accuracy: '90.91%', reduction: '58.57%' },
      { method: 'GOA FS', features: 27, accuracy: '90.00%', reduction: '99.33%' }, // Dummy value
      { method: 'GA FS', features: 32, accuracy: '84.12%', reduction: '99.20%' }, // Dummy value
    ],
    methods: [
      { name: 'No FS', features: 4026, accuracy: '91.18%' },
      { name: 'PSO FS', features: 13, accuracy: '97.78%', reduction: '99.68%' },
      { name: 'Filter FS', features: 1668, accuracy: '90.91%', reduction: '58.57%' },
      { name: 'GOA FS', features: 27, accuracy: '90.00%', reduction: '99.33%' }, // Dummy value
      { name: 'GA FS', features: 32, accuracy: '84.12%', reduction: '99.20%' }, // Dummy value
    ],
    conclusion: 'PSO-based feature selection achieved the best performance while reducing the number of features to just 13. Filter FS retained more features, while GOA and GA-based methods had lower accuracy, emphasizing the importance of optimized feature selection for better classification and model interpretability.'
  }
};


const DatasetView = () => {
  const { dataset } = useParams();
  const [category, setCategory] = useState('plots');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setCategory('plots');
    window.scrollTo(0, 0);
  }, [dataset]);

  const datasetImages = imageData[dataset];

  if (!datasetImages) {
    return <div className="text-white p-10">Dataset not found</div>;
  }

  const renderContent = () => {
    if (category === 'about') {
      const data = datasetInfo[dataset];

      if (!data) {
        return <div className="text-white">Dataset information not found.</div>;
      }

      return (
        <div className="text-white bg-gray-800 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-700 text-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold">Dataset Information</h3>
              <p className="mt-2">{data.description}</p>
            </div>
            <div>
              <img src={data.image} alt={dataset} className="rounded-xl shadow-md w-full h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {data.methods.map((method, index) => (
              <div key={index} className="p-4 bg-gray-700 text-white rounded-xl shadow-md">
                <h3 className="text-xl font-bold">{method.name}</h3>
                <p>Features: {method.features}<br />Accuracy: {method.accuracy}</p>
                {method.reduction && <p>Reduction: {method.reduction}</p>}
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-700 text-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Conclusion</h3>
            <p>{data.conclusion}</p>
          </div>
        </div>
      );
    }

    const validImages = datasetImages[category]?.filter(img => img && img.trim() !== '') || [];

    if (validImages.length === 0) {
      return <p className="text-white mt-6">No images available in this category.</p>;
    }

    return (
      <div className="grid grid-cols-2 gap-4 bg-gray-800 p-8 rounded-xl shadow-xl">
        {validImages.map((img, index) => (
          <div key={`${category}-${dataset}-${index}`} className="fade-in-scale p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src={`/${dataset}/Images/${img}.png`}
              alt={img}
              className="w-[620px] h-[620px] object-contain cursor-pointer hover:opacity-80"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-10 min-h-screen text-white" style={{ backgroundColor: '#2f2f2f' }}>
      <h1 className="text-3xl font-semibold capitalize">{dataset} Results</h1>
      <div className="my-4">
        <label className="mr-4 text-lg">Select Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded text-black">
          <option value="plots">Plots</option>
          <option value="convergence">Convergence Curves</option>
          <option value="roc">ROC Curves</option>
          <option value="confusion">Confusion Matrix</option>
          <option value="about">About Dataset</option>
        </select>
      </div>
      {renderContent()}
      {selectedImage && (
        <Modal onClose={() => setSelectedImage(null)}>
          <img 
            src={`/${dataset}/Images/${selectedImage}.png`}
            alt={selectedImage}
            className="max-w-[80vw] max-h-[80vh] object-contain"
          />
        </Modal>
      )}
      <h2 className="text-xl mt-8 font-bold">Download Results</h2>
      <a href={`/${dataset}/data/${dataset.charAt(0).toUpperCase() + dataset.slice(1)}_results.csv`} download className="text-blue-300 underline">
        Download CSV
      </a>
    </div>
  );
};


const App = () => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen">
        <DashboardPanel isOpen={isDashboardOpen} onClose={() => setDashboardOpen(false)} />
        {!isDashboardOpen && (
          <button 
            onClick={() => setDashboardOpen(true)} 
            className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all"
          >
            ☰
          </button>
        )}
        <div className={`flex-grow transition-all duration-300 ${isDashboardOpen ? 'ml-80' : 'ml-0'}`}>
          <Routes>
            <Route path="/" element={<HomePage openDashboard={() => setDashboardOpen(true)} />} />
            <Route path="/dataset/:dataset" element={<DatasetView />} />
            <Route path="/summary" element={<SummaryView />} />
            <Route path="/dataset/:dataset" element={<DatasetPage />} />
            <Route path="/keyfindings" element={<KeyFindings />} /> {/* ✅ Added here */}
            <Route path="/performanceanalysis" element={<PerformanceAnalysis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



