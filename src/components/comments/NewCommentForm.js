import { useRef } from "react";

import classes from "./NewCommentForm.module.css";

function NewCommentForm(props) {
  const commentTextRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
}

export default NewCommentForm;
