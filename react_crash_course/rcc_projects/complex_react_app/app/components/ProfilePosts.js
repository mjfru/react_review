import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

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
  }, []);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div className="list-group">
      {posts.map((post) => {
        const date = new Date(post.createdDate);
        const dateFormatted = `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`;
        return (
          <Link
            key={post._id}
            to={`/post/${post._id}`}
            className="list-group-item list-group-item-action"
          >
            <img className="avatar-tiny" src={post.author.avatar} />
            <strong>{post.title}</strong>{" "}
            <span className="text-muted small">on {dateFormatted} </span>
          </Link>
        );
      })}
    </div>
  );
}
