import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import classes from '../Styles/Login.module.css';
import { maxLengthCreator, required } from '../utils/validators/validator';
import { Input } from './General/FormControl';
import { login } from '../redux/authReducer';
import { Redirect } from 'react-router-dom';
let maxLength = maxLengthCreator (50);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && <div className={classes.errorMessage}>{props.error}</div>}
      <div><Field placeholder={"Email"} component={Input} name={"email"} validate={[required, maxLength,]}/></div>
      <div><Field placeholder={"Password"} component={Input} name={"password"} validate={[required, maxLength,]} type={"password"}/></div>
      <div><Field component={Input} type={"checkbox"} name={"rememberMe"}/><span>Remember me</span></div>
      <div><button>Send</button></div>
    </form>
  )
}
const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login (formData.email, formData.password, formData.rememberMe)
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return <div className={classes.authWrapper}>
    <h1>Авторизация</h1>
    <div className={classes.authBlock}>
      <p>Авторизируйтесь, чтобы просматривать эту страницу</p>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  </div>
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
export default connect (mapStateToProps, {login}) (Login);