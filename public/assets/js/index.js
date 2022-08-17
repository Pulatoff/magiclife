import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMJjB1VVwBF5cihA_eG9tsZrPMsVH2Q7Y",
  authDomain: "magiclife-da2a6.firebaseapp.com",
  projectId: "magiclife-da2a6",
  storageBucket: "magiclife-da2a6.appspot.com",
  messagingSenderId: "26591838548",
  appId: "1:26591838548:web:0dfc28a8d1e8d785dd08c1",
  measurementId: "G-54146PLF56",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "ru";

window.recaptchaVerifier = new RecaptchaVerifier(
  "send",
  {
    size: "invisible",
    callback: (response) => {
      console.log("dsdsdsdsdsdsdsdsd");
    },
  },
  auth
);

document.querySelector("#send").addEventListener("click", () => {
  const phoneNumber = document.querySelector("#numberPhone").value;
  const appVerifier = window.recaptchaVerifier;
  console.log(phoneNumber);
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      console.log(confirmationResult);
      window.confirmationResult = confirmationResult;
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      //     // Error; SMS not sent
      console.log(error.message);
      //     // ...
    });
});

document.querySelector("#verify").addEventListener("click", () => {
  const code = document.querySelector("#verificationCode").value;
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      alert("molodes"); // User signed in successfully.
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
});

// // Initialize Firebase
