import * as firebase from 'firebase/app';
import 'firebase/messaging';
const initializedFirebaseApp = firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  'BD6n7ebJqtOxaBS8M7xtBwSxgeZwX1gdS...6HkTM-cpLm8007IAzz...QoIajea2WnP8rP-ytiqlsj4AcNNeQcbes',
);
export { messaging };
