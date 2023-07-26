import React from "react";

function DeleteComment({ comment, onDelete }) {
    
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <div className="delete" onClick={handleDelete}>
        X
      </div>
    </div>
  );
}

export default DeleteComment;
