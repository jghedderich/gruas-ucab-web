'use client';
import { useFirebaseMessaging } from '@/hooks/use-firebase-messaging';

export function FirebaseMessaging() {
  const { token, message } = useFirebaseMessaging();
  console.log(token);

  return (
    <div>
      <h2>Firebase Messaging</h2>
      {token ? (
        <p>Device registered for push notifications.</p>
      ) : (
        <p>Waiting for permission to enable push notifications...</p>
      )}
      {message && (
        <div>
          <h3>Latest Message:</h3>
          <pre>{JSON.stringify(message, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
