import { FilterButton } from "./FilterButton"

export const FiltersTabsGoals = ({ goalFilter, totalStudents, handleClick, goals }) => {
    
    return (
        <div className="flex border-b border-white/5 gap-stack-lg">
            <FilterButton goalFilter={goalFilter} dataset={"all"} handleClick={handleClick} text={"All Members"} />
            
            { goals ? goals.map(goal => (
                <FilterButton goalFilter={goalFilter} dataset={goal.id} handleClick={handleClick} text={goal.name} totalStudents={totalStudents[goal.id]} key={goal.id}  />
            )) : "Something went wrong" }             
        </div>
    )
}