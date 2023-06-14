import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
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