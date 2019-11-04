declare module "react-native-haptics" {
    type HapticFeedbackTypes =
        | "selection"
        | "impactLight"
        | "impactMedium"
        | "impactHeavy"
        | "notificationSuccess"
        | "notificationWarning"
        | "notificationError";

    interface HapticOptions {
        enableVibrateFallback?: boolean;
        ignoreAndroidSystemSettings?: boolean;
    }

    function trigger(type: HapticFeedbackTypes, options?: HapticOptions): void;
}