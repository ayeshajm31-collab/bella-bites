import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <>
      <Banner />

      {/* Why Choose Bella Bites */}
      <section className="bg-slate-950 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-orange-500">Bella Bites?</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Delicious food, fresh ingredients, and a better dining experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            <div className="bg-gray-900 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-4xl">🥗</div>
              <h3 className="text-xl font-semibold mt-4">
                Fresh Ingredients
              </h3>
              <p className="text-gray-400 mt-3">
                We use fresh and quality ingredients in every meal.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-semibold mt-4">
                Fast Service
              </h3>
              <p className="text-gray-400 mt-3">
                Enjoy a smooth and quick ordering experience.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-4xl">❤️</div>
              <h3 className="text-xl font-semibold mt-4">
                Made With Love
              </h3>
              <p className="text-gray-400 mt-3">
                Every dish is prepared with care and attention.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Popular Categories */}
      <section className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our <span className="text-orange-500">Categories</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Something delicious is waiting for you.
          </p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">

  <a
    href="/food?category=chicken"
    className="bg-slate-950 p-6 rounded-2xl hover:bg-orange-500 transition duration-300 cursor-pointer text-center"
  >
    <div className="text-5xl">🍗</div>
    <h3 className="font-semibold mt-3">Chicken</h3>
  </a>

  <a
    href="/food?category=Seafood"
    className="bg-slate-950 p-6 rounded-2xl hover:bg-orange-500 transition duration-300 cursor-pointer text-center"
  >
    <div className="text-5xl">🍤</div>
    <h3 className="font-semibold mt-3">Seafood</h3>
  </a>

  <a
    href="/food?category=pasta"
    className="bg-slate-950 p-6 rounded-2xl hover:bg-orange-500 transition duration-300 cursor-pointer text-center"
  >
    <div className="text-5xl">🍝</div>
    <h3 className="font-semibold mt-3">Pasta</h3>
  </a>

  <a
    href="/food?category=vegan"
    className="bg-slate-950 p-6 rounded-2xl hover:bg-orange-500 transition duration-300 cursor-pointer text-center"
  >
    <div className="text-5xl">🥗</div>
    <h3 className="font-semibold mt-3">Vegan</h3>
  </a>

  <a
    href="/food?category=Dessert"
    className="bg-slate-950 p-6 rounded-2xl hover:bg-orange-500 transition duration-300 cursor-pointer text-center"
  >
    <div className="text-5xl">🍰</div>
    <h3 className="font-semibold mt-3">Dessert</h3>
  </a>



          </div>
        </div>
      </section>


      {/* About Bella Bites */}
      <section className="bg-slate-950 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              About Bella Bites
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Good Food Brings People Together
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              At Bella Bites, we believe great food should be delicious,
              simple, and enjoyable. Explore our menu, discover new flavors,
              and order your favorite meals with ease.
            </p>

            <a
              href="/food"
              className="inline-block mt-7 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            >
              Explore Our Menu
            </a>
          </div>

          <div className="bg-gray-900 rounded-3xl p-10 text-center">
            <div className="text-8xl">🍽️</div>

            <h3 className="text-2xl font-bold mt-5">
              Delicious. Fresh. Bella.
            </h3>

            <p className="text-gray-400 mt-3">
              Your next favorite meal is just a few clicks away.
            </p>
          </div>

        </div>
      </section>


      {/* Special Offer / CTA */}
      <section className="bg-orange-500 text-white py-16 px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Hungry? Let's Get You Something Delicious!
        </h2>

        <p className="mt-4 text-orange-100">
          Explore our menu and find your next favorite meal.
        </p>

        <a
          href="/food"
          className="inline-block mt-7 bg-slate-950 hover:bg-gray-900 px-7 py-3 rounded-lg font-semibold transition duration-200"
        >
          Order Now 🍔
        </a>

      </section>


      <Footer />
    </>
  );
};

export default Homepage;