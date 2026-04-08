"use client";

import { useState } from "react";
import {
    FileText,
    Scale,
    UserPlus,
    Tag,
    Ban,
    Copyright,
    ShieldAlert,
    Briefcase,
    RefreshCw,
    Gavel,
    Contact,
    ChevronRight,
    CheckCircle,
    AlertTriangle,
    Building2,
    Phone,
    Globe,
    MapPin,
    Calendar,
    Lock,
    Handshake,
    Percent
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const TermsOfServicePage = () => {
    const [activeSection, setActiveSection] = useState("introduction");

    const tosSections = [
        {
            id: "introduction",
            title: "Introduction",
            icon: Handshake,
            color: "from-blue-500/20 to-blue-600/20",
            iconBg: "bg-blue-600",
            content: `Welcome to Blitify! These Terms of Service ("Terms") govern your access to and use of the Blitify mobile application, the website https://blitify.com, and any related services (collectively, the "Service"). By accessing or using Blitify, you agree to be bound by these Terms. If you do not agree, please do not use our Service.`
        },
        {
            id: "description",
            title: "1. Description of Service",
            icon: Tag,
            color: "from-purple-500/20 to-purple-600/20",
            iconBg: "bg-purple-600",
            content: "Blitify is a digital platform that aggregates and displays discounts, coupons, and promotional offers from local merchants and third-party businesses ('Merchants').",
            notes: [
                "Blitify acts as a directory service only.",
                "We do not sell products or services directly.",
                "We do not fulfill the offers listed on the platform; fulfillment is the Merchant's responsibility."
            ]
        },
        {
            id: "accounts",
            title: "2. User Accounts",
            icon: UserPlus,
            color: "from-green-500/20 to-green-600/20",
            iconBg: "bg-green-600",
            details: [
                {
                    title: "Account Creation",
                    description: "You may be required to create an account to access certain features. You must provide accurate and current information."
                },
                {
                    title: "Responsibility",
                    description: "You are solely responsible for all activity under your account. Notify us immediately of any unauthorized use."
                },
                {
                    title: "Termination",
                    description: "We reserve the right to suspend or terminate your account at our discretion for conduct that violates these Terms."
                }
            ]
        },
        {
            id: "discounts",
            title: "3. Nature of Discounts",
            icon: Percent,
            color: "from-orange-500/20 to-orange-600/20",
            iconBg: "bg-orange-600",
            points: [
                "Third-Party Fulfillment: Merchants are solely responsible for honoring discounts and product quality.",
                "No Guarantee: Blitify does not guarantee that a Merchant will honor a listed discount. Prices are subject to change.",
                "Disputes: Any purchase disputes must be resolved directly between the User and the Merchant."
            ]
        },
        {
            id: "conduct",
            title: "4. Prohibited Conduct",
            icon: Ban,
            color: "from-red-500/20 to-red-600/20",
            iconBg: "bg-red-600",
            warnings: [
                { title: "Fraud", desc: "Engaging in fraudulent activities or misrepresenting identity." },
                { title: "Data Mining", desc: "Using robots or spiders to 'scrape' data for commercial purposes." },
                { title: "Abuse", desc: "Posting defamatory, obscene, or infringing content." },
                { title: "Security", desc: "Attempting to bypass security measures or disrupt servers." }
            ]
        },
        {
            id: "ip",
            title: "5. Intellectual Property",
            icon: Copyright,
            color: "from-yellow-500/20 to-yellow-600/20",
            iconBg: "bg-yellow-600",
            content: "All content on Blitify, including the 'Blitify' name, logo, software, and graphics, is the exclusive property of Blitify and its founders. We grant you a limited, non-transferable license for personal, non-commercial use only."
        },
        {
            id: "liability",
            title: "6. Limitation of Liability",
            icon: ShieldAlert,
            color: "from-teal-500/20 to-teal-600/20",
            iconBg: "bg-teal-600",
            disclaimers: [
                "No liability for indirect, incidental, or punitive damages.",
                "No liability for loss of data, profits, or goodwill.",
                "No liability for issues arising from Merchant products or services.",
                "No liability for errors or omissions in platform content."
            ]
        },
        {
            id: "modifications",
            title: "7. Modifications",
            icon: RefreshCw,
            color: "from-indigo-500/20 to-indigo-600/20",
            iconBg: "bg-indigo-600",
            content: "Blitify is a dynamic platform. We reserve the right to modify, suspend, or discontinue any part of the Service (including specific features or deal availability) at any time without notice."
        },
        {
            id: "law",
            title: "8. Governing Law",
            icon: Gavel,
            color: "from-gray-500/20 to-gray-600/20",
            iconBg: "bg-gray-800",
            content: "These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan."
        },
        {
            id: "contact",
            title: "9. Contact Information",
            icon: Contact,
            color: "from-cyan-500/20 to-cyan-600/20",
            iconBg: "bg-cyan-600",
            content: "If you have any questions about these Terms, please contact us:",
            contactInfo: {
                entity: "Blitify (Founded by Rohit Kumar Saini)",
                phone: "+91 7410855544",
                website: "https://blitify.com",
                address: "Plot No. 16, Nanu Nagar, Charn Nadi, Benad Road, Murlipura, Jaipur - 302039"
            }
        }
    ];

    const toc = tosSections.map(s => ({ id: s.id, title: s.title, icon: s.icon }));

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-blue-900/40" />
                <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
                    <div className="max-w-3xl animate-fade-in">
                        <div className="flex items-center space-x-2 text-blue-500 mb-6">
                            <Scale className="w-6 h-6" />
                            <span className="w-12 h-0.5 bg-blue-500" />
                            <span className="text-sm uppercase tracking-widest font-bold">Legal Agreement</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Terms of <span className="text-blue-500">Service</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Please read these terms carefully before using the Blitify platform.
                        </p>
                    </div>
                    <div className="absolute bottom-8 left-0 right-0">
                        <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 text-sm text-white border border-white/10">
                            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                            Effective Date: February 18, 2026
                        </div>
                    </div>
                </div>

            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-24 bg-white rounded-3xl p-6 border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-6 px-4">Legal Navigation</h3>
                                <nav className="space-y-1">
                                    {toc.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setActiveSection(item.id);
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all ${activeSection === item.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:w-3/4 space-y-8">
                            {tosSections.map((section) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="bg-white rounded-3xl p-8 border border-gray-100 scroll-mt-24"
                                >
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className={`${section.iconBg} p-3 rounded-2xl`}>
                                            <section.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                                    </div>

                                    <div className="prose prose-blue max-w-none text-gray-600">
                                        {section.content && <p className="text-lg leading-relaxed">{section.content}</p>}

                                        {section.notes && (
                                            <ul className="mt-4 space-y-2">
                                                {section.notes.map((note, i) => (
                                                    <li key={i} className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                        <span>{note}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {section.details && (
                                            <div className="grid md:grid-cols-3 gap-4 mt-6">
                                                {section.details.map((detail, i) => (
                                                    <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                                        <h4 className="font-bold text-gray-900 mb-2">{detail.title}</h4>
                                                        <p className="text-sm">{detail.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.points && (
                                            <div className="space-y-3 mt-4">
                                                {section.points.map((p, i) => (
                                                    <div key={i} className="flex items-start space-x-3 bg-blue-50/50 p-4 rounded-xl">
                                                        <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                                        <p className="text-sm font-medium text-blue-900">{p}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.warnings && (
                                            <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                                {section.warnings.map((w, i) => (
                                                    <div key={i} className="flex items-start space-x-3 p-4 border border-red-100 rounded-2xl bg-red-50/30">
                                                        <Ban className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                                        <div>
                                                            <p className="font-bold text-gray-900">{w.title}</p>
                                                            <p className="text-xs">{w.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.disclaimers && (
                                            <div className="mt-6 grid sm:grid-cols-2 gap-3">
                                                {section.disclaimers.map((d, i) => (
                                                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                                                        <ShieldAlert className="w-4 h-4 text-teal-600" />
                                                        <span>{d}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.contactInfo && (
                                            <div className="mt-6 bg-white rounded-2xl p-6 border-2 border-blue-50 shadow-inner grid sm:grid-cols-2 gap-6">
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
                                            // <div className="mt-8 bg-blue-600 rounded-3xl p-8 text-white">
                                            //     <div className="grid sm:grid-cols-2 gap-8">
                                            //         <div className="space-y-4">
                                            //             <div className="flex items-center space-x-3">
                                            //                 <Building2 className="w-5 h-5 opacity-70" />
                                            //                 <p className="font-medium">{section.contactInfo.entity}</p>
                                            //             </div>
                                            //             <div className="flex items-center space-x-3">
                                            //                 <Phone className="w-5 h-5 opacity-70" />
                                            //                 <p className="font-medium">{section.contactInfo.phone}</p>
                                            //             </div>
                                            //         </div>
                                            //         <div className="space-y-4">
                                            //             <div className="flex items-center space-x-3">
                                            //                 <Globe className="w-5 h-5 opacity-70" />
                                            //                 <p className="font-medium">{section.contactInfo.website}</p>
                                            //             </div>
                                            //             <div className="flex items-center space-x-3">
                                            //                 <MapPin className="w-5 h-5 opacity-70" />
                                            //                 <p className="text-sm">{section.contactInfo.address}</p>
                                            //             </div>
                                            //         </div>
                                            //     </div>
                                            // </div>

                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.7s ease-out; }
      `}</style>
        </div>
    );
};

export default TermsOfServicePage;