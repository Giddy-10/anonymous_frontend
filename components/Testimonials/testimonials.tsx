"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { images } from "@/utils/testimonials_constants";
import Description from "./description";
import Section from "../ui/section";

const Testimonials = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Memoized clickNext function
  const clickNext = useCallback(() => {
    setActiveImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  const clickPrev = () => {
    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [clickNext]);

  return (
    <Section color="" style="p-6" width="">
      <div className="text-black flex justify-center items-center gap-4 p-6 italic text-5xl mb-4">
        <span>What People</span>
        <span className="text-red-500">Say About</span>
        <span>Anonymous</span>
      </div>

      <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-slate-200">
        <div
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                  : "hidden"
              }`}
            >
              <Image
                src={elem.src}
                alt={elem.title}
                width={400}
                height={400}
                className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </main>
    </Section>
  );
};

export default Testimonials;
