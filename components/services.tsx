"use client"

import { Zap, Shield, Smartphone, TrendingUp, Sparkle, Lock, Bell, Rocket, ChevronRight, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Zap,
    title: "Lightning Fast Browsing",
    description: "Find deals and offers instantly with our AI-powered search system",
    features: ["Smart Search", "Instant Results", "AI Recommendations"],
    color: "from-yellow-500 to-orange-500",
    delay: "animate-delay-0"
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Shop safely with our encrypted payment gateway and buyer protection",
    features: ["256-bit Encryption", "Fraud Protection", "Secure Payments"],
    color: "from-blue-500 to-cyan-500",
    delay: "animate-delay-100"
  },
  {
    icon: Smartphone,
    title: "Smart Mobile Experience",
    description: "Get real-time notifications and personalized offers on your device",
    features: ["Push Alerts", "Offline Mode", "Biometric Login"],
    color: "from-purple-500 to-pink-500",
    delay: "animate-delay-200"
  },
  {
    icon: TrendingUp,
    title: "Real-time Intelligence",
    description: "Stay ahead with trending deals and vendor announcements instantly",
    features: ["Live Updates", "Price Alerts", "Trend Analytics"],
    color: "from-green-500 to-emerald-500",
    delay: "animate-delay-300"
  },
]

const additionalFeatures = [
  { icon: Sparkle, title: "Personalized Recommendations", desc: "AI-powered suggestions based on your preferences" },
  { icon: Lock, title: "Privacy First", desc: "Your data is never shared with third parties" },
  { icon: Bell, title: "Smart Notifications", desc: "Get alerts for price drops and new deals" },
  { icon: Rocket, title: "Quick Checkout", desc: "One-tap purchase with saved preferences" },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Sparkle className="text-primary" size={18} />
            <span className="text-primary font-semibold">Premium Features</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Power-Up Your Shopping
            </span>
            <br />
            <span className="text-foreground">Experience</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We provide cutting-edge tools and features to help you shop smart, save big, 
            and enjoy a seamless experience every time.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="space-y-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isActive = activeService === idx
              
              return (
                <div
                  key={idx}
                  className={`group relative p-8 rounded-2xl border border-border/50 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${service.delay} ${
                    isActive 
                      ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/50' 
                      : 'bg-gradient-to-br from-background/80 to-background/60'
                  }`}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <Icon className={`bg-gradient-to-r ${service.color} bg-clip-text`} size={28} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                        {isActive && (
                          <ChevronRight className="text-primary transform rotate-90" size={20} />
                        )}
                      </div>
                      
                      <p className="text-foreground/70 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, fIdx) => (
                          <span 
                            key={fIdx}
                            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-medium backdrop-blur-sm"
                          >
                            <CheckCircle size={12} />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            {/* Main Showcase Card */}
            <div className="sticky top-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                
                {/* Floating elements */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">2.5s</div>
                      <div className="text-foreground/60 text-sm">Load Time</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">100%</div>
                      <div className="text-foreground/60 text-sm">Secure</div>
                    </div>
                  </div>
                </div>
                
                {/* Mockup Image */}
                <div className="relative h-full min-h-[500px] bg-gradient-to-br from-background/50 to-background/30 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm bg-gradient-to-br from-background to-background/80 rounded-2xl p-6 shadow-2xl border border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <Sparkle className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Smart Shopping</div>
                        <div className="text-foreground/60 text-sm">Active Features</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                            <CheckCircle className="text-white" size={14} />
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2">
                      Try Feature
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">More Amazing Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div 
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-border/50 backdrop-blur-sm bg-gradient-to-br from-background/80 to-background/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={24} />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.desc}</p>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="text-primary" size={18} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-foreground/70">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">2M+</div>
              <div className="text-foreground/70">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">50ms</div>
              <div className="text-foreground/70">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-foreground/70">Support</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center gap-3">
            <span>Explore All Features</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <p className="text-foreground/60 mt-4 text-sm">
            Join 2M+ users who trust our platform
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        
        .animate-delay-0 { animation-delay: 0ms; }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
      `}</style>
    </section>
  )
}