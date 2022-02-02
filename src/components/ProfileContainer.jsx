import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../redux/profileReducer';
import Profile from './Profile';
class ProfileContainer extends React.Component {
  componentDidMount () {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2
    }
    axios.get (`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then (response => {
      this.props.setUserProfile (response.data)
    });
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
  profile: state.profilePage.profile
});
let WithURLDataContainerComponent = withRouter (ProfileContainer);
export default connect (mapStateToProps, {setUserProfile}) (WithURLDataContainerComponent);