import React from 'react';
import Hero from '@/components/Hero';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceCard from '@/components/ServiceCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Zap, CheckCircle, Users, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '@/data/services';

const Home = () => {
    const navigate = useNavigate();

    const featuredServices = servicesData.slice(0, 3);

    const whyChooseUs = [
        {
            icon: Users,
            title: "Expert Team",
            description: "Decade of hands-on experience in scaling startups and building high-performance teams."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "End-to-end support for GCC setup and international talent acquisition strategies."
        },
        {
            icon: Shield,
            title: "Compliant Operations",
            description: "100% statutory compliance management across all HR and payroll operations."
        }
    ];

    return (
        <div className="bg-zinc-950 min-h-screen">
            <Hero />

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-20 bg-zinc-900/50">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Why Choose Hyrloop</h2>
                            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                Strategic HR solutions backed by proven expertise and measurable results.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 100} className="h-full" width="100%">
                                <div className="h-full flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-blue-950/50 flex items-center justify-center mb-4">
                                        <item.icon className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-20 bg-zinc-950">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div>
                                <span className="text-blue-500 font-semibold text-xs uppercase tracking-wider mb-2 block">Our Services</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Comprehensive HR Solutions</h2>
                            </div>
                            <Button
                                onClick={() => navigate('/services')}
                                variant="outline"
                                size="sm"
                                className="border-zinc-700 text-white hover:bg-zinc-800 text-sm"
                            >
                                View All <ArrowRight className="ml-2 h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredServices.map((service, index) => (
                            <ScrollReveal key={service.id} delay={index * 100}>
                                <ServiceCard {...service} className="h-full" />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 md:py-20 bg-zinc-900/30">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-blue-500 font-semibold text-xs uppercase tracking-wider mb-3 block">Our Approach</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                    Data-Driven Talent Strategies
                                </h2>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    We don't just fill vacancies—we architect workforce strategies that drive business outcomes. Our proven methodology combines market intelligence, cultural fit assessment, and strategic workforce planning.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Strategic recruitment planning",
                                        "Diversity & inclusion hiring",
                                        "Talent pipeline development",
                                        "Interview process optimization"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    onClick={() => navigate('/about')}
                                    variant="outline"
                                    size="sm"
                                    className="border-zinc-700 text-white hover:bg-zinc-800 text-sm"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-10 blur-2xl"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                    alt="Team collaboration"
                                    className="relative rounded-lg border border-zinc-800 shadow-xl w-full"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-zinc-950">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-zinc-800 rounded-2xl p-10 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Scale Your Team?
                            </h2>
                            <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
                                Let's discuss how our strategic HR solutions can accelerate your growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => navigate('/contact')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-sm"
                                >
                                    <Zap className="w-4 h-4 mr-2" />
                                    Get Free Consultation
                                </Button>
                                <Button
                                    onClick={() => navigate('/services')}
                                    variant="outline"
                                    className="border-zinc-700 text-white hover:bg-zinc-800 px-6 py-5 text-sm"
                                >
                                    View Services
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
