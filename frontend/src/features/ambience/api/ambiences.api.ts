import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AmbienceSound } from '../model/ambience.slice';

import rainImg from '../../../assets/icons/ambience/rain.svg';
import birdImg from '../../../assets/icons/ambience/bird.svg';
import campfireImg from '../../../assets/icons/ambience/campfire.svg';
import wavesImg from '../../../assets/icons/ambience/waves.svg';

import rainSound from '../../../assets/audios/rain.mp3';
import birdSound from '../../../assets/audios/bird.mp3';
import campfireSound from '../../../assets/audios/campfire.mp3';
import waveSound from '../../../assets/audios/wave.mp3';


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
                            audioUrl: rainSound,
                            imageKey: rainImg,
                            defaultVolume: 33,
                            categoy: "sound",
                    },
                    {
                            id: "2",
                            name: "bird",
                            audioUrl: birdSound,
                            imageKey: birdImg,
                            defaultVolume: 33,
                            categoy: "sound",
                    },
                    {
                            id: "3",
                            name: "campfire",
                            audioUrl: campfireSound,
                            imageKey: campfireImg,
                            defaultVolume: 33,
                            categoy: "sound",
                    },
                    {
                            id: "4",
                            name: "waves",
                            audioUrl: waveSound,
                            imageKey: wavesImg,
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