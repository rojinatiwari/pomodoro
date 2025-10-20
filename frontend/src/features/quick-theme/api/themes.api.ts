import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Theme } from "../model/quickTheme.slice";

import cloudsAndTree from '../../../assets/themes/clouds-and-tree.jpg';
import machhapuchhre from '../../../assets/themes/machhapuchhre.jpg';
import redshineMountainRange from '../../../assets/themes/redshine-mountain-range.jpg';
import sheepsOnGround from '../../../assets/themes/sheeps-on-ground.jpg';
import aHouseTheif from '../../../assets/themes/a-house-theif.jpg';
import aligatorDarkWater from '../../../assets/themes/aligator-dark-water.png';
import animeArch from '../../../assets/themes/anime-arch.png';
import animeGirlWithGlassOn from '../../../assets/themes/anime-girl-with-glass-on.jpg';
import archOverload from '../../../assets/themes/arch-overload.jpg';
import astronautWithFirefly from '../../../assets/themes/astronaut-with-firefly.jpg';
import blueFightSlayer from '../../../assets/themes/blue-fight-slayer.jpg';
import buildingLegoIllustration from '../../../assets/themes/building-lego-illustration.png';
import cloudsAndMountain from '../../../assets/themes/clouds-and-mountain.jpg';
import deadpoolSideShadowLook from '../../../assets/themes/deadpool-side-shadow-look.jpg';
import deadpoolSwordDark from '../../../assets/themes/deadpool-sword-dark.jpg';
import deadpoolToken from '../../../assets/themes/deadpool-token.jpg';
import debianAsciiSpiral from '../../../assets/themes/debian-ascii-spiral.png';
import fullMoon from '../../../assets/themes/full-moon.jpg';
import futureGreenCity from '../../../assets/themes/future-green-city.jpg';
import lunuxEnv from '../../../assets/themes/lunux-env.png';
import machhapuchhreRaysTakesSlowAway from '../../../assets/themes/machhapuchhre-rays-takes-slow-away.jpg';
import moonPhase from '../../../assets/themes/moon-phase.png';
import mountAtNight from '../../../assets/themes/mount-at-night.jpg';
import raysAndMachhapuchhre from '../../../assets/themes/rays-and-machhapuchhre.jpg';
import slayerDawn from '../../../assets/themes/slayer-dawn.png';
import sunflowerAndWavesIllustration from '../../../assets/themes/sunflower-and-waves-illustration.jpg';
import tajMahal from '../../../assets/themes/taj-mahal.jpg';
import whiteAndYellow from '../../../assets/themes/white-and-yellow.jpg';
import whiteFlower from '../../../assets/themes/white-flower.jpg';


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
                        {id: '1', name: 'a-house-theif', backgroundUrl: aHouseTheif},
                        {id: '2', name: 'aligator-dark-water', backgroundUrl: aligatorDarkWater},
                        {id: '3', name: 'anime-arch', backgroundUrl: animeArch},
                        {id: '4', name: 'anime-girl-with-glass-on', backgroundUrl: animeGirlWithGlassOn},
                        {id: '5', name: 'arch-overload', backgroundUrl: archOverload},
                        {id: '6', name: 'astronaut-with-firefly', backgroundUrl: astronautWithFirefly},
                        {id: '7', name: 'blue-fight-slayer', backgroundUrl: blueFightSlayer},
                        {id: '8', name: 'building-lego-illustration', backgroundUrl: buildingLegoIllustration},
                        {id: '9', name: 'clouds-and-mountain', backgroundUrl: cloudsAndMountain},
                        {id: '10', name: 'clouds-and-tree', backgroundUrl: cloudsAndTree},
                        {id: '11', name: 'deadpool-side-shadow-look', backgroundUrl: deadpoolSideShadowLook},
                        {id: '12', name: 'deadpool-sword-dark', backgroundUrl: deadpoolSwordDark},
                        {id: '13', name: 'deadpool-token', backgroundUrl: deadpoolToken},
                        {id: '14', name: 'debian-ascii-spiral', backgroundUrl: debianAsciiSpiral},
                        {id: '15', name: 'full-moon', backgroundUrl: fullMoon},
                        {id: '16', name: 'future-green-city', backgroundUrl: futureGreenCity},
                        {id: '17', name: 'lunux-env', backgroundUrl: lunuxEnv},
                        {id: '18', name: 'machhapuchhre-rays-takes-slow-away', backgroundUrl: machhapuchhreRaysTakesSlowAway},
                        {id: '19', name: 'machhapuchhre', backgroundUrl: machhapuchhre},
                        {id: '20', name: 'moon-phase', backgroundUrl: moonPhase},
                        {id: '21', name: 'mount-at-night', backgroundUrl: mountAtNight},
                        {id: '22', name: 'rays-and-machhapuchhre', backgroundUrl: raysAndMachhapuchhre},
                        {id: '23', name: 'redshine-mountain-range', backgroundUrl: redshineMountainRange},
                        {id: '24', name: 'sheeps-on-ground', backgroundUrl: sheepsOnGround},
                        {id: '25', name: 'slayer-dawn', backgroundUrl: slayerDawn},
                        {id: '26', name: 'sunflower-and-waves-illustration', backgroundUrl: sunflowerAndWavesIllustration},
                        {id: '27', name: 'taj-mahal', backgroundUrl: tajMahal},
                        {id: '28', name: 'white-and-yellow', backgroundUrl: whiteAndYellow},
                        {id: '29', name: 'white-flower', backgroundUrl: whiteFlower},
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