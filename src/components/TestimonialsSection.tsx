import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Users, TrendingUp, Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const TestimonialsSection = () => {
  const clientLogos = [
    { src: "/images/client_logo.jpeg", alt: "QTEN", name: "QTEN" },
    { src: "/images/sterco_client.png", alt: "Sterco", name: "Sterco" },
    { src: "/images/logo_appzlogic.png", alt: "Appzlogic", name: "Appzlogic" },
    { src: "/images/liberin_logo.png", alt: "Liberin", name: "Liberin" },
    { src: "/images/Mrida hi-res Logo.avif", alt: "Mrida", name: "Mrida" },
    { src: "/images/2careai.svg", alt: "2Care.ai", name: "2Care.ai" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Industries", icon: Star }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto relative z-10 px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="text-center">
          <ScrollReveal>
            <Badge className="mb-8 bg-blue-500/10 text-blue-400 px-4 py-2 border-blue-500/20 text-sm font-medium hover:bg-blue-500/20 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Industry Leaders</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <ScrollReveal key={index} delay={index * 100 + 200} className="w-full flex justify-center">
                <div className="group w-full max-w-[160px]">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 h-32 flex flex-col items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
