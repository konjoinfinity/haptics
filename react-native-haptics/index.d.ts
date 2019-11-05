declare module "react-native-haptics" {
    type HapticTypes =
        | "selection"
        | "impactLight"
        | "impactMedium"
        | "impactHeavy"
        | "notification"
        | "notificationSuccess"
        | "notificationWarning"
        | "notificationError";

    // interface HapticOptions {
    //     enableVibrateFallback?: boolean;
    //     ignoreAndroidSystemSettings?: boolean;
    // }

    //, options?: HapticOptions
    function trigger(type: HapticTypes): void;
}