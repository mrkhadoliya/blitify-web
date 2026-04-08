"use client";

import { useState } from "react";
import {
    Briefcase,
    Rocket,
    Users,
    Code2,
    Laptop,
    Globe,
    Heart,
    Zap,
    Coffee,
    MapPin,
    ChevronRight,
    MessageCircle,
    Phone,
    Building2,
    Calendar,
    Layers,
    Terminal,
    ArrowRight,
    Sparkles,
    GraduationCap,
    Target,
    Clock,
    Wifi,
    Github,
    Linkedin,
    Twitter,
    Mail,
    CheckCircle,
    Star,
    Award
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const CareersPage = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            id: "mern-stack",
            title: "MERN Stack Developer",
            type: "Full-Time",
            location: "Jaipur (Hybrid)",
            category: "Engineering",
            icon: Terminal,
            level: "Mid-Level",
            salary: "₹8-15 LPA",
            posted: "2 days ago",
            description: "We are looking for a JavaScript wizard to build scalable web applications using MongoDB, Express, React, and Node.js.",
            requirements: ["2+ years of experience with MERN", "Strong JS/ES6+ skills", "API integration", "Self-starter attitude"],
            benefits: ["Health Insurance", "Flexible Hours", "Learning Budget", "Equity Options"]
        },
        {
            id: "full-stack",
            title: "Full Stack Developer",
            type: "Full-Time",
            location: "Jaipur (In-Office)",
            category: "Engineering",
            icon: Code2,
            level: "Senior-Level",
            salary: "₹15-25 LPA",
            posted: "1 week ago",
            description: "Join us to bridge the gap between frontend and backend. You will own features from design to deployment.",
            requirements: ["Proficiency in React & Node.js", "Knowledge of SQL/NoSQL", "Basic DevOps understanding", "Fast learner"],
            benefits: ["Health Insurance", "Flexible Hours", "Learning Budget", "Equity Options"]
        },
        {
            id: "product-designer",
            title: "Product Designer",
            type: "Full-Time",
            location: "Jaipur (Remote)",
            category: "Design",
            icon: Layers,
            level: "Mid-Level",
            salary: "₹10-18 LPA",
            posted: "3 days ago",
            description: "Create beautiful, intuitive experiences for our users. You'll own the design process from research to pixel-perfect implementation.",
            requirements: ["3+ years UI/UX experience", "Figma expertise", "User research skills", "Portfolio of work"],
            benefits: ["Health Insurance", "Flexible Hours", "Learning Budget", "Equity Options"]
        }
    ];

    const perks = [
        { icon: Zap, title: "Ownership Mindset", desc: "Take full control of the modules you build. Your ideas matter here." },
        { icon: Laptop, title: "Hybrid First", desc: "Flexibility to work from home or our vibrant Jaipur office." },
        { icon: Rocket, title: "Hyper Growth", desc: "Be part of an early-stage team and grow exponentially with the brand." },
        { icon: Coffee, title: "Startup Culture", desc: "No bureaucracy. Just pure innovation, great coffee, and amazing people." },
        { icon: Target, title: "Impact-Driven", desc: "Work on features that directly impact millions of local shoppers." },
        { icon: GraduationCap, title: "Learning Fund", desc: "Annual budget for courses, conferences, and books." }
    ];

    const teamValues = [
        { icon: Heart, title: "User First", desc: "We build for real people, not just metrics." },
        { icon: Rocket, title: "Move Fast", desc: "Ship, learn, iterate, repeat." },
        { icon: Users, title: "Collaborative", desc: "Great ideas come from teamwork." },
        { icon: Award, title: "Excellence", desc: "We take pride in our craft." }
    ];

    const filteredJobs = activeTab === "all"
        ? jobs
        : jobs.filter(job => job.category === activeTab);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Gradient */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-200">
                                <Sparkles className="w-4 h-4" />
                                🚀 We're Building the Future
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
                                Shape the Future of{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Local Commerce
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                                Join Blitify's core team in Jaipur and help us revolutionize how 100M+ Indians discover and support local businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Us - Enhanced */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Why Blitify</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            More Than Just a Job
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're building a culture where you can do your best work, grow fast, and have fun along the way.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {perks.map((perk, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 cursor-pointer"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    <perk.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Team Values */}
                    <div className="mt-20 grid md:grid-cols-4 gap-6">
                        {teamValues.map((value, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-6 h-6 text-gray-700" />
                                </div>
                                <h5 className="font-bold text-gray-900 mb-1">{value.title}</h5>
                                <p className="text-sm text-gray-500">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings Section with Tabs */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Join Our Team</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Current Openings</h2>
                            <p className="text-gray-500 text-lg">Be part of our founding team and shape the future.</p>
                        </div>
                        <div className="flex bg-white p-1 rounded-2xl shadow-sm">
                            <button
                                onClick={() => setActiveTab("all")}
                                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "all" ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:text-gray-900"}`}
                            >
                                All Roles ({jobs.length})
                            </button>
                            <button
                                onClick={() => setActiveTab("Engineering")}
                                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "Engineering" ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:text-gray-900"}`}
                            >
                                Engineering ({jobs.filter(j => j.category === "Engineering").length})
                            </button>
                            <button
                                onClick={() => setActiveTab("Design")}
                                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "Design" ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:text-gray-900"}`}
                            >
                                Design ({jobs.filter(j => j.category === "Design").length})
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {filteredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="group bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                        <job.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                                {job.posted}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 mb-4 max-w-2xl">{job.description}</p>

                                        <div className="flex flex-wrap gap-4 mb-4">
                                            <span className="flex items-center gap-1.5 text-sm text-gray-500">
                                                <MapPin className="w-4 h-4 text-blue-500" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-sm text-gray-500">
                                                <Briefcase className="w-4 h-4 text-blue-500" /> {job.type}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-sm text-gray-500">
                                                <Clock className="w-4 h-4 text-blue-500" /> {job.level}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-sm text-gray-500">
                                                <Star className="w-4 h-4 text-blue-500" /> {job.salary}
                                            </span>
                                        </div>

                                        {/* Requirements */}
                                        <div className="mb-4">
                                            <div className="text-sm font-bold text-gray-700 mb-2">Requirements:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.map((req, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="flex flex-wrap gap-2">
                                            {job.benefits.map((benefit, i) => (
                                                <span key={i} className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
                                                    <CheckCircle className="w-3 h-3" />
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="lg:self-center">
                                        <Button className="bg-gray-900 hover:bg-blue-600 text-white rounded-xl px-8 py-6 font-bold group-hover:shadow-xl transition-all whitespace-nowrap">
                                            Apply Now
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No jobs message */}
                    {filteredJobs.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No openings in this category</h3>
                            <p className="text-gray-500 mb-6">But we're always looking for talented people!</p>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl">
                                Submit General Application
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Simple & Transparent</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Hiring Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We keep it simple and respect your time. Here's what to expect.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Apply", desc: "Submit your application with portfolio" },
                            { step: "02", title: "Chat", desc: "30-min call with our hiring team" },
                            { step: "03", title: "Technical", desc: "Practical assessment or take-home project" },
                            { step: "04", title: "Meet", desc: "Final chat with founders" }
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                <div className="text-5xl font-black text-blue-400 mb-4">{step.step}</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-gray-500">{step.desc}</p>
                                {i < 3 && (
                                    <ChevronRight className="hidden md:block absolute -right-4 top-8 w-6 h-6 text-gray-300" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Contact Section - Enhanced */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-black rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">

                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Don't see a role for you?</h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            We're always excited to connect with passionate people. If you think you'd be a great fit for Blitify, reach out directly to our founding team.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                            <a
                                href="https://wa.me/917410855544"
                                className="flex items-center gap-3 bg-white text-blue-600 px-8 py-5 rounded-2xl font-medium hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Chat on WhatsApp
                            </a>
                            <a
                                href="mailto:careers@blitify.com"
                                className="flex items-center gap-3 bg-white/10 backdrop-blur text-white px-8 py-5 rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
                            >
                                <Mail className="w-6 h-6" />
                                careers@blitify.com
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+91 7410855544</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Jaipur, Rajasthan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                <span>Founded 2025</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4 mt-8">
                            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;