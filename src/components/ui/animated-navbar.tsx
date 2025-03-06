"use client";
import { useEffect, useRef, useState } from "react";

import type { icons } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type Tabs = {
  title: string;
  href: string;
  icon: keyof typeof icons;
  sectionId?: string; // ID of the corresponding section element
};

export type AnimatedNavbarProps = {
  tabs: Tabs[];
  // Option to disable URL updates if needed
  updateUrl?: boolean;
};

export const AnimatedNavbar = ({
  tabs,
  updateUrl = true,
}: AnimatedNavbarProps) => {
  const fired = useRef(false);
  const defaultSelectedTabIndex = 0;
  const [currentLink, setCurrentLink] = useState<{
    index: number;
    left: undefined | number;
    width: undefined | number;
  }>({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined,
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  const defaultSelectedTabStyles = [
    "[&:nth-child(1)]:dark:bg-white [&:nth-child(1)]:bg-neutral-950",
    "[&:nth-child(2)]:dark:bg-white [&:nth-child(2)]:bg-neutral-950",
    "[&:nth-child(3)]:dark:bg-white [&:nth-child(3)]:bg-neutral-950",
    "[&:nth-child(4)]:dark:bg-white [&:nth-child(4)]:bg-neutral-950",
  ];

  // Update the active tab and URL
  const updateActiveTab = (index: number) => {
    if (index !== currentLink.index) {
      fired.current = true;
      setCurrentLink(() => ({
        left: document.getElementById("uuu-btn-" + index)?.offsetLeft,
        width: document
          .getElementById("uuu-btn-" + index)
          ?.getBoundingClientRect().width,
        index: index,
      }));

      // Update URL without refreshing the page
      if (updateUrl && tabs[index]?.href) {
        const url = tabs[index].href;
        history.pushState({}, "", url);
      }
    }
  };

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create options for the observer
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element must be visible
    };

    // Create a new intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      // Find the section that is most visible
      const visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (visibleSections.length > 0) {
        // Sort by visibility ratio if multiple sections are visible
        const mostVisibleSection = visibleSections.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current,
        );

        // Find the tab index that corresponds to this section
        const sectionId = mostVisibleSection.target.id;
        const tabIndex = tabs.findIndex(
          (tab) =>
            tab.sectionId === sectionId ||
            tab.href === `#${sectionId}` ||
            tab.href === `/${sectionId}`,
        );

        if (tabIndex !== -1) {
          updateActiveTab(tabIndex);
        }
      }
    }, options);

    // Observe all sections
    tabs.forEach((tab) => {
      const sectionId =
        tab.sectionId || tab.href.replace("#", "").replace("/", "");
      const section = document.getElementById(sectionId);
      if (section) {
        observerRef.current?.observe(section);
      }
    });

    // Initial setup based on URL
    const initialActiveIndex = findActiveTabIndex();
    updateActiveTab(initialActiveIndex);

    // Handle browser back/forward navigation
    const handlePopState = () => {
      const newActiveIndex = findActiveTabIndex();
      updateActiveTab(newActiveIndex);
    };

    window.addEventListener("popstate", handlePopState);

    // Clean up
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("popstate", handlePopState);
    };
  }, [tabs, updateActiveTab]); // Added updateActiveTab to dependencies

  // Find the active tab based on the current URL path
  const findActiveTabIndex = () => {
    const currentPath = window.location.pathname;
    const hash = window.location.hash;

    // First check for hash
    if (hash) {
      const hashIndex = tabs.findIndex((tab) => tab.href === hash);
      if (hashIndex !== -1) return hashIndex;
    }

    // Then check for path
    const pathIndex = tabs.findIndex((tab) => {
      return (
        currentPath === tab.href ||
        (tab.href !== "/" && currentPath.startsWith(tab.href))
      );
    });

    return pathIndex !== -1 ? pathIndex : defaultSelectedTabIndex;
  };

  return (
    <div
      className={
        "w-fit relative rounded-full flex gap-5 items-center justify-center p-2 backdrop-blur-2xl"
      }
    >
      {tabs.map((link, i) => (
        <button
          key={i}
          id={"uuu-btn-" + i}
          onClick={() => {
            updateActiveTab(i);
          }}
          className={twMerge(
            "transition-colors duration-200 flex items-center justify-center rounded-full h-fit px-2 py-2 text-nowrap",
            currentLink.index === i && "dark:text-neutral-900 text-white",
            fired.current
              ? ""
              : defaultSelectedTabStyles[defaultSelectedTabIndex],
          )}
        >
          <a href={link.href}>{link.title}</a>
        </button>
      ))}
      <div className={"absolute inset-0 h-full p-2 -z-[1] overflow-hidden"}>
        <div className={"relative h-full w-full overflow-hidden"}>
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width || 0}px`,
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
              fired.current ? "dark:bg-white bg-neutral-950" : "bg-transparent",
            )}
          />
        </div>
      </div>
    </div>
  );
};
