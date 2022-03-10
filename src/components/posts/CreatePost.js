import React from "react";
import {post} from '../../https/service'
import {Link} from 'react-router-dom'

const CreatePost = () => {
  const[text, setText] = React.useState('')

  const publish = (e) => {
    e.preventDefault();
    post("/api/posts/create", {
      text,
    })
      .then((results) => {
        console.log("Post Created", results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div>
      <Link to="/allPosts">go back</Link>
      <h2>Create A Post</h2>
      <form onSubmit={publish}>
        <label>Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
