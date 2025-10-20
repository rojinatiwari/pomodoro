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
                initial={{x: 320}}
                animate={{x: isGalleryVisible? 0:320}}
                transition={{type: "spring", stiffness: 80}}
                className="absolute top-0 right-0 h-full w-80 bg-black/60 backdrop-blur-md p-4 flex flex-col gap-4 shadow-xl text-white z-50"
            >
                <div className="flex justify-between items-center">
                    <button onClick={()=>dispatch(toggleGallery())} className="text-gray-300 hover:text-white">
                        <img src={QuickThemeIcon} alt="quick theme icon" />
                    </button>
                    <p>expand theme//</p>
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
                
                <div>
                    {themes.map((theme: Theme)=> (
                        <div 
                            key={theme.id}
                            className={`
                                relative cursor-pointer rounded-lg overflow-hidden 
                                transition-all duration-200
                                ${theme.id === selectedThemeId 
                                ? 'border-2 border-white scale-105' 
                                : 'border border-gray-500 hover:scale-105'
                                }
                            `}
                            onClick={()=>handleThemeSelect(theme.id, theme.backgroundUrl)}
                        >
                            <img src={theme.backgroundUrl} alt={theme.name}  className="h-24 w-full object-cover"/>
                            <div className="absolute bottom-0 w-full bg-black/40 text-center text-xs py-1">
                                {theme.id===selectedThemeId && (
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                                        <svg
                                            className="w-3 h-3 text-green-600"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            
            {!isGalleryVisible && (
                <button onClick={()=>dispatch(toggleGallery())}>
                    <img src={QuickThemeIcon} alt="quick theme icon" /> 
                </button>
            )}
        </>
    )
}

export default QuickTheme;