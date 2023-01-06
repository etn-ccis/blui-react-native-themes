# Brightlayer UI themes for React Native applications

[![](https://img.shields.io/circleci/project/github/etn-ccis/blui-react-native-themes/master.svg?style=flat)](https://circleci.com/gh/etn-ccis/blui-react-native-themes/tree/master)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-themes.svg?label=@brightlayer-ui/react-native-themes&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-themes)

This package provides theming support for Eaton applications using the Brightlayer UI design system. It includes resources for developers using React Native with [react-native-paper](https://www.npmjs.com/package/react-native-paper). This package comes with two theme options: a Blue theme (standard) and a Dark theme.

For other frameworks, check out our related packages:

-   [@brightlayer-ui/angular-themes](https://www.npmjs.com/package/@brightlayer-ui/angular-themes)
-   [@brightlayer-ui/react-themes](https://www.npmjs.com/package/@brightlayer-ui/react-themes)

## Installation

Install with npm

```shell
npm install --save @brightlayer-ui/react-native-themes
```

or yarn

```shell
yarn add @brightlayer-ui/react-native-themes
```

# Usage

> **NOTE:** Using the Brightlayer UI React Native theme requires that you add the Open Sans font to your application. You can learn how to do this by reading the instructions for [Vanilla React Native](https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e) or [Expo](https://docs.expo.io/versions/latest/guides/using-custom-fonts/). This will be added automatically if you start your project with the [@brightlayer-ui/cli](https://www.npmjs.com/package/@brightlayer-ui/cli).

> When using Expo, you will need to specify the name for each font weight you load using the format `OpenSans-<Weight>`, e.g., OpenSans-SemiBold. Refer to one of our React Native demos for reference.

To use our themes in your application, simply wrap the app in a `Provider` and pass in your desired theme (e.g., `blue`, `blueDark`).

#### Light Theme

```tsx
import { Provider as ThemeProvider} from 'react-native-paper';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
...
// Default Theme
<ThemeProvider theme={BLUIThemes.blue}>
    <App />
</ThemeProvider>
```

#### Dark Theme

```tsx
import { Provider as ThemeProvider} from 'react-native-paper';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
...
<ThemeProvider theme={BLUIThemes.blueDark}>
    <App />
</ThemeProvider>
```

> When using either of these themes, you should use our React Native Paper wrapper components (see below).

### React Native Paper Wrapper Components

The default theme structure for React Native Paper components does not offer us enough control to make some components look exactly the way they should for Brightlayer UI applications. Because of this, we have extended the default theme type definition (see below) and created wrapper components with the correct styles to use in place of some of the standard React Native Paper components.

In order for these components to look correct in your application, you should use the [Brightlayer UI wrapper components](https://github.com/etn-ccis/blui-react-native-component-library/blob/master/components/src/themed/README.md) in place of the respective components from React Native Paper.

### TypeScript

Our Brightlayer UI themes extend the themes provided by React Native Paper. If you are using these themes in a TypeScript project and want to access any of the properties that were added to the defaults, you need to add the following [global augmentation](https://callstack.github.io/react-native-paper/theming.html#typescript) in your project's index.tsx file:

```tsx
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primaryPalette: {
                light: string;
                main: string;
                dark: string;
            };
            accentPalette: {
                light: string;
                main: string;
                dark: string;
            };
            errorPalette: {
                light: string;
                main: string;
                dark: string;
            };
            divider: string;
            textPalette: {
                primary: string;
                secondary: string;
                onPrimary: {
                    light: string;
                    main: string;
                    dark: string;
                };
                disabled: string;
            };
            actionPalette: {
                active: string;
                background: string;
                disabled: string;
                disabledBackground: string;
            };
            overrides: $DeepPartial<ThemeOverrides>;
            opacity: Partial<ThemeOpacity>;
        }
        interface ThemeFonts {
            bold: ThemeFont;
        }
    }
}
```

<!--
## Demo

[Check it out](https://github.com/etn-ccis/blui-react-native-showcase-demo/tree/master)
-->
