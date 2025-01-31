import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';

function CustomerImpact() {
  const sections = [
    {
      icon: Clock,
      title: 'Backlog Case Resolution & Faster Turnaround',
      content: [
        'Resolved long-standing backlog cases for major accounts:',
        '- Nvidia: Reduced from 7-8 cases to 4 (all in engineering)',
        '- Softek and Fortive: Reduced to just 1-2 cases',
        'Significantly improved customer experience through faster resolution',
        'Positively impacted customer sentiment through backlog reduction'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Proactive Customer Communication & Case Handling',
      content: [
        'Enhanced follow-up process with structured, timely responses',
        'Provided proactive education on Admin Console changes',
        'Conducted guidance sessions with key customers:',
        '- Ericsson',
        '- John Deere',
        '- Aerospace Admins',
        'Enabled customer self-service through education'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700 mb-6">
        Direct impact on customer satisfaction and success through improved support and communication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <section.icon className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
            </div>
            
            <div className="space-y-3">
              {section.content.map((item, i) => (
                <p key={i} className={`text-gray-700 ${item.startsWith('-') ? 'ml-4' : ''}`}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-indigo-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-4">Key Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">4.37</div>
            <div className="text-sm text-gray-600">Average CSAT Score</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">1-4</div>
            <div className="text-sm text-gray-600">Days Resolution Time</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-indigo-600">3+</div>
            <div className="text-sm text-gray-600">Major Accounts Improved</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerImpact;