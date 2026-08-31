const skillsButton = document.querySelector("#skillsButton");
const skillsText = document.querySelector("#skillsText");

if (skillsButton && skillsText) {
    skillsButton.addEventListener("click", function () {
        const isHidden = skillsText.hidden;

        skillsText.hidden = !isHidden;
        skillsButton.setAttribute("aria-expanded", isHidden);

        if (isHidden) {
            skillsButton.textContent = "Hide Skills";
        } else {
            skillsButton.textContent = "Show Skills";
        }
    });
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");

    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.setAttribute("aria-invalid", "true");
    }

    function clearError(input, errorElement) {
        errorElement.textContent = "";
        input.removeAttribute("aria-invalid");
    }

    contactForm.addEventListener("submit", function (event) {
        let formIsValid = true;

        clearError(nameInput, nameError);
        clearError(emailInput, emailError);
        clearError(messageInput, messageError);

        if (nameInput.value.trim() === "") {
            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            formIsValid = false;
        }

        if (emailInput.value.trim() === "") {
            showError(
                emailInput,
                emailError,
                "Please enter your email address."
            );

            formIsValid = false;
        } else if (!emailInput.validity.valid) {
            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            formIsValid = false;
        }

        if (messageInput.value.trim() === "") {
            showError(
                messageInput,
                messageError,
                "Please enter a message."
            );

            formIsValid = false;
        }

        if (!formIsValid) {
            event.preventDefault();

            const firstInvalidField =
                contactForm.querySelector('[aria-invalid="true"]');

            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        }
    });

    nameInput.addEventListener("input", function () {
        if (nameInput.value.trim() !== "") {
            clearError(nameInput, nameError);
        }
    });

    emailInput.addEventListener("input", function () {
        if (
            emailInput.value.trim() !== "" &&
            emailInput.validity.valid
        ) {
            clearError(emailInput, emailError);
        }
    });

    messageInput.addEventListener("input", function () {
        if (messageInput.value.trim() !== "") {
            clearError(messageInput, messageError);
        }
    });
}