"use client"

import { CheckCircle, Award, Users, Globe, Sparkles, ShieldCheck, MapPin, TrendingUp, Target, Eye, Shield, Heart, Zap, DollarSign, Scale, ArrowRight, Star, Clock, Trophy, Building, Leaf, Handshake } from "lucide-react"
import { useState } from "react"

export default function About() {
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Every vendor verified, every transaction secured.",
      color: "from-green-500 to-emerald-600",
      features: ["256-bit Encryption", "Vendor Verification", "Fraud Protection"]
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local economies first and foremost.",
      color: "from-blue-500 to-cyan-600",
      features: ["Local Impact", "Community Events", "Neighborhood Support"]
    },
    {
      icon: Heart,
      title: "Customer Delight",
      description: "Exceptional experiences at every touchpoint.",
      color: "from-red-500 to-pink-600",
      features: ["24/7 Support", "Happiness Guarantee", "Easy Returns"]
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to serve you better.",
      color: "from-purple-500 to-indigo-600",
      features: ["AI Matching", "Smart Features", "Continuous Updates"]
    },
    {
      icon: DollarSign,
      title: "Value Creation",
      description: "Making quality accessible to everyone.",
      color: "from-amber-500 to-orange-600",
      features: ["Best Prices", "Exclusive Deals", "Price Match"]
    },
    {
      icon: Scale,
      title: "Integrity",
      description: "Honest, transparent, and fair in all dealings.",
      color: "from-indigo-500 to-blue-600",
      features: ["No Hidden Fees", "Clear Pricing", "Fair Practices"]
    },
  ]

  const milestones = [
    { year: "2025", title: "Founded", desc: "Started with 10 local vendors" },
    { year: "2025", title: "Expansion", desc: "Launched in 5 new cities" },
    { year: "2025", title: "Growth", desc: "Reached 10K+ customers" },
    { year: "2025", title: "Innovation", desc: "Launched mobile app" },
    { year: "2026", title: "Community", desc: "50K+ happy customers" },
  ]

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl shadow-2xl rotate-12">
          <Trophy className="text-white" size={28} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-8 group hover:scale-105 transition-transform">
            <Sparkles className="text-primary group-hover:rotate-12 transition-transform" size={20} />
            <span className="text-primary font-semibold text-lg">Our Story</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Building Bridges
            </span>
            <br />
            <span className="text-foreground">Between Dreams & Community</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing local commerce by empowering small businesses with cutting-edge tools
            while helping customers discover incredible value in their own neighborhoods.
          </p>
        </div>

        {/* Interactive Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {[
            {
              value: "50K+",
              label: "Happy Customers",
              icon: Users,
              change: "+25% this month",
              color: "from-blue-500 to-cyan-500"
            },
            {
              value: "500+",
              label: "Verified Vendors",
              icon: ShieldCheck,
              change: "100+ new this quarter",
              color: "from-green-500 to-emerald-500"
            },
            {
              value: "25+",
              label: "Cities Active",
              icon: MapPin,
              change: "Expanding weekly",
              color: "from-purple-500 to-pink-500"
            },
            {
              value: "100K+",
              label: "Transactions",
              icon: TrendingUp,
              change: "99.9% success rate",
              color: "from-amber-500 to-orange-500"
            },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <Icon className={`bg-gradient-to-r ${stat.color} bg-clip-text`} size={28} />
                    </div>
                  </div>

                  <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-lg font-semibold text-foreground mb-3">{stat.label}</p>
                  <p className="text-sm text-foreground/60">{stat.change}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content - Interactive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
                alt="Local vendors and customers connecting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

              {/* Floating Cards */}
              <div className="absolute top-8 left-8 animate-float">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Live Now</div>
                      <div className="text-foreground/60 text-sm">150+ active deals</div>
                    </div>
                  </div>
                  <div className="text-sm text-foreground/70">
                    Within 5km of your location
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 animate-float-delayed">
                <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-white" size={24} />
                    <div>
                      <div className="font-bold">Top Rated</div>
                      <div className="text-white/80 text-sm">4.9/5 Stars</div>
                    </div>
                  </div>
                  <div className="text-sm text-white/90">
                    Based on 10K+ reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="mt-12 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
                <div className="space-y-8">
                  {milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${idx === milestones.length - 1
                          ? 'bg-gradient-to-r from-primary to-secondary'
                          : 'bg-primary/20'
                        } group-hover:scale-110 transition-transform`}>
                        <div className="w-3 h-3 rounded-full bg-background" />
                      </div>
                      <div className="flex-1 pb-8 group-hover:translate-x-2 transition-transform">
                        <div className="text-2xl font-bold text-foreground mb-1">{milestone.year}</div>
                        <div className="font-semibold text-foreground mb-2">{milestone.title}</div>
                        <div className="text-foreground/70 text-sm">{milestone.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building size={16} />
              The VendorHub Difference
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              More Than Just
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                A Marketplace
              </span>
            </h2>

            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              We're a movement that champions local entrepreneurship while making quality
              products and services accessible and affordable for every community member.
            </p>

            {/* Interactive Features */}
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: CheckCircle,
                  title: "Smart Local Discovery",
                  desc: "AI-powered recommendations based on your location and preferences",
                  color: "text-green-500"
                },
                {
                  icon: ShieldCheck,
                  title: "Verified & Trusted",
                  desc: "Every vendor undergoes rigorous verification and background checks",
                  color: "text-blue-500"
                },
                {
                  icon: Zap,
                  title: "Instant Transactions",
                  desc: "Secure, seamless payments with instant confirmation",
                  color: "text-purple-500"
                },
                {
                  icon: Leaf,
                  title: "Sustainable Growth",
                  desc: "Supporting eco-friendly practices and local sustainability",
                  color: "text-emerald-500"
                },
                {
                  icon: Handshake,
                  title: "Community Partnerships",
                  desc: "Building lasting relationships between vendors and customers",
                  color: "text-amber-500"
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-6 rounded-2xl border border-border/50 bg-gradient-to-r from-background/50 to-background/30 hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={feature.color} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-foreground/70">{feature.desc}</p>
                    </div>
                    <ArrowRight className="text-foreground/30 group-hover:text-primary group-hover:translate-x-2 transition-all" size={20} />
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Join Our Community
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="group px-8 py-4 rounded-xl font-semibold border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
                <span>Our Story</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Core Values - Interactive Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Values That Drive
              </span>
              <br />
              <span className="text-foreground">Everything We Do</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define our commitment to you.
            </p>
          </div>

          {/* Value Cards with Interactive Preview */}
          <div className="relative">
            {/* Selected Value Preview */}
            <div className="mb-12">
              <div className={`bg-gradient-to-br ${values[activeValue].color} rounded-3xl p-8 shadow-2xl`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">{values[activeValue].title}</div>
                    <p className="text-white/90">{values[activeValue].description}</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    {values[activeValue].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/20 mb-3 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-sm font-medium"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {values[activeValue].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-sm font-medium"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                const isActive = activeValue === idx

                return (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${isActive
                        ? 'border-2 border-primary shadow-lg'
                        : 'border border-border/50 bg-gradient-to-br from-background/80 to-background/60'
                      }`}
                    onClick={() => setActiveValue(idx)}
                    onMouseEnter={() => setActiveValue(idx)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <Icon className={`bg-gradient-to-r ${value.color} bg-clip-text`} size={28} />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                      <p className="text-foreground/70 mb-4">{value.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {value.features.map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-8 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 max-w-4xl mx-auto">
            <div className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Be Part of
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Something Bigger?
              </span>
            </div>

            <p className="text-xl text-foreground/70 max-w-2xl">
              Join thousands of vendors and customers who are building stronger communities together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
                Start Selling
                <ArrowRight size={20} />
              </button>
              <button className="px-10 py-4 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary/10 hover:scale-[1.02] transition-all duration-300">
                Browse Deals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}