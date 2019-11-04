declare module "react-native-haptics" {
    type HapticTypes =
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

    function trigger(type: HapticTypes, options?: HapticOptions): void;
}