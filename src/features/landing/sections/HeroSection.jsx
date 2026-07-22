import { Icon } from "../../../shared/ui/Icon";

export function HeroSection() {
  return (
    <section className="relative min-h-198.75 flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-100 transition-all duration-1000 ">
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black z-10"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black z-10"></div>
        <div className="w-full h-full" data-alt="A cinematic, high-contrast black and white portrait of a muscular fitness professional in a gritty, industrial gym setting. The coach is standing with a powerful, focused expression, lit by intense rim lighting that emphasizes their muscle definition. The atmosphere is intense, dark, and elite, reflecting a serious high-performance coaching brand with deep blacks and sharp highlights." 
             style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8-WQoaUf5B2_5ySm8xa_V3myPcUhPFMj5DeyvUxFQCU-7c0BLG2IMDR8Cs6m0pzCrUTfDx8BiI-cpWcr0mv5P3Bap-iGirm8f8DQgA54GzCBThcjx_o3KlC_c-ta2jQQdq_50Pwmzbm5UyFtbcRVxC27g3P1QEK6_5lII6UhL_d9pI62yaAhsJ0NlhDjvgIWS7h0frgkM3JzQspRuXmDbGGk4jafIdqJ5WcSbtXzHOji_5t1SwtAV')"}}>
        </div>
      </div>

      <div className="relative z-20 text-center px-margin-x max-w-4xl">
        <div className="inline-block border border-primary text-primary px-4 py-1 mb-6 font-label-bold text-label-bold tracking-widest uppercase">
            Premium Coaching Performance
        </div>
        
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
            5+ AÑOS <span className="text-primary">TRANSFORMANDO</span> VIDAS
        </h1>

        <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-2xl mx-auto">
          Entrenamiento de élite para personas ambiciosas que buscan resultados reales. Sin excusas. Sin atajos. Solo ciencia y disciplina.
        </p>
        <div className="flex flex-col md:flex-row gap-stack-md justify-center">
          <button className="bg-primary hover:bg-primary-container text-on-primary px-10 py-5 font-label-bold text-label-bold uppercase tracking-widest transition-all duration-300 cta-glow">
            EMPEZAR AHORA
          </button>
          <button className="border border-white hover:bg-white/10 text-white px-10 py-5 font-label-bold text-label-bold uppercase tracking-widest transition-all duration-300">
            VER RESULTADOS
          </button>
        </div>
      </div>

      {/*  Scroll Indicator  */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <Icon name="keyboard_double_arrow_down" color="text-on-surface"/>
      </div>
    </section>
  );
}