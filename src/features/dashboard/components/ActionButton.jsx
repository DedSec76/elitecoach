import { Icon } from "../../../shared/ui/Icon"

export const ActionButton = ({title, type, onClick}) => {
    const colorHover = type === "delete" ? "hover:bg-error" :  "hover:bg-primary";
    const colorActive = type === "delete" ? "active:bg-error" : "active:bg-primary";

    return (
        <button data-action={type} onClick={onClick} className={`w-10 h-10 md:w-8 md:h-8 flex items-center justify-center ${colorActive} ${colorHover} transition-colors border border-white/10`} title={title}>
            <Icon name={type} className="text-sm hover:text-background" color="text-on-background" />
        </button>                 
    )
} 