const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactoSimple: null
		},
		actions: {
			loadSomeData: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Jeferson')
					.then(resp => resp.json())
					.then(respJson => {
						const store = getStore();
						const contacts = store.contacts;
						const newAgenda = respJson.contacts;
						console.log(newAgenda);
						const newContacts = [...contacts, ...newAgenda];
						setStore({ contacts: newContacts });
					})
			},
			addContact: (contact) => {
				const store = getStore();
				const contacts = store.contacts;
				fetch('https://playground.4geeks.com/contact/agendas/Jeferson/contacts', {
					method: 'POST',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(resp => resp.json())
					.then(respJson => {
						const newContact = [...contacts, respJson];
						setStore({ contacts: newContact })
					})
			},
			updateContact: (contact) => {
				const store = getStore();
				const contacts = store.contacts;
				fetch(`https://playground.4geeks.com/contact/agendas/Jeferson/contacts/${contact.id}`, {
					method: 'PUT',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(resp => resp.json())
					.then(() => {
						//const newContact = [...contacts, respJson];
						const newContacts = contacts.map((setContact) => {
							if (setContact.id == contact.id) {
								return contact
							}
							return setContact
						})
						setStore({ contacts: newContacts })
					})
			},
			deleteTask: (id) => {
				const store = getStore();
				const contacts = store.contacts;
				fetch(`https://playground.4geeks.com/contact/agendas/Jeferson/contacts/${id}`, {
					method: 'DELETE'
				})
					.then(resp => { if (resp.ok) { resp.json() } })
					.then(() => {
						const newContact = contacts.filter(item => item.id !== id);
						setStore({ contacts: newContact })
					})
			},

			setContact: (contact) => {
				setStore({ contactoSimple: contact })
			}
		}
	};
};

export default getState;
