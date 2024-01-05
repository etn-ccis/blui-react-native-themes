# React Native Paper Component Templates

This Document contains a set of components Templates around various [React Native Paper](https://callstack.github.io/react-native-paper/index.html) components.

By default, the theming mechanism provided by RNP is very minimal and does not allow us to style components precisely the way we want for Brightlayer UI applications. To circumvent this issue, we create a template that you can use bring them in alignment with Brightlayer UI applications

These components templates simplify this process so that the end user do not create the component designs to bring them in alignment with Brightlayer UI applications.

## Component Template

- ###  ProgressBar

In Progress Bar we have updated the Background of Progress bar to SurfaceContainerHighest to match the design

<img width='300' alt="ProgressBar" src="./images/progressBar.png"><br/>

Usage
```tsx
import { ProgressBar } from 'react-native-paper';

<ProgressBar
    progress={0.5}
    style={{ backgroundColor: theme.colors.surfaceContainerHighest }}
/>
```


- ###  Snackbar

In SnackBar we have updated the Background of Snackbar to inverseSurface to match the design

<img width='300' alt="Snackbar" src="./images/snackbar.png"><br/>

````tsx
import { Snackbar } from 'react-native-paper';
<Snackbar
    visible={true}
    action={{
        label: 'Dismiss',
        onPress: (): void => {},
    }}
    style={{ backgroundColor: theme.colors.inverseSurface }}
    >
    Snackbar Text
</Snackbar>
````

