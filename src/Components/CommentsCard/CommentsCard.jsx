import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios";
import {
  Card,
  CommentHeader,
  Comments,
  NoComments,
} from "./CommentsCardElements";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentsCard = ({ itemDetail }) => {
  const { slug } = useParams();
  const [comments, setComments] = useState(null);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = comments
    ? comments.filter((comment) => {
        return comment.parent ? null : comment;
      })
    : null;

  const getReplies = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      });
  };

  const addComment = (text, parentId) => {
    axiosInstance
      .post(`/comment/add/`, {
        item: itemDetail.id,
        content: text,
        parent: parentId,
      })
      .then((comment) => {
        console.log(comment);
        setComments([comment.data, ...comments]);
        setActiveComment(null);
      });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete the comment?")) {
      axiosInstance
        .patch(`comment/update/${commentId}/`, { is_deleted: true })
        .then(() => {
          const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
              return { ...comment, is_deleted: true };
            }
            return comment;
          });
          setComments(updatedComments);
        });
    }
  };

  const updateComment = (text, commentId) => {
    axiosInstance
      .patch(`comment/update/${commentId}/`, { content: text })
      .then(() => {
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, content: text };
          }
          return comment;
        });
        setComments(updatedComments);
        setActiveComment(null);
      });
  };

  useEffect(() => {
    axiosInstance.get(`/items/${slug}/comments/`).then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <Card>
      <CommentHeader>Comments</CommentHeader>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      {comments ? (
        <>
          {comments.length > 0 ? (
            <Comments>
              {rootComments.map((rootComment, index) => {
                return (
                  <Comment
                    key={index}
                    comment={rootComment}
                    replies={getReplies(rootComment.id)}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    addComment={addComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                  />
                );
              })}
            </Comments>
          ) : (
            <NoComments>No Comments</NoComments>
          )}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </Card>
  );
};

export default CommentsCard;
