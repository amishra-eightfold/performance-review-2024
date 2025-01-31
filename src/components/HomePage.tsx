import React from 'react';
import { Award, Users, Building2, Users2, ChevronRight, BarChart } from 'lucide-react';

function HomePage() {
  const metrics = [
    { label: 'Cases Resolved', value: '966', change: '+12%' },
    { label: 'CSAT Score', value: '4.37', change: '+0.2' },
    { label: 'KB Articles', value: '35', change: '+15' },
    { label: 'Team Members Mentored', value: '3', change: 'New' },
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Personal Achievement',
      description: 'Maintained 4.37 CSAT while handling complex cases',
    },
    {
      icon: Users,
      title: 'Team Impact',
      description: '32% reduction in spam cases through analysis',
    },
    {
      icon: Building2,
      title: 'Organizational Growth',
      description: 'Developed AI-powered Follow-Up Tool',
    },
    {
      icon: Users2,
      title: 'Customer Success',
      description: 'Resolved major account backlogs',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4 animate-fade-in">
        <div className="relative inline-block">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Hi Arjit, welcome to your Performance Review Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Here's an overview of your achievements and contributions
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-delay-1">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 card-hover">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-delay-2">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all card-hover"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <highlight.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="mt-1 text-gray-600">{highlight.description}</p>
              </div>
              <div className="flex-shrink-0">
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Trends */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white animate-fade-in-delay-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Performance Trends</h2>
            <p className="text-indigo-100">Consistently exceeding expectations</p>
          </div>
          <BarChart className="h-8 w-8 text-indigo-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm text-indigo-100">Case Resolution Time</p>
            <p className="text-2xl font-bold">1-4 days</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm text-indigo-100">Customer Satisfaction</p>
            <p className="text-2xl font-bold">4.37/5</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <p className="text-sm text-indigo-100">Process Improvement</p>
            <p className="text-2xl font-bold">32%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;