import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import gsap from "gsap";

export function TubelightNavbar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveTab(item.name);

    // temporarily disable scroll-based auto-switching
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
    
    // Get the target element
    const element = document.querySelector(item.url);
    if (element) {
      // Wait for DOM to be ready, then scroll
      requestAnimationFrame(() => {
        const scrollTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: scrollTop,
          behavior: "auto"
        });
        
        // Refresh GSAP ScrollTrigger after scroll
        setTimeout(() => {
          const ScrollTrigger = gsap.plugins?.ScrollTrigger;
          if (ScrollTrigger) {
            ScrollTrigger.refresh();
          }
        }, 100);
      });
    }
  };

  // clear any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!items?.length) return;

    const sections = items
      .map((item) => {
        const el = document?.querySelector?.(item.url);
        return el ? { name: item.name, el } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const handleScroll = () => {
      // if user just clicked a tab and we're auto-scrolling, don't fight it
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const centerY = scrollY + viewportHeight * 0.3; // a bit above center

      let current = sections[0];

      sections.forEach((section) => {
        const rect = section.el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (centerY >= top && centerY < bottom) {
          current = section;
        }
      });

      if (current && current.name !== activeTab) {
        setActiveTab(current.name);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, activeTab]);

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
            <button
              key={item.name}
              onClick={(e) => handleNavClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold md:px-6 px-3 md:py-2 py-1.5 rounded-full transition-all border-none bg-transparent",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
