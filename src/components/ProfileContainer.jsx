import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../redux/profileReducer';
import Profile from './Profile';
class ProfileContainer extends React.Component {
  componentDidMount () {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2
    }
    this.props.getUserProfile (userID);
  }
  render () {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});
let WithURLDataContainerComponent = withRouter (ProfileContainer);
export default connect (mapStateToProps, {getUserProfile}) (WithURLDataContainerComponent);