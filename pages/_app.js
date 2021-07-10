import "../styles/globals.css";
import "../styles/tailwind.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "highlight.js/styles/default.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen relative pb-24">
      <Nav />
      <div className="main-container pt-8 pb-8">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
