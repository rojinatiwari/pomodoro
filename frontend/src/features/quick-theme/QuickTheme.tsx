import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetThemesQuery } from "./api/themes.api";
import { setSelectedTheme, toggleGallery } from "./model/quickTheme.slice";
import QuickThemeIcon from '../../assets/icons/quick-theme.svg';
import type { Theme } from "./model/quickTheme.slice";

function QuickTheme() {
    const dispatch = useAppDispatch();
    const isGalleryVisible = useAppSelector(
        (state)=>state.quickTheme.isGalleryVisible
    );
    const selectedThemeId = useAppSelector(
        (state)=> state.quickTheme.selectedThemeId
    );
    const { data: themes = [], isLoading, error } = useGetThemesQuery();
    
    const handleThemeSelect = (id: string, backgroundUrl: string) => {
        dispatch(setSelectedTheme({id, backgroundUrl}));
    };
    
    return (
        <>
            <motion.div
                initial={{x: 320, opacity: 0}}
                animate={{x: isGalleryVisible? 0:320, opacity: 1}}
                exit={{x: 320, opacity: 0}}
                transition={{stiffness: 80, type: "spring", ease: "easeInOut", duration: 0.4}}
                className="absolute top-0 right-0 h-full w-80 bg-black/20 backdrop-blur-md p-4 flex flex-col gap-4 shadow-xl z-50"
            >
                <div className="flex justify-between items-center">
                    <button onClick={()=>dispatch(toggleGallery())} className="rotate-180 transition">
                        <img src={QuickThemeIcon} alt="quick theme icon" />
                    </button> 
                </div>
                
                {isLoading && (
                    <div className="text-white text-center py-8">
                        loading themes...
                    </div>
                )}
                {error && (
                    <div className="text-red-400 text-center py-8">
                        failed to load themes...
                    </div>
                )}
                
                <div className="overflow-scroll pt-1 pl-2">
                    {themes.map((theme: Theme)=> (
                        <div 
                            key={theme.id}
                            className={`
                                relative cursor-pointer rounded-lg overflow-hidden w-[90%]
                                transition-all duration-200
                                ${theme.id === selectedThemeId 
                                ? 'border-2 border-[#ffd089] scale-106 transition z-50'
                                : 'border border-gray-600 hover:scale-105'
                                }
                            `}
                            onClick={()=>handleThemeSelect(theme.id, theme.backgroundUrl)}
                        >
                            <img src={theme.backgroundUrl} alt={theme.name} loading="lazy" className="h-24 w-full object-cover"/>
                        </div>
                    ))}
                </div>
            </motion.div>
            
            {!isGalleryVisible && (
                <button className="absolute top-4 right-4 p-2 transition z-40" onClick={()=>dispatch(toggleGallery())}>
                    <img src={QuickThemeIcon} alt="quick theme icon" /> 
                </button>
            )}
        </>
    )
}

export default QuickTheme;