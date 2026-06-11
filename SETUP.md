# راهنمای راه‌اندازی FifaTV

## مراحل نصب کامل

### 1. نصب Node.js و npm

```bash
# بررسی نسخه‌ها
node --version
npm --version
```

### 2. Clone Repository

```bash
git clone git@github.com:arashsaadati/fifaTV.git
cd fifaTV
```

### 3. نصب Dependencies

```bash
npm install
```

یا اگر مشکل داشتید:

```bash
npm install --legacy-peer-deps
```

### 4. Android SDK Setup

#### برای Windows:
```bash
setx ANDROID_HOME C:\Users\YourUsername\AppData\Local\Android\Sdk
setx PATH "%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin;%ANDROID_HOME%\platform-tools"
```

#### برای macOS/Linux:
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
```

### 5. اتصال دستگاه یا Emulator

#### Android TV Emulator:
1. Android Studio را باز کنید
2. AVD Manager را کلیک کنید
3. "Create Virtual Device" را انتخاب کنید
4. "Android TV" را انتخاب کنید
5. API level 29+ را انتخاب کنید

#### Adb Devices:
```bash
adb devices
```

### 6. اجرا

```bash
# برای Android TV
npm run android-tv

# یا نسخه عادی
npm start
react-native run-android
```

## Troubleshooting

### Problem: gradle build failed

```bash
cd android
./gradlew clean
cd ..
npm start -- --reset-cache
npm run android-tv
```

### Problem: Cannot connect to device

```bash
adb kill-server
adb start-server
adb devices
```

### Problem: Metro bundler error

```bash
npm start -- --reset-cache
```

### Problem: Module not found

```bash
npm install
rm -rf node_modules
npm cache clean --force
npm install
```

## توسعه و Debug

### Debug بر روی دستگاه:

1. اپلیکیشن را اجرا کنید
2. دستگاه را shake کنید (یا `adb shell input keyevent 82` را اجرا کنید)
3. "Debug" را انتخاب کنید

### Logs:

```bash
adb logcat | grep -i fifatv
```

### Dev Menu:

دستگاه را shake کنید تا منو ظاهر شود.

## بیلد APK

### Debug APK:

```bash
cd android
./gradlew assembleDebug
# APK در: android/app/build/outputs/apk/debug/
```

### Release APK:

```bash
cd android
./gradlew assembleRelease
# APK در: android/app/build/outputs/apk/release/
```

## فایل‌های مهم

| فایل | توضیح |
|------|-------|
| `App.tsx` | کامپوننت اصلی |
| `android/app/build.gradle` | تنظیمات Gradle |
| `android/app/src/main/AndroidManifest.xml` | تنظیمات اپلیکیشن |
| `package.json` | Dependencies |

## لینک‌های مفید

- [React Native Docs](https://reactnative.dev)
- [Android TV Docs](https://developer.android.com/training/tv)
- [ExoPlayer Docs](https://exoplayer.dev)
- [react-native-video](https://github.com/react-native-video/react-native-video)

## سوالات متداول

**Q: آیا می‌توانم روی iOS استفاده کنم؟**
A: این پروژه برای Android TV طراحی شده است، اما می‌توانید برای iOS نیز پورت کنید.

**Q: چگونه استریم را تغییر دهم؟**
A: فقط URL را در فیلد ورودی تغییر دهید.

**Q: آیا می‌توانم Features اضافه کنم؟**
A: بله! Pull Request بفرستید.
