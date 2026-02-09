"use client";

import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Award, Users, Lightbulb, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  lightbulb: <Lightbulb className="w-8 h-8" />,
  "trending-up": <TrendingUp className="w-8 h-8" />,
};

const Goals = () => {
  return (
    <section className="py-24 px-6 bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Goals & Objectives
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black max-w-2xl mx-auto leading-tight">
              Our Commitment to Excellence
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.goals.map((goal, index) => (
            <ScrollReveal
              key={index}
              delay={
                index === 1
                  ? "delay-100"
                  : index === 2
                    ? "delay-200"
                    : index === 3
                      ? "delay-300"
                      : "delay-0"
              }
            >
              <div className="group relative bg-white p-8 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Background number */}
                <span className="absolute -top-4 -right-2 text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                    {iconMap[goal.icon]}
                  </div>

                  <h4 className="text-xl font-bold text-black mb-3">
                    {goal.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
