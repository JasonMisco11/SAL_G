import Image from "next/image";
import { siteConfig } from '../../config/site/index';
import Counter from "@/components/ui/Counter";

const Hero = () => {
  return (
    <section className="relative w-full pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div className="flex flex-col gap-6 z-10">
          
          <h1 className="mt-0 text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.9]">
            Interior Design
          </h1>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge
            modern innovation.
          </p>
         
         <div className="grid grid-cols-3 gap-6 mt-0 pt-8 border-t border-gray-100">
            {siteConfig.heroStats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  <Counter value={stat.count} />
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        

        <div className="relative h-[600px] w-full  md:block">
          
          <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] border-2 border-black/80 z-0 rounded-sm" />

          <div className="absolute top-0 right-0 w-[60%] h-[55%] z-10 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=2032&auto=format&fit=crop"
              alt="Dining Area"
              fill
              className="object-cover rounded-sm"
            />
          </div>

          <div className="absolute bottom-0 left-[15%] w-[70%] h-[50%] z-20 shadow-2xl border-4 border-white rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1609534117141-ff9f20450902?q=80&w=1966&auto=format&fit=crop"
              alt="Cozy Corner"
              fill
              className="object-cover rounded-sm"
            />
          </div>
{/* Arrow Box with Animated SVG */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#1a1a1a] flex items-center justify-center z-30 rounded-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="white" 
              // Added 'animate-bounce' here
              className="w-8 h-8 animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;