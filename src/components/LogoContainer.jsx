import React from 'react';
import Logo from './Logo';
import * as axios from "axios";
import { setUserData } from '../redux/authReducer';
import { connect } from 'react-redux';
class LogoContainer extends React.Component {
  componentDidMount () {
    axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then (response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        this.props.setUserData (id, email, login);
      }
    });
  }
  render () {
    return <Logo {...this.props}/>
  }
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect (mapStateToProps, {setUserData}) (LogoContainer);