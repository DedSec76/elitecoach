import { Icon } from "../../../shared/ui/Icon";


export function ResultSection()  {

    return (
        <section className="py-section-gap bg-surface-container-low px-margin-x" id="results">
            <div className="max-w-container-max mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-lg">
                    <div className="max-w-2xl">
                        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4 uppercase">RESULTADOS <span className="text-primary">REALES</span></h2>
                        <p className="text-body-lg text-secondary">Nuestros alumnos hablan por nosotros. Transformaciones físicas y mentales que perduran en el tiempo.</p>
                    </div>
                    <button className="font-label-bold text-label-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-2">
                        VER TODA LA GALERÍA <Icon name="arrow_forward" className="font-normal"/>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                
                    {/* <!-- Transformation Card 1 --> */}
                    <div className="bg-black border border-outline-variant p-2 group hover:border-primary transition-all duration-300">
                        <div className="relative overflow-hidden mb-6 aspect-4/5">
                            <div className="absolute top-4 left-4 z-20 bg-primary text-on-primary px-3 py-1 font-label-bold text-label-bold uppercase">12 SEMANAS</div>
                            
                            <div className="grid grid-cols-2 h-full gap-1">
                                <div className="w-full h-full brand-img-filter bg-cover bg-center" data-alt="Before photo of a male student showing a lack of muscle definition and average physique, standing in front of a neutral gym background. The lighting is flat to emphasize the starting point. Part of a high-contrast athletic transformation gallery for an elite coaching brand." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOaxyX0h1pCMiFgPntc6q5QTbYHaWpvSHqEsRz3P-l8FedKRgL80me2JaiVWhv7xUzMIjXGkq7zdmMfoCyfN6Dab3jHV-P9b_Daxp9AzVVV-YZslM7Z8Zuh3Jd3TShp9qH61Zs6evq9Oa_XqyKMOLMjNJiwbAPtaPHOcPCbeQAMcBilDBV3yb03fcBfhVvWSEARVmqanNfHE6yeca8JNrGI1Kwv6bkvRFRs6ut411onz8zJvUeVWGi')"}}></div>
                                <div className="w-full h-full bg-cover bg-center" data-alt="After photo of the same male student, now significantly leaner and more muscular with visible abs and shoulder definition. The lighting is dramatic and overhead to highlight muscle shadows. Professional gym setting, high-performance athletic aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvAjdhb-sm9y1ZvREifa2x1t8-BufUrG_m2eIU7c65Rs2E9b4-nh3vPD82klTBjg2I0WWDuDp462ukQKOzjp-A6NxKv4JpokGbE5E-oShfiMxX0tc0jo-evAJFmcHKvRKkOErLEi5XaraxFwrz0xqItbd_Cp248p-oKi4noSOVKjwe7kwiZZXd7Ad3QuSavIqsHZStyD_cwISOSr6vx58aNMMtnXfTXLrt87nuJ-oEGCEajyBiWzgo')"}}></div>
                            </div>
                        </div>
                        
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-headline-md text-on-background uppercase">CARLOS M.</h3>
                                <div className="bg-surface-container-highest px-3 py-1 text-[12px] font-label-bold text-primary border border-primary/20">ELITE LEVEL</div>
                            </div>

                            <p className="text-body-md text-secondary italic mb-4">"Perdí 15kg de grasa y gané fuerza que nunca imaginé tener. El plan fue brutalmente efectivo."</p>
                            <div className="flex items-center gap-4 text-primary">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase">Grasa Corporal</span>
                                    <span className="font-headline-md">-12%</span>
                                </div>
                                <div className="w-px h-8 bg-outline-variant"></div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase">Peso Perdido</span>
                                    <span className="font-headline-md">15 KG</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Transformation Card 2 --> */}
                    <div className="bg-black border border-outline-variant p-2 group hover:border-primary transition-all duration-300">
                        <div className="relative overflow-hidden mb-6 aspect-4/5">
                            <div className="absolute top-4 left-4 z-20 bg-primary text-on-primary px-3 py-1 font-label-bold text-label-bold uppercase">16 SEMANAS</div>
                            <div className="grid grid-cols-2 h-full gap-1">
                                <div className="w-full h-full brand-img-filter bg-cover bg-center" data-alt="Initial physique of a female athlete showing average conditioning. Dark athletic clothing, gym setting. Low saturation to maintain the brand's gritty, serious aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMjVmWph9JmX3DBMq_AnS2WkfhO7xLyYV6LMCM6xs_DHmicnwdaEoAsqJnDKbar75LzwXkApFu7NQM_TbxXsY8XAp6-gWuPgvOss8a_rMacUrf-l6S_WLLljCWCLH1zrn8EAteGcPC45YmXE1somIX2HynHZOj8_Gykj5p-dmXwrqeqssvHOJFke89-5EbQx_2cckrM2OL31ng4hrHkrz0CbDZkPsVhDpop-vZ96bFT3bJlmKaVKPb')"}}></div>
                                <div className="w-full h-full bg-cover bg-center" data-alt="Transformed physique of a female athlete, showcasing extreme muscle definition in legs and core. Powerful stance, high-intensity professional lighting, dark grey background, elite sports performance look." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACaViz-rMj6tQJZVjKILXR3Y6GesF4frui-02hZOCIYdRJLE_kILumRsks6hPouQOgncpPCCD5aAeGgWi5NePM1H2j3d6-ewIrnUHSv5CtMDJojIfNddAC9hdnGJJHybx59_ZzcNdohxoYe-Snnt3cgGkKqS1EDIjMnaZMAcKajhSN6jJglgE99ifAX6_hiW_zJf0J5atlO_lWO1i1x0Stwc_uW9lG_N9_1HBKSWxTRxuPHk6rPnxX')"}}></div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-headline-md text-on-background uppercase">ELENA R.</h3>
                                <div className="bg-surface-container-highest px-3 py-1 text-[12px] font-label-bold text-primary border border-primary/20">PRO LEVEL</div>
                            </div>

                            <p className="text-body-md text-secondary italic mb-4">"Mi mentalidad cambió por completo. Dejé de hacer cardio infinito y empecé a entrenar como atleta."</p>
                            <div className="flex items-center gap-4 text-primary">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase">Masa Muscular</span>
                                    <span className="font-headline-md">+4 KG</span>
                                </div>
                                <div className="w-px h-8 bg-outline-variant"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase">Squat PR</span>
                                    <span className="font-headline-md">+40 KG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Transformation Card 3 --> */}
                    <div className="bg-black border border-outline-variant p-2 group hover:border-primary transition-all duration-300">
                        <div className="relative overflow-hidden mb-6 aspect-4/5">
                            <div className="absolute top-4 left-4 z-20 bg-primary text-on-primary px-3 py-1 font-label-bold text-label-bold uppercase">24 SEMANAS</div>
                            <div className="grid grid-cols-2 h-full gap-1">
                                <div className="w-full h-full brand-img-filter bg-cover bg-center" data-alt="A man in his 40s at the start of his fitness journey, showing common belly fat and lack of tone. Soft lighting, neutral expression, industrial gym interior." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqrlZ2FDx2ZlhYQrC5Nhh7fpolhWWHFQ6i5VE_tedv1b51R7MMRbUetSPHoZf9ixatp4tjfmdLQEr37_BoIg7IOssObXtzaQu2sLNXOnaPtKJcGMrsWR3ZhaWlVAqXQEUA6EhHjrFTScZHZJz5PWTeqc5u5zOcDMFH7JNzIgtS0TJuxOXQNGr8m8-Vlc-asDGZbbcYsiOEpYHu4ythWQYXjwfhbiCzDHplkmKr6Ls9ZkpOEiCGcQta')"}}></div>
                                <div className="w-full h-full bg-cover bg-center" data-alt="A dramatic transformation of a man in his 40s showing a hard, muscular body with sharp abdominal definition. Strong light-and-shadow play (chiaroscuro) emphasizing the athletic progress. Elite coaching success visual." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2J10aXGBA2v0VGTZfRM1lDB4F_RmrF1u_iEzbgwRlFJXJosmujOUNR5DOCCQyFNsyzAgNDWxs96jV8I2Q3Aoys_YHhtbthB2bbKiNu1iTJ2fx0g8WR5ZdE_23AC4dQkOxpCIJBjD8vkOohDs93oJwAowjd_im9RXcrQ2Bzv71qSuRwEWvJzSyyaRyCvvnAw-R-LoMdhUBiVyQWuskc4gMQH_64cSJEfPlR7JkjSHQxfj-p9B5Bw5')"}}></div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-headline-md text-on-background uppercase">JAVIER S.</h3>
                                <div className="bg-surface-container-highest px-3 py-1 text-[12px] font-label-bold text-primary border border-primary/20">ELITE LEVEL</div>
                            </div>

                            <p className="text-body-md text-secondary italic mb-4">"A mis 45 años, estoy en la mejor forma de mi vida. No creía que fuera posible este nivel de definición."</p>
                            <div className="flex items-center gap-4 text-primary">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase">Grasa Corporal</span>
                                    <span className="font-headline-md">-18%</span>
                                </div>
                                <div className="w-px h-8 bg-outline-variant"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase">Edad Metabólica</span>
                                    <span className="font-headline-md">28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}