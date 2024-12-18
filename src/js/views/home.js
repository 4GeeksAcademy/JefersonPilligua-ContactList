import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Home = () => {

	const navigate = useNavigate();

	const { store, actions } = useContext(Context)
	console.log(store)

	const updateContact = (contact) => {
		actions.setContact(contact);
		navigate("/edit")

	}

	return (
		<main>
			<div className="container mt-5">
				<h1 className="text-center">Saved Contacts</h1>
			</div>

			<div className="container mt-5">
				<div className="row row-cols-2">
					{
						store.contacts.map((item) => (
							<div key={item.id} className="card p-0">
								<div className="card-body">
									<h5 className="card-title text-center">{item.name}</h5>
									<p className="card-text"><i class="bi bi-geo-alt-fill mx-2"></i>{item.address}</p>
									<p className="card-text"><i class="bi bi-telephone-fill mx-2"></i>{item.phone}</p>
									<p className="card-text"><i class="bi bi-envelope-at-fill mx-2"></i>{item.email}</p>
								</div>
								<div className="card-footer text-end">
									<button onClick={() => updateContact(item)} type="button" className="btn btn-success mx-2"><i class="bi bi-pencil-square"></i></button>
									<button onClick={() => actions.deleteTask(item.id)} type="button" className="btn btn-danger"><i class="bi bi-trash3"></i></button>
								</div>
							</div>
						))
					}
				</div>
			</div>

		</main>

	)
}