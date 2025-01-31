import React from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';

const CareerHub: React.FC = () => {
  return (
    <div>
      {/* Header Background */}
      <div className="absolute top-16 left-0 right-0 h-64 bg-gradient-to-r from-blue-500 via-teal-400 to-green-300">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 250" preserveAspectRatio="none">
            <path
              d="M0,0 C300,50 600,100 900,50 L1200,0 L1200,250 L0,250 Z"
              fill="currentColor"
              fillOpacity="0.1"
              className="text-white"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 pt-8">
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/62153451?v=4"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Hi Arjit</h1>
            <p className="text-gray-600">Welcome to your Career Hub</p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            {/* My Tasks */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">My Tasks <span className="ml-1 text-sm text-blue-600">1</span></h2>
                <button className="text-sm text-gray-500 hover:text-gray-700">View all tasks</button>
              </div>
              <div className="space-y-3">
                <button className="w-full text-left flex items-center text-gray-700 hover:text-gray-900">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Assess core skills
                </button>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🚀</span>
                  Builds growth opportunities
                  <span className="ml-auto">10/20 skills</span>
                </div>
              </div>
            </div>

            {/* Organization */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Organization</h2>
                <button className="text-sm text-gray-500 hover:text-gray-700">View org chart</button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Manager</h3>
                  <div className="mt-2 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm">
                      LD
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Leslie Dominic Nirmal Rajendran</p>
                      <p className="text-xs text-gray-500">Senior Director, Technical Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* My Activity */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">My activity</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 hover:text-blue-800">Project Applications</span>
                  <span className="text-sm text-gray-500">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 hover:text-blue-800">Job Applications</span>
                  <span className="text-sm text-gray-500">13</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 hover:text-blue-800">Referrals</span>
                  <span className="text-sm text-gray-500">13</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9 space-y-6">
            {/* Get more from Career Hub */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Get more from Career Hub</h2>
                <button className="text-gray-400 hover:text-gray-500">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Mentors Card */}
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Mentors</h3>
                      <p className="text-sm text-gray-600">Get guidance and support</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">28</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        DJ
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Divya Joshi</p>
                        <p className="text-xs text-gray-500">Technical Support Engineer II</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      Also based in India
                      <span className="ml-2 text-blue-600">+1</span>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Explore Mentors
                  </button>
                </div>

                {/* Jobs Card */}
                <div className="bg-yellow-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Jobs</h3>
                      <p className="text-sm text-gray-600">Browse opportunities for you or friends</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">63</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900">Technical Support Engineer</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-white text-xs font-medium text-gray-600">
                        Java
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-white text-xs font-medium text-gray-600">
                        SQL
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-white text-xs font-medium text-gray-600">
                        Python
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Explore Jobs
                  </button>
                </div>

                {/* Projects Card */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Projects</h3>
                      <p className="text-sm text-gray-600">Get hands-on experience</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900">Recommended for you</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-white text-xs font-medium text-gray-600">
                        CSS
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-white text-xs font-medium text-gray-600">
                        JavaScript
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Explore Projects
                  </button>
                </div>
              </div>
            </div>

            {/* Company Updates Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Updates & Latest News</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" alt="OKR" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">FY25 OKRs + Employee Resources</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" alt="Promotions" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">FY25 Annual Promotions!</h3>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" alt="Kick Off" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">FY25 Kick Off Recordings Days 1-3</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHub;