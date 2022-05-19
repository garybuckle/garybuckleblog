import "../styles/index.css";
import "../styles/globals.scss";
import Navbar from "../components/navbar";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
