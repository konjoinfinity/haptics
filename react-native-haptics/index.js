import { NativeModules, Platform } from 'react-native';

// const defaultOptions = {
//     enableVibrateFallback: false,
//     ignoreAndroidSystemSettings: false,
// }

class Haptics {
    // , options = {}
    static trigger = (type = 'selection') => {
        // const triggerOptions = createTriggerOptions(options)
        try {
            //, triggerOptions
            NativeModules.Haptics.trigger(type);
        } catch (err) {
            console.log('Error: ' + err);
        }
    }
}

// const createTriggerOptions = options => {
//     // if options is a boolean we're using an api <=1.6 and we should pass use it to set the enableVibrateFallback option
//     if (typeof options === 'boolean') {
//         return {
//             ...defaultOptions,
//             enableVibrateFallback: options
//         }
//     } else {
//         return { ...defaultOptions, ...options }
//     }
// }

export default Haptics;