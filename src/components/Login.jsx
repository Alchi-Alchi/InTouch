import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classes from '../Styles/Login.module.css';
import { maxLengthCreator, required } from '../utils/validators/validator';
import { Input } from './General/FormControl';
let maxLength = maxLengthCreator (15);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={"Login"} component={Input} name={"login"} validate={[required, maxLength,]}/></div>
      <div><Field placeholder={"Password"} component={Input} name={"password"} validate={[required, maxLength,]}/></div>
      <div><Field component={Input} type={"checkbox"} name={"rememberMe"}/><span>Remember me</span></div>
      <div><button>Send</button></div>
    </form>
  )
}
const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm);
const Login = (props) => {
  return <div className={classes.authWrapper}>
    <h1>Авторизация</h1>
    <div className={classes.authBlock}>
      <p>Авторизируйтесь, чтобы просматривать эту страницу</p>
      <LoginReduxForm/>
    </div>
  </div>
};
export default Login;