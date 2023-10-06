function submitForm(event) {
	event.preventDefault();

	const formData = {
		m1: document.getElementById('fullName').value,
		m2: document.querySelector('input[name="email"]').value,
		m3: document.querySelector('input[name="phoneNumber"]').value,
		// ... Add other form fields here
	};

	// Send the form data to the Google Sheets API
	sendDataToGoogleSheets(formData);
}

function sendDataToGoogleSheets(formData) {
	const SPREADSHEET_ID = '1pcYDa30MwcG_VR8C23dmePCKuGiL9KzHbGr2CDRg9Y4';
	const SHEET_NAME = 'Registeration';
	const API_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A1:append?valueInputOption=RAW`;

	const accessToken = 'YOUR_ACCESS_TOKEN'; // You need to obtain an access token

	const requestData = {
		values: [
			[
				formData.m1,
				formData.m2,
				formData.m3 /* ... Add other form fields here */,
			],
		],
	};

	fetch(API_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestData),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('Form data submitted successfully:', data);
		})
		.catch((error) => {
			console.error('Error submitting form data:', error);
		});
}
const form = document.forms['submit-to-google-sheet'];
// Attach the submitForm function to the form's submit event

form.addEventListener('submit', submitForm);
