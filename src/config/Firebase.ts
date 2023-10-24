import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDX42ve5k2O8jMt89YvoIamaw-Yf-j2n1Q",
    authDomain: "training-web-app.firebaseapp.com",
    projectId: "training-web-app",
    storageBucket: "training-web-app.appspot.com",
    messagingSenderId: "28858761625",
    appId: "1:28858761625:web:9c1a73a20d8c790a0d9308"
};

const app = initializeApp(firebaseConfig);

export default app;
