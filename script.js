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

const changeTextButton = document.querySelector("#changeTextButton");
const messageText = document.querySelector("#messageText");

if (changeTextButton && messageText) {
    changeTextButton.addEventListener("click", function () {
        messageText.textContent =
            "The content was changed with JavaScript!";
    });
}

const taskInput = document.querySelector("#taskInput");

if (taskInput) {
    taskInput.addEventListener("input", function () {
        if (taskInput.value.trim() !== "") {
            taskInput.style.backgroundColor = "#f2cd93";
        } else {
            taskInput.style.backgroundColor = "#fff8e8";
        }
    });
}

const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

if (addTaskButton && taskInput && taskList) {
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const newTask = document.createElement("li");

            newTask.textContent = taskText;

            taskList.appendChild(newTask);

            taskInput.value = "";
            taskInput.style.backgroundColor = "#fff8e8";
        }
    });
}

const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

if (
    form &&
    name &&
    email &&
    message &&
    nameError &&
    emailError &&
    messageError
) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    name.addEventListener("input", function () {
        nameError.textContent = "";
    });

    email.addEventListener("input", function () {
        emailError.textContent = "";
    });

    message.addEventListener("input", function () {
        messageError.textContent = "";
    });
}

const apiButton = document.querySelector("#apiButton");
const apiResult = document.querySelector("#apiResult");

if (apiButton && apiResult) {

    apiButton.addEventListener("click", function() {

        apiResult.textContent = "Loading...";

        fetch("https://randomuser.me/api/")
            .then(function(response) {

                if (!response.ok) {
                    throw new Error("API request failed.");
                }

                return response.json();
            })

            .then(function(data) {

                const user = data.results[0];

                apiResult.textContent =
                    "Random User: " +
                    user.name.first +
                    " " +
                    user.name.last;
            })

            .catch(function(error) {

                apiResult.textContent =
                    "Unable to load API information.";

                console.error(error);
            });

    });

}