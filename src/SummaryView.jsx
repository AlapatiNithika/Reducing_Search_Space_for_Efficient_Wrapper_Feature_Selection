import React, { useState, useEffect } from 'react';

const SummaryView = () => {
  const summaryImages = [
    'SRBCT_Summary',
    'Lymphoma_Summary',
    'Leukemia_Summary',
    'MLL_Summary',
    'Lung_Summary',
    'Ovarian_Summary'
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(false); // For fade-in effect

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Delay to trigger fade-in
  }, []);

  const renderImages = () => (
    <div className={`grid grid-cols-2 gap-6 bg-gray-800 p-9 rounded-xl shadow-xl transition-opacity duration-1000 ease-in ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {summaryImages.map((img, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex justify-center items-center p-8 cursor-pointer"
          onClick={() => setSelectedImage(`/Summary/Images/${img}.png`)}
        >
          <img
            src={`/Summary/Images/${img}.png`}
            alt={img}
            className="max-w-full max-h-full object-scale-down rounded-2xl"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-12 min-h-screen text-white" style={{ backgroundColor: '#2f2f2f' }}>
      <h1 className="text-3xl font-semibold mb-6">Results</h1>
      {renderImages()}

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
            >
              ✕
            </button>

            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryView;
