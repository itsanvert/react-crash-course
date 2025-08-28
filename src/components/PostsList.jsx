import NewPost from "./NewPost.jsx";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Post from "./Post.jsx";

function PostList() {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  return (git 
    <>
      <NewPost onAddPost={addPostHandler} />
      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
