package com.reactlibrary;

import android.os.Vibrator;
import android.content.Context;
import android.provider.Settings;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;


public class HapticsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public HapticsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Haptics";
    }

    @ReactMethod
    // , ReadableMap options
  public void trigger(String type) {
    // Check system settings, if disabled and we're not explicitly ignoring then return immediatly
    // boolean ignoreAndroidSystemSettings = options.getBoolean("ignoreAndroidSystemSettings");
    int hapticEnabledAndroidSystemSettings = Settings.System.getInt(this.reactContext.getContentResolver(), Settings.System.HAPTIC_FEEDBACK_ENABLED, 0);
    // ignoreAndroidSystemSettings == false && 
    if (hapticEnabledAndroidSystemSettings == 0) return;

    Vibrator v = (Vibrator) reactContext.getSystemService(Context.VIBRATOR_SERVICE);
    if (v == null) return;
    long durations[] = {0, 20};

    switch (type) {
       case "selection":
        durations = new long[]{0, 20};
        break;
      case "impactLight":
        durations = new long[]{0, 30};
        break;
      case "impactMedium":
        durations = new long[]{0, 40};
        break;
      case "impactHeavy":
       durations = new long[]{0, 60};
        break;
        case "notification":
        durations = new long[]{0, 30, 10};
        break;
      case "notificationSuccess":
        durations = new long[]{0, 40, 60, 20};
        break;
      case "notificationWarning":
        durations = new long[]{0, 20, 60, 40};
        break;
      case "notificationError":
        durations = new long[]{0, 20, 40, 30, 40, 40};
        break;
      }
      v.vibrate(durations, -1);
  }
 
}