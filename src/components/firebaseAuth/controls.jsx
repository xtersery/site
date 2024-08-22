import { auth, provider, signInWithPopup, signOut, GoogleAuthProvider } from './setup';

const handleSignIn = () => {
    const result = signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(result.user);
        console.log(credential);
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });

      return result.user;
};

const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

export { handleSignIn, handleSignOut };
