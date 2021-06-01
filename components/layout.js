import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ children }) =>
    <main>
        <Header />
        <Navigation />
        {children}
        <Footer />
    </main>;
  
export default Layout