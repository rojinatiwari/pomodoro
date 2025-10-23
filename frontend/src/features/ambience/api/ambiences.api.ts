import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AmbienceSound } from '../model/ambience.slice';

import rain from '../../../assets/icons/ambience/rain.svg';
import bird from '../../../assets/icons/ambience/bird.svg';
import campfire from '../../../assets/icons/ambience/campfire.svg';
import waves from '../../../assets/icons/ambience/waves.svg'


export const ambienceApi = createApi({
    reducerPath: 'ambienceApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
    endpoints: (builder) => ({
        getAudios: builder.query<AmbienceSound[], void>({
        //   query: (name) => `/ambience/sounds`,
        // no backend, so just using the mock datas
            queryFn: async ()=> {
                return {
                    data: [
                    {
                            id: "1",
                            name: "rain",
                            audioUrl: rain,
                            imageKey: "rain",
                            defaultVolume: 33,
                            categoy: "sound",          
                    },
                    {
                            id: "2",
                            name: "bird",
                            audioUrl: bird,
                            imageKey: "bird",
                            defaultVolume: 33,
                            categoy: "sound",
                    },
                    {
                            id: "3",
                            name: "campfire",
                            audioUrl: campfire,
                            imageKey: "campfire",
                            defaultVolume: 33,
                            categoy: "sound",
                    },
                    {
                            id: "4",
                            name: "waves",
                            audioUrl: waves,
                            imageKey: "waves",
                            defaultVolume: 33,
                            categoy: "sound",
                    },
                    ]
                };
            }
        }),
        
    }),
})

export const { useGetAudiosQuery } = ambienceApi;