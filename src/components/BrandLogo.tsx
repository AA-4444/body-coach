import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  dark?: boolean;
};

const BrandLogo = ({ className, dark = false }: BrandLogoProps) => {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full border-2 shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset]",
        dark
          ? "border-primary bg-primary text-brand-lime"
          : "border-brand-cyan bg-primary text-brand-lime",
        className
      )}
    >
      <div className="absolute inset-[5px] rounded-full border border-brand-lime/35" />
      <div className="absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-brand-cyan" />
      <span className="relative z-10 text-center font-heading text-[0.95em] font-black uppercase leading-[0.74] tracking-[-0.02em]">
        body
        <br />
        coach
      </span>
    </div>
  );
};

export default BrandLogo;
