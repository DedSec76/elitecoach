import { Icon } from "@/shared/ui/Icon"

export const QuickActionButton = ({handleClick, dataset="", name_action, name_icon="", bg="success"}) => {
    const background = bg === "success" ? "hover:bg-primary" : "hover:bg-error-container"
    const colorText = bg === "success" ? "group-hover:text-background" : "group-hover:text-white"

    return (
        <button data-action={dataset} onClick={handleClick} className={`w-full flex items-center justify-between p-stack-md bg-white/5 ${background} group transition-all text-left`}>
            <span className={`font-label-bold ${colorText}`}>{name_action}</span>
            <Icon className={`${colorText} text-[24px] font-normal`} color="text-on-surface-variant" name={name_icon}/>
        </button>
    )
}