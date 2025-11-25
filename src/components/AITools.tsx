import { useState } from 'react';
import { Cpu, MessageSquare, PenTool, ImageIcon, BarChart2, Mail } from 'lucide-react';

const tools = [
  {
    icon: Cpu,
    name: 'Code Editor',
    description: 'Develop and debug web and software projects efficiently with modern coding tools.',
    gradient: 'from-blue-500 to-blue-600',
    demo: 'Syntax highlighting, code linting, and version control integration'
  },
  {
    icon: MessageSquare,
    name: 'Client Communication',
    description: 'Engage with clients seamlessly through messaging, updates, and project discussions.',
    gradient: 'from-cyan-500 to-cyan-600',
    demo: 'Manage feedback, requests, and progress reports in one place'
  },
  {
    icon: PenTool,
    name: 'Copywriting & Content',
    description: 'Craft compelling content and marketing copy for websites, emails, and ads.',
    gradient: 'from-blue-600 to-cyan-500',
    demo: 'Create headlines, blogs, and ad copy quickly and effectively'
  },
  {
    icon: ImageIcon,
    name: 'Graphic Design',
    description: 'Design stunning visuals, banners, and social media graphics to boost brand identity.',
    gradient: 'from-cyan-600 to-blue-500',
    demo: 'Logo creation, social posts, UI assets, and marketing creatives'
  },
  {
    icon: BarChart2,
    name: 'Digital Marketing Analytics',
    description: 'Track campaign performance, website traffic, and engagement metrics.',
    gradient: 'from-blue-500 to-cyan-600',
    demo: 'Monitor conversions, ROI, and audience insights for better strategy'
  },
  {
    icon: Mail,
    name: 'Email Campaigns',
    description: 'Plan and execute effective email marketing campaigns for business growth.',
    gradient: 'from-cyan-500 to-blue-600',
    demo: 'Optimize subject lines, content, and schedule for maximum engagement'
  }
];

export default function ToolsSection() {
  const [activeTool, setActiveTool] = useState(0);

  return (
    <section id="tools" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Development & Marketing Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical tools and platforms to streamline programming, design, and digital marketing workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${
                  activeTool === index
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-300 shadow-lg'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveTool(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.gradient} flex-shrink-0`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm ml-4">etherbix.dev/tools</div>
              </div>

              <div className="bg-gray-950 rounded-xl p-6 min-h-[400px] font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${tools[activeTool].gradient}`}>
                    {(() => {
                      const Icon = tools[activeTool].icon;
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <div className="text-white font-semibold">{tools[activeTool].name}</div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="text-cyan-400">$ initialize_tool()</div>
                  <div className="text-gray-500">Loading tool...</div>
                  <div className="text-green-400">✓ Tool ready</div>
                  <div className="text-gray-500 mt-4">{tools[activeTool].demo}</div>

                  <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <div className="text-blue-400 mb-2">Performance Metrics:</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Processing Speed:</span>
                        <span className="text-green-400">Fast</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="text-green-400">High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-green-400 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-gray-500">
                    <span className="text-cyan-400">$</span> <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Try This Tool
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
