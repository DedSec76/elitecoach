import { Icon } from "../../../shared/ui/Icon";

export function AboutSection()  {

    return (
        <section className="py-section-gap bg-black border-y border-outline-variant/20 px-margin-x" id="about">
            <div className="max-w-container-max mx-auto bento-grid">
                {/* <!-- Large Story Card --> */}
                <div className="col-span-12 lg:col-span-7 bg-surface-container-low p-10 border border-outline-variant flex flex-col justify-center">
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 uppercase">EXPERTIS EN ALTO RENDIMIENTO</h2>
                    <p className="text-body-lg text-on-surface mb-8 leading-relaxed">
                        Con más de media década en la industria del fitness, he perfeccionado un sistema que fusiona la biomecánica avanzada con la psicología del éxito. No solo entreno cuerpos; forjo mentalidades imparables.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="border-l-4 border-primary pl-4">
                            <div className="text-headline-md font-headline-md text-on-background">500+</div>
                            <div className="text-label-bold text-secondary uppercase tracking-tighter">CLIENTES ÉXITO</div>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                            <div className="text-headline-md font-headline-md text-on-background">12+</div>
                            <div className="text-label-bold text-secondary uppercase tracking-tighter">CERTIFICACIONES</div>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                            <div className="text-headline-md font-headline-md text-on-background">5+</div>
                            <div className="text-label-bold text-secondary uppercase tracking-tighter">AÑOS EXPERIENCIA</div>
                        </div>
                    </div>
                </div>

                {/* <!-- Secondary Visual Card --> */}
                <div className="col-span-12 lg:col-span-5 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                    <div className="w-full h-full min-h-100 brand-img-filter" data-alt="A close-up shot of professional gym equipment, including heavy dumbbells and a lifting platform, in a dimly lit, high-end fitness facility. The lighting is dramatic, highlighting the texture of the metal and the rubber flooring. The scene is shot with a shallow depth of field, focusing on the elite tools of the trade. The aesthetic is clean, professional, and rugged, using a dark monochromatic palette with subtle green reflections." 
                         style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiW7JWdV1oQl6ASRiqY1H3_740nfNc0ik00fGcfccZTe8V94NMQrGb-XJeSWjHjoupgcwDZhitSukBkap1lEsCzLWDUZ4CDXk2eRYYR9-Ja4MJ8Z5dpYwTPAjivcR68U198ixkFxehuVtkMB-YPjejXKAfZ-tl0GDKHGAvni_9KN69zWqlKRS-lqCkMlpvVvO33fwmR4yqu6IfgOkfsWuuBrF-rRSL-s2I2nrwKbABT-tyURbWpO-1')"}}></div>
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <div className="bg-black/80 backdrop-blur-md p-6 border border-primary/30">
                            <Icon name="military_tech" size="md" className="mb-2"/>
                            <h3 className="font-headline-md text-headline-md text-white uppercase">MÉTODO ELITE</h3>
                            <p className="text-body-md text-secondary">Basado en evidencia científica y optimización metabólica.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}