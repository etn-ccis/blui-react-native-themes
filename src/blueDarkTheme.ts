/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { MD3DarkTheme, configureFonts } from 'react-native-paper';
import { fontConfig } from './shared';
import { BLUIColors } from '@brightlayer-ui/colors';
import Color from 'color';

export const MD3BluiDarkTheme = {
    ...MD3DarkTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3DarkTheme.colors,
        primary: BLUIColors.primary[80],
        onPrimary: BLUIColors.primary[20],
        primaryContainer: BLUIColors.primary[30],
        onPrimaryContainer: BLUIColors.primary[90],
        primaryNonText: BLUIColors.primary[60],
        secondary: BLUIColors.primary[80],
        onSecondary: BLUIColors.primary[20],
        secondaryContainer: BLUIColors.primary[30],
        onSecondaryContainer: BLUIColors.primary[90],
        tertiary: BLUIColors.primary[80],
        onTertiary: BLUIColors.primary[20],
        tertiaryContainer: BLUIColors.primary[30],
        onTertiaryContainer: BLUIColors.primary[90],
        error: BLUIColors.error[80],
        onError: BLUIColors.error[20],
        errorContainer: BLUIColors.error[30],
        onErrorContainer: BLUIColors.error[90],
        errorNonText: BLUIColors.error[60],
        background: BLUIColors.neutral[6],
        onBackground: BLUIColors.neutral[95],
        surface: BLUIColors.neutral[6],
        onSurface: BLUIColors.neutral[95],
        surfaceVariant: BLUIColors.neutralVariant[30],
        onSurfaceVariant: BLUIColors.neutralVariant[70],
        outline: BLUIColors.neutralVariant[60],
        outlineVariant: Color(BLUIColors.neutralVariant[60]).alpha(0.25),
        shadow: BLUIColors.primary[0],
        scrim: BLUIColors.primary[0],
        inverseSurface: BLUIColors.neutral[90],
        inverseOnSurface: BLUIColors.neutral[10],
        inversePrimary: BLUIColors.primary[40],
        elevation: {
            level0: 'transparent',
            level1: BLUIColors.neutral[4],
            level2: BLUIColors.neutral[10],
            level3: BLUIColors.neutral[12],
            level4: BLUIColors.neutral[17],
            level5: BLUIColors.neutral[20],
        },
        disabled: Color(BLUIColors.neutral[90]).alpha(0.2),
        warning: BLUIColors.warning[90],
        warningNonText: BLUIColors.warning[80],
        onWarning: BLUIColors.warning[20],
        warningContainer: BLUIColors.warning[30],
        onWarningContainer: BLUIColors.warning[90],
        success: BLUIColors.success[80],
        successNonText: BLUIColors.success[70],
        onSuccess: BLUIColors.success[20],
        successContainer: BLUIColors.success[30],
        onSuccessContainer: BLUIColors.success[90],
        orange: BLUIColors.orange[80],
        orangeNonText: BLUIColors.orange[70],
        onOrange: BLUIColors.orange[20],
        orangeContainer: BLUIColors.orange[30],
        onOrangeContainer: BLUIColors.orange[90],
        purple: BLUIColors.purple[80],
        purpleNonText: BLUIColors.purple[60],
        onPurple: BLUIColors.purple[20],
        purpleContainer: BLUIColors.purple[30],
        onPurpleContainer: BLUIColors.purple[90],
        surfaceContainerLowest: BLUIColors.neutral[4],
        surfaceContainerLow: BLUIColors.neutral[10],
        surfaceContainer: BLUIColors.neutral[12],
        surfaceContainerHigh: BLUIColors.neutral[17],
        surfaceContainerHighest: BLUIColors.neutral[20],
    },
};
