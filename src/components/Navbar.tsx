import React from 'react';
import { Search, Grid } from 'lucide-react';

interface NavbarProps {
  onViewChange: (view: 'career-hub' | 'performance-review') => void;
  currentView: 'career-hub' | 'performance-review';
}

const Navbar: React.FC<NavbarProps> = ({ onViewChange, currentView }) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <img
              src="https://eightfold.ai/wp-content/uploads/Eightfold_ai_Logo-scaled.jpg"
              alt="Eightfold.ai"
              className="h-8 w-auto"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => onViewChange('career-hub')}
                className={`nav-link ${
                  currentView === 'career-hub' ? 'nav-link-active' : 'nav-link-inactive'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onViewChange('performance-review')}
                className={`nav-link ${
                  currentView === 'performance-review' ? 'nav-link-active' : 'nav-link-inactive'
                }`}
              >
                Performance Review
              </button>
              <a href="#" className="nav-link nav-link-inactive">Marketplace</a>
              <a href="#" className="nav-link nav-link-inactive">My Activity</a>
              <a href="#" className="nav-link nav-link-inactive">People</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search people, jobs or projects"
                className="w-72 pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Grid className="h-5 w-5" />
            </button>
            <button className="flex items-center">
              <img
                src="https://avatars.githubusercontent.com/u/62153451?v=4"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;