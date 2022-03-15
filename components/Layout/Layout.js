import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children}) => {
  return (
		<>
			<Header />
			<div className="m-auto overflow-hidden w-full">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;

