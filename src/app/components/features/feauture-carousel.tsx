"use client";

import { useRef, useEffect, useState } from "react";

import { Icon } from "@/components/icon";

import { motion, useAnimation, useMotionValue } from "framer-motion";

import features from "./features";

export function FeatureCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 0) {
      controls.start({
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    } else if (currentX < -width) {
      controls.start({
        x: -width,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  };

  return (
    <div className="relative min-h-[50vh] flex flex-col" id="feature">
      <div className="px-4 sm:px-6 lg:px-8 space-y-8 my-auto">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Meus Diferenciais
        </h2>
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden rounded-3xl my-auto"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] hover:scale-105 duration-300 h-[300px] p-8 m-4 bg-background rounded-3xl shadow-lg dark:shadow-white/10 flex flex-col justify-between hover-lift transition-all ease-in-out border-2 border-primary/10"
              >
                <div>
                  <div className="text-4xl mb-4">
                    <Icon name={feature.icon} className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
