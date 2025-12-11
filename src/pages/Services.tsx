import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h1>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            End-to-end HR solutions tailored to your business growth stage.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <ScrollReveal key={service.id} delay={index * 80}>
                            <ServiceCard {...service} className="h-full" />
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <div className="mt-16 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-zinc-800 rounded-xl p-10 text-center">
                        <h2 className="text-2xl font-bold text-white mb-3">Need a Custom Solution?</h2>
                        <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto">
                            We understand that every business is unique. Contact us to discuss a bespoke HR strategy.
                        </p>
                        <Button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-black hover:bg-gray-200 px-6 py-5 text-sm"
                        >
                            Talk to an Expert
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Services;
