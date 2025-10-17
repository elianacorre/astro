import { tv, type VariantProps } from "tailwind-variants";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const heroStyles = tv({
  slots: {
    aside:
      "lg:-mr-20 relative hidden aspect-square w-full flex-none rounded-2xl border-[12px] border-white bg-neutral-200 shadow-2xl outline-1 outline-neutral-200 md:border-[16px] lg:flex lg:w-md lg:rotate-6 lg:transition-transform lg:hover:rotate-8 xl:mr-0 xl:w-xl 2xl:w-2xl",
    base: "container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 py-8 sm:px-8 lg:flex-row lg:items-start xl:items-center",
    content: "text-balance text-center font-light text-lg sm:text-xl lg:text-start 2xl:text-2xl",
    img: "size-full object-cover",
    main: "flex flex-col items-center gap-8 lg:items-start",
    title: "flex flex-col items-center font-black text-[42px] leading-none sm:text-7xl lg:items-start 2xl:text-8xl",
    titleRow: "flex items-center gap-1 whitespace-nowrap text-primary",
    titleRowContent: `max-w-full overflow-hidden leading-tight transition-all delay-[10s] duration-[2s] ease-linear
    starting:max-w-0`,
    titleRowCursor: "h-10 w-1 animate-blink rounded-sm bg-primary sm:h-16",
  },
});
export const HERO = heroStyles();

// TYPES -----------------------------------------------------------------------------------------------------------------------------------
export type HeroClass = Partial<(typeof heroStyles)["slots"]>;
export type HeroStyles = HeroVariants & { class?: HeroClass };
export type HeroVariants = VariantProps<typeof heroStyles>;
