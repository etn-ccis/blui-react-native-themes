/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { MD3LightTheme, configureFonts } from 'react-native-paper';
import BLUIColors from '@brightlayer-ui/colors';
import { fontConfig } from './shared';
import Color from 'color';

export const MD3BluiLightTheme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3LightTheme.colors,
        // React Native Paper default theme color variants
        primary: BLUIColors.primary[40],
        onPrimary: BLUIColors.primary[100],
        primaryContainer: BLUIColors.primary[80],
        onPrimaryContainer: BLUIColors.primary[30],
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
        background: BLUIColors.neutral[98],
        onBackground: BLUIColors.neutral[10],
        surface: BLUIColors.neutral[98],
        onSurface: BLUIColors.neutral[10],
        // surfaceDisabled is the same as disabledContainer in design files
        surfaceDisabled: Color(BLUIColors.neutral[10]).alpha(0.05).rgb().string(),
        // onSurfaceDisabled is the same as onDisabledContainer in design files
        onSurfaceDisabled: Color(BLUIColors.neutral[10]).alpha(0.25).rgb().string(),
        surfaceVariant: BLUIColors.neutralVariant[90],
        onSurfaceVariant: BLUIColors.neutralVariant[30],
        outline: BLUIColors.neutralVariant[50],
        outlineVariant: Color(BLUIColors.neutralVariant[50]).alpha(0.25).rgb().string(),
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

        // Custom color variants
        // High-emphasis primary non-text variant, can be used on non-text elements like icons
        primaryNonText: BLUIColors.primary[50],
        // Attention-grabbing error color can be used on non-text elements like icons, which communicate error states
        errorNonText: BLUIColors.error[50],
        // variant used to render disabled elements
        disabled: Color(BLUIColors.neutral[10]).alpha(0.2).rgb().string(),
        // warning variant fills, texts, and icons which communicate warning states
        warning: BLUIColors.warning[40],
        // can be used on non-text warning elements like icons
        warningNonText: BLUIColors.warning[60],
        // can be used on warning text and icons against warning
        onWarning: BLUIColors.primary[100],
        // Standout fill warning color against surface
        warningContainer: BLUIColors.warning[90],
        // Text and icons against warning container
        onWarningContainer: BLUIColors.warning[30],
        // success color variant fills, texts, and icons which communicate success states
        success: BLUIColors.success[40],
        // can be used on non-text success elements like icons
        successNonText: BLUIColors.success[50],
        // can be used on success text and icons against success
        onSuccess: BLUIColors.primary[100],
        // Standout fill success color against surface
        successContainer: BLUIColors.success[90],
        // Text and icons against success container
        onSuccessContainer: BLUIColors.success[30],
        // orange color variant fills, texts, and icons
        orange: BLUIColors.orange[40],
        // non-text orange variant can be used on non-text elements like icons
        orangeNonText: BLUIColors.orange[50],
        // can be used on text and icons against orange
        onOrange: BLUIColors.primary[100],
        // Standout fill orange color against surface
        orangeContainer: BLUIColors.orange[90],
        // Text and icons against orange container
        onOrangeContainer: BLUIColors.orange[30],
        // purple color variant fills, texts, and icons
        purple: BLUIColors.purple[40],
        // non-text purple variant can be used on non-text elements like icons
        purpleNonText: BLUIColors.purple[50],
        // can be used on text and icons against purple
        onPurple: BLUIColors.primary[100],
        // Standout fill purple color against surface
        purpleContainer: BLUIColors.purple[90],
        // Text and icons against purple container
        onPurpleContainer: BLUIColors.purple[30],
        // Surface container is the default role, but the others are especially helpful for creating hierarchy and nested containers
        // Lowest-emphasis container color
        surfaceContainerLowest: BLUIColors.primary[100],
        // Low-emphasis container color
        surfaceContainerLow: BLUIColors.neutral[97],
        // Default container color
        surfaceContainer: BLUIColors.neutral[94],
        // High-emphasis container color
        surfaceContainerHigh: BLUIColors.neutral[92],
        // Highest-emphasis container color
        surfaceContainerHighest: BLUIColors.neutral[90],
        // This is alias for surface disabled, used as disabled container background
        disabledContainer: Color(BLUIColors.neutral[10]).alpha(0.05).rgb().string(),
        // Text and icons against disabled container
        onDisabledContainer: Color(BLUIColors.neutral[10]).alpha(0.25).rgb().string(),
        // Can be used on slider and range selector track
        sliderTrack: BLUIColors.neutral[80],
        // Disabled version of slider track color variant
        sliderTrackDisabled: Color(BLUIColors.neutral[80]).alpha(0.3).rgb().string(),
    },
};
