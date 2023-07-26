const express = require("express");
const router = express.Router();
const Comment = require("./database");

// get all
router.get("/", async (req, res) => {
  try {
    const allComments = await Comment.find();
    res.json(allComments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one
router.get("/:id", async (req, res) => {
  try {
    // Retrieve a single comment by ID
    const commentId = req.params.id;

    // Retrieve the comment from the database using the Comment model
    const comment = await Comment.findById(commentId);

    if (!comment) {
      // If the comment with the given ID is not found, return a 404 status
      return res.status(404).json({
        status: "fail",
        message: "Comment not found",
      });
    }

    // If the comment is found, return it in the response
    res.status(200).json({
      status: "success",
      data: {
        comment: comment,
      },
    });
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/comments", (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((comment) => {
      res.status(201).send(comment);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.patch("/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((comment) => {
      if (!comment) {
        return res.status(404).send();
      }
      res.send(comment);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.delete("/:id", (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => {
      if (!comment) {
        return res.status(404).send();
      }
      res.send(comment);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
