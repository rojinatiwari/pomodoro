import { configureStore } from '@reduxjs/toolkit'
import quickThemeReducer from '../features/quick-theme/model/quickTheme.slice'
import { themesApi } from '../features/quick-theme/api/themes.api'

export const store = configureStore({
  reducer: {
    quickTheme: quickThemeReducer,
    [themesApi.reducerPath]: themesApi.reducer,
    // ohter reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themesApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;