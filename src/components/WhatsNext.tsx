import React from 'react';
import { Code, Brain, Target, Rocket } from 'lucide-react';

function WhatsNext() {
  const currentProjects = [
    'Automated final case summaries upon closure',
    'Auto-generated RCA documentation in tickets',
    'KB article generation based on resolved cases',
    'Categorization of cases based on AI analysis'
  ];

  const visionPoints = [
    'Transform support from "message passing" to highly technical function',
    'Leverage comprehensive product knowledge',
    'Eliminate repetitive manual tasks',
    'Transition team to AI response reviewers',
    'Move towards engineering role focused on automation'
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-2xl font-bold mb-4">Vision for the Future</h3>
        <p className="text-lg opacity-90">
          Transforming support through automation and AI integration while pursuing growth in engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Code className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Current Projects</h3>
          </div>
          <ul className="space-y-3">
            {currentProjects.map((project, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700">{project}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Target className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Long-Term Vision</h3>
          </div>
          <ul className="space-y-3">
            {visionPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Brain className="h-8 w-8 text-indigo-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">Areas to Eliminate Manual Work</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Email Writing</h4>
            <p className="text-gray-700">Automate response generation and formatting</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">JIRA Management</h4>
            <p className="text-gray-700">Automated creation and follow-ups</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Slack Communication</h4>
            <p className="text-gray-700">Reduce unnecessary thread creation</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 bg-indigo-50 rounded-lg">
        <Rocket className="h-12 w-12 text-indigo-600 mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Career Trajectory</h3>
          <p className="text-gray-700">
            Transitioning towards an engineering role focused on automation and feature implementation at Eightfold
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatsNext;