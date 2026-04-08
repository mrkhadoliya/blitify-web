"use client";

import { useState } from "react";
import {
    Shield,
    Lock,
    Eye,
    Cookie,
    Database,
    Settings,
    Bell,
    MapPin,
    Target,
    TrendingUp,
    Share2,
    Globe,
    Mail,
    ChevronRight,
    CheckCircle,
    AlertCircle,
    Building2,
    Phone,
    Server,
    Fingerprint,
    FileText,
    Calendar
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState("introduction");

    const policySections = [
        {
            id: "introduction",
            title: "Introduction",
            icon: Shield,
            color: "from-blue-500/20 to-blue-600/20",
            iconBg: "bg-blue-600",
            content: `At Blitify, we believe that transparency is the foundation of trust. This Privacy Policy outlines how we collect, use, and protect your information when you use our website (https://blitify.com) and our mobile application. By using our platform, you agree to the practices described in this policy.`
        },
        {
            id: "information",
            title: "Information We Collect",
            icon: Database,
            color: "from-purple-500/20 to-purple-600/20",
            iconBg: "bg-purple-600",
            subsections: [
                {
                    title: "A. Personal Identification Information",
                    items: [
                        "Account Details: Name, email address, phone number, and encrypted account password.",
                        "Profile Information: User-defined preferences, saved deals, and interest categories for customized browsing."
                    ]
                },
                {
                    title: "B. Location Data (The Core of Blitify)",
                    items: [
                        "Real-Time Location: Precise GPS data collected with your permission to identify discounts in your immediate vicinity.",
                        "Background Location: Optional background tracking to trigger push notifications when you enter a 'Smart Saving' geofence."
                    ]
                },
                {
                    title: "C. Technical & Usage Data",
                    items: [
                        "Device Info: IP address, device hardware model, operating system, and unique app identifiers.",
                        "App Activity: Interaction logs, including click-through rates on coupons, search history, and navigation patterns."
                    ]
                }
            ]
        },
        {
            id: "usage",
            title: "How We Use Your Information",
            icon: Settings,
            color: "from-green-500/20 to-green-600/20",
            iconBg: "bg-green-600",
            uses: [
                {
                    icon: Target,
                    title: "Personalization",
                    description: "Analyzing your behavior to tailor the 'Deals for You' section specifically to your shopping habits."
                },
                {
                    icon: MapPin,
                    title: "Geofencing",
                    description: "Using location data to alert you of high-value discounts when you are physically near a participating merchant."
                },
                {
                    icon: TrendingUp,
                    title: "Merchant Verification",
                    description: "Providing merchants with anonymized validation data to securely confirm and track coupon redemptions."
                },
                {
                    icon: Bell,
                    title: "Communication",
                    description: "Direct alerts regarding app security, technical updates, and major saving events like festive deals."
                }
            ]
        },
        {
            id: "sharing",
            title: "Data Sharing and Disclosure",
            icon: Share2,
            color: "from-orange-500/20 to-orange-600/20",
            iconBg: "bg-orange-600",
            disclaimer: "We strictly value your privacy. Blitify does not sell your personal data to third-party telemarketers for profit.",
            sharingScenarios: [
                {
                    title: "With Participating Merchants",
                    description: "Sharing unique transaction identifiers with merchants to verify the authenticity of a redeemed offer."
                },
                {
                    title: "Service Providers",
                    description: "Engagement with industry leaders like AWS for cloud hosting and Firebase for real-time app analytics."
                },
                {
                    title: "Legal Compliance",
                    description: "Disclosure to government authorities only when legally mandated to protect our users or comply with Indian law."
                }
            ]
        },
        {
            id: "cookies",
            title: "Tracking Technologies (Cookies)",
            icon: Cookie,
            color: "from-yellow-500/20 to-yellow-600/20",
            iconBg: "bg-yellow-600",
            content: `Blitify utilizes cookies and similar mobile tracking technologies to optimize performance:`,
            features: [
                "Persistent Login: Keeping you signed in across multiple app sessions.",
                "Preferences: Remembering your city, language, and category filters.",
                "UX Improvement: Tracking heatmaps to improve our user interface and experience."
            ],
            note: "Note: You can manage cookie preferences via your browser or device settings, but disabling them may limit your access to premium features."
        },
        {
            id: "security",
            title: "Data Retention & Security",
            icon: Lock,
            color: "from-red-500/20 to-red-600/20",
            iconBg: "bg-red-600",
            retention: "Retention: We retain your data only as long as your account remains active or to fulfill the specific services you have requested.",
            measures: [
                "SSL/TLS encryption for all data in transit.",
                "AES-256 secure hashed storage for sensitive credentials.",
                "Regular security audits to prevent unauthorized database access."
            ],
            disclaimer: "While no digital system is 100% impenetrable, we implement industry-standard safeguards to protect your information."
        },
        {
            id: "rights",
            title: "Your Privacy Rights",
            icon: Eye,
            color: "from-teal-500/20 to-teal-600/20",
            iconBg: "bg-teal-600",
            rights: [
                {
                    title: "The Right to Access",
                    description: "You may request a portable copy of all personal data Blitify holds about you."
                },
                {
                    title: "The Right to Rectification",
                    description: "Update your name, phone, or profile preferences directly within the App Settings."
                },
                {
                    title: "The Right to Erasure",
                    description: "Request full account deletion. Upon verification, we will purge all your personal records from our servers."
                },
                {
                    title: "The Right to Withdraw Consent",
                    description: "Revoke location permissions or opt-out of marketing communications instantly."
                }
            ]
        },
        {
            id: "third-party",
            title: "Third-Party Links",
            icon: Globe,
            color: "from-indigo-500/20 to-indigo-600/20",
            iconBg: "bg-indigo-600",
            content: `Blitify contains links to external merchant websites and physical business locations. We are not responsible for the privacy practices of these external entities and encourage you to review their specific policies.`
        },
        {
            id: "contact",
            title: "Contact Our Privacy Team",
            icon: Mail,
            color: "from-cyan-500/20 to-cyan-600/20",
            iconBg: "bg-cyan-600",
            content: `If you have concerns regarding your data or this policy, please reach out to our team:`,
            contactInfo: {
                entity: "Blitify (Founded by Rohit Kumar Saini)",
                phone: "+91 7410855544",
                website: "https://blitify.com",
                address: "Plot No. 16, Nanu Nagar, Charn Nadi, Benad Road, Murlipura, Jaipur - 302039"
            }
        }
    ];

    const toc = policySections.map(section => ({
        id: section.id,
        title: section.title,
        icon: section.icon
    }));

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header /> 
            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-blue-900/40" />
                <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
                    <div className="max-w-3xl animate-fade-in-up">
                        <div className="flex items-center space-x-2 text-white/90 mb-6">
                            <Shield className="w-6 h-6 text-blue-500" />
                            <span className="w-12 h-0.5 bg-blue-500" />
                            <span className="text-sm uppercase tracking-wider">Trust & Data Safety</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Privacy{" "}
                            <span className="text-blue-500 relative inline-block">
                                Policy
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            We value your data as much as your savings. Discover how Blitify secures your information while helping you find the best local deals.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-8 left-0 right-0">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
                            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long' })} 18, {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-24 bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-100">
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <FileText className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Legal Index</h3>
                                        <p className="text-xs text-gray-500">{policySections.length} Core Sections</p>
                                    </div>
                                </div>
                                <nav className="space-y-2">
                                    {toc.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setActiveSection(item.id);
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeSection === item.id
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "hover:bg-gray-50 text-gray-600"
                                                }`}
                                        >
                                            <item.icon className={`w-4 h-4 ${activeSection === item.id ? "text-blue-600" : "text-gray-600"}`} />
                                            <span className="text-sm font-medium">{item.title}</span>
                                            {activeSection === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content Display */}
                        <div className="lg:w-3/4">
                            <div className="space-y-12">
                                {policySections.map((section) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        className="bg-white rounded-3xl p-8 border border-gray-100 scroll-mt-24 transition-all duration-300"
                                    >
                                        <div className="flex items-start space-x-4 mb-8">
                                            <div className={`w-14 h-14 ${section.iconBg} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                                <section.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
                                                <div className="w-20 h-1 bg-blue-600 rounded-full" />
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            {section.content && <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>}

                                            {section.subsections && (
                                                <div className="space-y-8">
                                                    {section.subsections.map((sub, idx) => (
                                                        <div key={idx} className="space-y-4">
                                                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                                                                {sub.title}
                                                            </h3>
                                                            <ul className="space-y-3">
                                                                {sub.items.map((item, i) => (
                                                                    <li key={i} className="flex items-start space-x-3">
                                                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                                        <span className="text-gray-600 text-sm">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.uses && (
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {section.uses.map((use, idx) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
                                                                <use.icon className="w-5 h-5 text-blue-600" />
                                                            </div>
                                                            <h4 className="font-semibold text-gray-900 mb-2">{use.title}</h4>
                                                            <p className="text-sm text-gray-600">{use.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.sharingScenarios && (
                                                <div className="space-y-6">
                                                    {section.disclaimer && (
                                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start space-x-3">
                                                            <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                            <p className="text-green-800 text-sm font-medium">{section.disclaimer}</p>
                                                        </div>
                                                    )}
                                                    <div className="space-y-4">
                                                        {section.sharingScenarios.map((scenario, idx) => (
                                                            <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                                                <h4 className="font-semibold text-gray-900 mb-2">{scenario.title}</h4>
                                                                <p className="text-sm text-gray-600">{scenario.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {section.features && (
                                                <div className="space-y-4">
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        {section.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center space-x-2">
                                                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                                                <span className="text-gray-600 text-sm">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {section.note && <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-dashed">{section.note}</p>}
                                                </div>
                                            )}

                                            {section.retention && (
                                                <div className="space-y-6">
                                                    <p className="text-gray-600">{section.retention}</p>
                                                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                                            <Server className="w-5 h-5 mr-2 text-blue-600" />
                                                            Active Security Protocol
                                                        </h3>
                                                        <div className="grid sm:grid-cols-2 gap-3 mb-4">
                                                            {section.measures.map((measure, idx) => (
                                                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                                    <Fingerprint className="w-4 h-4 text-blue-600" />
                                                                    <span>{measure}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {section.rights && (
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {section.rights.map((right, idx) => (
                                                        <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                                            <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                                                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                                                                {right.title}
                                                            </h4>
                                                            <p className="text-sm text-gray-600">{right.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.contactInfo && (
                                                <div className="bg-white rounded-2xl p-6 border-2 border-blue-50 shadow-inner grid sm:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <div className="flex items-start space-x-3">
                                                            <Building2 className="w-5 h-5 text-blue-600 mt-1" />
                                                            <div>
                                                                <p className="text-xs font-medium text-gray-600 uppercase tracking-tighter">Registered Entity</p>
                                                                <p className="text-gray-900 font-medium">{section.contactInfo.entity}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <Phone className="w-5 h-5 text-blue-600 mt-1" />
                                                            <div>
                                                                <p className="text-xs font-medium text-gray-600 uppercase tracking-tighter">Priority Support</p>
                                                                <a href={`tel:${section.contactInfo.phone}`} className="text-blue-600 font-medium hover:underline">{section.contactInfo.phone}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="flex items-start space-x-3">
                                                            <Globe className="w-5 h-5 text-blue-600 mt-1" />
                                                            <div>
                                                                <p className="text-xs font-medium text-gray-600 uppercase tracking-tighter">Website</p>
                                                                <a href={section.contactInfo.website} target="_blank" rel="noopener" className="text-blue-600 font-medium hover:underline">blitify.com</a>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                                                            <div>
                                                                <p className="text-xs font-medium text-gray-600 uppercase tracking-tighter">Headquarters</p>
                                                                <p className="text-gray-900 text-sm leading-tight">{section.contactInfo.address}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
        </div>
    );
};

export default PrivacyPolicyPage;