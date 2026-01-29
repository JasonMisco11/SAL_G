"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Image from "next/image";
import { siteConfig } from "@/config/site"; // Import config

export default function InfiniteScroll() {
  // Use images from config
  const images = siteConfig.galleryImages;
  
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]); // Added mustFinish to deps

  return (
    <section className="py-16 bg-white overflow-hidden">
        <div className="mb-8 px-6 max-w-[1440px] mx-auto">
             <h3 className="text-2xl text-black font-bold">Inspiration Gallery</h3>
        </div>

        {/* Height container is required for absolute positioning children */}
        <div className="relative h-[300px] w-full">
            <motion.div
                className="absolute left-0 flex gap-6"
                style={{ x: xTranslation }}
                ref={ref}
                onHoverStart={() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
                }}
            >
                {/* We double the array to create the seamless loop effect */}
                {[...images, ...images].map((item, idx) => (
                    <Card image={item} key={idx} />
                ))}
            </motion.div>
      </div>
    </section>
  );
}

// Sub-component for the individual image card
const Card = ({ image }: { image: string }) => {
  return (
    <div className="relative w-[300px] h-[250px] rounded-sm overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
      <Image 
        src={image} 
        alt="Interior Design Gallery" 
        fill 
        className="object-cover"
        sizes="300px"
      />
    </div>
  );
};