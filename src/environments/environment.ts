// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {
  firebase: {
    apiKey: "AIzaSyA71u97zdoBFW3aEGHfCGaYfG7zELAAJik",
  authDomain: "tiendacrud-a9974.firebaseapp.com",
  projectId: "tiendacrud-a9974",
  storageBucket: "tiendacrud-a9974.appspot.com",
  messagingSenderId: "577782857048",
  appId: "1:577782857048:web:801a9d05e5745099e9b92d"
  },
  production: true,
  google_maps_api_key:'AIzaSyAvOWRvpJOEP7QEOYxsljBeZ9uQPEtmric'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
