const CartTest = ({ posts }) => {
  console.log({ posts });
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map(({ id, title, completed }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );  
  // Render posts...
};

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
export default CartTest;
