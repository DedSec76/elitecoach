import { Icon } from "./Icon"

export const HamburgerBtn = ({toggle, handleClick, className=""}) => {
    return (
        <button onClick={handleClick} className={`cursor-pointer md:hidden text-primary ${className}`}>
          <Icon name={toggle ? "close" :"menu"} className="text-[28px] font-normal"/>
        </button>
    )
}