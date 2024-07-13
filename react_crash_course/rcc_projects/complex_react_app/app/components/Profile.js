import React, { useEffect, useContext, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import axios from "axios";
import StateContext from "../StateContext";
import ProfilePosts from "./ProfilePosts";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    profileUsername: "...",
    profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
    isFollowing: false,
    counts: { postCount: "", followerCount: "", followingCount: "" },
  });

  // Taking just username out of the useParams hook
  const { username } = useParams();
  const appState = useContext(StateContext);

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchData() {
      try {
        const response = await axios.post(`/profile/${username}`, {
          token: appState.user.token,
        });
        setProfileData(response.data);
      } catch (e) {
        console.log("An error has occurred.");
      }
    }
    fetchData();
    return () => {
      ourRequest.abort();
    };
  }, []);

  return (
    <Page title="Profile Screen">
      <h2>
        <img className="avatar-small" src={profileData.profileAvatar} />
        {profileData.profileUsername}
        <button className="ml-2 btn btn-primary btn-sm">
          Follow <i className="fas fa-user-plus"></i>
        </button>
      </h2>
      <div className="pt-2 mb-4 profile-nav nav nav-tabs">
        <a href="#" className="active nav-item nav-link">
          Posts: {profileData.counts.postCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Followers: {profileData.counts.followerCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Following: {profileData.counts.followingCount}
        </a>
      </div>
      <ProfilePosts />
    </Page>
  );
}
