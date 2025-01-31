import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CareerHub from './components/CareerHub';
import PerformanceReview from './components/PerformanceReview';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'career-hub' | 'performance-review'>('career-hub');

  return (
    <div className="min-h-screen bg-white">
      <Navbar onViewChange={setCurrentView} currentView={currentView} />
      {currentView === 'career-hub' ? <CareerHub /> : <PerformanceReview />}
    </div>
  );
};

export default App