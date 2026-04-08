"use client";

import { useState } from "react";
import {
  MapPin,
  Globe,
  TrendingUp,
  Users,
  Target,
  Award,
  ShoppingBag,
  Store,
  Smartphone,
  Shield,
  Zap,
  Heart,
  Rocket,
  Coffee,
  Calendar,
  Building2,
  ChevronRight,
  Quote,
  Sparkles,
  ShoppingCart,
  Landmark,
  Network,
  Eye,
  Compass,
  Star,
  CheckCircle,
  Clock,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const AboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(2025);

  const timeline = [
    { year: 2025, event: "Blitify founded in Jaipur", desc: "Started with a vision to empower local businesses" },
    { year: 2026, event: "First 100 merchants onboarded", desc: "Crossed 100 local partners in Jaipur" },
    { year: 2027, event: "1M users milestone", desc: "Reached 1 million happy savers" },
    { year: 2028, event: "Pan-India expansion", desc: "Expanded to 100+ cities across India" }
  ];

  const pillars = [
    {
      icon: MapPin,
      title: "Hyper-Local Intelligence",
      desc: "We use advanced geofencing to highlight value within your immediate ecosystem. The best deals aren't in a shipping container—they're in your neighborhood.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Zap,
      title: "MERN-Powered Experience",
      desc: "Built on MongoDB, Express, React, and Node.js for speed, security, and scalability. Handle millions of real-time redemptions without a glitch.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Economic Empowerment",
      desc: "A growth engine for local economies. We help SMBs compete with global giants by driving foot traffic back to local storefronts.",
      color: "from-green-600 to-teal-600"
    }
  ];

  const values = [
    { icon: Target, title: "Real-Time Accuracy", desc: "No more expired coupons. If it's on Blitify, it's live at the store." },
    { icon: Shield, title: "Zero Hidden Costs", desc: "Complete transparency. What you see is what you save." },
    { icon: Heart, title: "Community First", desc: "A platform built in India, for India, using world-class engineering." },
    { icon: Rocket, title: "Innovation First", desc: "Constantly pushing boundaries to serve our users better." }
  ];

  const stats = [
    { value: "10M+", label: "Transactions", icon: ShoppingCart },
    { value: "50K+", label: "Local Partners", icon: Store },
    { value: "100+", label: "Cities", icon: Globe },
    { value: "4.8★", label: "App Rating", icon: Star }
  ];

  const team = [
    {
      name: "Rohit Kumar Saini",
      role: "Founder & CEO",
      bio: "Former tech lead with a passion for empowering local businesses.",
      image: "/team/rohit.jpg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Priya Sharma",
      role: "Head of Product",
      bio: "Product visionary with 8+ years in consumer tech.",
      image: "/team/priya.jpg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Amit Verma",
      role: "CTO",
      bio: "MERN stack expert scaling systems for millions of users.",
      image: "/team/amit.jpg",
      social: { github: "#", linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              The Future of Hyper-Local Commerce
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
              We're on a Mission to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Empower Local
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Blitify is building the operating system for local savings in India. 
              We connect shoppers with incredible deals from merchants right in their neighborhood.
            </p>
             
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genesis Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10" />
              
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Genesis</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Born in the{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Pink City
                </span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <span className="font-bold text-gray-900">Founded in 2025</span> in the heart of Jaipur, Blitify was born out of a simple observation: while the world was moving toward massive global e-commerce, the soul of Indian commerce—the local neighborhood merchant—was being left behind.
                </p>
                <p className="text-lg">
                  We saw a gap. Customers wanted to save money but didn't know about the incredible deals happening just 500 meters away. Merchants had amazing products but lacked the digital megaphone to reach the smartphones of the people walking past their doors.
                </p>
                <p className="text-lg font-medium text-gray-900">
                  Blitify is that megaphone.
                </p>
              </div>

              {/* Timeline Preview */}
              <div className="mt-8 space-y-4">
                {timeline.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group"
                    onMouseEnter={() => setActiveTimeline(item.year)}
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-black text-lg transition-all duration-300 ${
                      activeTimeline === item.year 
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white scale-110" 
                        : "bg-gray-100 text-gray-400"
                    }`}>
                      {item.year}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                        {item.event}
                      </div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/20" />
                
                {/* City Silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-12 left-12 bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20">
                  <Store className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute bottom-24 right-12 bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20 animate-bounce">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-8xl mb-4">🛍️</div>
                  <div className="text-white text-2xl font-bold">Jaipur • 2025</div>
                </div>

                {/* Map Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30%" cy="40%" r="60" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
                  <circle cx="70%" cy="60%" r="80" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
                </svg>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">First Milestone</div>
                    <div className="font-bold">100 Merchants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Three Pillars of Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on principles that put local communities first
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div 
                key={i}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
                
                <div className="mt-6 flex items-center text-sm font-bold text-gray-400 group-hover:text-blue-500 transition-colors">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                The Operating System for{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Local Savings
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Our vision is to become the operating system for local savings in India. 
                We are starting in Jaipur, but our roadmap is clear: to digitize every 
                "Kirana" store, every boutique, and every local cafe across the nation.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                We want to reach a future where "searching for a deal" doesn't mean 
                opening a search engine, but simply opening Blitify.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <value.icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{value.title}</div>
                      <div className="text-xs text-gray-500">{value.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] p-8 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">By 2028</div>
                    <div className="text-2xl font-bold">100+ Cities</div>
                  </div>
                </div>

                {/* Map Grid */}
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {["Jaipur", "Delhi", "Mumbai", "Bengaluru", "Chennai", "Kolkata", "Pune", "Ahmedabad"].map((city, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-2 text-center text-xs">
                      {city}
                    </div>
                  ))}
                </div>

                {/* Growth Graph */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-sm">2025</div>
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/4 h-full bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-sm">2026</div>
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-2/4 h-full bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-sm">2027</div>
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-sm">2028</div>
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-24 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Store className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="font-bold">Every Kirana Store</div>
                </div>
                <p className="text-sm text-gray-500">
                  Digitizing local businesses across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-24 bg-gradient-to-br from-black to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "At Blitify, we don't measure success by downloads alone. 
            We measure it by the amount of money we keep in the pockets of our users 
            and the amount of growth we bring to our local merchant partners. 
            Blitify is my commitment to making technology work for the common man."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-left">
              <div className="font-black text-xl">Rohit Kumar Saini</div>
              <div className="text-orange-200">Founder of Blitify</div>
            </div>
          </div> 
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">The People</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Meet the Team Behind Blitify
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals building the future of local commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-500" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  <a href={member.social.github} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={member.social.linkedin} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-black to-blue-800 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Join Us in Building the Future</h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Be part of India's most exciting hyper-local commerce platform. 
              Together, we can empower millions of local businesses.
            </p>
             

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@blitify.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7410855544</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;