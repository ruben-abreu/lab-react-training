import React from 'react';
import profiles from '../../data/berlin.json';
import './facebook.css';

function Facebook() {
  return (
    <div id="facebook">
      {profiles.map((profile, index) => (
        <div key={index} id="fbprofile">
          <img src={profile.img} alt="ProfilePic" width="160px" />
          <div className="profile-details">
            <span className="profile-info">
              <b>First Name:</b> {profile.firstName}
            </span>
            <span className="profile-info">
              <b>Last Name:</b> {profile.lastName}
            </span>
            <span className="profile-info">
              <b>Country:</b> {profile.country}
            </span>
            <span className="profile-info">
              <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;
