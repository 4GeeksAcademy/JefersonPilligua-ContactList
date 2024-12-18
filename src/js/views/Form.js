import React from "react";
import "../../styles/demo.css";
import { AddContact } from "./AddContact";

export const Form = () => {


	return (
		<div className="container mt-5 contact-list">
			<h2 className="h1 text-center text-white">Register Contact</h2>
			<AddContact />
		</div>
	);
};
