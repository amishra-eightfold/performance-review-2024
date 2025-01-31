import React from 'react';
import { Settings, Brain, Target } from 'lucide-react';

function OrganizationalImpact() {
  const initiatives = [
    {
      icon: Settings,
      title: 'Support Config Analysis',
      description: 'Collaborated with Shashank and Prabhneet on "Get Help" configurations:',
      achievements: [
        'Developed Python scripts for automatic configuration categorization',
        'Streamlined manual review process',
        'Provided data-driven configuration suggestions to customers'
      ]
    },
    {
      icon: Brain,
      title: 'AI-Driven Workflow Optimization',
      description: 'Developed the Follow-Up Tool using OpenAI:',
      achievements: [
        'Automated case response generation',
        'Reduced manual effort while improving response quality',
        'Fine-tuned prompt engineering for accuracy',
        'Leveraged existing codebase methods effectively'
      ]
    },
    {
      icon: Target,
      title: 'Path to Closure & Customer Requirement Project',
      description: 'Led initiatives for better case handling:',
      achievements: [
        'Identified trends in case-handling approaches',
        'Implemented well-defined customer request process',
        'Achieved 35-40% adoption rate',
        'Reduced unnecessary delays and scope creep'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700 mb-6">
        Strategic initiatives and improvements that enhanced organizational efficiency.
      </p>

      {initiatives.map((initiative, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <initiative.icon className="h-8 w-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">{initiative.title}</h3>
          </div>
          
          <p className="text-gray-700 mb-4">{initiative.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initiative.achievements.map((achievement, i) => (
              <div key={i} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  {i + 1}
                </span>
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrganizationalImpact;