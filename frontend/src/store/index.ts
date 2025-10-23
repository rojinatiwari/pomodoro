import { configureStore } from '@reduxjs/toolkit'
import quickThemeReducer from '../features/quick-theme/model/quickTheme.slice'
import ambienceReducer from '../features/ambience/model/ambience.slice'
import { themesApi } from '../features/quick-theme/api/themes.api'
import { ambienceApi } from '../features/ambience/api/ambiences.api';

export const store = configureStore({
  reducer: {
    quickTheme: quickThemeReducer,
    [themesApi.reducerPath]: themesApi.reducer,
    
    ambience: ambienceReducer,
    [ambienceApi.reducerPath]: ambienceApi.reducer,
    
    // ohter reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themesApi.middleware, ambienceApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;