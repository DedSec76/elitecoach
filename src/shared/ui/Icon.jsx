
export const Icon = ({name, size = "md", color = "text-primary", className = ""}) => {
    
    const sizes = {
        sm: "text-body-md",
        md: "text-headline-md",
        lg: "text-headline-lg",
        xl: "text-display-lg-mobile",
    }
    
    return (
        <>
            <span className={`icon ${color} ${sizes[size]} ${className}`}>{name}</span>
        </>
    )
}