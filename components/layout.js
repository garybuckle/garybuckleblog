import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Menu from "./menu";

export default function Layout({ preview, children }) {
  return (
    <>
      <Menu />
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
