'use client';

import { useState, useEffect } from 'react';
import { Play, Award, Star, ArrowRight, Brain, Zap, Target, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Vidara's AI completely transformed how I learn. The personalized curriculum adapted to my pace and learning style, helping me master React in half the time I expected.",
      rating: 5,
      achievement: "Completed 12 courses in 3 months"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The AI mentor feature is incredible. It's like having a personal tutor available 24/7. The real-time feedback and adaptive learning paths made all the difference.",
      rating: 5,
      achievement: "Advanced from beginner to expert level"
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      company: "DesignStudio",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "What sets Vidara apart is how the AI understands my learning gaps and creates custom practice exercises. I went from zero coding knowledge to building my first app.",
      rating: 5,
      achievement: "Built 5 portfolio projects"
    },
    {
      name: "David Park",
      role: "Data Scientist",
      company: "DataFlow Inc",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The AI-powered skill assessments are spot-on. Vidara identified exactly what I needed to work on and created a learning path that got me promoted within 6 months.",
      rating: 5,
      achievement: "Earned 3 industry certifications"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning Paths",
      description: "Our advanced AI analyzes your learning style and creates personalized curricula that adapt in real-time"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Tutoring",
      description: "Get instant, contextual help from our AI mentor that understands your progress and challenges"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Skill Assessment",
      description: "AI-driven evaluations identify your strengths and knowledge gaps to optimize your learning journey"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Adaptive Content",
      description: "Course materials automatically adjust difficulty and pace based on your performance and preferences"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI-Powered Learning Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the next generation of education with intelligent features that adapt to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories from Our AI-Powered Community
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our intelligent learning platform has transformed careers and accelerated growth
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Testimonial Content */}
                  <div className="md:col-span-2 p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="ml-4 bg-green-100 text-green-700 hover:bg-green-200">
                        Verified Success
                      </Badge>
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={testimonials[currentTestimonial].image} 
                          alt={testimonials[currentTestimonial].name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold text-slate-900 text-lg">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-slate-600">
                            {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievement Sidebar */}
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white flex flex-col justify-center">
                    <div className="text-center">
                      <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                      <h4 className="font-semibold text-lg mb-2">Achievement Unlocked</h4>
                      <p className="text-blue-100 text-sm mb-4">
                        {testimonials[currentTestimonial].achievement}
                      </p>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">6 months</div>
                        <div className="text-sm text-blue-100">Average completion time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience AI-Powered Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are accelerating their careers with Vidara's intelligent platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="/signup">Start Free AI Trial</a>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              Explore AI Features
            </Button>
          </div>
          
          <p className="text-blue-100 mt-6">
            No credit card required • AI-personalized from day one • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Vidara</span>
              </div>
              <p className="text-slate-400 mb-4">
                Revolutionizing education with AI-powered learning experiences that adapt to every learner.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">AI Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Personalized Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Tutoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Assessments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Adaptive Content</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Vidara. All rights reserved. Powered by Advanced AI Technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}