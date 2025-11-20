import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPlaying, setVolume, togglePlay, type AmbienceSound } from "../model/ambience.slice";
import BaseSlider from "./BaseSlider";

interface Props {
    sound: AmbienceSound;
}

function SoundItem({ sound }: Props) {
    const dispatch = useAppDispatch();
    const volume = useAppSelector((s) => s.ambience.volumes[sound.id]?? sound.defaultVolume?? 37);
    const playing = useAppSelector((s)=> !!s.ambience.playing[sound.id]);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // console.log(sound);
    
    useEffect(()=> {
        if(!audioRef.current) {
            audioRef.current = new Audio(sound.audioUrl);
            audioRef.current.loop = true;
            audioRef.current.preload = 'auto';
            audioRef.current.volume = Math.max(0, Math.min(1, (volume?? 37)/100));
        }
        return ()=> {
            if(audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
                audioRef.current = null;
            }
        }
    }, []);
    
    useEffect(()=> {
        const ele=audioRef.current;
        if(!ele) return;
        ele.volume = Math.max(0, Math.min(1, (volume?? 37)/100));
        if(playing) {
            ele.play().catch(()=> {
                dispatch(setPlaying({id: sound.id, playing: false}));
            })
        } else {
            ele.pause();
            ele.currentTime=0;
        }
    }, [playing, volume, dispatch, sound.id]);
    
    return (
        <div className="min-w-[80px] w-[120px] bg-black/30 rounded-xl p-3 flex flex-col items-start justify-between">
            <div
                className="flex flex-col items-center justify-center gap-1 w-full"
                onClick={()=>dispatch(togglePlay(sound.id))}
            >
                <div className={playing? "text-[#FFD089]": "text-[#FFF]"}>{sound.name}</div>
                <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden">
                    <img src={sound.imageKey} alt={sound.name} className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className="w-full">
                <BaseSlider
                    value={volume}
                    onChange={(v: number)=>dispatch(setVolume({id: sound.id, volume: v}))}
                />
            </div>
        </div>
    )
}

export default SoundItem;