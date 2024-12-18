import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const AddContact = () => {

    const navigate = useNavigate()

    const { actions } = useContext(Context);

    function handleAddContact(event) {
        event.preventDefault();
        const contact = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            address: event.target.elements.address.value,
        }

        actions.addContact(contact);
        console.log(contact);
        navigate('/');
    }

    return (
        <div className="container">

            <form onSubmit={handleAddContact} className="row g-3 needs-validation" novalidate>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Full Name</label>
                    <input name="name" type="text" className="form-control" id="validationCustom01" required />
                </div>
                <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" id="validationCustom02" required />
                </div>

                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">Phone</label>
                    <input name="phone" type="tel" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-md-6">
                    <label for="validationCustom04" className="form-label">Address</label>
                    <input name="address" type="text" className="form-control" id="validationCustom04" required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}