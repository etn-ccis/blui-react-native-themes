/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { configureFonts, DefaultTheme } from 'react-native-paper';
import { blue, red, black, gray, lightBlue, white } from '@pxblue/colors';
import { fontConfig } from './shared';
import Color from 'color';

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
        primaryBase: blue[500],
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
        background: white[200],
        surface: white[50],
        error: red[500],
        errorPalette: {
            light: red[50],
            main: red[500],
            dark: red[700]
        },
        divider: Color(black[200]).alpha(0.36).string(),

        text: black[500],
        placeholder: gray[500],
        textPalette: {
            primary: black[500],
            secondary: gray[500],
            onPrimary: {
                light: black[500],
                main: white[50],
                dark: white[50],
            },
            disabled: Color(black[500]).alpha(0.3).string(),
            highlight: blue[200],
            hint: Color(black[500]).alpha(0.3).string(),
        },
        actionPalette: {
            hover: Color(black[50]).alpha(0.1).string(),
            active: gray[500],
            background: white[500],
            disabled: Color(black[500]).alpha(0.3).string(),
            disabledBackground: Color(black[200]).alpha(0.24).string(),
        },
        disabled: Color(black[500]).alpha(0.3).string(),
        onSurface: black[500],
        notification: lightBlue[500],
    },
};
