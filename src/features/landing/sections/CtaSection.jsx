import { Icon } from "../../../shared/ui/Icon";

export function CtaSection()  {

    return (
        <section className="py-section-gap bg-surface-container-low relative overflow-hidden">

            {/* <!-- Background Decoration --> */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
            
            <div className="max-w-4xl mx-auto px-margin-x text-center relative z-10">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-8 uppercase">¿ESTÁS LISTO PARA EL <span className="text-primary">SIGUIENTE NIVEL?</span></h2>
                <p className="text-body-lg text-secondary mb-12 max-w-2xl mx-auto">
                    Solo aceptamos a 5 alumnos nuevos por mes para garantizar la máxima calidad en el coaching. No pierdas tu lugar en el próximo ciclo.
                </p>

                <div className="bg-black border border-outline-variant p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-stack-lg">
                    <div className="text-left">
                        <div className="text-headline-md font-headline-md text-primary">ÚLTIMOS 2 CUPOS</div>
                        <div className="text-label-bold text-on-surface uppercase tracking-widest">DISPONIBLES PARA ESTE MES</div>
                    </div>
                    <button className="w-full md:w-auto bg-primary hover:bg-primary-container text-on-primary px-12 py-5 font-headline-md text-label-bold uppercase tracking-widest transition-all duration-300 cta-glow">
                        APLICAR AHORA
                    </button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-stack-lg opacity-50 grayscale contrast-150">
                    <div className="flex items-center gap-2"><Icon name="verified" className="font-normal" /><span className="font-label-bold uppercase tracking-widest text-[12px]">Certificado IFBB</span></div>
                    <div className="flex items-center gap-2"><Icon name="payments" className="font-normal" /><span className="font-label-bold uppercase tracking-widest text-[12px]">Pago Seguro</span></div>
                    <div className="flex items-center gap-2"><Icon name="support_agent" className="font-normal" /><span className="font-label-bold uppercase tracking-widest text-[12px]">Soporte 24/7</span></div>
                </div>
            </div>
        </section>
    )
}