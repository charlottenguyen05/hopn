import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-indigo-600">HOPn</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where innovation, education, and technology converge to simplify life through connected services
          </p>
        </div>

        {/* Who We Are Section */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
            
            {/* Meaning of HOPn */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Meaning of HOPn</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">🚀</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Hop into Innovation</h4>
                  <p className="text-gray-600 text-sm">Jumping forward with cutting-edge solutions</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">🌐</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Hub of Projects & Networks</h4>
                  <p className="text-gray-600 text-sm">Connecting ideas, people, and opportunities</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">⚡</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Higher Order Prototyping Network</h4>
                  <p className="text-gray-600 text-sm">Advanced prototyping for solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading platform where innovation, education, and technology converge - 
                simplifying life through connected services in AI, FinTech, automation, and digital transformation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                HOPn&apos;s mission is to empower individuals, universities, and startups by uniting smart services 
                and practical education in one seamless ecosystem. Through digital twins, AI, FinTech, automation, 
                and hands-on training, we build bridges between research, innovation, and real-world impact - 
                simplifying complexity and accelerating progress.
              </p>
            </div>
          </div>
        </section>

        {/* HOPn Labs Section */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">HOPn Labs</h2>
              <p className="text-xl text-gray-600">Space for research and development</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎓 University Partnerships</h3>
                <p className="text-gray-700">
                  Collaborating with academic institutions to bridge the gap between theory and practice
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Innovation Hub</h3>
                <p className="text-gray-700">
                  Experimenting with ideas and turning them into prototypes, supporting emerging projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Areas Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Areas</h2>
            <p className="text-xl text-gray-600">Driving innovation across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI</h3>
              <p className="text-indigo-600 font-semibold mb-2">AI Ahead: Learning, Leading, Innovating.</p>
              <p className="text-gray-600">Advancing artificial intelligence through research and practical applications</p>
            </div>

            {/* FinTech */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FinTech</h3>
              <p className="text-green-600 font-semibold mb-2">Empowering FinTech: Data to Dollars With AI.</p>
              <p className="text-gray-600">Revolutionizing financial technology with intelligent solutions</p>
            </div>

            {/* Automation */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automation</h3>
              <p className="text-blue-600 font-semibold mb-2">From Manual to Magical: AI-Powered Automation Begins Now.</p>
              <p className="text-gray-600">Streamlining processes through intelligent automation</p>
            </div>
          </div>
        </section>

        {/* Education & Opportunities Section */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Opportunities</h2>
              <p className="text-xl text-gray-600">Empowering the next generation of innovators</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bootcamps & Workshops */}
              <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Bootcamps & Workshops</h3>
                </div>
                <p className="text-indigo-600 font-semibold mb-3">Real Skills. Real Projects. Real Impact.</p>
                <p className="text-gray-700 mb-4">
                  Opportunities for students: Training, Mentoring and Participation in innovation.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hands-on training programs</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Real-world project experience</li>
                </ul>
              </div>

              {/* Hackathons & Open Source */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Hackathons & Open Source</h3>
                </div>
                <p className="text-green-600 font-semibold mb-3">Code That Matters: AI & FinTech for the Real World.</p>
                <p className="text-gray-700 mb-4">
                  Collaborative innovation through competitive programming and open source contributions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Regular hackathon events</li>
                  <li>• Open source project contributions</li>
                  <li>• Community-driven development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Innovation?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Be part of the HOPn community and help shape the future of technology and education
            </p>
            <Link
              href="/experiences"
              className="inline-block bg-white text-indigo-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Our Experiences
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;