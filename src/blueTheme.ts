/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { MD3LightTheme, configureFonts } from 'react-native-paper';
import { BLUIColors } from '@brightlayer-ui/colors';
import { fontConfig } from './shared';
import Color from 'color';

export const MD3BluiLightTheme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3LightTheme.colors,
        primary: BLUIColors.primary[40],
        onPrimary: BLUIColors.primary[100],
        primaryContainer: BLUIColors.primary[80],
        onPrimaryContainer: BLUIColors.primary[30],
        primaryNonText: BLUIColors.primary[50],
        secondary: BLUIColors.primary[40],
        onSecondary: BLUIColors.primary[100],
        secondaryContainer: BLUIColors.primary[80],
        onSecondaryContainer: BLUIColors.primary[30],
        tertiary: BLUIColors.primary[40],
        onTertiary: BLUIColors.primary[100],
        tertiaryContainer: BLUIColors.primary[80],
        onTertiaryContainer: BLUIColors.primary[30],
        error: BLUIColors.error[40],
        onError: BLUIColors.primary[100],
        errorContainer: BLUIColors.error[90],
        onErrorContainer: BLUIColors.error[30],
        errorNonText: BLUIColors.error[50],
        background: BLUIColors.neutral[98],
        onBackground: BLUIColors.neutral[10],
        surface: BLUIColors.neutral[98],
        onSurface: BLUIColors.neutral[10],
        surfaceVariant: BLUIColors.neutralVariant[90],
        onSurfaceVariant: BLUIColors.neutralVariant[30],
        outline: BLUIColors.neutralVariant[50],
        outlineVariant: Color(BLUIColors.neutralVariant[50]).alpha(0.25),
        shadow: BLUIColors.primary[0],
        scrim: BLUIColors.primary[0],
        inverseSurface: BLUIColors.neutral[20],
        inverseOnSurface: BLUIColors.neutral[95],
        inversePrimary: BLUIColors.primary[80],
        elevation: {
            level0: 'transparent',
            level1: BLUIColors.primary[100],
            level2: BLUIColors.neutral[97],
            level3: BLUIColors.neutral[94],
            level4: BLUIColors.neutral[92],
            level5: BLUIColors.neutral[90],
        },
        disabled: Color(BLUIColors.neutral[10]).alpha(0.2),
        warning: BLUIColors.warning[40],
        warningNonText: BLUIColors.warning[60],
        onWarning: BLUIColors.primary[100],
        warningContainer: BLUIColors.warning[90],
        onWarningContainer: BLUIColors.warning[30],
        success: BLUIColors.success[40],
        successNonText: BLUIColors.success[50],
        onSuccess: BLUIColors.primary[100],
        successContainer: BLUIColors.success[90],
        onSuccessContainer: BLUIColors.success[30],
        orange: BLUIColors.orange[40],
        orangeNonText: BLUIColors.orange[50],
        onOrange: BLUIColors.primary[100],
        orangeContainer: BLUIColors.orange[90],
        onOrangeContainer: BLUIColors.orange[30],
        purple: BLUIColors.purple[40],
        purpleNonText: BLUIColors.purple[50],
        onPurple: BLUIColors.primary[100],
        purpleContainer: BLUIColors.purple[90],
        onPurpleContainer: BLUIColors.purple[30],
        surfaceContainerLowest: BLUIColors.primary[100],
        surfaceContainerLow: BLUIColors.neutral[97],
        surfaceContainer: BLUIColors.neutral[94],
        surfaceContainerHigh: BLUIColors.neutral[92],
        surfaceContainerHighest: BLUIColors.neutral[90],
    },
};
