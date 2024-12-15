import { useState, useEffect } from 'react';
import {
  getToken,
  MessagePayload,
  Messaging,
  onMessage,
} from 'firebase/messaging';
import { messaging } from '../lib/firebase';

export function useFirebaseMessaging() {
  const [token, setToken] = useState<string | null>(null);
  const [message, setMessage] = useState<MessagePayload | null>(null);

  useEffect(() => {
    if (messaging) {
      const requestPermission = async () => {
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            const currentToken = await getToken(messaging as Messaging, {
              vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
            });
            if (currentToken) {
              setToken(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          }
        } catch (error) {
          console.log('An error occurred while retrieving token. ', error);
        }
      };

      requestPermission();

      const unsubscribe = onMessage(messaging, (payload) => {
        setMessage(payload);
        // You can customize how to show the notification here
        new Notification(payload.notification?.title || 'New Message', {
          body: payload.notification?.body,
        });
      });

      return () => {
        unsubscribe();
      };
    }
  }, []);

  return { token, message };
}
