import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import Modal from '../../shared/components/UIElements/Modal';

import './Auth.css';

const Auth = () => {

  const history = useHistory();


  // Context for authentication
  const auth = useContext(AuthContext);

  // State for login/signup mode
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Form hook for managing form state and input validation
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  // Switch between login and signup modes
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          image: {
            value: null,
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  // Submit the login/signup form
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    auth.login();
    history.push("/home");
  };

  const closeHandler = () => {
    history.push("/explore");
  }

  return (
    <Modal
      header={isLoginMode ? <h2>Log in to</h2> : <h2>Sign up to</h2>}
      className="authentication"
      contentClass="auth-content"
      onCancel={closeHandler}
    >
      <form>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            placeholder="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        {!isLoginMode && <ImageUpload id="image" onInput={inputHandler} />}
        <Input
          element="input"
          id="email"
          type="email"
          placeholder="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          placeholder="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" onClick={authSubmitHandler} disabled={!formState.isValid}>
          {isLoginMode ? 'Login' : 'Signup'}
        </Button>
        <span onClick={switchModeHandler}>
          {`Switch to ${isLoginMode ? 'Signup' : 'Login'}!`}
        </span>
      </form>
    </Modal>
  );
};

export default Auth;