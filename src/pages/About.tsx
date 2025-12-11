import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Users, Handshake, Briefcase, Shield, CheckCircle, Brain } from 'lucide-react';

const About = () => {
    const stats = [
        { number: "500+", label: "Startups Helped" },
        { number: "95%", label: "Client Satisfaction" },
        { number: "10+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" }
    ];

    const expertiseAreas = [
        { name: 'Talent Acquisition', icon: Users, color: 'text-blue-400', bg: 'bg-blue-950/50' },
        { name: 'HR Tech', icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-950/50' },
        { name: 'Compensation', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-950/50' },
        { name: 'Compliance', icon: Shield, color: 'text-red-400', bg: 'bg-red-950/50' },
        { name: 'People Strategy', icon: Handshake, color: 'text-indigo-400', bg: 'bg-indigo-950/50' },
        { name: 'Culture Building', icon: Brain, color: 'text-teal-400', bg: 'bg-teal-950/50' },
    ];

    return (
        <div className="bg-zinc-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">

                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Strategic HR <span className="text-blue-500">Excellence</span>
                        </h1>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
                            A decade of hands-on experience building and scaling exceptional teams for high-growth startups.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={index * 80}>
                            <div className="text-center p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                <div className="text-3xl font-bold text-blue-500 mb-1">{stat.number}</div>
                                <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <ScrollReveal>
                        <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-purple-950/40"></div>
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                                alt="Team Collaboration"
                                className="w-full rounded-lg opacity-90"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={150}>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">Why Choose Hyrloop?</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Our expertise spans the full spectrum of HR services, tailored for startups and high-growth companies. We understand the unique demands of fast-moving businesses.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                                {[
                                    "Talent Acquisition",
                                    "Employer Branding",
                                    "Org Restructuring",
                                    "Performance Mgmt",
                                    "HR Tech Stack",
                                    "Compensation Design"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm">
                                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Expertise Grid */}
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-white mb-2">Core Expertise</h2>
                        <p className="text-sm text-gray-400">Specialized knowledge across key HR domains</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {expertiseAreas.map((area, index) => (
                            <div key={index} className="p-5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`p-3 rounded-lg ${area.bg} ${area.color}`}>
                                        <area.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold text-white text-sm">{area.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
};

export default About;
