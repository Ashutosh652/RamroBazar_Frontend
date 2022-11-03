import React, { useContext } from "react";
import {
  CommentBox,
  ProfilePic,
  CommentInfo,
  AuthorName,
  DateCommented,
  CommentContent,
  ReplyBox,
  CommentActions,
  CommentAction,
  CommentActionDelete,
} from "./CommentElements";
import { timeSince } from "../../Services/formatDate";
import AuthContext from "../../Pages/Login/AuthContext";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  deleteComment,
  updateComment,
  addComment,
  activeComment,
  setActiveComment,
  parentId = null,
}) => {
  const { loggedInUser } = useContext(AuthContext);
  const canReply = Boolean(loggedInUser);
  const canEditAndDelete = loggedInUser
    ? comment.author.id === loggedInUser.user_id
    : false;
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;

  return (
    <>
      <CommentBox>
        {!comment.is_deleted ? (
          <>
            <ProfilePic src={comment.author.profile_pic} />
            <CommentInfo>
              <AuthorName to={`/user/${comment.author.id}`}>
                {comment.author.first_name} {comment.author.last_name}
              </AuthorName>
              <DateCommented>
                {" "}
                - {timeSince(new Date(comment.date_commented))} ago
              </DateCommented>
              {!isEditing && <CommentContent>{comment.content}</CommentContent>}
              {isEditing && (
                <CommentForm
                  haasCancelButton
                  initialText={comment.content}
                  handleSubmit={(text) => {
                    updateComment(text, comment.id);
                  }}
                  handleCancel={() => {
                    setActiveComment(null);
                  }}
                />
              )}
              <CommentActions>
                {canReply && (
                  <CommentAction
                    onClick={() => {
                      setActiveComment({ id: comment.id, type: "replying" });
                    }}
                  >
                    Reply
                  </CommentAction>
                )}
                {canEditAndDelete && (
                  <>
                    <CommentAction
                      onClick={() => {
                        setActiveComment({ id: comment.id, type: "editing" });
                      }}
                    >
                      Edit
                    </CommentAction>
                    <CommentActionDelete
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                    >
                      Delete
                    </CommentActionDelete>
                  </>
                )}
              </CommentActions>
            </CommentInfo>
          </>
        ) : (
          <span style={{ textAlign: "center", marginLeft: "1em" }}>
            [Deleted]
          </span>
        )}
      </CommentBox>
      {isReplying && (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={(text) => {
            addComment(text, replyId);
          }}
        />
      )}
      <ReplyBox>
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => {
              return (
                <Comment
                  key={reply.id}
                  comment={reply}
                  replies={[]}
                  deleteComment={deleteComment}
                  updateComment={updateComment}
                  addComment={addComment}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  parentId={comment.id}
                />
              );
            })}
          </div>
        )}
      </ReplyBox>
    </>
  );
};

export default Comment;
