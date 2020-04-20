import * as firebase from 'firebase/app';
import 'firebase/messaging';
const initializedFirebaseApp = firebase.app();
const messaging = initializedFirebaseApp.messaging();
export { messaging };
