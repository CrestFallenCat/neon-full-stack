import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CommentsCSS.css";
import Form from "./Form.js";

export function Comments() {
  const [comments, setComments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedComment, setEditedComment] = useState("");

  const [backendData, setBackendData] = useState([]);

  // fetch comments from the backend every time the 'comment' state is changed
  useEffect(() => {
    fetchComments();
  }, [comments]);

  const fetchComments = async () => {
    try {
      const response = await fetch("/api");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleFormSubmit = (name, comment) => {
    const newComment = {
      name,
      comment,
    };

    // setComments([...comments, newComment]);

    fetch("http://localhost:1234/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the server if needed
        console.log(result);
        setComments([...comments, newComment]);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  const handleDeleteComment = async (commentIndex) => {
    try {
      const commentId = comments[commentIndex]._id;

      await fetch(`http://localhost:1234/api/${commentId}`, {
        method: "DELETE",
      });

      setComments((prevComments) => {
        const updatedComments = [...prevComments];
        updatedComments.splice(commentIndex, 1);
        return updatedComments;
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEditComment = async (index, newComment) => {
    try {
      const commentId = comments[index]._id;

      await fetch(`http://localhost:1234/api/${commentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: newComment }), // Send the updated comment data in the request body
      });

      setComments((prevComments) => {
        const updatedComments = [...prevComments];
        updatedComments[index].comment = newComment;
        return updatedComments;
      });
    } catch (error) {
      console.error("Error editing comment:", error);
    }
  };

  const handleStartEditing = (index, comment) => {
    setEditingIndex(index);
    setEditedComment(comment);
    // PRODUCT OF FUNCTION
    console.log(comment);
  };

  const handleSaveComment = (index) => {
    handleEditComment(index, editedComment);

    setEditingIndex(-1);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      handleSaveComment(index);
    }
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 id="title"> Have an opinion? </h1>
      <div>
        <p>
          I hold a personal perspective that embraces the presence of our
          newfound artistic AI overlords, recognizing their enduring
          significance regardless of the potential outcomes. Although art
          remains a cherished pastime for me, I acknowledge that my sentiment
          might differ if I were a professional illustrator.
        </p>
        <p>Im sure you reckon something. Have at it</p>
      </div>

      <div>
        {typeof backendData.comments === "undefined" ? (
          <p></p>
        ) : (
          backendData.comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))
        )}
      </div>

      <Form onFormSubmit={handleFormSubmit} />

      {comments.map((comment, index) => (
        <div className="comment-box" key={index}>
          <p>Name: {comment.name}</p>
          <div className="comments">
            {editingIndex === index ? (
              <input
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e, index)}
              />
            ) : (
              <p>{comment.comment}</p>
            )}
          </div>
          <div>
            {editingIndex === index ? (
              <button onClick={() => handleSaveComment(index)}>Save</button>
            ) : (
              <button
                onClick={() => handleStartEditing(index, comment.comment)}
              >
                Edit
              </button>
            )}
            <button onClick={() => handleDeleteComment(index)}>Delete</button>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Comments;
