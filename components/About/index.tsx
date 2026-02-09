"use client";

import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Sparkles, Shield, Star, Heart, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Company Overview */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 max-w-3xl mx-auto leading-tight">
              {siteConfig.name}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ScrollReveal delay="delay-0">
            <div className="relative bg-linear-to-br from-[#1a1a1a] to-[#333] p-10 rounded-sm text-white h-full">
              <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                Our Vision
              </h4>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                {siteConfig.vision}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-200">
            <div className="relative bg-linear-to-br from-gray-100 to-gray-50 p-10 rounded-sm h-full border border-gray-200">
              <div className="absolute top-6 right-6 w-16 h-16 border border-black/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">M</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Our Mission
              </h4>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-black">
                {siteConfig.mission}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Our Core Values
            </h4>
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              What Drives Us
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteConfig.coreValues.map((value, index) => (
            <ScrollReveal
              key={index}
              delay={
                index === 1
                  ? "delay-100"
                  : index === 2
                    ? "delay-200"
                    : index === 3
                      ? "delay-300"
                      : index === 4
                        ? "delay-500"
                        : "delay-0"
              }
            >
              <div className="group bg-white border border-gray-200 p-6 rounded-sm text-center hover:shadow-xl hover:border-black/20 transition-all duration-300 h-full">
                <div className="w-14 h-14 mx-auto bg-black text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[value.icon]}
                </div>
                <h5 className="font-bold text-lg mb-2 text-black">
                  {value.title}
                </h5>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
