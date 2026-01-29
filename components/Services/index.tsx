import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal"; 

const Services = () => {
  return (
    // ID for navigation linking
    <section id="services" className="py-24 px-6 bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header with Animation */}
        <ScrollReveal>
            
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">

            <h1 className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-1" >
                  <span className="text-black  hover:text-gray-600 hover:border-gray-400 transition-colors">Services</span>  
            </h1>
            <h2 className="text-4xl text-black md:text-5xl font-bold tracking-tight max-w-lg leading-tight">
              We provide the best solutions for your dream home
            </h2>
            <p className="text-black max-w-sm text-lg">
              Our team of experts is dedicated to creating unique and personalized spaces that reflect your lifestyle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              delay={index === 1 ? "delay-200" : index === 2 ? "delay-500" : "delay-0"}
            >
              <div className="group bg-white p-10 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                
                {/* Icon Wrapper */}
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                  
                  {/* ICON 1: Palette */}
                  {index === 0 && (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                     </svg>
                  )}
                  
                  {/* ICON 2: Layout */}
                  {index === 1 && (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                     </svg>
                  )}
                  
                  {/* ICON 3: Lamp/Bulb */}
                  {index === 2 && (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                     </svg>
                  )}

                </div>

                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>

                <button className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                  {/* <span className="text-black  hover:text-gray-600 hover:border-gray-400 transition-colors">Read More</span>  */}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;