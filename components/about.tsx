"use client"

import { CheckCircle, Award, Users, Globe, Sparkles, ShieldCheck, MapPin, TrendingUp, Target, Eye, Shield, Heart, Zap, DollarSign, Scale, ArrowRight, Star, Clock, Trophy, Building, Leaf, Handshake, Rocket, Compass, Quote, Coffee, Store, Gem, Percent, BookOpen, Camera, Film, Headphones, Smile, ChevronRight, Play, CircleDot, BadgeCheck, Medal, Crown, Sparkle, Flame, Droplet, Sun, Moon, Wind } from "lucide-react"
import { useState, useEffect } from "react"

export default function About() {
  const [activeValue, setActiveValue] = useState(0)
  const [activeTab, setActiveTab] = useState("story")
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Every vendor verified, every transaction secured.",
      gradient: "from-emerald-500 to-teal-500",
      lightGradient: "from-emerald-50 to-teal-50",
      features: ["256-bit Encryption", "Vendor Verification", "Fraud Protection"],
      stats: "100% Secure",
      highlight: "Verified Badge"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local economies first and foremost.",
      gradient: "from-blue-500 to-indigo-500",
      lightGradient: "from-blue-50 to-indigo-50",
      features: ["Local Impact", "Community Events", "Neighborhood Support"],
      stats: "500+ Vendors",
      highlight: "Local First"
    },
    {
      icon: Heart,
      title: "Customer Delight",
      description: "Exceptional experiences at every touchpoint.",
      gradient: "from-rose-500 to-pink-500",
      lightGradient: "from-rose-50 to-pink-50",
      features: ["24/7 Support", "Happiness Guarantee", "Easy Returns"],
      stats: "98% Satisfaction",
      highlight: "Customer First"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to serve you better.",
      gradient: "from-purple-500 to-violet-500",
      lightGradient: "from-purple-50 to-violet-50",
      features: ["AI Matching", "Smart Features", "Continuous Updates"],
      stats: "Real-time Updates",
      highlight: "Smart Tech"
    },
    {
      icon: DollarSign,
      title: "Value Creation",
      description: "Making quality accessible to everyone.",
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-50 to-orange-50",
      features: ["Best Prices", "Exclusive Deals", "Price Match"],
      stats: "Save up to 40%",
      highlight: "Best Value"
    },
    {
      icon: Scale,
      title: "Integrity",
      description: "Honest, transparent, and fair in all dealings.",
      gradient: "from-cyan-500 to-sky-500",
      lightGradient: "from-cyan-50 to-sky-50",
      features: ["No Hidden Fees", "Clear Pricing", "Fair Practices"],
      stats: "100% Transparent",
      highlight: "Always Fair"
    },
  ]

  const milestones = [
    { year: "2025 Q1", title: "The Beginning", desc: "Started with just 10 local vendors in a single city", icon: Rocket, achievement: "10 Vendors" },
    { year: "2025 Q2", title: "First Milestone", desc: "Reached 100+ verified vendors within 3 months", icon: Users, achievement: "100+ Vendors" },
    { year: "2025 Q3", title: "City Expansion", desc: "Launched in 5 new cities across the region", icon: Globe, achievement: "5 Cities" },
    { year: "2025 Q4", title: "10K Customers", desc: "Crossed 10,000 happy customers milestone", icon: Heart, achievement: "10K Customers" },
    { year: "2026 Q1", title: "Mobile App Launch", desc: "Launched iOS & Android apps for better access", icon: Zap, achievement: "App Launch" },
    { year: "2026 Q2", title: "Community First", desc: "50,000+ customers and 500+ vendors strong", icon: Trophy, achievement: "50K+ Customers" },
  ]

  const teamStats = [
    { label: "Verified Vendors", value: "500+", icon: Store, gradient: "from-emerald-500 to-teal-500" },
    { label: "Happy Customers", value: "50K+", icon: Users, gradient: "from-blue-500 to-indigo-500" },
    { label: "Cities Covered", value: "25+", icon: MapPin, gradient: "from-purple-500 to-pink-500" },
    { label: "Daily Deals", value: "1000+", icon: Percent, gradient: "from-amber-500 to-orange-500" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
         
       </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className={`p-3 rounded-2xl bg-gradient-to-r ${
              i % 2 === 0 ? 'from-primary/10 to-secondary/10' : 'from-blue-500/10 to-purple-500/10'
            } backdrop-blur-sm border border-white/20 shadow-xl rotate-${i * 15}`}>
              {i % 3 === 0 && <Trophy className="w-5 h-5 text-primary/60" />}
              {i % 3 === 1 && <Heart className="w-5 h-5 text-rose-500/60" />}
              {i % 3 === 2 && <Star className="w-5 h-5 text-amber-500/60" />}
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20" data-animate id="hero">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-8 hover:shadow-md transition-all group">
            <Sparkle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About Our Platform</span>
            <div className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary to-secondary dark:from-white dark:via-primary dark:to-secondary bg-clip-text text-transparent bg-size-200 animate-gradient">
              Connecting Communities,
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">One Deal at a Time</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how local businesses connect with their communities,
            making quality products and services accessible to everyone.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
            {teamStats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.gradient} bg-opacity-10 flex items-center justify-center mx-auto mb-2`}>
                      <Icon className={`w-5 h-5 text-${stat.gradient.split(' ')[1]}`} />
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16" data-animate id="tabs">
          <div className="inline-flex p-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            {[
              { id: "story", label: "Our Story", icon: BookOpen, gradient: "from-blue-500 to-indigo-500" },
              { id: "mission", label: "Mission & Vision", icon: Compass, gradient: "from-purple-500 to-pink-500" },
              { id: "values", label: "Core Values", icon: Heart, gradient: "from-amber-500 to-orange-500" },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative group flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-xl animate-gradient bg-size-200`} />
                  )}
                  <Icon className={`relative z-10 w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-32">
          {/* Our Story Tab */}
          {activeTab === "story" && (
            <div className="space-y-24">
              {/* Story Introduction */}
              <div className="grid lg:grid-cols-2 gap-12 items-center" data-animate id="story-intro">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
                      alt="Our journey"
                      className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    {/* Quote Card */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Quote className="text-primary mb-2 w-8 h-8" />
                      <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                        Every great journey begins with a single step - and a cup of chai with local shopkeepers.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <span className="text-white text-xs font-bold">RJ</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">Rohit Kumar Saini</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Co-Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/20">
                    <Coffee className="w-4 h-4" />
                    How It All Began
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    From a Simple Idea to 
                    <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      a Community Movement
                    </span>
                  </h2>

                  <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p>
                      It started in early 2025 when our founder, Rajesh, noticed something interesting. 
                      Local shopkeepers had amazing products and competitive prices, but they struggled 
                      to reach customers beyond their immediate neighborhood.
                    </p>
                    <p>
                      What began as a simple WhatsApp group with 10 local vendors in one neighborhood 
                      quickly grew into something much bigger. Shopkeepers started sharing their daily 
                      specials, customers began spreading the word, and within months, we had a thriving 
                      community of buyers and sellers.
                    </p>
                    
                    {/* Highlight Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Verified Vendors</div>
                      </div>
                      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Happy Customers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Timeline */}
              <div data-animate id="timeline">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey So Far</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Every milestone represents our commitment to building better connections
                  </p>
                </div>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
                  
                  <div className="space-y-12">
                    {milestones.map((milestone, idx) => {
                      const Icon = milestone.icon
                      const isEven = idx % 2 === 0
                      
                      return (
                        <div
                          key={idx}
                          className={`relative flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-16 items-center group`}
                        >
                          {/* Timeline Dot */}
                          <div className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full ring-4 ring-primary/20 z-10 group-hover:scale-150 transition-transform" />
                          
                          {/* Content */}
                          <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-left' : 'lg:text-right'} pl-16 lg:pl-0`}>
                            <div className="relative group">
                              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                              
                              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-4 mb-3">
                                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                                    <Icon className="text-white w-6 h-6" />
                                  </div>
                                  <div>
                                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{milestone.title}</h4>
                                  </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{milestone.desc}</p>
                                <div className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                  <BadgeCheck className="w-3 h-3" />
                                  {milestone.achievement}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Empty space for alignment */}
                          <div className="hidden lg:block w-1/2" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission & Vision Tab */}
          {activeTab === "mission" && (
            <div className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-8" data-animate id="mission-cards">
                {/* Mission Card */}
                <div className="group relative">
                   
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <Rocket className="text-white w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">What drives us every day</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      To empower local businesses with digital tools and connect them with customers in their neighborhood, 
                      creating thriving local economies where everyone benefits.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Bridge the gap between local shops and digital customers",
                        "Make quality products accessible to every neighborhood",
                        "Support small businesses with zero-commission platform",
                        "Build trust through rigorous vendor verification"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="relative">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group relative">
                   
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <Eye className="text-white w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Where we're heading</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      To become India's most trusted hyper-local marketplace, connecting every neighborhood 
                      with verified local shops by 2028.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "100+", label: "Cities by 2028", icon: Building },
                        { value: "10K+", label: "Free Vendors", icon: Store },
                        { value: "500+", label: "Categories", icon: Gem },
                        { value: "1M+", label: "Happy Customers", icon: Users },
                      ].map((stat, idx) => {
                        const StatIcon = stat.icon
                        return (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 text-center group/stat hover:scale-105 transition-transform">
                            <StatIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* What Drives Us */}
              <div className="relative" data-animate id="drives-us">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl" />
                
                <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    What Drives Us Every Day
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: Users,
                        title: "Community First",
                        desc: "We believe strong local communities start with thriving local businesses",
                        gradient: "from-blue-500 to-indigo-500"
                      },
                      {
                        icon: Shield,
                        title: "Trust Above All",
                        desc: "Every vendor verified, every deal genuine - no exceptions",
                        gradient: "from-emerald-500 to-teal-500"
                      },
                      {
                        icon: Zap,
                        title: "Constant Innovation",
                        desc: "Building better tools to connect shops with customers",
                        gradient: "from-purple-500 to-pink-500"
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <div key={idx} className="text-center group">
                          <div className="relative inline-block">
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                            <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                              <Icon className="text-white w-8 h-8" />
                            </div>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                          
                          {/* Animated underline on hover */}
                          <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 group-hover:w-16 transition-all duration-300" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-animate id="metrics">
                {[
                  { icon: Store, label: "Local Vendors", value: "500+", change: "+25%", gradient: "from-emerald-500 to-teal-500" },
                  { icon: MapPin, label: "Cities", value: "25+", change: "+5", gradient: "from-blue-500 to-indigo-500" },
                  { icon: Users, label: "Active Users", value: "50K+", change: "+40%", gradient: "from-purple-500 to-pink-500" },
                  { icon: TrendingUp, label: "Monthly Growth", value: "32%", change: "+8%", gradient: "from-amber-500 to-orange-500" },
                ].map((metric, idx) => {
                  const Icon = metric.icon
                  return (
                    <div key={idx} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.gradient} bg-opacity-10 flex items-center justify-center mx-auto mb-3`}>
                          <Icon className={`w-6 h-6 text-${metric.gradient.split(' ')[1]}`} />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
                        <div className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                          <TrendingUp className="w-3 h-3" />
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Core Values Tab */}
          {activeTab === "values" && (
            <div data-animate id="values">
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  These principles guide our decisions, shape our culture, and define our commitment to you.
                </p>
              </div>

              {/* Selected Value Preview */}
              <div className="mb-12 group">
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${values[activeValue].gradient} p-8 shadow-2xl`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse delay-700" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                            {(() => {
                              const Icon = values[activeValue].icon
                              return <Icon className="text-white w-8 h-8" />
                            })()}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-1">{values[activeValue].title}</h3>
                            <p className="text-white/80">{values[activeValue].description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {values[activeValue].features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-sm font-medium flex items-center gap-2"
                            >
                              <BadgeCheck className="w-4 h-4" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Crown className="w-5 h-5" />
                          Why this matters:
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 text-sm">Builds lasting trust with our community</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 text-sm">Guides every decision we make</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 text-sm">Sets us apart from traditional marketplaces</span>
                          </div>
                        </div>
                        
                        {/* Value Stats */}
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="flex justify-between items-center text-white">
                            <span className="text-sm opacity-80">{values[activeValue].highlight}</span>
                            <span className="text-sm font-semibold">{values[activeValue].stats}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
                        isActive
                          ? 'scale-[1.02] shadow-2xl ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900'
                          : 'hover:scale-[1.01] hover:shadow-xl'
                      }`}
                      onClick={() => setActiveValue(idx)}
                      onMouseEnter={() => setActiveValue(idx)}
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      
                      {/* Border Gradient */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                          <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                            <Icon className={`w-7 h-7 text-${value.gradient.split(' ')[1]}`} />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{value.description}</p>

                        {/* Features */}
                        <div className="space-y-2 mb-4">
                          {value.features.slice(0, 2).map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs">
                              <CheckCircle className={`w-3 h-3 text-${value.gradient.split(' ')[1]}`} />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Feature Count */}
                        <div className="flex items-center gap-2">
                          <div className={`text-xs font-medium text-${value.gradient.split(' ')[1]} bg-gradient-to-r ${value.gradient} bg-opacity-10 px-2 py-1 rounded-full`}>
                            {value.features.length} core principles
                          </div>
                          
                          {/* Active Indicator */}
                          {isActive && (
                            <div className="flex-1 text-right">
                              <span className="text-xs font-medium text-primary">Selected</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Value Alignment Chart */}
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">How Our Values Align</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { value: "Trust", icon: Shield, color: "emerald", percentage: 95 },
                    { value: "Community", icon: Users, color: "blue", percentage: 92 },
                    { value: "Innovation", icon: Zap, color: "purple", percentage: 88 },
                    { value: "Quality", icon: Gem, color: "amber", percentage: 94 },
                    { value: "Integrity", icon: Scale, color: "cyan", percentage: 96 },
                    { value: "Impact", icon: Target, color: "rose", percentage: 89 },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-gray-200 dark:text-gray-700"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke={`url(#gradient-${item.color})`}
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - item.percentage / 100)}`}
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="relative" data-animate id="cta">
          
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Be Part of Our Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're a local shop owner or a customer looking for great deals, 
                there's a place for you in our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden">
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <span className="relative flex items-center gap-2 justify-center">
                    <Store className="w-5 h-5" />
                    Register Your Shop
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="group relative px-8 py-4 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 overflow-hidden">
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <span className="relative flex items-center gap-2 justify-center">
                    <MapPin className="w-4 h-4" />
                    Find Deals Near Me
                  </span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                {[
                  { icon: ShieldCheck, text: "100% Secure" },
                  { icon: BadgeCheck, text: "Verified Vendors" },
                  { icon: Clock, text: "24/7 Support" },
                ].map((badge, idx) => {
                  const Icon = badge.icon
                  return (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{badge.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -20px) rotate(5deg); }
          66% { transform: translate(-10px, -10px) rotate(-5deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(to right, currentColor 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  )
}