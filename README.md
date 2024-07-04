# Vendor App for WinBySyndicate.

## Run the Project

`npm install`

`npx expo start -c`

Use Expo Go to run the project live. for development.

## Deploy Project

Use below commands:

To deploy it use eas cli do eas login and run below command and submit it on AppStore and PlayStore.

`eas build --platform android`

To deploy it in APK.

`eas build --platform android --profile androidapk`

## To use Deep-linking

Use below command and change the {expo-link} with your running expo project.

`npx uri-scheme open {expo-link}/--/vendor-register/h74AEFGhhFEsh8jhfWWEr9w3h00sjf --android`
