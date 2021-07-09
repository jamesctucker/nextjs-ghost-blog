import "../styles/globals.css";
import "../styles/tailwind.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
