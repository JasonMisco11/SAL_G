import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Home, Building2, Sofa, PanelTop, Box, Hammer } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-7 h-7" />,
  building: <Building2 className="w-7 h-7" />,
  sofa: <Sofa className="w-7 h-7" />,
  window: <PanelTop className="w-7 h-7" />,
  cube: <Box className="w-7 h-7" />,
  hammer: <Hammer className="w-7 h-7" />,
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Our Services
              </h2>
              <h3 className="text-4xl text-black md:text-5xl font-bold tracking-tight max-w-lg leading-tight">
                Comprehensive Interior Solutions
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm text-lg">
              From concept to completion, we deliver exceptional design services
              tailored to your unique vision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
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
                        : index === 5
                          ? "delay-700"
                          : "delay-0"
              }
            >
              <div className="group bg-white p-10 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>

                <h4 className="text-xl font-bold mb-4 text-black">
                  {service.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
