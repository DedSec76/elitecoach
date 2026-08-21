

export const RoutineForm = ({toggle, handleSubmit, handleChange, progressForm, close}) => {
    return (
        <section className={`${toggle ? "block" : "hidden" } absolute inset-0 bg-on-secondary/60 z-5000`}>
                        
                <div className="mx-auto max-w-200 titan-card">
                    <h2 className="py-6 md:py-8 text-center text-headline-md md:text-headline-lg uppercase">Assing New <span className="text-primary">Routine</span></h2>
                            
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center px-4">
                        <div className="formFieldCard">
                            <legend className="formLegend"><span className="formLegendSpan">01.</span> Achievement</legend>
        
                            <div className="formField">
                                <label>Title</label>
                                <input onChange={handleChange} className="p-2 bg-on-background/20" name="weight" type="number" placeholder="Ej. 80" value={progressForm?.weight} />
                            </div>
        
                            <div className="formField">
                                <label>Reps</label>
                                <input onChange={handleChange} className="p-2 bg-on-background/20" name="body_fat" type="number" placeholder="Ej. 15" value={progressForm?.body_fat} />
                            </div>
                        </div>
                            
                        <div className="formFieldCard">
                            <legend className="formLegend"><span className="formLegendSpan">02.</span> Extras</legend>
        
                            <div className="formField">
                                <label>Recorded On</label>
                                <input onChange={handleChange} type="date" className="w-40 bg-on-background/20 p-2" name="recorded_at" value={progressForm?.recorded_at}/>
                            </div>

                            <div className="formField">
                                <label>Notes</label>
                                <textarea onChange={handleChange} className="bg-on-background/20 p-2 resize-none" name="notes" placeholder="Add your notes..." value={progressForm?.notes}></textarea>
                            </div>
                        </div>
                            
                        { /* Discard/Save - Buttons */ }
                        <div className="mb-4 flex gap-10">
                            <button onClick={close} type="button" className="primaryButton bg-on-secondary/90 text-on-background">Discard</button>
                            <button type="submit" className="primaryButton bg-primary text-background">Save Progress</button>
                        </div>
                    </form>
                </div>
        </section>
    )
}