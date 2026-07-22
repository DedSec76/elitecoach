import { Link } from "react-router-dom";
import { Icon } from "../../../shared/ui/Icon";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background dark:bg-background border-b border-outline-variant">
      <nav className="flex justify-between items-center px-margin-x h-20 max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-sm cursor-pointer active:scale-95">
          <Icon name="fitness_center" />
          <span className="text-headline-md font-headline-md text-primary tracking-tighter uppercase">ELITE COACHING</span>
        </div>

        <div className="hidden md:flex gap-stack-lg items-center">
          <a className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-200" href="#about">ABOUT</a>
          <a className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-200" href="#results">RESULTS</a>
          <a className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-200" href="#testimonials">TESTIMONIALS</a>
          <Link to={"/dashboard"} className="bg-primary-container text-on-primary-container px-6 py-2 font-label-bold text-label-bold uppercase tracking-widest cursor-pointer active:scale-95 transition-transform">DASHBOARD <Icon name="arrow_outward" size="sm" className="text-surface-bright"/></Link>
        </div>

        <button className="md:hidden text-primary">
          <Icon name="menu" className="text-[24px] font-normal"/>
        </button>
      </nav>
    </header>
  );
};