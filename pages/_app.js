import "../styles/globals.css";
import "../styles/tailwind.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "highlight.js/styles/default.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="main-container mt-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
