import React, { useState } from "react";
import "./Form.css";

function CommentForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(name, comment);
    setName("");
    setComment("");
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name:</label>
          </div>
          <textarea
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label>Comment:</label>
          </div>
          <textarea
            id="comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
