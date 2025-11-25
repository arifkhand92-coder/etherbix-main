import { useState } from 'react';
import { Sparkles, Clock, Shield, Users, BarChart3, Zap, Globe, Award } from 'lucide-react';
const features = [
  {
    icon: Sparkles,
    title: 'Modern Tech Stack',
    description: 'We use the latest technologies for high performance and scalability.',
    stat: '25+',
    statLabel: 'Tools & Frameworks'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We ensure timely project completion without compromising quality.',
    stat: '100%',
    statLabel: 'Commitment'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data and applications are protected with industry-grade security measures.',
    stat: 'AES-256',
    statLabel: 'Encryption'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Every project is designed around your goals and user experience.',
    stat: '95%',
    statLabel: 'Client Satisfaction'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Monitor growth and engagement through real-time insights and metrics.',
    stat: '50+',
    statLabel: 'Analytics Metrics'
  },
  {
    icon: Zap,
    title: 'Automation Ready',
    description: 'Smart automation to save time and streamline your business operations.',
    stat: '10x',
    statLabel: 'Efficiency Boost'
  },
  {
    icon: Globe,
    title: 'Cross-Platform Presence',
    description: 'Web, mobile, and digital solutions that work seamlessly across devices.',
    stat: '100+',
    statLabel: 'Deployments'
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Recognized for delivering quality digital solutions and creative designs.',
    stat: '50+',
    statLabel: 'Projects Delivered'
  }
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Marketers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize successful marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold text-blue-600">{feature.stat}</span>
                    <span className="text-xs text-gray-500">{feature.statLabel}</span>
                  </div>
                </div>
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Etherbix?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Leverage AI to transform raw data into actionable insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Scalable Solutions</h4>
                    <p className="text-gray-600">Grow your campaigns without limitations or complexity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                    <p className="text-gray-600">Dedicated team of AI and marketing specialists</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">250%</div>
                <div className="text-xl mb-6">Average ROI Increase</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Customer Acquisition</span>
                    <span className="font-semibold">+180%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Engagement Rate</span>
                    <span className="font-semibold">+210%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Conversion Rate</span>
                    <span className="font-semibold">+165%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
