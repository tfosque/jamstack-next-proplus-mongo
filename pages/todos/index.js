const Todo = ({ todos }) => {
  console.log(todos)
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((m, i) => {
          return (
            <li key={i}>{m.title}</li>
         )
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
}

export default Todo;
