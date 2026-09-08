import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="layoutMain">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
