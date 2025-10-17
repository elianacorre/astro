import { domAnimation, LazyMotion } from "motion/react";
// biome-ignore lint/performance/noNamespaceImport: off
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";
import { SECTION, SECTION_T, type SectionClass, type SectionVariants } from "./section.styles";

// ROOT ------------------------------------------------------------------------------------------------------------------------------------
export function SectionTitleEffect({ className: C = {}, intent, reverse, text }: SectionTitleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={SECTION.titleRow({ intent, reverse, className: C.titleRow })} ref={containerRef}>
      <span className={SECTION.titleRowText({ className: C.titleRowText })}>{text}</span>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <LazyMotion features={domAnimation}>
          <m.div
            animate={{ opacity: 1, scale: 1 }}
            className={SECTION.titleRowEffect({ intent, className: C.titleRowEffect })}
            initial={{ opacity: 0, scale: 0.95, originX: 0, originY: 0 }}
            transition={SECTION_T.titleRowEffect}
          >
            <m.div
              className={SECTION.titleRowRectangle({ intent, className: C.titleRowRectangle })}
              transition={SECTION_T.titleRowRectangle}
              whileInView={dimensions}
            />
            <m.div
              className={SECTION.titleRowPointerWrapper({ intent, className: C.titleRowPointerWrapper })}
              style={{ rotate: -90 }}
              transition={SECTION_T.titleRowPointerWrapper}
              // biome-ignore lint/style/noMagicNumbers: off
              whileInView={{ opacity: 1, x: dimensions.width + 4, y: dimensions.height + 4 }}
            >
              <Pointer className={SECTION.titleRowPointer({ intent, className: C.titleRowPointer })} />
            </m.div>
          </m.div>
        </LazyMotion>
      )}
    </div>
  );
}
export type SectionTitleEffectProps = SectionVariants & {
  className?: Pick<
    SectionClass,
    "titleRow" | "titleRowEffect" | "titleRowPointer" | "titleRowPointerWrapper" | "titleRowRectangle" | "titleRowText"
  >;
  text?: string;
};

// POINTER ---------------------------------------------------------------------------------------------------------------------------------
const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    height="1em"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1"
    viewBox="0 0 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    // className="stroke-current fill-current stroke-1 size-4"
    {...props}
    aria-hidden="true"
  >
    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
  </svg>
);
