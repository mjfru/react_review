import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

export default function ProfileFollowers() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchPosts() {
      try {
        const response = await axios.get(`/profile/${username}/followers`);
        setPosts(response.data);
        setIsLoading(false);
        // console.log(response.data);
      } catch (e) {
        console.log("An error has occurred." + e);
      }
    }
    fetchPosts();
    return () => {
      ourRequest.abort();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div className="list-group">
      {posts.map((follower, index) => {
        return (
          <Link
            key={index}
            to={`/profile/${follower.username}`}
            className="list-group-item list-group-item-action"
          >
            <img className="avatar-tiny" src={follower.avatar} />
            {follower.username}
          </Link>
        );
      })}
    </div>
  );
}
