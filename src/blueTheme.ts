/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { configureFonts, DefaultTheme } from 'react-native-paper';
import { blue, red, black, gray, lightBlue, white } from '@pxblue/colors';
import { fontConfig, ThemeOpacity } from './shared';
import Color from 'color';

const themeOpacity: ThemeOpacity = {
    disabled: 0.3,
    divider: 0.36,
    disabledBackground: 0.24,
    actionOpacity: 1,
};

export const blueTheme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    fonts: {
        ...configureFonts(fontConfig),
        bold: {
            fontFamily: 'OpenSans-Bold',
            fontWeight: '700',
        },
    },
    colors: {
        ...DefaultTheme.colors,
        primary: blue[500],
        primaryPalette: {
            light: blue[50],
            main: blue[500],
            dark: blue[700],
        },
        accent: lightBlue[500],
        accentPalette: {
            light: lightBlue[50],
            main: lightBlue[500],
            dark: lightBlue[700],
        },
        error: red[500],
        errorPalette: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        divider: Color(black[200]).alpha(themeOpacity.divider).string(),
        background: white[200],
        surface: white[50],
        text: black[500],
        placeholder: gray[500],
        onSurface: black[500],
        textPalette: {
            primary: black[500],
            secondary: gray[500],
            onPrimary: {
                light: black[500],
                main: white[50],
                dark: white[50],
            },
            disabled: Color(black[500]).alpha(themeOpacity.disabled).string(),
        },
        actionPalette: {
            active: gray[500],
            background: white[500],
            disabled: Color(black[500]).alpha(themeOpacity.disabled).string(),
            disabledBackground: Color(black[200]).alpha(themeOpacity.disabledBackground).string(),
        },
        disabled: Color(black[500]).alpha(themeOpacity.disabled).string(),
        notification: lightBlue[500],
        opacity: themeOpacity,
        overrides: {
            snackbar: {
                accent: blue[200],
            },
            bottomNavigation: {
                inactive: blue[200],
            },
            button: {
                contained: {
                    text: {
                        disabled: blue[200],
                    },
                },
            },
        },
    },
};
