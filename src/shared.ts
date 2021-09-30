type FontWeight =
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";

const defaultFontConfig = {
    regular: {
        fontFamily: "OpenSans-Regular",
        fontWeight: "400" as FontWeight,
    },
    medium: {
        fontFamily: "OpenSans-SemiBold",
        fontWeight: "600" as FontWeight,
    },
    light: {
        fontFamily: "OpenSans-Light",
        fontWeight: "300" as FontWeight,
    },
    thin: {
        fontFamily: "OpenSans-Light",
        fontWeight: "100" as FontWeight,
    },
};

export const fontConfig = {
    default: defaultFontConfig,
    ios: defaultFontConfig,
    android: defaultFontConfig,
};

export type ThemeOverrides = {
    avatar: {
        background: string;
    };

    bottomNavigation: {
        inactive: string;
    };
    button: {
        contained: {
            text: {
                disabled: string;
            };
        };
    };
    chip: {
        outlined: {
            background: string;
        };
        flat: {
            background: string;
        };
    };
    snackbar: {
        accent: string;
    };
    toggleButtonGroup: {
        checked: {
            background: string;
        };
    };
};

export type ThemeOpacity = {
    disabled: number;
    divider: number;
    disabledBackground: number;
    actionOpacity: number;
};
