import React, { useEffect, useState } from "react";
import Page from "./Page";
import LoadingDotsIcon from "./LoadingDotsIcon";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Tooltip } from "react-tooltip";

export default function ViewSinglePost() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    const ourRequest = new AbortController();

    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}/`, {
          signal: ourRequest.signal,
        });
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("An error has occurred." + e);
      }
    }
    fetchPost();
    // Clean-up function; cancelling the axios request
    // When a component is unmounted, you want to clean up what this component was doing.
    return () => {
      ourRequest.abort();
    };
  }, []);

  if (isLoading)
    return (
      <Page title="...">
        <LoadingDotsIcon />
      </Page>
    );

  const date = new Date(post.createdDate);
  const dateFormatted = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a
            href="#"
            data-tooltip-content="Edit"
            data-tooltip-id="edit"
            className="mr-2 text-primary"
          >
            <i className="fas fa-edit"></i>
          </a>
          <Tooltip id="edit" className="custom-tooltip" />{" "}
          <a
            className="delete-post-button text-danger"
            data-tooltip-content="Delete"
            data-tooltip-id="delete"
          >
            <i className="fas fa-trash"></i>
          </a>
          <Tooltip id="delete" className="custom-tooltip" />
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

      <div className="body-content">
        <ReactMarkdown
          children={post.body}
          allowedElements={[
            "p",
            "br",
            "strong",
            "em",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
          ]}
        />
      </div>
    </Page>
  );
}
