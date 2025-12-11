import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '@/data/services';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Zap } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                <Button onClick={() => navigate('/services')} variant="outline">
                    Back to Services
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-zinc-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <ScrollReveal>
                    <Button
                        onClick={() => navigate('/services')}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white mb-8 pl-0 group text-sm"
                    >
                        <ArrowLeft className="mr-2 h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Button>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <ScrollReveal>
                        <div className={`inline-flex p-3 rounded-lg ${service.bgColor} ${service.color} mb-6`}>
                            <service.icon className="h-6 w-6" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
                            {service.fullDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                onClick={() => navigate('/contact')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-sm"
                            >
                                Get Started
                                <Zap className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                onClick={() => navigate('/services')}
                                variant="outline"
                                className="border-zinc-700 text-white hover:bg-zinc-800 px-6 py-5 text-sm"
                            >
                                All Services
                            </Button>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal delay={150}>
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mb-4">What We Offer</h3>
                                <div className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={250}>
                            <div className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border border-zinc-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Key Benefits</h3>
                                <div className="space-y-3">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                                            <span className="text-sm text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
