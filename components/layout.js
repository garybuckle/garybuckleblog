import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nextbar from "./nextbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Nextbar />
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </>
  );
}
