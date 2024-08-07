importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyA-Uvq5GH2U5B2G0eQ-iwQVdFT7y3HvAXA",
  authDomain: "fir-app-4a49d.firebaseapp.com",
  projectId: "fir-app-4a49d",
  storageBucket: "fir-app-4a49d.appspot.com",
  messagingSenderId: "593602549349",
  appId: "1:593602549349:web:1d730c1abb08d51c35988c",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
