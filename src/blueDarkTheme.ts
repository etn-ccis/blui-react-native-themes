/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { configureFonts, DefaultTheme } from "react-native-paper";
import { blue, red, darkBlack, black, white, lightBlue } from "@pxblue/colors";
import { fontConfig } from "./shared";
import Color from "color";
import { ThemeOpacity } from ".";

const themeOpacity: ThemeOpacity = {
    disabled: 0.36,
    divider: 0.36,
    disabledBackground: 0.24,
};

export const blueDarkTheme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 4,
    fonts: {
        ...configureFonts(fontConfig),
        bold: {
            fontFamily: "OpenSans-Bold",
            fontWeight: "700",
        },
    },
    colors: {
        ...DefaultTheme.colors,
        primary: blue[200],
        primaryPalette: {
            light: blue[50],
            main: blue[200],
            dark: blue[500],
        },
        accent: lightBlue[200],
        accentPalette: {
            light: lightBlue[50],
            main: lightBlue[200],
            dark: lightBlue[500],
        },
        error: red[200],
        errorPalette: {
            light: red[50],
            main: red[200],
            dark: red[500],
        },
        divider: Color(black[200]).alpha(themeOpacity.divider).string(),
        background: darkBlack[800],
        surface: black[900],
        text: black[50],
        placeholder: black[200],
        onSurface: black[50],
        textPalette: {
            primary: black[50],
            secondary: black[200],
            onPrimary: {
                light: black[500],
                main: black[500],
                dark: white[50],
            },
            disabled: black[400],
        },
        actionPalette: {
            active: black[500],
            background: black[800],
            disabled: Color(black[300]).alpha(themeOpacity.disabled).string(),
            disabledBackground: Color(black[200])
                .alpha(themeOpacity.disabledBackground)
                .string(),
        },
        disabled: Color(black[300]).alpha(themeOpacity.disabled).string(),
        notification: lightBlue[200],

        overrides: {
            avatar: {
                background: Color(black[50]).alpha(0.1).string(),
            },
            chip: {
                outlined: {
                    background: Color(black[200]).alpha(0.2).string(),
                },
                flat: {
                    background: black[500],
                },
            },
            toggleButtonGroup: {
                checked: {
                    background: Color(blue[500]).alpha(0.36).string(),
                },
            },
        },
    },
};
