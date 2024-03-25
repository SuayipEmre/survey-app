import { ColorTheme } from "../types/colorTypes";

export const Colors = {
    light: {
        primary: '#1d1d1b',
        secondary: '#E5E4E2',
        third :'#fff',
        midblue: '#0300A3',
        tabBar: {
            background: '#1d1d1b',
            active_text: '#9593FF',
            inactive_text: '#fff'
        },
    } as ColorTheme,
    dark: {
        primary: '#fff',
        secondary: '#252525',
        third :'#3B3C36',
        midblue: '#1E90FF',
        tabBar: {
            background: '#000000',
            active_text: '#fff',
            inactive_text: '#ffffff80'
        },
    } as ColorTheme,
}


/*
primary => text,
secondary => element,
third =< background.
*/

/*

    tabBarActiveTintColor: theme == 'light' ? '#9593FF' : '#A0A0FF',
            tabBarInactiveTintColor: theme == 'light' ? '#fff': '#000',
 tabBar:{
        background : string,
        inactive_text : string
        active_text : string
    },
*/