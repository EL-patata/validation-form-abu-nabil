let url = 'https://localhost:5251/Registeration';
let yourData = {};

document.addEventListener('DOMContentLoaded', function () {
	const form = document.forms['submit-to-google-sheet']; // Get the form by its name attribute

	// Event listener for form submission
	form.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// Get the values from various form inputs
		const fullName = form.querySelector('#FullName').value;
		const email = form.querySelector('input[name="m2"]').value;
		const phoneNumber = form.querySelector('input[name="m3"]').value;
		const isWhatsAppConnected = form.querySelector('#oo').checked;
		const faculty = form.querySelector('.select-box:nth-child(1) select').value;
		const level = form.querySelector('.select-box:nth-child(2) select').value;
		const committee = form.querySelector(
			'.select-box:nth-child(3) select'
		).value;
		const committeeKnowledge = form.querySelector('#o1').value;
		const skillsRating = form.querySelector('#rangeInput').value;
		const previousWorkLink = form.querySelector('input[name="m83"]').value;

		// Display the values (you can modify this part to send the values to a server, etc.)
		yourData = {
			FullName: fullName,
			Email: email,
			PhoneNumber: phoneNumber,
			IsPhoneConnectedToWhatsapp: isWhatsAppConnected,
			Faculty: faculty,
			Level: level,
			Committee: committee,
			CommitteeKnowledge: committeeKnowledge,
			SkillsRate: skillsRating,
			PreviousWorkLink: previousWorkLink,
		};

		console.log(yourData);
		postData(url, yourData);
	});
});

async function postData(url = '', data = {}) {
	// Default options are marked with *
	await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
}
