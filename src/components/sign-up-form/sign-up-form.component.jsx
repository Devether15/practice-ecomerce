import { useState } from "react";
import { creatateAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields = {
  displaynmae: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;
  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      alert("password do not match");
      return;
    }

    try {
      const {user } = await creatateAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields()
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert("cannot create user, email already in use");
      }
      console.log('user creation error: ', error);
    }


  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>
            <label>Email</label>
            <input type="email" required onChange={handleChange} name='email' value={email}/>
            <label>Password</label>
            <input type="password" required onChange={handleChange} name='password' value={password}/>
            <label>confirm Passwrord</label>
            <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <Button type="submit">Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm