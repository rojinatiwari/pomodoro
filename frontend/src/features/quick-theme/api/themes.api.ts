import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Theme } from "../model/quickTheme.slice";

// Import images so Vite/webpack resolves their URLs at build time
import machhapuchhreImg from '../../../assets/themes/machhapuchhre.jpg';
import cloudsAndTreeImg from '../../../assets/themes/clouds-and-tree.jpg';
import redshineMountainImg from '../../../assets/themes/redshine-mountain-range.jpg';
import sheepsOnGroundImg from '../../../assets/themes/sheeps-on-ground.jpg';


export const themesApi = createApi({
    reducerPath: 'themesApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api/v1'}),
    endpoints: (builder) => ({
        getThemes: builder.query<Theme[], void>({
            // query: () => '/themes',
            // no backend, so just using the mock datas
            queryFn: async () => {
                return {
                    data: [
                        {id: '1', name: 'machhapuchhre', backgroundUrl: machhapuchhreImg},
                        {id: '2', name: 'clouds-and-tree', backgroundUrl: cloudsAndTreeImg},
                        {id: '3', name: 'redshine-mountain-range', backgroundUrl: redshineMountainImg},
                        {id: '4', name: 'ships-on-ground', backgroundUrl: sheepsOnGroundImg},
                    ]
                };
            }
        }),
        getThemeById: builder.query<Theme, string>({
            query: (id)=> `/themes/${id}`,
        }),
    }),
});

export const { useGetThemesQuery, useGetThemeByIdQuery } = themesApi;