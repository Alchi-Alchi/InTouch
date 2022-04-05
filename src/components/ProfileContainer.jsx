import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
  refreshProfile () {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = this.props.myUserID
    }
    this.props.getUserProfile (userID);
    this.props.getStatus (userID);
  };
  componentDidMount () {
    this.refreshProfile ();
  };
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.match.params.userID != prevProps.match.params.userID) {
      this.refreshProfile ();
    }
  }
  render () {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userID} savePhoto={this.props.savePhoto}/>
      </div>
    );
  }
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myUserID: state.auth.userID,
  isAuth: state.auth.isAuth,
});
export default compose (connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}), withRouter, withAuthRedirect) (ProfileContainer);