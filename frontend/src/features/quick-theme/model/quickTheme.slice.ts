import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Theme {
    id: string;
    name: string;
    backgroundUrl: string;
    // add other theme property
}

interface QuickThemeState {
    selectedThemeId: null | string;
    isGalleryVisible: boolean;
    currentBackground: string;
}

const initialState: QuickThemeState = {
    selectedThemeId: null,
    isGalleryVisible: false,
    currentBackground: '',
};

const quickThemeSlice = createSlice({
    name: 'quickThemek',
    initialState,
    reducers: {
        setSelectedTheme: (state, action: PayloadAction<{id: string, backgroundUrl: string}>) => {
            state.selectedThemeId = action.payload.id;
            state.currentBackground = action.payload.backgroundUrl;
        },
        toggleGallery: (state) => {
            state.isGalleryVisible = !state.isGalleryVisible;
        },
        setGalleryVisible: (state, action: PayloadAction<boolean>) => {
            state.isGalleryVisible = action.payload;
        },
        setBackground: (state, action: PayloadAction<string>) => {
            state.currentBackground = action.payload;
        }
    }
});

export const {
    setSelectedTheme,
    toggleGallery,
    setGalleryVisible,
    setBackground
} = quickThemeSlice.actions;

export default quickThemeSlice.reducer;