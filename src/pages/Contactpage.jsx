import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Get in Touch 🍝
        </h1>

        <p className="text-gray-400">
          Have a question about Bella Bites? We'd love to hear from you!
        </p>
      </div>


      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="space-y-6 text-gray-300">

            <div>
              <h3 className="font-semibold text-white">📍 Location</h3>
              <p>Karachi, Pakistan</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">📞 Phone</h3>
              <p>+92 XXX XXXXXXX</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">📧 Email</h3>
              <p>bellabites@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">🕐 Opening Hours</h3>
              <p>Monday - Sunday</p>
              <p>11:00 AM - 11:00 PM</p>
            </div>

          </div>
        </div>


        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-6">
            Send Us a Message 💬
          </h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      <div className="mt-20">
        <Footer />
      </div>


    </div>
  );
};

export default ContactPage;