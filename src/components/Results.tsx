import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const stats = [
  { value: '120+', label: 'Completed Projects', icon: Users, color: 'from-blue-500 to-blue-600' },
  { value: '$1.2M+', label: 'Client Revenue Boosted', icon: DollarSign, color: 'from-cyan-500 to-cyan-600' },
  { value: '180%', label: 'Avg Growth Rate', icon: TrendingUp, color: 'from-blue-600 to-cyan-500' },
  { value: '98%', label: 'Client Satisfaction', icon: Target, color: 'from-cyan-600 to-blue-500' }
];

const caseStudies = [
  {
    company: 'NextGen Webworks',
    industry: 'Web Development',
    challenge: 'Outdated website design and poor conversion performance.',
    results: [
      { metric: 'Page Speed', improvement: '+230%' },
      { metric: 'Leads Generated', improvement: '+150%' },
      { metric: 'User Retention', improvement: '+85%' }
    ],
    quote:
      'They completely transformed our online presence. The new design not only looks stunning but also performs incredibly fast.',
    author: 'Rahul Mehta, Founder',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'AdSphere Media',
    industry: 'Digital Marketing & Ads',
    challenge: 'Difficulty reaching the right audience and optimizing ad spend.',
    results: [
      { metric: 'Ad CTR', improvement: '+310%' },
      { metric: 'Cost per Lead', improvement: '-45%' },
      { metric: 'ROI', improvement: '+270%' }
    ],
    quote:
      'Their marketing and ad management strategy gave us the visibility and conversion boost we were aiming for.',
    author: 'Priya Sharma, Marketing Head',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    company: 'AppNova Technologies',
    industry: 'Mobile App Development',
    challenge: 'Needed a scalable app solution to improve customer engagement.',
    results: [
      { metric: 'App Downloads', improvement: '+190%' },
      { metric: 'User Retention', improvement: '+160%' },
      { metric: 'Conversion Rate', improvement: '+120%' }
    ],
    quote:
      'They delivered a powerful mobile app on time and beyond expectations. The UI/UX and performance are top-notch.',
    author: 'Neha Kapoor, Product Manager',
    gradient: 'from-blue-600 to-cyan-500'
  }
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real clients achieving exceptional growth with our web, app, and marketing solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-3 mb-4">
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-semibold`}
                    >
                      {study.industry}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.company}</h3>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-500 mb-2">THE CHALLENGE</div>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-4">KEY RESULTS</div>
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-700">{result.metric}</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            {result.improvement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="relative">
                    <div className="absolute -left-2 top-0 text-6xl text-blue-200 font-serif">"</div>
                    <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6 pl-8">
                      {study.quote}
                    </blockquote>
                  </div>
                  <div className="flex items-center space-x-4 pl-8">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${study.gradient} flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {study.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-gray-600">{study.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">
              Join 100+ businesses growing with our web, app, and marketing solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
