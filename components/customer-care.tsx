"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, ChevronRight, Zap, Users, Headphones, Bot, CheckCircle, Star, Target, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function CustomerCare() {
  const [activeService, setActiveService] = useState(0)
  
  const supportStats = [
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "< 2 min", label: "Average Response", icon: Zap },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "10K+", label: "Issues Resolved", icon: CheckCircle },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line to our expert team",
      contact: "+91-7410855544",
      subtext: "Mon-Fri: 9 AM - 8 PM EST",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
      delay: "animate-delay-100"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with real agents",
      contact: "Start Chat Now",
      subtext: "Average response: 45 seconds",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500/10",
      delay: "animate-delay-200"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed written support",
      contact: "info@blitify.com",
      subtext: "Response within 2 hours",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10",
      delay: "animate-delay-300"
    },
  ]

  const services = [
    {
      icon: Shield,
      title: "Account & Security",
      description: "Help with account setup, password recovery, and security concerns",
      features: ["2FA Setup", "Security Audit", "Recovery Options"]
    },
    {
      icon: Clock,
      title: "Order & Delivery",
      description: "Track orders, check delivery status, and resolve shipping issues",
      features: ["Live Tracking", "Delivery Updates", "Schedule Changes"]
    },
    {
      icon: Headphones,
      title: "Refunds & Returns",
      description: "Process refunds, manage returns, and handle payment issues",
      features: ["Instant Refunds", "Return Portal", "Payment Protection"]
    },
    {
      icon: Bot,
      title: "Technical Support",
      description: "Troubleshoot app or website issues and get technical assistance",
      features: ["24/7 AI Help", "Live Debugging", "Update Support"]
    },
    {
      icon: Users,
      title: "Vendor Complaints",
      description: "Report vendor issues, quality concerns, and get fair resolution",
      features: ["Mediation Service", "Quality Checks", "Fair Resolution"]
    },
    {
      icon: Target,
      title: "Location Services",
      description: "Find nearby vendors, check service areas, and delivery coverage",
      features: ["Live Coverage", "Service Maps", "Zone Updates"]
    },
  ]

  const faqs = [
    { question: "How quickly will I get a response?", answer: "Live chat: < 1 min, Phone: Instant, Email: < 2 hours" },
    { question: "Is support available 24/7?", answer: "Yes, our live chat and emergency support are available 24/7" },
    { question: "Can I speak to a manager?", answer: "Escalation requests are processed within 30 minutes during business hours" },
    { question: "Do you support multiple languages?", answer: "Yes, we offer support in English, Spanish, French, and German" },
  ]

  return (
    <section id="customer-care" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Headphones className="text-primary" size={18} />
            <span className="text-primary font-semibold">Always Here To Help</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Customer Care
            </span>
            <br />
            <span className="text-foreground">That Actually Cares</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Get instant support from our dedicated team. We're committed to solving your issues 
            quickly and efficiently, with a focus on your satisfaction.
          </p>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {supportStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx}
                className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Methods - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <div 
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-up ${method.delay}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80" />
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className={`${method.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-foreground" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{method.title}</h3>
                  <p className="text-foreground/70 mb-6">{method.description}</p>
                  
                  <div className="space-y-3">
                    <div className="text-lg font-semibold text-foreground bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg">
                      {method.contact}
                    </div>
                    <p className="text-sm text-foreground/60">{method.subtext}</p>
                  </div>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Connect Now
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">How We Can Help</h2>
              <p className="text-foreground/60">Select a service category to get started</p>
            </div>
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeService === idx 
                      ? 'bg-primary w-6' 
                      : 'bg-border hover:bg-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border border-border/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl cursor-pointer ${
                    activeService === idx ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="text-foreground/30" size={18} />
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform ${
                      activeService === idx ? 'bg-primary/20' : ''
                    }`}>
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-foreground/70 mb-4">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, fIdx) => (
                          <span 
                            key={fIdx}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
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
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl border border-border/50 p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h4>
                    <p className="text-foreground/70 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-center text-foreground/60">
              Still have questions?{" "}
              <button className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                View full FAQ <ChevronRight size={16} />
              </button>
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Need Immediate Assistance?</h3>
              <p className="text-foreground/70">Our emergency support line is always available</p>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
              <Phone size={18} />
              Call Emergency Support
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
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
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        
        .animate-delay-200 {
          animation-delay: 200ms;
        }
        
        .animate-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  )
}