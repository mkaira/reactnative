# React Native App with Tailwind CSS

A React Native application built with Expo and styled using Tailwind CSS through NativeWind v4.

## 🚀 Features

- **React Native 0.79.5** - Latest React Native framework
- **Expo ~53.0.20** - Expo SDK for easy development
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework via NativeWind v4
- **Cross-platform** - Works on iOS, Android, and Web

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Expo CLI** (optional but recommended)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd my-app
```

### 2. Install dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Install Expo CLI (if not already installed)

```bash
npm install -g @expo/cli
```

## 🚀 Getting Started

### Development Server

Start the development server:

```bash
npm start
```

Or:

```bash
expo start
```

This will open the Expo Developer Tools in your browser.

### Run on Different Platforms

#### Android
```bash
npm run android
# or
expo start --android
```

#### iOS (macOS only)
```bash
npm run ios
# or
expo start --ios
```

#### Web
```bash
npm run web
# or
expo start --web
```

## 📱 Testing on Device

### Physical Device
1. Install **Expo Go** app on your device
2. Scan the QR code from the terminal or Expo Developer Tools
3. The app will load on your device

### Emulator/Simulator
- **Android**: Make sure Android emulator is running
- **iOS**: Make sure iOS simulator is running (macOS only)

## 🎨 Tailwind CSS Usage

This project uses **NativeWind v4** to enable Tailwind CSS in React Native.

### Example Usage

```tsx
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-500">
        Hello Tailwind!
      </Text>
    </View>
  );
}
```

### Available Classes

You can use most Tailwind CSS classes including:
- **Layout**: `flex`, `flex-1`, `items-center`, `justify-center`
- **Spacing**: `p-4`, `m-2`, `px-6`, `py-3`
- **Colors**: `bg-blue-500`, `text-white`, `border-gray-300`
- **Typography**: `text-lg`, `font-bold`, `text-center`
- **And many more!**

## 📁 Project Structure

```
my-app/
├── App.tsx                # Main app component
├── index.ts               # App entry point
├── package.json           # Dependencies and scripts
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── global.css             # Global styles
├── nativewind-env.d.ts    # TypeScript definitions
├── tsconfig.json          # TypeScript configuration
└── assets/                # Static assets
    ├── icon.png
    ├── splash-icon.png
    └── ...
```

## 🔧 Configuration Files

### babel.config.js
Configured for NativeWind v4:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
```

### metro.config.js
Metro configuration for NativeWind:
```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './global.css' });
```

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler cache issues**
   ```bash
   npx expo start --clear
   ```

2. **Node modules issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **TypeScript errors with className**
   - Make sure `nativewind-env.d.ts` is in your project root
   - Restart TypeScript server in VS Code

4. **Tailwind classes not working**
   - Ensure `global.css` is imported in your main component
   - Restart the development server after configuration changes

### PowerShell Execution Policy (Windows)

If you encounter PowerShell execution policy errors:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 📦 Dependencies

### Main Dependencies
- **expo**: Expo SDK for React Native development
- **react**: React library
- **react-native**: React Native framework
- **nativewind**: Tailwind CSS for React Native
- **expo-status-bar**: Status bar component

### Dev Dependencies
- **@babel/core**: Babel JavaScript compiler
- **@types/react**: TypeScript definitions for React
- **tailwindcss**: Tailwind CSS framework
- **typescript**: TypeScript language

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

If you have any questions or need help, please:
- Check the [Expo Documentation](https://docs.expo.dev/)
- Visit [NativeWind Documentation](https://www.nativewind.dev/)
- Create an issue in this repository

---

Happy coding! 🎉


 Folder Structure

 root/
│
├── android/                  # Native Android project (auto-generated)
├── ios/                      # Native iOS project (auto-generated)
├── assets/                   # Static assets
│   ├── fonts/
│   ├── images/
│   └── lottie/                # JSON animations if used
│
├── src/                       # Main app source code
│   ├── api/                   # API calls & services
│   │   ├── config.ts          # Base URL, API keys
│   │   ├── axiosInstance.ts   # Axios setup with interceptors
│   │   └── auth.service.ts    # Example API service
│   │
│   ├── components/            # Reusable components
│   │   ├── ui/                # Buttons, Inputs, Modals
│   │   ├── layout/            # Header, Footer, Drawer
│   │   └── charts/            # Graphs, charts
│   │
│   ├── constants/             # Static values
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   └── strings.ts
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useNetwork.ts
│   │
│   ├── navigation/            # Navigation config
│   │   ├── AppNavigator.tsx
│   │   ├── AuthStack.tsx
│   │   └── MainTabs.tsx
│   │
│   ├── redux/ (or store/)     # Redux, Zustand, Recoil store
│   │   ├── slices/
│   │   ├── actions.ts
│   │   └── store.ts
│   │
│   ├── screens/               # App screens (group by feature)
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── home/
│   │   │   ├── HomeScreen.tsx
│   │   │   └── DashboardScreen.tsx
│   │   └── profile/
│   │       └── ProfileScreen.tsx
│   │
│   ├── services/              # Non-UI utilities (storage, analytics)
│   │   ├── storage.service.ts
│   │   ├── notification.service.ts
│   │   └── analytics.service.ts
│   │
│   ├── theme/                 # Global theme & styles
│   │   ├── light.ts
│   │   ├── dark.ts
│   │   └── index.ts
│   │
│   ├── utils/                  # Helper functions
│   │   ├── formatDate.ts
│   │   └── validateEmail.ts
│   │
│   ├── App.tsx                 # App entry point
│   └── index.js                # Main bootstrap file
│
├── .env                        # Environment variables
├── babel.config.js
├── tsconfig.json               # TypeScript config
├── package.json
└── README.md

