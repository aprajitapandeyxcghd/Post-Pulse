// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiZg6LgyHrxXnJGEfj1q0L61YCX641M3E",
    authDomain: "bloggingplatform-7060d.firebaseapp.com",
    projectId: "bloggingplatform-7060d",
    storageBucket: "bloggingplatform-7060d.appspot.com",
    messagingSenderId: "61329096306",
    appId: "1:61329096306:web:15a61fdf45602b9250cceb",
    measurementId: "G-0VCB62742H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

// Function to handle Google Sign-In
function setupGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    document.getElementById('googleSignInBtn').addEventListener('click', function() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('User signed in:', user);
                // Redirect to the blog creation page or dashboard
                window.location.href = 'library.html'; // Update as needed
            }).catch((error) => {
                // Handle Errors here.
                console.error('Error during sign-in:', error);
            });
    });
}

// Initialize Google Sign-In setup after the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupGoogleSignIn();
});

// Show the Google Sign-In modal when "CREATE A BLOG" button is clicked
document.getElementById('createBlogBtn').addEventListener('click', function() {
    $('#googleSignInModal').modal('show');
});

// Ensure the footer "CREATE A BLOG" button also triggers the modal
document.getElementById('createBlogBtnFooter').addEventListener('click', function() {
    $('#googleSignInModal').modal('show');
});
