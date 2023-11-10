/**
Copyright (c) 2021-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export { MD3BluiLightTheme as blue } from './blueTheme';
export { MD3BluiDarkTheme as blueDark } from './blueDarkTheme';

// This will still need to be added to an end-user project if they want to access these properties without typescript yelling at them.
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNativePaper {
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        interface ThemeColors {
            colors: {
                primaryNonText: string;
                errorNonText: string;
                disabled: string;
                warning: string;
                warningNonText: string;
                onWarning: string;
                warningContainer: string;
                onWarningContainer: string;
                success: string;
                successNonText: string;
                onSuccess: string;
                successContainer: string;
                onSuccessContainer: string;
                orange: string;
                orangeNonText: string;
                onOrange: string;
                orangeContainer: string;
                onOrangeContainer: string;
                purple: string;
                purpleNonText: string;
                onPurple: string;
                purpleContainer: string;
                onPurpleContainer: string;
                surfaceContainerLowest: string;
                surfaceContainerLow: string;
                surfaceContainer: string;
                surfaceContainerHigh: string;
                surfaceContainerHighest: string;
            };
        }
    }
}
