importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCGCnCwqgzwvF9qB6Pmm3FOSotaHv5o7Wk',
  authDomain: 'gruas-ucab-a6c14.firebaseapp.com',
  projectId: 'gruas-ucab-a6c14',
  storageBucket: 'gruas-ucab-a6c14.firebasestorage.app',
  messagingSenderId: '779798579651',
  appId: '1:779798579651:web:06f25b5a997a6e78409576',
  measurementId: 'G-FEM4PJDJRB',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
