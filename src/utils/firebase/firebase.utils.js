import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyApOd4uo5vRILoKbE2eQ3V33bNfV4LZW44",
	authDomain: "clothing-store-v1.firebaseapp.com",
	projectId: "clothing-store-v1",
	storageBucket: "clothing-store-v1.appspot.com",
	messagingSenderId: "202956606555",
	appId: "1:202956606555:web:e4a903734af2a3daa0037e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
