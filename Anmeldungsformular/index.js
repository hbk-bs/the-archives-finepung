document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const button = document.getElementById("submitButton");
	const dropdown = document.getElementById("dropdown");
	const dropdownWarning = document.getElementById("dropdownWarning");
	const errorList = document.getElementById("errorList");
	const longAnswerField = document.getElementById("longAnswer");
	const usernameField = document.getElementById("username");
	const emailField = document.getElementById("email");
	const passwordField = document.getElementById("password");

	let isValid = true;

	if (!form) {
		alert("Form not found");
		return;
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		errorList.innerHTML = "";
		isValid = true;

		resetFieldStyles();

		if (!usernameField.value.trim()) {
			isValid = false;
			showErrorMessage("Username ist erforderlich.");
			highlightField(usernameField);
		}

		if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
			isValid = false;
			showErrorMessage("Bitte eine gültige E-Mail-Adresse eingeben.");
			highlightField(emailField);
		}

		if (!passwordField.value.trim() || passwordField.value.length < 6) {
			isValid = false;
			showErrorMessage("Das Passwort muss min. 6 Zeichen lang sein.");
			highlightField(passwordField);
		}

		const longAnswer = longAnswerField.value.trim();
		const wordCount = longAnswer.split(/\s+/).length;
		if (wordCount < 200) {
			isValid = false;
			showErrorMessage(
				"Du warst nicht ausführlich genug. Es sollten 200 Wörter sein!"
			);
			highlightField(longAnswerField);
		}

		if (dropdown.value === "Ich muss...") {
			dropdown.style.display = "block";
			isValid = false;
			showErrorMessage("Falsche Antwort!");
			highlightField(dropdown);
		} else {
			dropdown.style.display = "none";
		}

		if (isValid) {
			alert("Formular erfolgreich abgesendet!");
			form.reset();
		}
	});

	function showErrorMessage(message) {
		const li = document.createElement("li");
		li.textContent = message;
		errorList.appendChild(li);
	}

	function highlightField(field) {
		field.style.borderColor = "red";
	}

	function resetFieldStyles() {
		const fields = [usernameField, emailField, passwordField, longAnswerField];
		fields.forEach((field) => {
			field.style.borderColor = "";
		});
	}

	function isValidEmail(email) {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailPattern.test(email);
	}

	button.addEventListener("mouseenter", () => {
		button.textContent = "?";
	});

	button.addEventListener("mouseleave", () => {
		button.textContent = "Anmelden";
	});
});
