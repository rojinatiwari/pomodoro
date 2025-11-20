import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setAnimationPlaying, toggleAnimation, type AmbienceAnimation } from "../model/ambience.slice";

interface Props {
    animation: AmbienceAnimation;
}

function AnimationItem({animation}: Props) {
    const dispatch = useAppDispatch();
    const enabled = useAppSelector((s)=>!!s.ambience.animationEnabled[animation.id]);
    const playing = useAppSelector((s)=>!!s.ambience.animationPlaying[animation.id]);
    
    const toogle =()=> {
        dispatch(toggleAnimation(animation.id));
        dispatch(setAnimationPlaying({id:animation.id, playing: !playing}));
    };
    
    return (
        <div className="flex flex-col items-center gap-2">
            <button
                onClick={toogle}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${enabled? 'bg-yellow-400': 'bg-gray-800/60'}`}
                title={animation.name}
            >
                {animation.imageKey? (
                    <img src={animation.imageKey} alt={animation.name} className="w-6 h-6" />
                ): (
                    <span className="text-xs">{animation.name.slice(0, 2)}</span>
                )}
            </button>
            <div className="text-xs text-gray-200">{animation.name}</div>
        </div>
    )
}

export default AnimationItem;
