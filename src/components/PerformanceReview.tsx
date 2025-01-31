import React, { useState } from 'react';
import { Award, Users, Building2, Users2, Heart, Rocket, ChevronDown, X } from 'lucide-react';

interface Section {
  title: string;
  shortContent: string[];
  longContent: string[];
}

interface TabContentProps {
  isVisible: boolean;
  sections: Section[];
}

const TabContent: React.FC<TabContentProps> = ({ isVisible, sections }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [revealedSections, setRevealedSections] = useState<number[]>([]);
  const [showGallery, setShowGallery] = useState(false);

  const handleCardClick = (index: number) => {
    const section = sections[index];
    if (section.title === 'Recognition') {
      setShowGallery(true);
      return;
    }
    
    if (!revealedSections.includes(index)) {
      setRevealedSections([...revealedSections, index]);
    }
    setExpandedIndex(index);
  };

  const handleCollapse = () => {
    setExpandedIndex(null);
  };

  return (
    <div className={`space-y-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => {
          const isExpanded = expandedIndex === index;
          const isRevealed = revealedSections.includes(index);
          const isRecognition = section.title === 'Recognition';

          return (
            <div
              key={index}
              className={`
                transition-all duration-500 ease-in-out cursor-pointer
                ${isExpanded && !isRecognition
                  ? 'absolute left-0 right-0 z-50' 
                  : 'relative'
                }
                ${isRevealed 
                  ? index === 0 
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100/80'
                    : index === 1
                    ? 'bg-gradient-to-br from-teal-50 to-teal-100/80'
                    : 'bg-gradient-to-br from-green-50 to-green-100/80'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100/80'
                }
                ${isRecognition 
                  ? 'md:col-span-3 min-h-[200px] bg-gradient-to-r from-blue-500 to-teal-400 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300' 
                  : 'rounded-xl p-6 shadow-sm hover:shadow-md'
                }
              `}
              style={isExpanded && !isRecognition ? {
                height: 'auto',
                minHeight: '300px',
                maxHeight: '500px',
                transform: 'scale(1.02)',
                transformOrigin: index === 0 ? 'top left' : index === 1 ? 'top center' : 'top right',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              } : undefined}
              onClick={() => handleCardClick(index)}
            >
              {isRecognition ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-white">
                  <Heart className="h-12 w-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Recognition & Shoutouts</h3>
                  <p className="text-lg text-white/90 mb-6">View the amazing feedback and recognition received throughout the year</p>
                  <div className="inline-flex items-center space-x-2 text-lg">
                    <span>Click to view all</span>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </div>
              ) : (
                <div className={`h-full`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    {!isRevealed && <ChevronDown className="h-5 w-5 text-gray-400" />}
                  </div>

                  {isExpanded ? (
                    <div className="space-y-4 overflow-auto max-h-[400px] pr-2">
                      {section.longContent.map((content, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                          {content}
                        </p>
                      ))}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCollapse();
                        }}
                        className="absolute bottom-6 right-6 p-2 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    isRevealed && (
                      <div className="space-y-2">
                        {section.shortContent.map((content, i) => (
                          <div key={i} className="text-gray-600 text-sm">
                            • {content}
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {!isRevealed && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-gray-100/90 rounded-xl flex items-center justify-center">
                      <div className="text-gray-500 font-medium">Click to reveal</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {expandedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/10 z-40"
          onClick={handleCollapse}
        />
      )}
      {showGallery && (
        <div className="fixed inset-0 z-[50]">
          <ImageGallery images={shoutoutImages} onClose={() => setShowGallery(false)} />
        </div>
      )}
    </div>
  );
};

// Update image paths to be relative
const shoutoutImages = [
  'https://drive.google.com/file/d/146t_1kwu3-zE2akTJIuzh9dgzXEUrpmu/preview',
  'https://drive.google.com/file/d/1lgVwYHRWxzJg7T_LBSESQcgBaynCWK3y/preview',
  'https://drive.google.com/file/d/1wfDHQRyjKzCHyBdSAAALn0JDUojnvG9D/preview',
  'https://drive.google.com/file/d/16U7SWadbY9ftgR0CosLhPZY_EbWnYtMY/preview',
  'https://drive.google.com/file/d/1DyziAYE8nTFY-l0mp02bEEXZAWGot8j1/preview',
  'https://drive.google.com/file/d/1TJilUI7ApifWL581dQiJJa2kJ-hQ2Qgf/preview',
  'https://drive.google.com/file/d/1Vc8APakBXt_3VB_dcGyRKINuza34Bb4z/preview',
  'https://drive.google.com/file/d/1Xmt_mJs0fGKhi32SaX3_ulJnI-Wep29L/preview',
  'https://drive.google.com/file/d/1XpTJaOo5F5Ar1YWacZtpa6uBgEGRHTvL/preview',
  'https://drive.google.com/file/d/1ZJFVQclKz7B57J8tYF_BYjl1cpMMW70H/preview',
  'https://drive.google.com/file/d/1oyoYzXO0v9XPYAcfJuRL0qQIEeTLHlJE/preview'
];

// Update ImageGallery to accept onClose prop
interface ImageGalleryProps {
  images: string[];
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 bg-white z-[60] overflow-auto">
      <div className="sticky top-0 z-[70] bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Recognition & Shoutouts</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      <div className="max-w-[90%] mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <iframe
                src={image}
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[98vw] h-[98vh] flex items-center justify-center">
            <iframe
              src={selectedImage}
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PerformanceReview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Growth', icon: Award },
    { id: 'team', label: 'Team Impact', icon: Users },
    { id: 'org', label: 'Organizational Impact', icon: Building2 },
    { id: 'customer', label: 'Customer Success', icon: Users2 },
    { id: 'future', label: "What's Next", icon: Rocket },
    { id: 'shoutouts', label: 'Shoutouts', icon: Heart },
  ];

  const tabContent = {
    personal: [
      {
        title: 'Technical Excellence',
        shortContent: [
          'Resolved 966 cases with 4.37 CSAT',
          'Mastered data analysis tools',
          'Developed AI solutions'
        ],
        longContent: [
          'Resolved 966 cases in 2024, maintaining an average CSAT of 4.37 (Jan–Nov).',
          'Learned Pandas to optimize data handling and analysis, making scripts more efficient and reducing manual effort.',
          'Deepened my familiarity with the codebase while developing automation tools, especially the AI-driven Follow-Up Tool.',
          'With the use of Cursor, I now check the codebase daily to resolve older tickets requiring code fixes.'
        ]
      },
      {
        title: 'Communication Growth',
        shortContent: [
          'Presentation skills mastery',
          'Regular Show & Tell sessions',
          'Public speaking confidence'
        ],
        longContent: [
          'Completed a presentation skills course, improving my ability to communicate ideas effectively.',
          'Practiced regularly in Show and Tell sessions and team meetings, refining my delivery.',
          'Focused on structured communication to improve clarity and impact of technical discussions.'
        ]
      },
      {
        title: 'Learning Journey',
        shortContent: [
          'Python & data analysis',
          'Automation expertise',
          'Advanced debugging skills'
        ],
        longContent: [
          'Structured learning around Python, data analysis, and automation tools to improve problem-solving.',
          'Gained hands-on experience in automation by implementing AI-driven case-handling tools.',
          'Becoming proficient in debugging configurations and code, leveraging broader exposure due to handling all sorts of different cases.'
        ]
      }
    ],
    team: [
      {
        title: 'Spam Reduction',
        shortContent: [
          '32% reduction in spam cases',
          'Improved team productivity',
          'Data-driven analysis'
        ],
        longContent: [
          'Analyzed past support cases to identify trends and spam categories, leading to a 32% reduction in unnecessary cases.',
          'This initiative decreased the support team\'s overall case volume, improving team productivity.'
        ]
      },
      {
        title: 'Automation Tools',
        shortContent: [
          'Batch profile management',
          'Automated tag operations',
          'XML file generation',
          'High-volume solutions',
          'Time-saving scripts'
        ],
        longContent: [
          'Created multiple automation scripts to assist with repetitive tasks, such as:',
          'Batch creation and deletion of profiles, positions, and applications.',
          'Tag addition to profiles.',
          'Automated XML file generation for file ingestion.',
          'These tools saved significant time and effort, especially for high-volume accounts with file-ingestion-specific issues like Siemens & EY.'
        ]
      },
      {
        title: 'Backlog Initiative',
        shortContent: [
          'Rapid case resolution',
          '1-4 day turnaround',
          'High CSAT maintained'
        ],
        longContent: [
          'In November, I pitched the idea of focusing on backlog resolution to Dominic.',
          'While I initially solved some older cases that week, from December onwards, it became a full-fledged effort.',
          'Key Achievements:',
          'Actively worked on backlog cases, resolving most cases within 1-4 days, despite them being open for months.',
          'Contributed to bringing backlog levels to an all-time low.',
          'Maintained a 4 CSAT score, despite working on cases open for months, preventing prolonged customer frustration.'
        ]
      },
      {
        title: 'Team Leadership',
        shortContent: [
          'Mentored new members',
          'Led PST Office Hours',
          'Created KB articles'
        ],
        longContent: [
          'Worked closely with Srishti as her buddy to help clear her backlog during our PST shifts, improving her efficiency.',
          'Guided and worked with Satyam and Shweta to help with their cases and level them for Eightfold.'
        ]
      },
      {
        title: 'Knowledge Sharing',
        shortContent: [
          'Regular 1:1 guidance',
          'Documentation focus',
          'Best practices sharing'
        ],
        longContent: [
          'Regularly held 1-1 sessions with PST team members to provide guidance and case direction.',
          'Helped facilitate PST Office Hours, assisting team members in resolving cases more efficiently.',
          'Authored 30-35 KB articles, ensuring that recurring issues are well-documented for faster resolution in the future.'
        ]
      }
    ],
    org: [
      {
        title: 'Config Analysis',
        shortContent: [
          'Get Help optimization',
          'Automated categorization',
          'Customer suggestions'
        ],
        longContent: [
          'Collaborated with Shashank and Prabhneet to analyze "Get Help" configurations.',
          'Initially started as a manual review, but I developed Python scripts to categorize and automatically bucket configurations, streamlining the process.',
          'This categorization was then useful for suggesting better "Get Help" configurations to customers who weren\'t utilizing its full potential.'
        ]
      },
      {
        title: 'AI Innovation',
        shortContent: [
          'OpenAI integration',
          'Automated responses',
          'Enhanced efficiency'
        ],
        longContent: [
          'Developed the Follow-Up Tool using OpenAI, automating case response generation based on email and comment analysis.',
          'This tool significantly reduces manual effort while improving response quality.',
          'Repeatedly fine-tuned the tool\'s prompt engineering to prevent errors, ensuring clear and accurate responses.',
          'Through this project, I have become adept at utilizing existing codebase methods to enhance support team efficiency.'
        ]
      },
      {
        title: 'Process Improvement',
        shortContent: [
          'Path to Closure',
          '35-40% adoption',
          'Reduced scope creep'
        ],
        longContent: [
          'While working on backlog cases, I identified trends in case-handling approaches that led to the "Path to Closure" and "Customer Requirement" initiatives.',
          'These projects ensure well-defined customer requests upfront, reducing unnecessary delays.',
          'Currently, 35-40% of cases already follow this approach, helping streamline case resolutions and manage scope creep effectively.'
        ]
      }
    ],
    customer: [
      {
        title: 'Major Account Success',
        shortContent: [
          'Nvidia: 7→4 cases',
          'Softek & Fortive: 7→1-2',
          'Improved customer sentiment'
        ],
        longContent: [
          'Resolved long-standing backlog cases, significantly improving customer experience.',
          'Example: Took over Nvidia, Softek, and Fortive cases, each having 7-8 cases in the 20+ day bucket.',
          'Now, excluding Nvidia (with 4 cases left, all of which are being addressed by engineering), the other accounts are down to just 1-2 cases.',
          'Faster backlog resolution has positively impacted customer sentiment.'
        ]
      },
      {
        title: 'Customer Enablement',
        shortContent: [
          'Structured follow-ups',
          'Admin Console training',
          'Major client sessions'
        ],
        longContent: [
          'Improved follow-ups by ensuring structured, timely responses, preventing customers from waiting on unclear updates.',
          'Whenever I make Admin Console changes, I proactively educate customers on the process, enabling self-service and reducing future support needs.',
          'Have even gone to a couple of sessions with Ericsson, John Deere, and Aerospace Admins, guiding them about making the changes.'
        ]
      }
    ],
    future: [
      {
        title: 'AI Projects Pipeline',
        shortContent: [
          'Follow-Up Email foundation',
          'Case analysis automation',
          'Documentation generation'
        ],
        longContent: [
          'My backend engineering background and passion for automation led me to start the Follow-Up Email project, laying the foundation for future AI-driven tools.',
          'I have been testing additional automation ideas, such as:',
          'Automated final case summaries upon closure.',
          'Auto-generated RCA documentation in tickets.',
          'KB article generation based on resolved cases.',
          'Categorization of cases based on AI analysis.'
        ]
      },
      {
        title: 'Vision & Goals',
        shortContent: [
          'Technical support evolution',
          'AI-driven automation',
          'Engineering transition'
        ],
        longContent: [
          'I aim to change the perception of support from just "message passing" to a highly technical and automated function.',
          'The support team has the most comprehensive product knowledge, often surpassing individual engineering pods in problem resolution.',
          'My vision is to eliminate repetitive manual tasks such as:',
          'Manual email writing.',
          'Manual JIRA creation & follow-ups.',
          'Unnecessary Slack threads.',
          'I want the support team to transition into reviewers of AI-generated responses rather than primary writers, enabling higher-impact problem-solving.',
          'Looking ahead, I see myself transitioning into an engineering role focused on automation and feature implementation at Eightfold.'
        ]
      }
    ],
    shoutouts: [
      {
        title: 'Recognition',
        shortContent: [
          'Cross-team excellence',
          'Technical innovation',
          'Customer success'
        ],
        longContent: [
          'Here are some of the amazing shoutouts and recognition I\'ve received throughout the year:'
        ]
      }
    ]
  };

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/62153451?v=4"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">Performance Review 2024</h1>
            <p className="text-lg text-white/90">Arjit's Year in Review</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white/10 p-1 rounded-xl mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {Object.entries(tabContent).map(([id, content]) => (
          <TabContent
            key={id}
            isVisible={activeTab === id}
            sections={content}
          />
        ))}
      </div>
    </div>
  );
};

export default PerformanceReview;