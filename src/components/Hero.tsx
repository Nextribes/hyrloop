import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-[550px] flex items-center overflow-hidden bg-zinc-950">
            {/* Checkered Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(45deg, #ffffff 25%, transparent 25%),
            linear-gradient(-45deg, #ffffff 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #ffffff 75%),
            linear-gradient(-45deg, transparent 75%, #ffffff 75%)
          `,
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                }} />
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20" />

            {/* Floating Orbs */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-900/50 text-blue-400 text-xs font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse" />
                        Strategic HR & Talent Solutions
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                        Building High-Performance
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                            Teams for Growth
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                        We partner with startups and enterprises to solve complex talent challenges—from strategic recruitment to GCC setup and HR transformation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={() => navigate('/services')}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-sm font-medium shadow-lg shadow-blue-900/20"
                        >
                            Explore Services
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            onClick={() => navigate('/contact')}
                            variant="outline"
                            size="lg"
                            className="border-zinc-700 text-white hover:bg-zinc-800 px-6 py-5 text-sm font-medium"
                        >
                            <Play className="mr-2 h-4 w-4" />
                            Get Started
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-8 mt-12 pt-8 border-t border-zinc-800">
                        <div>
                            <div className="text-2xl font-bold text-white">500+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Successful Placements</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">95%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Client Retention</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">10+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
