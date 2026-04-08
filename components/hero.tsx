"use client"

import { ArrowRight, Sparkles, Star, TrendingUp, Shield, ChevronRight, MapPin, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [activeVendor, setActiveVendor] = useState(0)

  const vendors = [
    { name: "Fresh Grocery Store", discount: "40% OFF", deals: 12, verified: true },
    { name: "Sharma Electronics", discount: "25% OFF", deals: 8, verified: true },
    { name: "City Medical Hall", discount: "15% OFF", deals: 15, verified: true },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVendor((prev) => (prev + 1) % vendors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Floating Elements - Updated with Blitify branding */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-xl rotate-12">
          <MapPin className="text-white" size={24} />
        </div>
      </div>
      <div className="absolute top-40 right-10 animate-float-delayed">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-xl -rotate-12">
          <Shield className="text-white" size={24} />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl shadow-xl rotate-45">
          <CheckCircle className="text-white" size={24} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-8 animate-fade-up">
              <Sparkles className="text-primary" size={16} />
              <span className="text-primary font-semibold text-sm">Jo Chahiye, Wahi Mile - Now Verified!</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            </div>

            {/* Main Heading - Updated with Blitify tagline */}
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Local Discounts,
              </span>
              <br />
              <span className="relative">
                100% Verified
                <div className="absolute -bottom-2 left-0 w-48 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </span>
            </h1>

            {/* Description - Updated with Blitify value props */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
              <span className="font-semibold text-primary">500+ product categories</span> from GST-verified local shops.
              Every vendor is physically verified with shop photos - because trust matters.
              <span className="block mt-2 text-lg">🚀 First 10,000 vendors join FREE!</span>
            </p>

            {/* Stats - Updated with Blitify goals */}
            <div className="flex flex-wrap gap-2 mb-10">
              <div className="flex items-center gap-1 bg-white backdrop-blur-2xl border border-white px-3 rounded-xl">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">100+</span>
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Cities by 2028</div>
                  <div className="font-semibold text-foreground">Expanding Fast</div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white backdrop-blur-2xl border border-white px-3 rounded-xl">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">10K+</span>
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Free Vendors</div>
                  <div className="font-semibold text-foreground">First Batch</div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white backdrop-blur-2xl border border-white px-3 rounded-xl">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">500+</span>
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Categories</div>
                  <div className="font-semibold text-foreground">Everything Local</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                alt="Verified Blitify vendors with happy customers shopping locally"
                className="w-full h-[500px] object-cover mix-blend-overlay"
              />

              <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow flex items-center gap-2">
                <CheckCircle size={16} /> GST VERIFIED
              </div>

              <div className="absolute bottom-24 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <Shield className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Shop Verified</div>
                    <div className="text-foreground/60 text-sm">Physical Store • GST Registered</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-24 left-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Within 1km Radius</div>
                    <div className="text-foreground/60 text-sm">Real-time • Live Discounts</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                <span className="text-white font-bold text-sm">BLITIFY</span>
              </div>
            </div> 
          </div>
        </div>

        <div className="bg-[#ffffff92] backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Shield className="text-primary" size={16} />
            GST-Verified Vendors Near You
          </h3>
          <div className="lg:flex gap-4 space-y-2">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className={`flex-1 p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeVendor === index
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30'
                  : 'bg-background/50 border border-border/30 hover:border-primary/20'
                  }`}
                onClick={() => setActiveVendor(index)}
              >
                <div className="flex items-center gap-2">
                  <div className="font-bold text-foreground text-lg">{vendor.name}</div>
                  {vendor.verified && (
                    <CheckCircle className="text-green-500" size={16} fill="currentColor" />
                  )}
                </div>
                <div className="text-primary font-semibold text-sm mt-1">{vendor.discount}</div>
                <div className="flex items-center gap-1 text-foreground/60 text-xs mt-2">
                  <MapPin size={12} />
                  <span>Within 1km • {vendor.deals} deals</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-foreground/60 text-sm">Discover 500+ Categories</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-indicator" />
            </div>
          </div>
        </div> */}
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