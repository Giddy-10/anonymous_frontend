'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/section";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      router.push('/pages/Landing');
    };

    if (document.readyState === "complete") {
      // If the document is already fully loaded
      handleLoad();
    } else {
      // Wait for the window to fully load
      window.addEventListener("load", handleLoad);
    }

    // Cleanup event listener to avoid memory leaks
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [router]);

  return (
    <div>
      <Section style="flex justify-center items-center" color="" width="">
        {isLoading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : null}
      </Section>
    </div>
  );
}
