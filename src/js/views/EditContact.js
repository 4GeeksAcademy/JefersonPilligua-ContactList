import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const EditContact = () => {

    const navigate = useNavigate()


    const { actions, store } = useContext(Context);

    const [name, setName] = useState(store.contactoSimple.name);
    const [email, setEmail] = useState(store.contactoSimple.email);
    const [phone, setPhone] = useState(store.contactoSimple.phone);
    const [address, setAddress] = useState(store.contactoSimple.address);

    function handleAddContact(event) {
        event.preventDefault();
        const contact = {
            name,
            email,
            phone,
            address,
            id: store.contactoSimple.id
        }

        actions.updateContact(contact);
        console.log(contact)
        navigate('/')

    }

    return (
        <div className="container mt-5 contact-list p-2">
            <h2 className="h1 text-center my-3">Edit Contact</h2>
            <form onSubmit={handleAddContact} className="row g-3 needs-validation" novalidate>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Full Name</label>
                    <input name="name" type="text" className="form-control" id="validationCustom01" value={name} onChange={(event) => setName(event.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" id="validationCustom02" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>

                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">Phone</label>
                    <input name="phone" type="tel" className="form-control" id="validationCustom03" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label for="validationCustom04" className="form-label">Address</label>
                    <input name="address" type="text" className="form-control" id="validationCustom04" value={address} onChange={(event) => setAddress(event.target.value)} required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}