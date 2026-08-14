
export const MaintenanceCard = ({difference, initial, current}) => {
    const isOutOfRange = difference > 1;

    // Calculate range
    const MIN_RANGE = initial - 1;
    const MAX_RANGE = initial + 1;

    // Operation Sign
    const operationSign = difference >= 0 ? "+" : "-"

    return (
        <div>
            <p className="text-[11px]"><span>Initial: </span> {initial} Kg</p>
            <p className="text-[11px]"><span>Range: </span> {MIN_RANGE} Kg - {MAX_RANGE} Kg</p>
            <p className="text-[11px]"><span>Current: </span> {current} Kg</p>
            <p className="text-[11px]"><span>Difference: </span> {operationSign}{difference} Kg</p>
            <p className={`text-[11px] ${isOutOfRange ? "text-error" : "text-primary"}`}>
                {isOutOfRange ? "❌ Fuera de Rango" : "✅ En rango"}
            </p>
        </div>
    )
}