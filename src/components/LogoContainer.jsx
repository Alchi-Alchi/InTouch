import React from 'react';
import Logo from './Logo';
import { connect } from 'react-redux';
import { logout } from '../redux/authReducer';
class LogoContainer extends React.Component {
  render () {
    return <Logo {...this.props}/>
  }
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect (mapStateToProps, {logout}) (LogoContainer);