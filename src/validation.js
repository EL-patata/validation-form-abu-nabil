// HTML form elements to work with
const form = document.querySelector('.form');

const fullNameInput = form.querySelector('input[name="fullName"]');

const emailInput = form.querySelector('input[name="email"]');

const phoneNumberInput = form.querySelector('input[name="phoneNumber"]');

const committeTextareaInput = form.querySelector(
	'textarea[name="committeTextarea"]'
);

const facultySelect = form.querySelector('select[name="faculty"]');

const levelSelect = form.querySelector('select[name="level"]');

const committeSelect = form.querySelector('select[name="committe"]');

function validateName(fullName) {
	const regex = /^[a-zA-Z]+$/;
	return regex.test(String(fullName));
}

function validateEmail(email) {
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
	const regex = /[0][1]\d{9}/;
	console.log(regex.test(String(phoneNumber)));
	return regex.test(String(phoneNumber));
}

function setError(element, message) {
	const parentElement = element.parentElement;

	const errorDisplay = parentElement.querySelector('.display-error');

	errorDisplay.innerText = message;
	parentElement.classList.add('input-error-message');

	element.addEventListener('focus', () => {
		parentElement.classList.remove('input-error-message');
		errorDisplay.innerText = '';
	});

	element.addEventListener('blur', () => {
		validateInputs();
	});
}

export default function validateInputs() {
	const fullName = {
		element: fullNameInput,
		value: fullNameInput?.value,
		valid: false,
	};

	const email = {
		element: emailInput,
		value: emailInput?.value,
		valid: false,
	};

	const phoneNumber = {
		element: phoneNumberInput,
		value: phoneNumberInput?.value,
		valid: false,
	};

	const committeTextarea = {
		element: committeTextareaInput,
		value: committeTextareaInput?.value,
		valid: false,
	};

	const faculty = {
		element: facultySelect,
		value: facultySelect?.value,
		valid: false,
	};

	const level = {
		element: levelSelect,
		value: levelSelect?.value,
		valid: false,
	};

	const committe = {
		element: committeSelect,
		value: committeSelect?.value,
		valid: false,
	};

	if (fullName.value === '') {
		setError(fullName.element, 'Full name is required.');
		fullName.valid = false;
	}

	if (fullName.value !== '' && !validateName(fullName?.value)) {
		setError(fullName.element, 'Only characters are allowed.');
		fullName.valid = false;
	}

	if (fullName?.value.length < 5) {
		setError(fullName.element, 'Must be at least 5 characters long.');
		fullName.valid = false;
	} else fullName.valid = true;

	if (email.value === '') {
		setError(email.element, 'Email is required.');
		email.valid = false;
	}

	if (email.value !== '' && !validateEmail(email.value)) {
		setError(email.element, 'Invalid email address.');
		email.valid = false;
	} else email.valid = true;

	if (!validatePhoneNumber(phoneNumber.value)) {
		setError(phoneNumber.element, 'Invalid phone number.');
		phoneNumber.valid = false;
	} else phoneNumber.valid = true;

	if (committeTextarea.value === '') {
		setError(committeTextarea.element, 'This field is required.');
		committeTextarea.valid = false;
	} else committeTextarea.valid = true;

	if (faculty.value === '') {
		setError(faculty.element, 'This field is required.');
		faculty.valid = false;
	} else faculty.valid = true;

	if (level.value === '') {
		setError(level.element, 'This field is required.');
		level.valid = false;
	} else level.valid = true;

	if (committe.value === '') {
		setError(committe.element, 'This field is required.');
		committe.valid = false;
	} else committe.valid = true;

	if (
		fullName.valid &&
		email.valid &&
		phoneNumber.valid &&
		committeTextarea.valid &&
		faculty.valid &&
		level.valid &&
		committe.valid
	)
		return true;
	else return false;
}
