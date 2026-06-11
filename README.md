# FifaTV - Android TV HLS Stream Player

یک اپلیکیشن Android TV برای پخش استریم‌های HLS (M3U8) بر روی تلویزیون.

## ویژگی‌ها

- ✅ پخش استریم‌های HLS (M3U8)
- ✅ رابط کاربری بهینه‌شده برای Android TV
- ✅ کنترل‌های پخش کامل (Play, Pause, Seek)
- ✅ نمایش وضعیت بارگیری
- ✅ مدیریت خطا

## نیازمندی‌ها

- Node.js >= 14.0.0
- Android SDK
- Java Development Kit (JDK) 11+
- Android Studio (اختیاری)

## نصب

```bash
# Clone the repository
git clone git@github.com:arashsaadati/fifaTV.git
cd fifaTV

# Install dependencies
npm install
# یا
yarn install
```

## اجرا

### روی دستگاه Android TV

```bash
# اتصال دستگاه یا emulator
adb devices

# اجرا برای Android TV
npm run android-tv
```

### یا استفاده از React Native CLI

```bash
react-native run-android
```

## استفاده

1. اپلیکیشن را باز کنید
2. URL استریم M3U8 را در فیلد مربوطه وارد کنید
3. بر روی دکمه "پخش" کلیک کنید
4. از کنترل‌های ویدیو استفاده کنید

### مثال URL

```
https://portal.irsafam.ir/stream
```

## ساختار پروژه

```
fifaTV/
├── android/              # Android Native Code
├── app.json             # App Configuration
├── package.json         # Dependencies
├── App.tsx              # Main Component
├── index.js             # Entry Point
└── README.md
```

## تکنولوژی‌های استفاده‌شده

- React Native 0.73.0
- react-native-video (ExoPlayer)
- Android TV APIs
- HLS Streaming

## مشکلات رایج

### خطای "Cannot find module"
```bash
npm install
cd android
./gradlew clean
cd ..
npm start -- --reset-cache
```

### مشکل اتصال استریم
- تأیید کنید URL صحیح است
- تأیید کنید اینترنت متصل است
- تأیید کنید فایرول مسدود نکرده است

### دستگاه شناخته نشده
```bash
adb kill-server
adb start-server
adb devices
```

## توسعه

برای توسعه بیشتر:

1. فایل `App.tsx` را ویرایش کنید
2. تغییرات را ذخیره کنید
3. اپلیکیشن خود به‌طور خودکار بروز می‌شود

## لایسنس

MIT

## نویسنده

Arash Saadati

## پشتیبانی

برای مسائل و سؤالات، لطفاً issue باز کنید.
