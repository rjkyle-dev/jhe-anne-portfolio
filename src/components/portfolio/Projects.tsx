import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, BriefcaseBusiness, Building2, CalendarRange, Sparkles } from "lucide-react";
import { Section } from "./Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ubeKutsinta from "@/assets/kusina-recipe-13.png.asset.json";
import bukoPie from "@/assets/kusina-recipe-14.png.asset.json";
import palitaw from "@/assets/kusina-recipe-15.png.asset.json";
import buchi from "@/assets/kusina-recipe-16.png.asset.json";
import cassavaCake from "@/assets/kusina-recipe-18.png.asset.json";
import sapinSapin from "@/assets/kusina-recipe-20.png.asset.json";
import putoMaya from "@/assets/kusina-recipe-22.png.asset.json";
import simpleFriedChicken from "@/assets/kusina-recipe-28.png.asset.json";
import kinilaw from "@/assets/kusina-recipe-29.png.asset.json";
import chiliGarlicSauce from "@/assets/kusina-recipe-46.png.asset.json";

type RecipeDesign = {
  title: string;
  imageUrl: string;
  alt: string;
  highlight: string;
};

const recipeDesigns: RecipeDesign[] = [
  {
    title: "Ube Kutsinta",
    imageUrl: ubeKutsinta.url,
    alt: "Recipe graphic design for Ube Kutsinta created for KusinaUniversity Online Tutorial Services",
    highlight: "Bold hierarchy and premium purple-gold presentation",
  },
  {
    title: "Buko Pie",
    imageUrl: bukoPie.url,
    alt: "Recipe graphic design for Buko Pie created for KusinaUniversity Online Tutorial Services",
    highlight: "Promotional layout balancing product focus and offer details",
  },
  {
    title: "Palitaw",
    imageUrl: palitaw.url,
    alt: "Recipe graphic design for Palitaw created for KusinaUniversity Online Tutorial Services",
    highlight: "Soft editorial styling with testimonial-driven composition",
  },
  {
    title: "Buchi",
    imageUrl: buchi.url,
    alt: "Recipe graphic design for Buchi created for KusinaUniversity Online Tutorial Services",
    highlight: "Structured card layout with polished food-focused framing",
  },
  {
    title: "Cassava Cake",
    imageUrl: cassavaCake.url,
    alt: "Recipe graphic design for Cassava Cake created for KusinaUniversity Online Tutorial Services",
    highlight: "Readable promo messaging with strong visual contrast",
  },
  {
    title: "Sapin-Sapin",
    imageUrl: sapinSapin.url,
    alt: "Recipe graphic design for Sapin-Sapin created for KusinaUniversity Online Tutorial Services",
    highlight: "Bright product-forward storytelling with layered overlays",
  },
  {
    title: "Puto Maya",
    imageUrl: putoMaya.url,
    alt: "Recipe graphic design for Puto Maya created for KusinaUniversity Online Tutorial Services",
    highlight: "Dynamic collage composition with bold product labeling",
  },
  {
    title: "Simple Fried Chicken",
    imageUrl: simpleFriedChicken.url,
    alt: "Recipe graphic design for Simple Fried Chicken created for KusinaUniversity Online Tutorial Services",
    highlight: "Menu-style visual communication with direct callouts",
  },
  {
    title: "Kinilaw",
    imageUrl: kinilaw.url,
    alt: "Recipe graphic design for Kinilaw created for KusinaUniversity Online Tutorial Services",
    highlight: "Minimal split-layout concept with clean information blocks",
  },
  {
    title: "Chili Garlic Sauce",
    imageUrl: chiliGarlicSauce.url,
    alt: "Recipe graphic design for Chili Garlic Sauce created for KusinaUniversity Online Tutorial Services",
    highlight: "High-energy packaging-inspired composition and typography",
  },
];

