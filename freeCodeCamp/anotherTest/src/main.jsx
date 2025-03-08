import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function ObjectDisplay() {

	const [contact, setContact] = useState({
		firstname: "aman",
		lastname: "choudhary",
		email: "amancode2005@ai.com",
		number: "9931907281"
	});

	// Debugging log
	//console.log(contact, typeof contact);

	// Ensure contact is an object before using Object.entries()
	if (!contact || typeof contact !== "object") {
		return <p>Error: Contact data is not an object</p>;
	}
	function changeNumber() {
		setContact(prevContact => {
			return ({
				...prevContact,
				number: prevContact.number === "9931907281" ? "9930565961": "9931907281"
			})
		})
	}
	function changeEmail() {
		setContact(prevContact => {
			return ({
				...prevContact,
				email: prevContact.email === "amanradha@gmail.com" ? "radhaaman@ml.com": "amanradha@gmail.com"
			})
		})
	}

	return (
		<div>
			<h2>Contact Details</h2>
			{
				Object.entries(contact).map(([key, value]) => (
					<p key={key}>
						<strong>{key}:</strong> {value}
					</p>
				))
			}
			<button onClick={changeNumber}>Change number</button><br />
			<button onClick={changeEmail}>Change Email</button>
		</div>
	);



}


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<h1>Radhe Radhe</h1>
		<ObjectDisplay />
	</StrictMode>,
)
