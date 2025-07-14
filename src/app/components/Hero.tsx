import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Star } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { Brain } from 'lucide-react'

function Hero() {
  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200 px-4 py-2 border-0">
                  🤖 Powered by Advanced AI Technology
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Learn Smarter with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    AI-Powered
                  </span>{' '}
                  Education
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Experience the future of learning with Vidara's intelligent platform. 
                  Our AI adapts to your unique learning style, creating personalized paths that accelerate your growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="/signup">Get Started</a>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:text-blue-600 transition-colors" />
                  Join a Live Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="AI-powered learning platform" 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
