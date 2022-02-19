import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { getUserProfile, getStatus, updateStatus } from '../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
  componentDidMount () {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 21960
    }
    this.props.getUserProfile (userID);
    this.props.getStatus (userID);
  }
  render () {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
};
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});
export default compose (connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect) (ProfileContainer);