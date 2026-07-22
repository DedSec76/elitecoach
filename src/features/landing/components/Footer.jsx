import { CopyFooter } from "../../../shared/components/CopyFooter"
import { Icon } from "../../../shared/ui/Icon"

export const Footer = () => {
  return (
    <footer className="text-center bg-surface-container-lowest w-full py-section-gap border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-x gap-stack-lg max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-sm mb-6 md:mb-0">
          <Icon name="fitness_center" size="sm"/>
          <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tighter">ELITE PERFORMANCE COACHING</span>
        </div>

        <div className="flex flex-wrap justify-center gap-stack-lg mb-8 md:mb-0">
          <a className="font-body-md text-body-md text-secondary hover:text-primary transition-all" href="#about">ABOUT</a>
          <a className="font-body-md text-body-md text-secondary hover:text-primary transition-all" href="#results">RESULTS</a>
          <a className="font-body-md text-body-md text-secondary hover:text-primary transition-all" href="#testimonials">TESTIMONIALS</a>
        </div>

        <div className="flex gap-4">
          <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-primary text-secondary hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-primary text-secondary hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>

      </div>

      <CopyFooter />
    </footer>
  )
}