import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <>
        <div>SignIn</div>
        <button onClick={logGoogleUser}>
            sign in with Google Popup
        </button>
    
    </>
  )
}

export default SignIn