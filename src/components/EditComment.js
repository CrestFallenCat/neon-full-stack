import React, { useState } from "react";

function EditComment({ comment, onSave }) {
  const [editing, setEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const handleStartEditing = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSave(editedComment);
    setEditing(false);
  };

  return (
    <div>
      {!editing ? (
        <button onClick={handleStartEditing}>Edit</button>
      ) : (
        <>
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
}

export default EditComment;
