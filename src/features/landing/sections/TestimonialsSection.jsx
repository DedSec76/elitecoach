export function TestimonialsSection() {
  return (
   <section
      className="py-section-gap bg-black px-margin-x overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4 uppercase">
          LO QUE DICEN NUESTROS <span className="text-primary">GUERREROS</span>
        </h2>
      </div>

      {/* <!-- Scrolling Testimonials Horizontal --> */}
      <div className="flex gap-stack-lg overflow-x-auto scrollbar pb-10 px-4">
        
        {/* <!-- Testimonial 1 --> */}
        <div className="min-w-[320px] md:min-w-112.5 bg-surface-container-low p-10 border-t-4 border-primary relative">
          <span className="material-symbols-outlined text-primary text-[64px] absolute -top-8 right-8 opacity-20">
            format_quote
          </span>
          <div className="flex mb-4">
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
          </div>
          <p className="text-body-lg text-on-surface mb-8 italic">
            "El nivel de atención al detalle es increíble. No solo me dicen qué
            hacer, sino por qué lo estamos haciendo. Los resultados han sido
            constantes desde la primera semana."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 bg-cover bg-center rounded-full border-2 border-primary"
              data-alt="Headshot of a confident young athlete in professional workout gear. They are smiling slightly in a modern, well-lit fitness studio. The background is softly blurred. High-quality portrait photography with a professional, trustworthy feel."
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVOIq6VnfC9x-_kMn-JipV7HztU9LibeJlby-RPgcCz651uZN1CUcGIACz-QgVdWV_NN2-mzDR1JYni_S2p1EgilbsFTBphmenXtrbkdijTp2pz5NnNrpJv8FAMLKGEIvO4Pzt2U1Pz9h0gHfYp0Ty6bKKWp6ar2rJRaYwGOD-HCrN8_FT4_uDxgg61apABp15kLcDRYiqzaZUSW3dfLbeJU83fneWIx4Ic53dh4tZdH7vXTEr03dk')"}}></div>
            <div>
              <div className="font-headline-md text-body-lg uppercase text-on-background">
                MARCO VALENCIA
              </div>
              <div className="text-label-bold text-primary text-[12px] uppercase">
                Empresario
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Testimonial 2 --> */}
        <div className="min-w-[320px] md:min-w-112.5 bg-surface-container-low p-10 border-t-4 border-primary relative">
          <span className="material-symbols-outlined text-primary text-[64px] absolute -top-8 right-8 opacity-20">
            format_quote
          </span>
          <div className="flex mb-4">
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
          </div>
          <p className="text-body-lg text-on-surface mb-8 italic">
            "Pasé de estar estancada por 2 años a romper todos mis récords
            personales en solo 3 meses. El programa de nutrición es flexible
            pero los resultados son rigurosos."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 bg-cover bg-center rounded-full border-2 border-primary"
              data-alt="Portrait of a female fitness enthusiast with a determined expression, wearing premium athletic apparel. Sharp, clear lighting against a dark, minimalist gym background. Reflecting high standards and successful coaching results."
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3XVWVhCH9shAiD4dKbDxmMtZjmwH1u4mF_4aZt9qy5KQaiPouSz4tf5scs7gvIWSIkMPdWG-zFvX4qw6wrkn_OdryvqCaiNtEM0yVLAFz6l25vvw7gi_gGS-TkS0_n0aX6xOgWoU8BsQt4gwwG6KZ9HJSZOitV2U1teJmBXU8YTM06ZaTITsE6CChDd_YImjc7cHXsMtY58vXgSyVxpVaoZTG9JHtu8ufGsI4mPZXig0EO807WmcT')"}}></div>
            <div>
              <div className="font-headline-md text-body-lg uppercase text-on-background">
                SARA GÓMEZ
              </div>
              <div className="text-label-bold text-primary text-[12px] uppercase">
                Atleta Amateur
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Testimonial 3 --> */}
        <div className="min-w-[320px] md:min-w-112.5 bg-surface-container-low p-10 border-t-4 border-primary relative">
          <span className="material-symbols-outlined text-primary text-[64px] absolute -top-8 right-8 opacity-20">
            format_quote
          </span>
          <div className="flex mb-4">
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              star
            </span>
          </div>
          <p className="text-body-lg text-on-surface mb-8 italic">
            "Entrenar aquí es otro nivel. La comunidad, el soporte constante y
            la exigencia te obligan a sacar tu mejor versión todos los días."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 bg-cover bg-center rounded-full border-2 border-primary"
              data-alt="Close-up headshot of a fit middle-aged man with a professional look. Clean lighting, modern fitness center setting in the background. Conveys experience, dedication, and the lifestyle of an elite coaching client."
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2ovkM8XMR4sFRSd7VQVXetzHMwLAh34Xo1MVP9D1kA-96IlzIUaxHfMm308W0Cc7juDSYq0JH0Go5iuwR65hlHUVu28q1nu8dF603H0GFP2JoXv-KrELOtYbYSezy27pshQPWax0jCK1WZcf1ZiFwADmXllcP_2w2n3uCedTo35dZmkBOJg5cpjKou83dQdLNdqMqkks6zvD49wWeWzuawiHLnezPt9IPjPg86ScKa5QTWNpz4QZh')"}}></div>
            <div>
              <div className="font-headline-md text-body-lg uppercase text-on-background">
                JUAN LÓPEZ
              </div>
              <div className="text-label-bold text-primary text-[12px] uppercase">
                Arquitecto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
