import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!body.trim() || !author.trim()) return;

    props.onAddPost({ author, body });

    // clear after submit
    setBody("");
    setAuthor("");
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="author">Your Name</label>
        <input
          type="text"
          id="name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </p>
      <p className={classes.actions}>
        <button
          type="button"
          onClick={() => {
            setBody("");
            setAuthor("");
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Post</button>
      </p>
    </form>
  );
}

export default NewPost;
