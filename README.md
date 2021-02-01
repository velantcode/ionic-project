# Ionic Practice

This project is a practice. This app show a personal list of liked places. You can add and remove. Also, you can see a list of pictures from [via.placeholder.com](via.placeholder.com) server.

I see this practice in [FaztWeb Channel](https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA) in Youtube. Go to [Ionic4 & Angular | Practice Course to Begginners](https://www.youtube.com/playlist?list=PLo5lAe9kQrwo5DCXjQCXWCYXMDqt2FiLW). 

## Install

* Clone this repository: `git clone https://github.com/velantcode/ionic-practice.git`

## Requirements

* [Node.js](https://nodejs.org/) or [Yarn](https://yarnpkg.com/)
* [Android Studio](https://developer.android.com/studio) to generate app to Android Devices (optional).

## Run to develop:

    # Install dependencies
    $ npm i

    # Run server http://localhost:8100
    $ ionic start

    # Build for production server
    $ ionic build

## Generate Android Project:

The following commands is to create the Android Project and generate the APK app for Android Devices.

You must have installed Android Studio IDE to do this step.

    # Generate Android project
    $ npx cap add android

    # Run Android Studio IDE
    $ npx cap open android
    
To run app in Android, following the next steps:

1. Open ADV Manager and create a new Virtual Device (in case if not exist a device).
2. Once created a new virtual device, you must run (optional). 
3. Run the app (this connect to the Android Device active or start the device default). 

## More documentation about Express.js

Official documentation [Ionic Framework](https://ionicframework.com/).
Official documentation [Capacitor](https://capacitorjs.com/).
