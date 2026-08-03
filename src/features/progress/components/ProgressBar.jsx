
export const ProgressBar = () => {
    return (
        <td className="px-stack-lg py-stack-lg">
            <div className="w-48">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-on-surface-variant">Week 8/12</span>
                    <span className="text-[11px] text-primary font-bold">66% </span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest">
                    <div className="h-full bg-primary w-[66%]"></div>
                </div>
            </div>
        </td>
    )
}