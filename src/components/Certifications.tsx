"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { Waves } from './ui/Waves';
// Animated Boxes background
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 pointer-events-none",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

// List your certificate images, titles, providers, and descriptions here
const certificates = [
  {
    src: "/certificates/AI.png",
    title: "Introduction to AI",
    provider: "Linkedin Learning",
    description: "Certificate for completing advanced AI coursework and practical projects."
  },
  {
    src: "/certificates/Agentforce Specialist.png",
    title: "Agentforce Specialist",
    provider: "Salesforce",
    description: "Specialist certification in Agentforce platform and automation tools."
  },
  {
    src: "/certificates/API Fundamentals.png",
    title: "API Fundamentals",
    provider: "Postman",
    description: "Fundamentals of API design, testing, and integration."
  },
  {
    src: "/certificates/AWS Certified Machine Learning.png",
    title: "AWS Certified Machine Learning",
    provider: "LinkedIn Learning",
    description: "AWS certification for machine learning engineering and deployment."
  },
  {
    src: "/certificates/Databricks Fundamentals.png",
    title: "Databricks Fundamentals",
    provider: "Databricks",
    description: "Fundamentals of Databricks platform and big data analytics."
  },
  {
    src: "/certificates/Generative AI by Microsoft and Linkedln.png",
    title: "Generative AI by Microsoft and LinkedIn",
    provider: "Microsoft & LinkedIn",
    description: "Certification in generative AI concepts and applications."
  },
  {
    src: "/certificates/Generative AI Fundamentals.png",
    title: "Generative AI Fundamentals",
    provider: "Databricks",
    description: "Fundamentals of generative AI, including models and use cases."
  },
  {
    src: "/certificates/Testing with AI.png",
    title: "Testing with AI",
    provider: "Postman",
    description: "Certificate for AI-driven software testing and automation."
  },
];



const Certifications: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const cardRefs = certificates.map(() => useRef<HTMLDivElement>(null));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Close expanded card on outside click
  cardRefs.forEach((ref, idx) => {
    useOutsideClick(ref, () => {
      if (expanded === idx) setExpanded(null);
    });
  });

  return (
    <section id="certifications" ref={ref} className="relative py-24 min-h-screen overflow-hidden">
      {/* Waves background is now global */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              ref={cardRefs[idx]}
              className={cn(
                "flex flex-col items-center bg-white/10 dark:bg-neutral-900 border border-white/10 dark:border-white/20 rounded-xl shadow-lg p-6 transition-all cursor-pointer relative",
                expanded === idx ? "z-20 scale-105 shadow-2xl border-blue-400" : "hover:scale-105 hover:shadow-2xl"
              )}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              style={{ minHeight: expanded === idx ? 420 : 320 }}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className={cn(
                  "w-64 h-40 object-contain rounded-md shadow mb-4 bg-white/5 transition-all",
                  expanded === idx ? "ring-2 ring-blue-400" : ""
                )}
                loading="lazy"
                draggable={false}
              />
              <div className="text-lg font-semibold text-white text-center mt-2">
                {cert.title}
              </div>
              <div className="text-sm text-blue-300 text-center mt-1">
                {cert.provider}
              </div>
              {expanded === idx && (
                <div className="mt-4 text-white/90 text-center text-sm px-2">
                  {cert.description}
                </div>
              )}
              {expanded === idx && (
                <button
                  className="absolute top-2 right-2 text-xs text-white bg-blue-500/80 rounded px-2 py-1 hover:bg-blue-600 transition"
                  onClick={e => { e.stopPropagation(); setExpanded(null); }}
                >
                  Close
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
