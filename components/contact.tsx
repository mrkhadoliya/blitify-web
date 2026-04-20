"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, User, MessageSquare, PhoneCall } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
    
    // Show success feedback
    const successEvent = new CustomEvent('show-toast', { 
      detail: { 
        message: "Thank you! Your message has been sent successfully.", 
        type: "success" 
      }
    })
    window.dispatchEvent(successEvent)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <MessageSquare size={16} />
            We're here to help
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
            Get In Touch
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have questions or want to become a vendor? Our team is ready to assist you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "info@blitify.com",
                    color: "bg-blue-500/10 text-blue-600",
                    iconColor: "text-blue-500"
                  },
                  { 
                    icon: Phone, 
                    label: "Phone", 
                    value: "+91-7410855544",
                    color: "bg-green-500/10 text-green-600",
                    iconColor: "text-green-500"
                  },
                  { 
                    icon: MapPin, 
                    label: "Address", 
                    value: "Plot N0. 16 Nanu Nagar Charn Nadi Nehar Ki Dhani Banad Road Murlipura 302039",
                    color: "bg-purple-500/10 text-purple-600",
                    iconColor: "text-purple-500"
                  },
                ].map((contact, idx) => {
                  const Icon = contact.icon
                  return (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                    >
                      <div className={`${contact.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`${contact.iconColor}`} size={22} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground/80 text-sm">{contact.label}</h4>
                        <p className="text-foreground font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
                <div className="space-y-2 text-foreground/70">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </p>
                </div>
              </div>
            </div>
 
          </div>

          {/* Right column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
                <p className="text-foreground/70">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-border/50 bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-border/50 bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneCall className="text-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-border/50 bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <MessageSquare className="text-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-border/50 bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-foreground/50 pt-2">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}