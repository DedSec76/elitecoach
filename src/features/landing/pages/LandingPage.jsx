
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ResultSection } from "../sections/ResultSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { CtaSection } from "../sections/CtaSection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const LandingPage = () => {  
    return (    
        <>      
            <Navbar />

            <main className="pt-20">        
                <HeroSection />      
                <AboutSection />       
                <ResultSection />        
                <TestimonialsSection />        
                <CtaSection />     
            </main>      
              
            <Footer />
        </> 
    );
};