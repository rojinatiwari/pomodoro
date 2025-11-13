import { useState } from 'react';
import AmbienceIcon from '../../assets/icons/ambience.svg'
import AmbiencePanel from './AmbiencePanel';

function Ambience() {
    const [open, setOpen] = useState(false);
    
    return (
        <>
         {open? <></>:
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