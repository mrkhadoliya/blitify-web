"use client"

import { ArrowRight, Sparkles, Star, TrendingUp, Shield, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [activeVendor, setActiveVendor] = useState(0)
  
  const vendors = [
    { name: "Fresh Groceries", discount: "40% OFF", deals: 12 },
    { name: "Local Cafe", discount: "Buy 1 Get 1", deals: 8 },
    { name: "Fashion Store", discount: "30% OFF", deals: 15 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVendor((prev) => (prev + 1) % vendors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-xl rotate-12">
          <TrendingUp className="text-white" size={24} />
        </div>
      </div>
      <div className="absolute top-40 right-10 animate-float-delayed">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-xl -rotate-12">
          <Shield className="text-white" size={24} />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl shadow-xl rotate-45">
          <Star className="text-white" size={24} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Badge with Animation */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8 animate-fade-up">
              <Sparkles className="text-primary" size={16} />
              <span className="text-primary font-semibold text-sm">🎉 Discover Local Deals Today</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Discover Amazing
              </span>
              <br />
              <span className="relative">
                Offers Near You
                <div className="absolute -bottom-2 left-0 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
              Browse exclusive discounts, special deals, and amazing products from 
              <span className="font-semibold text-primary"> 500+ trusted vendors </span>
              in your neighborhood. Save more while supporting local businesses.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Active Vendors</div>
                  <div className="font-semibold text-foreground">Growing Daily</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">10K+</span>
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Happy Customers</div>
                  <div className="font-semibold text-foreground">Verified Reviews</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Explore Vendors
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="group border-2 border-primary/30 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 hover:border-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
                <span>How It Works</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            {/* Vendor Highlights */}
            <div className="bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                Trending Today
              </h3>
              <div className="flex gap-4">
                {vendors.map((vendor, index) => (
                  <div 
                    key={index}
                    className={`flex-1 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeVendor === index 
                        ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30' 
                        : 'bg-background/50 border border-border/30 hover:border-primary/20'
                    }`}
                    onClick={() => setActiveVendor(index)}
                  >
                    <div className="font-bold text-foreground text-lg">{vendor.name}</div>
                    <div className="text-primary font-semibold text-sm mt-1">{vendor.discount}</div>
                    <div className="text-foreground/60 text-xs mt-2">{vendor.deals} deals available</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" 
                alt="Vendor marketplace with happy customers shopping"
                className="w-full h-[500px] object-cover mix-blend-overlay"
              />
              
              {/* Overlay Stats */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow">
                🔥 50+ NEW TODAY
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute bottom-24 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4.9</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Best Rated</div>
                    <div className="text-foreground/60 text-sm">Local Coffee Shop</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card 2 */}
              <div className="absolute top-24 left-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">60%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Limited Offer</div>
                    <div className="text-foreground/60 text-sm">Ends in 2 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-8 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-foreground/70 text-sm">Live Support</div>
                </div>
                <div className="text-center border-x border-border/50">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-foreground/70 text-sm">Secure Payments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">30-days</div>
                  <div className="text-foreground/70 text-sm">Money Back</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-foreground/60 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
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
        
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}