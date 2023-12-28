import { Platform } from 'react-native';

import { MD3Theme, useTheme } from 'react-native-paper';
import { MD3Type, MD3Typescale } from 'react-native-paper/lib/typescript/types';
import { $DeepPartial } from '@callstack/react-theme-provider';

export const fontConfig = {
    displaySmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 36,
        lineHeight: 45,
    },
    displayMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 45,
        lineHeight: 56,
    },
    displayLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 54,
        lineHeight: 68,
        letterSpacing: 1,
    },
    headlineSmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500' as const,
        fontSize: 24,
        lineHeight: 32,
    },
    headlineMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500' as const,
        fontSize: 27,
        lineHeight: 40,
    },
    headlineLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500' as const,
        fontSize: 32,
        lineHeight: 40,
    },
    titleSmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600' as const,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    titleMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600' as const,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    titleLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 22,
        lineHeight: 28,
    },
    labelSmall: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600' as const,
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
    },
    labelMedium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600' as const,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    labelLarge: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600' as const,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    bodySmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 12,
        lineHeight: 16,
    },
    bodyMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 14,
        lineHeight: 20,
    },
    bodyLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as const,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
};

export type ExtendedTheme = Omit<MD3Theme, 'colors'> & {
    colors: {
        primary: string;
        primaryContainer: string;
        secondary: string;
        secondaryContainer: string;
        tertiary: string;
        tertiaryContainer: string;
        surface: string;
        surfaceVariant: string;
        surfaceDisabled: string;
        background: string;
        error: string;
        errorContainer: string;
        onPrimary: string;
        onPrimaryContainer: string;
        onSecondary: string;
        onSecondaryContainer: string;
        onTertiary: string;
        onTertiaryContainer: string;
        onSurface: string;
        onSurfaceVariant: string;
        onSurfaceDisabled: string;
        onError: string;
        onErrorContainer: string;
        onBackground: string;
        outline: string;
        outlineVariant: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        shadow: string;
        scrim: string;
        backdrop: string;
        elevation: {
            level0: string;
            level1: string;
            level2: string;
            level3: string;
            level4: string;
            level5: string;
        };
        // Custom color variants
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
        disabledContainer: string;
        onDisabledContainer: string;
        sliderTrack: string;
        sliderTrackDisabled: string;
        errorFilledContainer: string;
        onErrorFilledContainer: string;
        errorShadedContainer: string;
        onErrorShadedContainer: string;
        errorOutlinedContainerOutline: string;
        onErrorOutlinedContainerOutline: string;
        orangeFilledContainer: string;
        onOrangeFilledContainer: string;
        orangeShadedContainer: string;
        onOrangeShadedContainer: string;
        orangeOutlinedContainer: string;
        onOrangeOutlinedContainer: string;
        warningFilledContainer: string;
        onWarningFilledContainer: string;
        warningShadedContainer: string;
        onWarningShadedContainer: string;
        warningOutlinedContainerOutline: string;
        onWarningOutlinedContainer: string;
        successFilledContainer: string;
        onSuccessFilledContainer: string;
        successShadedContainer: string;
        successShadedLabel: string;
        successOutlinedContainerOutline: string;
        onSuccessOutlinedContainer: string;
        primaryFilledContainer: string;
        onPrimaryFilledContainer: string;
        primaryShadedContainer: string;
        onPrimaryShadedContainer: string;
        primaryOutlinedContainerOutline: string;
        onPrimaryOutlinedContainer: string;
        purpleFilledContainer: string;
        onPurpleFilledContainer: string;
        purpleShadedContainer: string;
        onPurpleShadedContainer: string;
        purpleOutlinedContainerOutline: string;
        onPurpleOutlinedContainer: string;
        neutralFilledContainer: string;
        onNeutralFilledContainer: string;
        neutralShadedContainer: string;
        onNeutralShadedContainer: string;
        neutralOutlinedContainerOutline: string;
        onNeutralOutlinedContainer: string;
        textFieldContainer: string;
        blackLightWhiteDark: string;
        whiteLightBlackDark: string;
    };
};

export const useExtendedTheme = (overrides?: $DeepPartial<ExtendedTheme>): ExtendedTheme =>
    useTheme<ExtendedTheme>(overrides);
