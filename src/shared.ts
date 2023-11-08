import { Platform } from 'react-native';

const fweight: '400' = '400';

export const fontConfig = {
    customVariant: {
        fontFamily: Platform.select({
            web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            ios: 'System',
            default: 'OpenSans-Regular',
        }),
        fontWeight: '400' as const,
        letterSpacing: 0.5,
        lineHeight: 22,
        fontSize: 20,
    },
    displaySmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    displayMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    displayLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    headlineSmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 500,
    },
    headlineMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 500,
    },
    headlineLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 500,
    },
    titleSmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    titleMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    titleLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    labelSmall: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: 500,
    },
    labelMedium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: 500,
    },
    labelLarge: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: 500,
    },
    bodySmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    bodyMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
    bodyLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 400,
    },
};
