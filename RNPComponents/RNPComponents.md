# React Native Paper Component Templates

This Document contains a set of style override in components around various [React Native Paper](https://callstack.github.io/react-native-paper/index.html) components.

By default, the theming mechanism provided by RNP is very minimal and does not allow us to style components precisely the way we want for Brightlayer UI applications. To circumvent this issue, we create a template that you can use bring them in alignment with Brightlayer UI applications

These components templates simplify this process so that the end user do not create the component designs to bring them in alignment with Brightlayer UI applications.

## Component Template

- ###  Bottom Navigation

 Recommended style overrides:
* Active color of the selected tab text: primary
* Background color of the Navigation Bar: surfaceContainer

<img width='300' alt="Bottom Navigation" src="./images/bottomNavigation.png"><br/>

Usage
```tsx
import { BottomNavigation } from 'react-native-paper';

<BottomNavigation
    activeColor={theme.colors.primary}
    barStyle ={{backgroundColor:theme.colors.surfaceContainer}}
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
    />
```

- ###  Button

- ###  Data Table

- ###  Icon button

Recommended style overrides:
* background color for contained mode: primary
* icon color for contained mode: onPrimary
* background color for contained-tonal mode: primaryContainer
* icon color for contained-tonal mode: onPrimaryContainer

<img width='300' alt="IconButton" src="./images/iconButton.png"><br/>

Usage
```tsx
import { IconButton } from 'react-native-paper';

<IconButton icon="camera"/>
<IconButton icon="video" mode='outlined'/>
<IconButton icon="camera" mode='contained' containerColor={theme.colors.primary} iconColor={theme.colors.onPrimary} />
<IconButton icon="video" mode='contained-tonal' containerColor={theme.colors.primaryContainer} iconColor={theme.colors.onPrimaryContainer}  />
```
- ###  ProgressBar

 Recommended style overrides:
* background color of the track: surfaceContainerHighest

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

Recommended style overrides:
* background color of the SnackBar: inverseSurface


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

- ###  Text Input

- ###  Toggle Button

Recommended style overrides:
* borderWidth of ToggleButton: 1
* background color of the ToggleButton for selected: primaryContainer
* icon color of the ToggleButton for selected: onPrimaryContainer
* background color of the ToggleButton for non selected: 'transparent'
* icon color of the ToggleButton for non selected: onSurface


<img width='200' alt="toggleButton" src="./images/toggleButton.png"><br/>

````tsx
import { ToggleButton } from 'react-native-paper';

//Button style for selected
<ToggleButton
    icon="format-bold"
    value="bold"
    iconColor={ theme.colors.onPrimaryContainer }
    style={{
        backgroundColor: theme.colors.primaryContainer
        borderWidth: 1,
    }}
    rippleColor={'transparent'}
    />
// style for not selected
    <ToggleButton
    icon="format-italic"
    value="italic"
    iconColor={theme.colors.onSurface}
    style={{
        backgroundColor:'transparent',
        borderWidth: 1,
    }}
    rippleColor={'transparent'}
    />
````