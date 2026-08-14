
export const FilterButton = ({ goalFilter, dataset, handleClick, totalStudents, text, className=""}) => {

    const quantity = dataset === "all" ?  "" : `(${totalStudents})`
    
    const active = dataset === goalFilter 
        ? "border-primary text-primary"
        : "border-transparent text-on-surface-variant hover:text-on-surface"
    
    return (
        <button data-filter={dataset} onClick={handleClick} className={`${active} capitalize pb-stack-md border-b-2 font-label-bold text-label-bold ${className}`}>
            {text} {quantity}
        </button>
    )
}