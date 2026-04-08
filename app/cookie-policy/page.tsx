"use client";

import { useState } from "react";
import { 
  Cookie, 
  ShieldCheck, 
  Info, 
  Settings, 
  Trash2, 
  MousePointer2, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Mail, 
  ChevronRight, 
  CheckCircle, 
  AlertCircle,
  Building2,
  Phone,
  MapPin,
  Calendar,
  Lock,
  Search,
  EyeOff
} from "lucide-react"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const CookiePolicyPage = () => {
  const [activeSection, setActiveSection] = useState("what-are-cookies");

  const policySections = [
    {
      id: "what-are-cookies",
      title: "What are Cookies?",
      icon: Info,
      color: "from-amber-500/20 to-amber-600/20",
      iconBg: "bg-amber-600",
      content: `Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website or use a mobile app. They are widely used to make websites work more efficiently and to provide a better, more personalized experience.`
    },
    {
      id: "how-we-use",
      title: "How Blitify Uses Cookies",
      icon: Cookie,
      color: "from-blue-500/20 to-blue-600/20",
      iconBg: "bg-blue-600",
      content: "At Blitify, we use cookies and similar tracking technologies to enhance your savings journey. They help us understand how you interact with local deals and allow us to remember your preferences.",
      uses: [
        {
          title: "Authentication",
          desc: "To keep you signed in so you don't have to enter your credentials every time you open the app.",
          icon: Lock
        },
        {
          title: "Localization",
          desc: "To remember your preferred city or area so we can show you relevant local discounts immediately.",
          icon: MapPin
        },
        {
          title: "Personalization",
          desc: "To track which categories (Food, Fashion, Tech) you enjoy most and show more of those deals.",
          icon: MousePointer2
        }
      ]
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      icon: ShieldCheck,
      color: "from-purple-500/20 to-purple-600/20",
      iconBg: "bg-purple-600",
      cookieTypes: [
        {
          name: "Essential Cookies",
          status: "Mandatory",
          description: "Necessary for the app to function. They enable basic features like page navigation and access to secure areas."
        },
        {
          name: "Preference Cookies",
          status: "Optional",
          description: "These allow the app to remember information that changes the way the app behaves or looks, like your favorite region."
        },
        {
          name: "Analytics Cookies",
          status: "Performance",
          description: "Help us understand how visitors interact with Blitify by collecting and reporting information anonymously."
        },
        {
          name: "Marketing Cookies",
          status: "Promotional",
          description: "Used to track visitors across websites/apps to display ads that are relevant and engaging for the individual user."
        }
      ]
    },
    {
      id: "third-party",
      title: "Third-Party Cookies",
      icon: Globe,
      color: "from-indigo-500/20 to-indigo-600/20",
      iconBg: "bg-indigo-600",
      content: "In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements.",
      partners: [
        { name: "Google Analytics", purpose: "Web traffic and user behavior analysis." },
        { name: "Firebase", purpose: "App performance monitoring and crash reporting." },
        { name: "Social Media Plugins", purpose: "To allow you to share deals directly on platforms like Instagram or Facebook." }
      ]
    },
    {
      id: "control",
      title: "How to Control Cookies",
      icon: Settings,
      color: "from-green-500/20 to-green-600/20",
      iconBg: "bg-green-600",
      content: "You have the right to decide whether to accept or reject cookies. Most web browsers and mobile devices allow you to manage cookie settings through their preferences.",
      methods: [
        "Browser Settings: You can set your browser to refuse all or some cookies.",
        "Mobile App Permissions: You can manage tracking through the 'Privacy' settings on your iOS or Android device.",
        "Opt-out Tools: Use tools like 'Your Online Choices' to opt-out of interest-based advertising."
      ],
      warning: "Please note that if you choose to reject cookies, you may still use our platform, but your access to some functionality and areas may be restricted."
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
      color: "from-cyan-500/20 to-cyan-600/20",
      iconBg: "bg-cyan-600",
      content: `If you have any questions about our use of cookies, please contact us:`,
      contactInfo: {
        entity: "Blitify (Founded by Rohit Kumar Saini)",
        phone: "+91 7410855544",
        website: "https://blitify.com",
        address: "Plot No. 16, Nanu Nagar, Charn Nadi, Benad Road, Murlipura, Jaipur - 302039"
      }
    }
  ];

  const toc = policySections.map(s => ({ id: s.id, title: s.title, icon: s.icon }));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[350px] overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Compliance</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Cookie <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Policy</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Transparent tracking for a smarter shopping experience. Learn how we use cookies to personalize your Blitify journey.
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 left-4 right-4 max-w-7xl mx-auto">
            <div className="inline-flex items-center text-xs text-gray-500 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Last Updated: February 18, 2026
            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* TOC Sidebar */}
            <aside className="lg:w-1/4">
              <div className="sticky top-28 bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <h4 className="text-xs font-black uppercase tracking-tighter text-gray-400 mb-6 px-2">Navigation</h4>
                <nav className="space-y-1">
                  {toc.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                        activeSection === item.id 
                        ? "bg-white text-blue-600 shadow-sm border-gray-200" 
                        : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4 space-y-16">
              {policySections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${section.iconBg} text-white`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="text-gray-600 text-lg leading-relaxed">
                    {section.content && <p className="mb-8">{section.content}</p>}

                    {section.uses && (
                      <div className="grid sm:grid-cols-3 gap-6">
                        {section.uses.map((use, i) => (
                          <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                            <use.icon className="w-8 h-8 text-blue-600 mb-4" />
                            <h5 className="font-bold text-gray-900 mb-2">{use.title}</h5>
                            <p className="text-sm leading-snug">{use.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.cookieTypes && (
                      <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                        <table className="w-full text-left bg-white">
                          <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-500">
                            <tr>
                              <th className="px-6 py-4">Cookie Type</th>
                              <th className="px-6 py-4">Status</th>
                              <th className="px-6 py-4">Function</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {section.cookieTypes.map((type, i) => (
                              <tr key={i} className="text-sm hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-gray-900">{type.name}</td>
                                <td className="px-6 py-4">
                                  <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${
                                    type.status === 'Mandatory' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                                  }`}>
                                    {type.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{type.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.partners && (
                      <div className="space-y-4">
                        {section.partners.map((p, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                            <span className="font-bold text-gray-900">{p.name}</span>
                            <span className="text-sm italic text-gray-400">{p.purpose}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.methods && (
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-1 gap-3">
                           {section.methods.map((m, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                              <span className="text-sm font-medium">{m}</span>
                            </div>
                          ))}
                        </div>
                        {section.warning && (
                          <div className="flex items-start gap-3 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-800 font-medium">{section.warning}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {section.contactInfo && (
                      <div className="mt-8 p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Company Founders</p>
                              <p className="text-lg font-bold">{section.contactInfo.entity}</p>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                <Phone className="w-5 h-5" />
                              </div>
                              <p className="font-bold">{section.contactInfo.phone}</p>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                <Globe className="w-5 h-5" />
                              </div>
                              <p className="font-bold">blitify.com</p>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-white/10 rounded-lg shrink-0">
                                <MapPin className="w-5 h-5" />
                              </div>
                              <p className="text-sm leading-tight opacity-90">{section.contactInfo.address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;