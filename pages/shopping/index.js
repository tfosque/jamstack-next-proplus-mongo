

const ShoppingCart = ({ cart }) => {
  console.log({cart})
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((m, i) => {
          return (
            <li key={i}>{m.title}</li>
         )
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const cart = await res.json();
  // let cart = [{bags: "Leather"}];
  return {
    props: {
      cart,
    },
  };
}

export default ShoppingCart;
