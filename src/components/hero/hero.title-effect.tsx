import { domAnimation, LazyMotion } from "motion/react";
// biome-ignore lint/performance/noNamespaceImport: off
import * as m from "motion/react-m";
import { HERO, HERO_T, type HeroClass, type HeroVariants } from "./hero.styles";

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function HeroTitleEffect({ className: C = {}, text }: HeroTitleEffectProps) {
  return (
    <div className={HERO.titleRow({ className: C.titleRow })}>
      <LazyMotion features={domAnimation}>
        <m.div
          className={HERO.titleRowContent({ className: C.titleRowContent })}
          transition={HERO_T.content}
          whileInView={{ width: "fit-content" }}
        >
          {text}
        </m.div>
        <m.div animate={{ opacity: 1 }} className={HERO.titleRowCursor({ className: C.titleRowCursor })} transition={HERO_T.cursor} />
      </LazyMotion>
    </div>
  );
}
type HeroTitleEffectProps = HeroVariants & {
  className?: Pick<HeroClass, "titleRow" | "titleRowContent" | "titleRowCursor">;
  text?: string;
};
