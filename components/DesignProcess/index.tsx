"use client";

import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";

const DesignProcess = () => {
  return (
    <section id="process" className="py-24 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-muted mb-4">
              Our Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black max-w-2xl mx-auto leading-tight">
              From Vision to Reality
            </h3>
            <p className="text-lg text-gray-500 mt-6 max-w-xl mx-auto">
              Our proven 6-step process ensures every project is delivered with
              precision and excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-primary-dark via-primary to-primary-light" />

          <div className="space-y-12 lg:space-y-0">
            {siteConfig.designProcess.map((step, index) => (
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
                <div
                  className={`relative lg:flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:mb-16`}
                >
                  {/* Content Card */}
                  <div
                    className={`lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}
                  >
                    <div className="bg-white border border-gray-200 p-8 rounded-md hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                      <span className="inline-block text-sm font-bold text-primary-muted mb-2">
                        Step {step.step}
                      </span>
                      <h4 className="text-2xl font-bold text-black mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle with number - centered */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-primary text-white rounded-full items-center justify-center font-bold text-lg shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>

                {/* Mobile step indicator */}
                <div className="lg:hidden flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 h-0.5 bg-primary-light" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
