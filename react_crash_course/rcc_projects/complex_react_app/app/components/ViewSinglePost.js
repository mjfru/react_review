import React, { useEffect, useState } from "react";
import Page from "./Page";
import LoadingDotsIcon from "./LoadingDotsIcon";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ViewSinglePost() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}/`);
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("An error has occurred." + e);
      }
    }
    fetchPost();
  }, []);

  if (isLoading) return <Page title="..."><LoadingDotsIcon/></Page>;

  const date = new Date(post.createdDate);
  const dateFormatted = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="#" className="mr-2 text-primary" title="Edit">
            <i className="fas fa-edit"></i>
          </a>
          <a className="delete-post-button text-danger" title="Delete">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>

      <p className="mb-4 text-muted small">
        <Link to={`/profile/${post.author.username}`}>
          <img className="avatar-tiny" src={post.author.avatar} />
        </Link>
        Posted by{" "}
        <Link to={`/profile/${post.author.username}`}>
          {post.author.username}
        </Link>{" "}
        on {dateFormatted}
      </p>

      <div className="body-content">{post.body}</div>
    </Page>
  );
}
