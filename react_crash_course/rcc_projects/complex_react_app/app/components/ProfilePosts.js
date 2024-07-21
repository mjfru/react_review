import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import Post from "./Post"

export default function ProfilePosts() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchPosts() {
      try {
        const response = await axios.get(`/profile/${username}/posts`);
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
      {posts.map((post) => {
        return <Post noAuthor={true} post={post} key={post._id}/>
      })}
    </div>
  );
}
