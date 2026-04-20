"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight, Heart, Shield, Globe, CreditCard, Sparkles, Send, Award, Users, Zap } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribed:", email)
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Categories", href: "#categories" },
    { label: "Vendors", href: "#vendors" },
    { label: "Deals", href: "#deals" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Vendor Guide", href: "#" },
    { label: "Community", href: "#" }, 
  ]

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" }, 
  ]

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "/careers" }, 
    { label: "Partners", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Investors", href: "#" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@blitify.com" },
    { icon: Phone, label: "Phone", value: "+91-7410855544" },
    { icon: MapPin, label: "Address", value: "Plot No. 16, Nanu Nagar, Charn Nadi, Benad Road, Murlipura, Jaipur - 302039" },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ]

  const features = [
    { icon: Shield, label: "Secure Payments", color: "text-green-500" },
    { icon: Globe, label: "Global Reach", color: "text-blue-500" },
    { icon: CreditCard, label: "Flexible Payments", color: "text-purple-500" },
    { icon: Award, label: "Verified Vendors", color: "text-amber-500" },
    // { icon: Users, label: "Community Driven", color: "text-pink-500" },
    { icon: Zap, label: "Fast Support", color: "text-red-500" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white to-white/95 border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Newsletter */}
        <div className="mb-16 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles size={16} />
                  Stay Updated
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Never Miss a
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Great Deal</span>
                </h3>
                <p className="text-foreground/70">
                  Subscribe to our newsletter and be the first to know about exclusive offers and new vendors.
                </p>
              </div>
              
              <div>
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-6 py-4 rounded-xl border-2 border-border/50 bg-background/50 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
                      required
                    />
                    <button
                      type="submit"
                      className="group bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                    >
                      {isSubscribed ? "Subscribed!" : "Subscribe"}
                      <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                  </div>
                  {isSubscribed && (
                    <p className="mt-3 text-sm text-green-500 animate-fade-in">
                      ✅ Thank you for subscribing!
                    </p>
                  )}
                </form>
                <p className="mt-3 text-sm text-foreground/60">
                  By subscribing, you agree to our Privacy Policy. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <div className="text-white font-bold text-xl">B</div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Blitify</h2>
                <p className="text-sm text-foreground/60">Local. Trusted. Amazing.</p>
              </div>
            </div>
            
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Blitify connects you with amazing local vendors and exclusive deals. 
              We're building a community where businesses thrive and customers save.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {features.slice(0, 3).map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`${feature.color}`} size={16} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((contact, idx) => {
                const Icon = contact.icon
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60">{contact.label}</div>
                      <div className="font-medium text-foreground">{contact.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-foreground mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${feature.color.replace('text', 'bg')}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={feature.color} size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{feature.label}</div>
                      <div className="text-xs text-foreground/60">Learn more</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-foreground/70">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className="group w-10 h-10 rounded-xl border border-border/50 bg-background/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="text-foreground/70 group-hover:text-primary" size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.slice(0, 4).map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-foreground/60 text-sm">
                © {new Date().getFullYear()} Blitify. All rights reserved. 
                <span className="hidden md:inline"> Connecting communities with amazing local businesses.</span>
              </p>
                
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-sm text-foreground/60">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  )
}