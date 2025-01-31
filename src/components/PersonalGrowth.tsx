import React from 'react';

function PersonalGrowth() {
  const sections = [
    {
      title: 'Enhanced Technical Skills',
      items: [
        'Resolved 966 cases in 2024, maintaining an average CSAT of 4.37 (Jan–Nov)',
        'Learned Pandas to optimize data handling and analysis, making scripts more efficient',
        'Deepened familiarity with the codebase while developing automation tools',
        'Using Cursor to check codebase daily for older ticket resolution'
      ]
    },
    {
      title: 'Improved Presentation & Communication Skills',
      items: [
        'Completed a presentation skills course',
        'Practiced regularly in Show and Tell sessions and team meetings',
        'Refined delivery and increased confidence in public speaking'
      ]
    },
    {
      title: 'Focused Learning & Development Plans',
      items: [
        'Structured learning around Python, data analysis, and automation tools',
        'Gained hands-on experience in automation with AI-driven case-handling tools',
        'Becoming proficient in debugging configurations and code'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700 mb-6">
        This section highlights my personal growth and skill development throughout the year.
      </p>
      
      {sections.map((section, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  {itemIndex + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PersonalGrowth;