const detailCards = [
  {
    label: "Project Type",
    value: "Graphic Design Portfolio",
    icon: BriefcaseBusiness,
  },
  {
    label: "Organization",
    value: "KusinaUniversity Online Tutorial Services",
    icon: Building2,
  },
  {
    label: "Year",
    value: "2026 · On-the-Job Training",
    icon: CalendarRange,
  },
];

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDesign, setActiveDesign] = useState<RecipeDesign | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = revealRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setScrollSnaps(api.scrollSnapList());
    };

    handleSelect();
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const autoplay = window.setInterval(() => {
      api.scrollNext();
    }, 4200);

    return () => window.clearInterval(autoplay);
  }, [api, isPaused]);

  const currentDesign = recipeDesigns[selectedIndex] ?? recipeDesigns[0];
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";

  return (
    <>
      <Section
        id="projects"
        eyebrow="Graphic Design Project"
        title={"Recipe Graphic Design for|KusinaUniversity Online Tutorial Services"}
        subtitle="Designed a series of recipe graphics for KusinaUniversity Online Tutorial Services during my On-the-Job Training in 2026. These visuals were crafted for digital platforms and educational content, highlighting my skills in Canva, layout design, visual communication, typography, and content presentation."
      >
        <div ref={revealRef} className="space-y-8">
          <div
            className={`grid gap-4 md:grid-cols-3 transition-all duration-700 ease-out ${revealClass}`}
          >
            {detailCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.label}
                  className="glass rounded-2xl p-5 shadow-soft"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-relaxed">
                    {card.value}
                  </p>
                </article>
              );
            })}
          </div>

          <div
            className={`glass rounded-[2rem] p-4 shadow-glow transition-all duration-700 ease-out md:p-6 ${revealClass}`}
            style={{ transitionDelay: "140ms" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-secondary" />
                  Featured design showcase
                </div>
                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">{currentDesign.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                    {currentDesign.highlight}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start lg:self-auto">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:shadow-glow"
                  aria-label="Previous recipe design"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:shadow-glow"
                  aria-label="Next recipe design"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "center" }}
              className="w-full"
            >
              <CarouselContent>
                {recipeDesigns.map((design) => (
                  <CarouselItem key={design.title}>
                    <button
                      type="button"
                      onClick={() => setActiveDesign(design)}
                      className="group block w-full text-left"
                      aria-label={`Open ${design.title} design in larger view`}
                    >
                      <div className="rounded-[1.75rem] border border-border/60 bg-card/40 p-3 transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-glow md:p-4">
                        <div className="relative overflow-hidden rounded-[1.25rem] bg-background/80">
                          <img
                            src={design.imageUrl}
                            alt={design.alt}
                            loading="lazy"
                            className="mx-auto aspect-square w-full max-w-4xl object-contain transition duration-500 ease-out group-hover:scale-[1.01]"
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-card/70 px-4 py-3 backdrop-blur-md">
                            <div>
                              <p className="text-sm font-semibold sm:text-base">{design.title}</p>
                              <p className="text-xs text-muted-foreground sm:text-sm">
                                Click to expand and inspect the full graphic.
                              </p>
                            </div>
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                              <Expand className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {[
                  "Canva",
                  "Layout Design",
                  "Typography",
                  "Visual Communication",
                  "Content Presentation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 sm:justify-end">
                {scrollSnaps.map((_, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => api?.scrollTo(index)}
                      className={`rounded-full transition-all duration-300 ${
                        isActive
                          ? "h-2.5 w-8 bg-gradient-primary shadow-glow"
                          : "h-2.5 w-2.5 bg-muted hover:bg-secondary"
                      }`}
                      aria-label={`Go to recipe design ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Dialog open={!!activeDesign} onOpenChange={(open) => !open && setActiveDesign(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-hidden border-border/60 bg-card/95 p-0 backdrop-blur-xl">
          {activeDesign && (
            <>
              <DialogHeader className="border-b border-border/60 px-6 py-5">
                <DialogTitle className="text-2xl">{activeDesign.title}</DialogTitle>
                <DialogDescription className="max-w-2xl text-sm sm:text-base">
                  Recipe graphic created for KusinaUniversity Online Tutorial Services during 2026 OJT.
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-auto bg-background/80 p-4 md:p-6">
                <div className="rounded-[1.5rem] border border-border/60 bg-card/40 p-3 md:p-4">
                  <img
                    src={activeDesign.imageUrl}
                    alt={activeDesign.alt}
                    className="mx-auto max-h-[75vh] w-full object-contain"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

