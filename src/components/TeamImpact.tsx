import React from 'react';
import { Users, Shield, Clock, BookOpen } from 'lucide-react';

function TeamImpact() {
  const initiatives = [
    {
      icon: Shield,
      title: 'Spam Case Reduction Initiative',
      description: 'Analyzed trends leading to 32% reduction in unnecessary cases, improving team productivity.',
      metrics: ['32% reduction in spam cases', 'Improved team productivity']
    },
    {
      icon: Users,
      title: 'Automation and Script Development',
      description: 'Created multiple automation scripts for repetitive tasks:',
      list: [
        'Batch creation/deletion of profiles, positions, and applications',
        'Tag addition to profiles',
        'Automated XML file generation for file ingestion',
        'Time-saving tools for high-volume accounts (Siemens & EY)'
      ]
    },
    {
      icon: Clock,
      title: 'Backlog Reduction Initiative',
      description: 'Led successful backlog reduction effort:',
      list: [
        'Resolved most cases within 1-4 days',
        'Contributed to all-time low backlog levels',
        'Maintained 4 CSAT score on older cases'
      ]
    },
    {
      icon: BookOpen,
      title: 'Team Mentorship & Knowledge Sharing',
      description: 'Contributed to team growth through:',
      list: [
        'Mentored Srishti during PST shifts',
        'Guided Satyam and Shweta for Eightfold cases',
        'Regular 1-1 sessions with team members',
        'Facilitated PST Office Hours',
        'Authored 30-35 KB articles'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700 mb-6">
        My contributions to team success through various initiatives and mentorship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <initiative.icon className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{initiative.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{initiative.description}</p>
            {initiative.metrics && (
              <div className="flex flex-wrap gap-2 mb-4">
                {initiative.metrics.map((metric, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                    {metric}
                  </span>
                ))}
              </div>
            )}
            {initiative.list && (
              <ul className="space-y-2">
                {initiative.list.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-5 w-5 flex-shrink-0 text-indigo-600">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamImpact;