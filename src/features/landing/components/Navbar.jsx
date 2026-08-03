import { Link } from "react-router-dom";
import { Icon } from "../../../shared/ui/Icon";
import { HamburgerBtn } from "@/shared/ui/HamburgerBtn";
import { useToggle } from "@/shared/hooks/useToggle";

export const Navbar = () => {
  const { toggle, onToggle } = useToggle()

  return (
    <header className="fixed top-0 w-full z-50 bg-background dark:bg-background border-b border-outline-variant">
      <nav className="relative flex justify-between items-center px-margin-x h-20 max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-sm cursor-pointer active:scale-95">
          <Icon name="fitness_center" />
          <span className="text-headline-md font-headline-md text-primary tracking-tighter uppercase">ELITE COACHING</span>
        </div>

        <div className={`${toggle ? "flex" : "hidden"} bg-background w-full absolute py-4 top-full left-1/2 -translate-x-1/2 transition flex-col gap-stack-lg md:flex-row items-center`}>
          <a className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-200" href="#about">ABOUT</a>
          <a className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-200" href="#results">RESULTS</a>
          <a className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-200" href="#testimonials">TESTIMONIALS</a>
          <Link to={"/dashboard"} className="bg-primary-container text-on-primary-container px-6 py-2 font-label-bold text-label-bold uppercase tracking-widest cursor-pointer active:scale-95 transition-transform">DASHBOARD <Icon name="arrow_outward" size="sm" className="text-surface-bright"/></Link>
        </div>

        <HamburgerBtn toggle={toggle} handleClick={onToggle} />
      </nav>
    </header>
  );
};