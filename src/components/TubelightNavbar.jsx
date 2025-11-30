import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function TubelightNavbar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-50 md:p-9 p-3",
        className
      )}
    >
      <div className="flex items-center md:gap-3 gap-2 bg-black/20 border border-white/10 backdrop-blur-lg md:py-1 py-0.5 md:px-1 px-0.5 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                // Smooth scroll to section
                const element = document.querySelector(item.url);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold md:px-6 px-3 md:py-2 py-1.5 rounded-full transition-colors",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
