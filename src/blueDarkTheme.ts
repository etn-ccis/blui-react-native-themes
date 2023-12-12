/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { MD3DarkTheme, configureFonts } from 'react-native-paper';
import { fontConfig } from './shared';
import BLUIColors from '@brightlayer-ui/colors';
import Color from 'color';

export const MD3BluiDarkTheme = {
    ...MD3DarkTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3DarkTheme.colors,
        // React Native Paper default theme color variants
        primary: BLUIColors.primary[80],
        onPrimary: BLUIColors.primary[20],
        primaryContainer: BLUIColors.primary[30],
        onPrimaryContainer: BLUIColors.primary[90],
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
        background: BLUIColors.neutral[6],
        onBackground: BLUIColors.neutral[95],
        surface: BLUIColors.neutral[6],
        onSurface: BLUIColors.neutral[95],
        surfaceDisabled: Color(BLUIColors.neutral[90]).alpha(0.2).rgb().string(),
        // TODO : onSurfaceDisabled: 'Value to be updated',
        surfaceVariant: BLUIColors.neutralVariant[30],
        onSurfaceVariant: BLUIColors.neutralVariant[70],
        outline: BLUIColors.neutralVariant[60],
        outlineVariant: Color(BLUIColors.neutralVariant[60]).alpha(0.25).rgb().string(),
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

        // Custom color variants
        // High-emphasis primary non-text variant, can be used on non-text elements like icons
        primaryNonText: BLUIColors.primary[60],
        // Attention-grabbing error color can be used on non-text elements like icons, which communicate error states
        errorNonText: BLUIColors.error[60],
        // variant used to render disabled elements
        disabled: Color(BLUIColors.neutral[90]).alpha(0.2).rgb().string(),
        // warning variant fills, texts, and icons which communicate warning states
        warning: BLUIColors.warning[90],
        // can be used on non-text warning elements like icons
        warningNonText: BLUIColors.warning[80],
        // can be used on warning text and icons against warning
        onWarning: BLUIColors.warning[20],
        // Standout fill warning color against surface
        warningContainer: BLUIColors.warning[30],
        // Text and icons against warning container
        onWarningContainer: BLUIColors.warning[90],
        // success color variant fills, texts, and icons which communicate success states
        success: BLUIColors.success[80],
        // can be used on non-text success elements like icons
        successNonText: BLUIColors.success[70],
        // can be used on success text and icons against success
        onSuccess: BLUIColors.success[20],
        // Standout fill success color against surface
        successContainer: BLUIColors.success[30],
        // Text and icons against success container
        onSuccessContainer: BLUIColors.success[90],
        // orange color variant fills, texts, and icons
        orange: BLUIColors.orange[80],
        // non-text orange variant can be used on non-text elements like icons
        orangeNonText: BLUIColors.orange[70],
        // can be used on text and icons against orange
        onOrange: BLUIColors.orange[20],
        // Standout fill orange color against surface
        orangeContainer: BLUIColors.orange[30],
        // Text and icons against orange container
        onOrangeContainer: BLUIColors.orange[90],
        // purple color variant fills, texts, and icons
        purple: BLUIColors.purple[80],
        // non-text purple variant can be used on non-text elements like icons
        purpleNonText: BLUIColors.purple[60],
        // can be used on text and icons against purple
        onPurple: BLUIColors.purple[20],
        // Standout fill purple color against surface
        purpleContainer: BLUIColors.purple[30],
        // Text and icons against purple container
        onPurpleContainer: BLUIColors.purple[90],
        // Surface container is the default role, but the others are especially helpful for creating hierarchy and nested containers
        // Lowest-emphasis container color
        surfaceContainerLowest: BLUIColors.neutral[4],
        // Low-emphasis container color
        surfaceContainerLow: BLUIColors.neutral[10],
        // Default container color
        surfaceContainer: BLUIColors.neutral[12],
        // High-emphasis container color
        surfaceContainerHigh: BLUIColors.neutral[17],
        // Highest-emphasis container color
        surfaceContainerHighest: BLUIColors.neutral[20],

        onDisabledContainer: Color(BLUIColors.neutral[10]).alpha(0.25).rgb().string(),
        disabledContainer: Color(BLUIColors.neutral[10]).alpha(0.05).rgb().string(),
    },
};
