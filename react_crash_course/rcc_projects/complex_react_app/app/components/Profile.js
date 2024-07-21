import React, { useEffect, useContext } from "react";
import { useParams, NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useImmer } from "use-immer";
import Page from "./Page";
import StateContext from "../StateContext";
import ProfilePosts from "./ProfilePosts";
import ProfileFollowers from "./ProfileFollowers";
import ProfileFollowing from "./ProfileFollowing";

export default function Profile() {
  // const [profileData, setProfileData] = useState({
  //   profileUsername: "...",
  //   profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
  //   isFollowing: false,
  //   counts: { postCount: "", followerCount: "", followingCount: "" },
  // });
  const [state, setState] = useImmer({
    followActionLoading: false,
    startFollowingRequestCount: 0,
    stopFollowingRequestCount: 0,
    profileData: {
      profileUsername: "...",
      profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
      isFollowing: false,
      counts: { postCount: "", followerCount: "", followingCount: "" },
    },
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
        // setProfileData(response.data);
        setState((draft) => {
          draft.profileData = response.data;
        });
      } catch (e) {
        console.log("An error has occurred.");
      }
    }
    fetchData();
    return () => {
      ourRequest.abort();
    };
  }, [username]);

  useEffect(() => {
    if (state.startFollowingRequestCount > 0) {
      setState((draft) => {
        draft.followActionLoading = true;
      });

      const ourRequest = new AbortController();
      async function fetchData() {
        try {
          const response = await axios.post(`/addFollow/${username}`, {
            token: appState.user.token,
          });
          // setProfileData(response.data);
          setState((draft) => {
            draft.profileData.isFollowing = true;
            draft.profileData.counts.followerCount++;
            draft.followActionLoading = false;
          });
        } catch (e) {
          console.log("An error has occurred.");
        }
      }
      fetchData();
      return () => {
        ourRequest.abort();
      };
    }
  }, [state.startFollowingRequestCount]);

  useEffect(() => {
    if (state.stopFollowingRequestCount) {
      setState((draft) => {
        draft.followActionLoading = true;
      });

      const ourRequest = new AbortController();
      async function fetchData() {
        try {
          const response = await axios.post(`/removeFollow/${username}`, {
            token: appState.user.token,
          });
          // setProfileData(response.data);
          setState((draft) => {
            draft.profileData.isFollowing = false;
            draft.profileData.counts.followerCount--;
            draft.followActionLoading = false;
          });
        } catch (e) {
          console.log("An error has occurred.");
        }
      }
      fetchData();
      return () => {
        ourRequest.abort();
      };
    }
  }, [state.stopFollowingRequestCount]);

  function startFollowing() {
    setState((draft) => {
      draft.startFollowingRequestCount++;
    });
  }

  function stopFollowing() {
    setState((draft) => {
      draft.stopFollowingRequestCount++;
    });
  }

  return (
    <Page title="Profile Screen">
      <h2>
        <img className="avatar-small" src={state.profileData.profileAvatar} />
        {state.profileData.profileUsername}
        {appState.loggedIn &&
          !state.profileData.isFollowing &&
          appState.user.username != state.profileData.profileUsername &&
          state.profileData.profileUsername != "..." && (
            <button
              onClick={startFollowing}
              disabled={state.followActionLoading}
              className="ml-2 btn btn-primary btn-sm"
            >
              Follow <i className="fas fa-user-plus"></i>
            </button>
          )}
        {appState.loggedIn &&
          state.profileData.isFollowing &&
          appState.user.username != state.profileData.profileUsername &&
          state.profileData.profileUsername != "..." && (
            <button
              onClick={stopFollowing}
              disabled={state.followActionLoading}
              className="ml-2 btn btn-danger btn-sm"
            >
              Unfollow <i className="fas fa-user-times"></i>
            </button>
          )}
      </h2>
      <div className="pt-2 mb-4 profile-nav nav nav-tabs">
        <NavLink to="" end className="nav-item nav-link">
          Posts: {state.profileData.counts.postCount}
        </NavLink>
        <NavLink to="followers" className="nav-item nav-link">
          Followers: {state.profileData.counts.followerCount}
        </NavLink>
        <NavLink to="following" className="nav-item nav-link">
          Following: {state.profileData.counts.followingCount}
        </NavLink>
      </div>

      <Routes>
        <Route path="" element={<ProfilePosts />} />
        <Route path="followers" element={<ProfileFollowers />} />
        <Route path="following" element={<ProfileFollowing />} />
      </Routes>
    </Page>
  );
}
