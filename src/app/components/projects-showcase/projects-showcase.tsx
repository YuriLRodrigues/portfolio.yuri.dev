"use client";

import { useState, useCallback, useEffect, useRef } from "react";

import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { type Project, projects } from "./projects.data";

const ProjectImageCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <img
                src={src || "/placeholder.svg"}
                alt={`Project image ${index + 1}`}
                className="w-full h-[250px] md:h-[350px] object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 shadow-md z-10 hover:bg-background transition-colors"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 shadow-md z-10 hover:bg-background transition-colors"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// Project card component
const ProjectCard = ({ project }: { project: Project }) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Add event listeners when component mounts
  useEffect(() => {
    const scrollAreaElement = scrollAreaRef.current;
    if (!scrollAreaElement) return;

    // Function to prevent wheel events from propagating
    const handleWheel = (e: WheelEvent) => {
      // Get the scrollable element inside the ScrollArea (the viewport)
      const viewportElement = scrollAreaElement.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (!viewportElement) return;

      const isScrollable =
        viewportElement.scrollWidth > viewportElement.clientWidth;

      // If there's content to scroll horizontally
      if (isScrollable) {
        const atLeftEdge = viewportElement.scrollLeft <= 0;
        const atRightEdge =
          Math.ceil(viewportElement.scrollLeft + viewportElement.clientWidth) >=
          viewportElement.scrollWidth;

        // If we're not at an edge, or we're scrolling in the direction where there's more content
        if (
          (e.deltaX < 0 && !atLeftEdge) ||
          (e.deltaX > 0 && !atRightEdge) ||
          (e.deltaY < 0 && !atLeftEdge) ||
          (e.deltaY > 0 && !atRightEdge)
        ) {
          e.stopPropagation();
        }
      }
    };

    // Add event listeners
    scrollAreaElement.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    // Cleanup
    return () => {
      scrollAreaElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33%]">
      <div className="overflow-hidden bg-card rounded-xl shadow-lg dark:shadow-white/10 h-full flex flex-col">
        <ProjectImageCarousel images={project.images} />
        <div className="p-6 flex flex-col flex-1 space-y-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground mt-2 md:line-clamp-10 line-clamp-4">
            {project.description}
          </p>

          {/* ScrollArea with ref for event handling */}
          <div ref={scrollAreaRef}>
            <ScrollArea className="w-full whitespace-nowrap relative z-[999]">
              <div className="flex w-max space-x-4 pb-4">
                {project.technologies}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3 mt-auto pt-6">
            <Button
              className="md:w-32 p-2 h-full cursor-pointer"
              effect="ringHover"
            >
              <a
                href={project.links.website}
                className="w-full flex items-center gap-2 justify-center"
              >
                Repositório
                <Icon name="Github" className="size-8" />
              </a>
            </Button>
            <Button
              className="md:w-32 p-2 h-full cursor-pointer"
              effect="shine"
            >
              <a
                href={project.links.website}
                className="w-full flex items-center gap-2 justify-center"
              >
                Deploy
                <Icon name="Link" className="size-8" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main projects carousel
export default function ProjectsShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:px-6 lg:px-8">
      <div className="mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors disabled:opacity-50"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors disabled:opacity-50"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
