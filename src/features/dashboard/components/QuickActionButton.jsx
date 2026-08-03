import { Icon } from "@/shared/ui/Icon"

export const QuickActionButton = ({name_action, name_icon=""}) => {
    
    /*
    hover:bg-error
    group-hover:text-white
    text-on-surface-variant group-hover:text-white">flag</span> 
      */

    return (
        <button className={`w-full flex items-center justify-between p-stack-md bg-white/5 hover:bg-primary group transition-all text-left`}>
            <span className="font-label-bold group-hover:text-background">{name_action}</span>
            <Icon className="group-hover:text-background text-[24px] font-normal" color="text-on-surface-variant" name={name_icon}/>
        </button>
    )
}