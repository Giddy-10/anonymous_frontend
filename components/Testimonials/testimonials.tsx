"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/utils/testimonials_constants";
import Description from "./description";
import Section from "../ui/section";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  
  return (
    <Section color="" style="p-6" width="">
        <div className="text-black flex justify-center items-center gap-4 p-6 italic text-5xl mb-4">
            <span className="">What People</span>
            <span className='text-red-500'>Say About</span>
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
                    alt=""
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

export default Slider;