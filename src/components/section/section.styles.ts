import type { Transition } from "motion/react";
import { tv, type VariantProps } from "tailwind-variants";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const sectionStyles = tv({
  slots: {
    base: "relative",
    container: `container mx-auto w-full flex flex-col items-center gap-8 px-4 py-8 
    sm:px-8 
    lg:flex-row lg:items-start`,
    content: `flex flex-col gap-8 text-balance text-center font-light 
    sm:text-lg 
    lg:text-start 
    2xl:text-xl`,
    figure: `relative hidden aspect-square w-full flex-none rounded-2xl border-[12px] border-white bg-neutral-200 shadow-2xl outline-1 outline-neutral-200 
    md:border-[16px] 
    lg:flex lg:w-md lg:transition-transform 
    xl:w-xl 
    2xl:w-2xl`,
    image: "size-full object-cover",
    main: `flex flex-col items-center gap-8 w-full 
    lg:items-start`,
    title: `flex flex-col items-center font-extrabold text-4xl 
    sm:text-6xl 
    lg:items-start 
    2xl:text-7xl`,
    titleRow: "relative w-fit",
    titleRowEffect: "pointer-events-none absolute inset-0 z-0",
    titleRowPointer: "size-5",
    titleRowPointerWrapper: "pointer-events-none absolute opacity-0",
    titleRowRectangle: "-rotate-2 absolute inset-0 size-0 translate-y-1 rounded-2xl",
    titleRowText: "relative z-10 text-white",
  },
  variants: {
    intent: {
      default: {
        titleRowPointer: "text-primary",
        titleRowRectangle: "bg-primary",
      },
      primary: {
        base: "bg-primary/40",
        main: "bg-primary/40",
        titleRowPointer: "text-primary",
        titleRowRectangle: "bg-primary",
      },
      secondary: {
        base: "bg-accent",
        main: "bg-accent",
        titleRowPointer: "text-secondary",
        titleRowRectangle: "bg-secondary",
      },
    },
    reverse: {
      true: {
        figure: "lg:-rotate-6 lg:-translate-8 lg:hover:-rotate-8",
      },
      false: {
        figure: "lg:-translate-y-8 lg:translate-x-8 lg:rotate-6 lg:hover:rotate-8",
      },
    },
  },
});
export const SECTION = sectionStyles();

// TRANSITIONS -----------------------------------------------------------------------------------------------------------------------------
export const SECTION_T = {
  titleRowEffect: { duration: 0.5, ease: "easeOut" },
  titleRowPointerWrapper: { opacity: { duration: 0.1, ease: "easeInOut" }, duration: 1, ease: "easeInOut" },
  titleRowRectangle: { duration: 1, ease: "easeInOut" },
} satisfies Record<string, Transition>;

// TYPES -----------------------------------------------------------------------------------------------------------------------------------
export type SectionClass = Partial<(typeof sectionStyles)["slots"]>;
export type SectionVariants = VariantProps<typeof sectionStyles>;
