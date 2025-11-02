import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AmbienceSound {
    id: string;
    name: string;
    audioUrl: string;
    imageKey: string;
    defaultVolume: number;
    categoy?: string;
}

export interface AmbienceAnimation {
    id: string;
    name: string;
}

export interface AmbienceState {
    // for sounds
    sounds: AmbienceSound[];
    volumes: Record<string, number>;
    playing: Record<string, boolean>;
    prevVolumes: Record<string, number> | null;
    isAllMute: boolean;
    
    // for animations
    animations: AmbienceAnimation[];
    animationEnabled: Record<string, boolean>;
    animationPlaying: Record<string, boolean>;
}

const initialState: AmbienceState = {
    sounds: [],
    volumes: {},
    playing: {},
    prevVolumes: null,
    isAllMute: false,
    
    animations: [
        {id: 'rain-drop', name: 'Rain Drop'},
        {id: 'snowfall', name: 'snowfall'},
    ],
    animationEnabled: {
        'rain-drop': false,
        'snowfall': false,
    },
    animationPlaying: {},
};

const ambienceSlice = createSlice({
    name: "ambience",
    initialState,
    reducers: {
        // for sound
        setSounds: (state, action: PayloadAction<AmbienceSound[]>) => {
            action.payload.forEach(s => {
                if(state.volumes[s.id]===undefined) {
                    state.volumes[s.id] = s.defaultVolume ?? 50;
                }
                if(state.playing[s.id]===undefined) {
                    state.playing[s.id] = false;
                }
            });
        },
        setVolume: (state, action: PayloadAction<{id: string, volume: number}>) => {
            const { id, volume } = action.payload;
            state.volumes[id] = Math.max(0, Math.min(100, volume));
        },
        togglePlay: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.playing[id] = !state.playing[id];
        },
        setPlaying: (state, action: PayloadAction<{id: string, playing: boolean}>) => {
            const { id, playing } = action.payload;
            state.playing[id] = playing;
        },
        stopAll: (state, action: PayloadAction<AmbienceSound[]>) => {
            action.payload.forEach(s=> {
                state.playing[s.id] = false;
            })
        },
        toggleAllMute: (state) => {
            if(!state.isAllMute) {
                state.prevVolumes = {...state.volumes};
                Object.keys(state.volumes).forEach(id=> (state.volumes[id]=0));
                state.isAllMute = true;
            }
            else {
                if(state.prevVolumes) {
                    state.prevVolumes = {...state.volumes, ...state.prevVolumes};
                    state.prevVolumes = null;
                    state.isAllMute = false;
                }
            }
        },
        
        // for animation
        toggleAnimation: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.animationEnabled[id] = !state.animationEnabled[id];
        },
        setAnimation: (state, action: PayloadAction<{id: string, enabled: boolean}>) => {
            const { id, enabled } = action.payload;
            state.animationEnabled[id] = enabled;
        },
        setAnimationPlaying: (state, action: PayloadAction<{ id: string, playing: boolean }>) => {
            const { id, playing } = action.payload;
            state.animationPlaying[id] = playing;
        },
        stopAllAnimations: (state) => {
            Object.keys(state.animationPlaying).forEach(id=> (state.animationPlaying[id]=false));
        }
        
    }
});

export const {
    setSounds,
    setVolume,
    togglePlay,
    setPlaying,
    stopAll,
    toggleAllMute,
    
    toggleAnimation,
    setAnimation,
    setAnimationPlaying,
    stopAllAnimations,
} = ambienceSlice.actions;

export default ambienceSlice.reducer;


