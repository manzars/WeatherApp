# Weather App Installation Guide

Welcome to the Weather App! This guide provides step-by-step instructions to set up and run the React Native Weather App from this GitHub repository on your local machine. The app is built using React Native with TypeScript and includes features like weather data fetching and dark mode toggle.

## Technical Description

### Overview

The Weather App is a cross-platform mobile application developed using React Native, leveraging TypeScript for type safety and maintainability. It provides users with real-time weather information based on city searches, featuring a modern UI designed to match industry standards. The app is optimized for both iOS and Android, ensuring a consistent experience across platforms.

### Architecture

- **Framework**: React Native (version compatible with > 0.60) with TypeScript.
- **State Management**: Utilizes React Context API to manage application state, including weather data, loading states, and the last searched city, with persistence handled by `@react-native-async-storage/async-storage`.
- **Folder Structure**: Follows best practices with a modular structure:
  - `src/components/`: Reusable UI components.
  - `src/context/`: Context providers and state management logic.
  - `src/screens/`: Screen-level components (e.g., HomeScreen).
  - `src/services/`: API service layer (e.g., weatherApi.ts).
  - `src/types/`: TypeScript type definitions.
  - `src/utils/`: Utility functions.
  - `__tests__/`: Unit tests for components and services.
- **API Integration**: Fetches weather data from the OpenWeatherMap API using `axios`, with error handling and loading states.
- **Styling**: Uses `StyleSheet` for pixel-perfect, platform-agnostic styling, with support for light and dark modes.

### Key Features

- **Weather Data Fetching**: Users can search for a city, and the app displays the current temperature, weather condition, and an icon.
- **Dark Mode Toggle**: Implements a theme switch using React Context, with dynamic styling for light and dark modes.
- **Persistent State**: Stores the last searched city using AsyncStorage, restoring it on app reopen.
- **Responsive UI**: Designed with a pixel-perfect layout inspired by industry-standard weather apps, including hourly and daily forecasts (mocked data for demonstration).
- **Testing**: Includes unit tests using Jest and ts-jest for core functionality.

### Dependencies

- Core Libraries: `axios`, `@react-native-async-storage/async-storage`, `@react-navigation/native`, `react-native-safe-area-context`, `react-native-screens`, `react-native-vector-icons`, `moment`.
- Development Tools: `@types/axios`, `@types/react-native-async-storage`, `@types/jest`, `@types/react`, `@types/react-test-renderer`, `typescript`, `jest`, `ts-jest`.

### Performance and Best Practices

- Optimized for performance with lazy loading and efficient state updates.
- Follows TypeScript best practices for type safety and code readability.
- Modular design allows for easy extension and maintenance.

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (LTS version recommended, e.g., 16.x or 18.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) (version 11 or 17)
- [Android Studio](https://developer.android.com/studio) (for Android development) or [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (install via `npm install -g react-native-cli`)
- [Git](https://git-scm.com/) (for cloning the repository)

### Additional Requirements

- Android: Android SDK with API level 21 or higher
- iOS: macOS with Xcode 12.0 or higher, and a physical device or iOS Simulator

## Installation Steps

### 1. Clone the Repository

Open your terminal and clone the repository to your local machine:

```bash
git clone https://https://github.com/manzars/WeatherApp.git
cd WeatherApp

Install the required Node.js packages:
- npm install or yarn install

For iOS setup
- cd ios && pod install && cd ..

Run the App
- npx react-native run-android (Android)
- npx react-native run-ios (iOS)

```
