import PostList from "./components/PostsList.jsx/";
import Post from "./components/Post.jsx";
import NewPost from "./components/NewPost.jsx";
function App() {
  function changeHandler(event) {
    setEnterBody(event.target.value);
  }
  return (
    <main>

      <PostList>
        <Post author="Vert" body="Hello World" />
        <Post author="San" body="Hello React" />
      </PostList>
    </main>
  );
}
export default App;
