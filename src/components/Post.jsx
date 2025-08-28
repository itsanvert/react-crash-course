import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.post}>
      <h2 className={styles.author}>{props.author}</h2>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}

export default Post;
