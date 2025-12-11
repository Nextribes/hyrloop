import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-zinc-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">

                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in Touch</h1>
                        <p className="text-sm text-gray-400 max-w-xl mx-auto">
                            Ready to transform your HR strategy? Reach out through any of the channels below.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {/* Office */}
                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors text-center group">
                                <div className="inline-flex p-3 bg-blue-950/50 rounded-lg text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">Visit Us</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    F 606, Jaipuria Sunrise Greens<br />
                                    Indirapuram, Ghaziabad<br />
                                    UP, India
                                </p>
                            </div>

                            {/* Email */}
                            <a href="mailto:info@hyrloop.com" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors text-center group">
                                <div className="inline-flex p-3 bg-purple-950/50 rounded-lg text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">Email Us</h3>
                                <p className="text-sm text-gray-400">info@hyrloop.com</p>
                                <p className="text-xs text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Click to send →</p>
                            </a>

                            {/* Phone */}
                            <a href="https://wa.me/919555624372" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors text-center group">
                                <div className="inline-flex p-3 bg-green-950/50 rounded-lg text-green-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">Call / WhatsApp</h3>
                                <p className="text-sm text-gray-400">+91 95556 24372</p>
                                <p className="text-xs text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Click to chat →</p>
                            </a>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg h-80 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-950/10 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-3 opacity-40" />
                                    <p className="text-gray-500 text-sm">Map Integration Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
