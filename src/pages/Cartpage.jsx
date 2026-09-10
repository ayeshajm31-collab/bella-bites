import Footer from "../Components/Footer";
import { Toaster, toast } from "sonner";

const CartPage = ({ cart, setCart }) => {

  const increaseQuantity = (id) => { //function for + button
    setCart(
      cart.map((food) =>
        food.idMeal === id
          ? { ...food, quantity: food.quantity + 1 }
          : food

      )
    );
  };


  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((food) =>
          food.idMeal === id
            ? { ...food, quantity: food.quantity - 1 }
            : food
        )
        .filter((food) => food.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((food) => food.idMeal !== id)
    );
  };

  const confirmOrder = () => {
    if (cart.length === 0) {
      toast.error("Please add some food to your cart first! 🛒");
      return;
    }
    toast.success("Your order is being prepared! 🍔");
  };

  const subtotal = cart.reduce((total, food) => {
    return total + food.price * food.quantity;
  }, 0);

  return (
  <>
      <Toaster />

        <div className="min-h-screen bg-gray-900 text-white p-8">

          <h1 className="text-4xl font-bold mb-10">
            Your Cart 🛒
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Cart Items */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Your Items
              </h2>

              {cart.map((food) => (
                <div
                  key={food.idMeal}
                  className="bg-white text-black p-4 mb-4 rounded-lg flex items-center gap-4"
                >

                  <button onClick={() => removeItem(food.idMeal)} className="w-8 h-8 rounded-full bg-gray-200 text-black font-bold hover:bg-gray-300">  × </button>

                  <img
                    src={food.strMealThumb}
                    alt={food.strMeal}
                    className="w-20 h-20 object-cover rounded-lg"

                  />



                  <div>
                    <h3 className="text-xl font-bold">
                      {food.strMeal}
                    </h3>

                    <button onClick={() => decreaseQuantity(food.idMeal)} className="w-8 h-8 rounded-full bg-gray-200 text-black font-bold hover:bg-gray-300"   > - </button>

                    <span>{food.quantity}</span>

                    <button onClick={() => increaseQuantity(food.idMeal)} className="w-8 h-8 rounded-full bg-gray-200 text-black font-bold hover:bg-gray-300"> + </button>


                    <p className="text-orange-600 font-semibold">
                      Rs. {food.price}
                    </p>


                  </div>

                </div>
              ))}
            </div>


            {/* Order Summary */}
            <div className="bg-white text-black p-6 rounded-lg h-fit">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Delivery</span>
                <span>Rs. 100</span>
              </div>

              <hr className="mb-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>Rs. {subtotal + 100}</span>

              </div>

              <button onClick={() => confirmOrder()}
                className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 active:scale-95 transition"
              >
                🛍️ Confirm Order
              </button>

            </div>

          </div>
          <div className="mt-40">
            <Footer />
          </div>

        </div>
      </>
      );

};

      export default CartPage;

