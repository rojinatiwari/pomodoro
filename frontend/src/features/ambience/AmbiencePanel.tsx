import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetAudiosQuery } from "./api/ambiences.api";
import { setSounds, stopAll, toggleAllMute } from "./model/ambience.slice";
import unmuteIcon from "../../assets/icons/ambience/sound-off.svg";
import muteIcon from "../../assets/icons/ambience/sound-on.svg";
import AmbienceIcon from '../../assets/icons/ambience.svg';
import AmbienceItem from "./ui/AmbienceItem";
import { useEffect } from "react";

interface Props {
    onClose?: ()=> void
}

function AmbiencePanel({ onClose }: Props) {
    const dispatch = useAppDispatch();
    const { data: audios, isLoading } = useGetAudiosQuery();
    const sounds = useAppSelector((s)=>s.ambience.sounds);
    const animations = useAppSelector((a)=>a.ambience.animations);
    const isAllMute = useAppSelector((s)=> s.ambience.isAllMute);
    // console.log(sounds);
    // console.log(audios);
    useEffect(()=> {
        if(audios && audios.length) {
            dispatch(setSounds(audios));
        }
    }, [dispatch, audios]);
    
    return (
        <div className="fixed left-4 right-4 bottom-4 z-50">
            <div className="mx-auto max-w-6xl bg-black/40 backdrop-blur-md rounded-2xl p-4 flex gap-4 items-center shadow-xl">
                <div className="flex-1 flex gap-3 overflow-x-auto justify-around">
                    {isLoading && <div>sound loading...</div>}
                    {!isLoading && sounds && sounds.map((s)=> <AmbienceItem key={s.id} sound={s} />)}
                </div>
                
                <div className="flex flex-col gap-3 items-center">
                    <button
                        className="text-sm px-3 py-2 bg-yellow-400/90 rounded-md"
                        onClick={()=> dispatch(stopAll())}
                    >
                        Stop All
                    </button>
                    <button
                        className=""
                        onClick={()=> dispatch(toggleAllMute())}
                    >
                        {isAllMute? 
                           <img src={unmuteIcon} alt="unmute icon" /> : <img src={muteIcon} alt="mute icon"/>
                        }
                    </button>
                </div>
                <div className="w-px h-20 bg-yellow-400/80" />
                
                {/* animation */}
                <div className="ml-[35%]">
                    {/* <div className="flex-1 flex gap-3 overflow-x-auto justify-around">
                        { animations && sounds.map((s)=> <AmbienceItem key={s.id} sound={s} />)}
                    </div> */}
                </div>
                { onClose && (
                     <div className="absolute right-4 p-2 z-40">
                        <button onClick={onClose}>
                            <img src={AmbienceIcon} alt="ambience icon" />
                        </button>
                    </div>
                )}
            </div>  
        </div>
    )
}

export default AmbiencePanel;
