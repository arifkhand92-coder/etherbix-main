import { Video,Users,Brain, Target, LineChart, MessageSquare, Search, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Video, // replace with the actual icon import for video
    title: 'Video Editing',
    description: 'Produce engaging videos that capture attention and communicate your message effectively.',
    color: 'from-purple-500 to-pink-500',
    features: ['Short-form videos', 'Corporate videos', 'Animations & motion graphics', 'Post-production editing']
  },
  {
    icon: Users, // replace with the actual icon import for SMM
    title: 'Social Media Management',
    description: 'Manage and grow your social media presence across multiple platforms.',
    color: 'from-green-500 to-teal-500',
    features: ['Content planning', 'Community engagement', 'Analytics & reporting', 'Campaign scheduling']
  },
  {
    icon: Brain,
    title: 'Web Development',
    description: 'Build responsive, high-performance websites tailored to your business goals.',
    color: 'from-blue-500 to-blue-600',
    features: ['Custom web apps', 'E-commerce solutions', 'Responsive design', 'Backend integration']
  },
  {
    icon: Target,
    title: 'Mobile App Development',
    description: 'Create seamless and engaging mobile experiences for Android and iOS users.',
    color: 'from-cyan-500 to-cyan-600',
    features: ['Cross-platform apps', 'UI/UX design', 'API integration', 'App publishing']
  },
  {
    icon: LineChart,
    title: 'Software Development',
    description: 'Develop custom software solutions that enhance efficiency and scalability.',
    color: 'from-blue-600 to-cyan-500',
    features: ['Automation tools', 'Enterprise systems', 'Cloud integration', 'Maintenance & support']
  },
  {
    icon: MessageSquare,
    title: 'Digital Marketing',
    description: 'Grow your brand online through strategic and data-driven digital marketing.',
    color: 'from-cyan-600 to-blue-500',
    features: ['SEO & SEM', 'Social media marketing', 'Email campaigns', 'Performance analytics']
  },
  {
    icon: Search,
    title: 'Graphic Design',
    description: 'Craft creative visuals that strengthen your brand identity and attract customers.',
    color: 'from-blue-500 to-cyan-600',
    features: ['Logos & branding', 'Banners & posters', 'UI graphics', 'Social media creatives']
  },
  {
    icon: Megaphone,
    title: 'Ads & Promotion',
    description: 'Run high-impact ad campaigns to reach the right audience and maximize ROI.',
    color: 'from-cyan-500 to-blue-600',
    features: ['Google & Meta ads', 'Audience targeting', 'Ad optimization', 'Campaign management']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your brand and drive measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
