# Running the application

This is a React Native application built using Expo. This guide will walk you through the steps to set up and run the application on a Windows machine using an Android simulator.

## Prerequisites

Before you begin, ensure you have the following software installed:

1. **Node.js**: [Download and install Node.js](https://nodejs.org/).
2. **Git**: [Download and install Git](https://git-scm.com/).
3. **Android Studio**: [Download and install Android Studio](https://developer.android.com/studio). Ensure you install the Android SDK and set up an Android Virtual Device on installation.
After opening the Android Studio, from the "More Actions" menu click on the "Virtual Device Manager". In this menu add a phone virtual device such as Pixel 8, Pixel 7 etc..
<img width="475" alt="Screenshot 2024-07-25 at 13 55 41" src="https://github.com/user-attachments/assets/917069a5-4468-454a-b0bd-2c411c5371f2">

Press the plus icon on the left:
<img width="1236" alt="Screenshot 2024-07-25 at 13 56 14" src="https://github.com/user-attachments/assets/ffe4f29a-e0b6-4ea8-a844-78cb6e143cfd">

Choose a phone virtual device you want to install:
<img width="1078" alt="Screenshot 2024-07-25 at 13 59 45" src="https://github.com/user-attachments/assets/d36b3743-65e2-4dea-ab57-4f71da9a42f2">


For MacOS you can additionally install XCode for running the app in iOS simulator:

1. **XCode**: [Download and install XCode](https://developer.apple.com/xcode/). Ensure that in installation you install an iPhone simulator as well.

## Installation Instructions

Follow these steps to set up and run the application:

### 1. Clone the Repository

Open Command Prompt or Terminal and clone the repository using the following command:

```powershell
git clone https://github.com/makisacik/react-native-crypto-agent.git
```

### 2. Navigate to the Project Directory
Change to the project's root directory:

```powershell
cd react-native-crypto-agent
```

### 3. Install Expo CLI Globally
Install Expo CLI globally by running the following command:

```powershell
npm install -g expo-cli
```

### 4. Install Dependencies
Install the necessary dependencies using npm:

```powershell
npm install
```

### 5. Start the Metro Bundler
Start the Metro Bundler, which is the JavaScript bundler for React Native:

```powershell
npx expo start
```
### 6. Launch the Android Emulator
Open Android Studio and launch the AVD (Android Virtual Device) you previously set up from the Virtual Device Manager. Ensure the emulator is running.

### 7. Run the Application on the Android Emulator
In the command line tool or in terminal, press "a". This will build the project and launch it in the Android emulator.

### 8. Run the Application on the iOS Simulator (Only for MacOS)
In the command line tool or in terminal, press "i". Unlike the Android Emulator you don't need to run the simulator beforehand, it would be opened automatically.

### 9. Run the Application on a Physical Device
Install the Expo Go application on your Android or iOS phone. [Download and install Expo Go](https://expo.dev/go).
Scan the QR code in your Command Prompt or Terminal with Expo Go (Android) or the Camera app (iOS)
