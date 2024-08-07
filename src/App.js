import React, { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

const App = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
          const token = await getToken(messaging, {
            vapidKey:
              "BJUZZgDtIoGbxADQFGN8InnRInu6wfvwNxdzeZ-hCpzbj0AsN_eVDwCBzQwqIq45-SmNZeL4yFNcJQURUVHwsW4",
          });
          console.log("FCM Token:", token);
        } else {
          console.log("Unable to get permission to notify.");
        }
      } catch (error) {
        console.error("An error occurred while retrieving token. ", error);
      }
    };

    requestPermission();

    // Handle incoming messages
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // Display notification here
    });
  }, []);

  return (
    <div>
      <h1>React Firebase Notifications</h1>
    </div>
  );
};

export default App;
