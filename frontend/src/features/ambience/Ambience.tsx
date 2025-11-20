import { useState } from 'react';
import AmbienceIcon from '../../assets/icons/ambience.svg'
import AmbiencePanel from './AmbiencePanel';
import { useAppSelector } from '../../store/hooks';
import Rain from './ui/background/Rain';
import Snow from './ui/background/Snow';

function Ambience() {
    const [open, setOpen] = useState(false);
    const animationEnabled = useAppSelector((s)=>s.ambience.animationEnabled);
    
    return (
        <>
            {animationEnabled['rain-drop'] && <Rain />}
            {animationEnabled['snowfall'] && <Snow />}
            {open? null:
                <div className="absolute bottom-4 right-4 p-2 z-40">
                    <button onClick={()=> setOpen((s)=>!s)}>
                        <img src={AmbienceIcon} alt="ambience icon" />
                    </button>
                </div>
            }
            {open && <AmbiencePanel onClose={()=> setOpen(false)} />}
        </>
    )
}

export default Ambience;