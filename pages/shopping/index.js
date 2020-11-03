

const ShoppingCart = ({ cart }) => {
  // console.log('cart:items', cartitems())
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((m, i) => {
          <li>{i}</li>;
        })} 
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // const res = await cartitems();
  // const cart = await res;
  let cart = [{bags: "Leather"}];
  return {
    props: {
      cart,
    },
  };
}

export default ShoppingCart;
