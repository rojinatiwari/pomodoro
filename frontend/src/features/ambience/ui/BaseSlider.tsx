import { useCallback } from "react";

interface BaseSliderProps {
    value?: number;
    onChange: (v: number)=>void;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
}

function BaseSlider({ value=50, onChange, min=0, max=100, step=1, showValue=false }: BaseSliderProps) {
    const handleChange=useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(Number(e.target.value))
        },
        [onChange]
    )
    
    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className="w-full h-1 appearance-none rounded-lg focus:outline-none bg-[#FFD089] slider-thumb-none"
            />
            {showValue&&<></>}
        </div>
    )
    
}

export default BaseSlider;