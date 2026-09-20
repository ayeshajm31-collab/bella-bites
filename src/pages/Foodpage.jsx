import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { toast } from "sonner";


const Foodpage = ({ cart, setCart }) => {

  const [searchParams] = useSearchParams();

  const [foods, setFoods] = useState([]);

  const [category, SetCategory] = useState(
    searchParams.get("category") || "chicken"
  );

  useEffect(() => {
   
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} `)
        .then((response) => response.json())
        .then((data) => { setFoods(data.meals); });
    
  }, [category]);

  return (
    <div >
      <div id="buttons" className="flex justify-center gap-4 flex-wrap my-8 ">

        <button onClick={() => SetCategory('chicken')} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 active:scale-95  transition" >
          chicken
        </button>
        <button onClick={() => SetCategory('Seafood')} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 active:scale-95  transition" >
          seafood
        </button>
        <button onClick={() => SetCategory('pasta')} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 active:scale-95  transition" >
          pasta
        </button>
        <button onClick={() => SetCategory('vegan')} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 active:scale-95  transition" >
          vegan
        </button>
        <button onClick={() => SetCategory('Dessert')} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 active:scale-95  transition" >
          Dessert
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-900 p-5">
        {foods.map((food) => (

          <div key={food.idMeal} className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img src={food.strMealThumb} alt={food.strMeal} className="w-full h-48 object-cover" />

            <h2 className="text-xl font-bold p-4">{food.strMeal}</h2>

           <button
  onClick={() => {
    const existingfood = cart.find(
      (item) => item.idMeal === food.idMeal
    );

    if (existingfood) {
      setCart(
        cart.map((item) =>
          item.idMeal === food.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

      toast.success("Added to cart successfully!");
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
          price: 300 + (Number(food.idMeal) % 7) * 100,
        },
      ]);

      toast.success("Added to cart successfully!");
    }
  }}
  className="bg-amber-600 px-4 py-2 ml-20 mb-1 hover:bg-amber-500 rounded-lg text-white active:scale-95 transition"
>
  Add to cart
</button>
          

          </div>
        )
        )}

      </div>

      <div>
        <Footer />
      </div>

    </div>

  );
};

export default Foodpage;
