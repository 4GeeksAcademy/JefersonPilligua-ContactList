import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Form } from "./views/Form";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { EditContact } from "./views/EditContact";
import background from "./../img/escritorio4.jpg"
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{
			backgroundImage: `url(${background})`,
			height: '100vh',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover'
		}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/form" element={<Form />} />
						<Route path="/edit" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
