import React from 'react';
import Logo from './Logo';
import { getUserData } from '../redux/authReducer';
import { connect } from 'react-redux';
class LogoContainer extends React.Component {
  componentDidMount () {
    this.props.getUserData ();
  }
  render () {
    return <Logo {...this.props}/>
  }
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect (mapStateToProps, {getUserData}) (LogoContainer);