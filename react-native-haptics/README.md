# react-native-haptics

## Getting started

`$ npm install react-native-haptics --save`

### Mostly automatic installation

`$ react-native link react-native-haptics`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-haptics` and add `Haptics.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libHaptics.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.HapticsPackage;` to the imports at the top of the file
  - Add `new HapticsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-haptics'
  	project(':react-native-haptics').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-haptics/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-haptics')
  	```


## Usage
```javascript
import Haptics from 'react-native-haptics';

// TODO: What to do with the module?
Haptics;
```
