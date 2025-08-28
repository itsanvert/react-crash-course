import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Post from "./Post";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

function PostList({isPosting ,onStopPosting}) {


  const [posts, setPosts] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
    setModalIsVisible(false); // close modal after adding
  }

  function openModalHandler() {
    setModalIsVisible(true);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>


      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={closeModalHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
