import admin from 'firebase-admin'

export const FirebaseAdmin =admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'kosikart-firebase.firebaseapp.com'

});
