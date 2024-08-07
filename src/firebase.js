import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA-Uvq5GH2U5B2G0eQ-iwQVdFT7y3HvAXA",
  authDomain: "fir-app-4a49d.firebaseapp.com",
  projectId: "fir-app-4a49d",
  storageBucket: "fir-app-4a49d.appspot.com",
  messagingSenderId: "593602549349",
  appId: "1:593602549349:web:1d730c1abb08d51c35988c",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };

