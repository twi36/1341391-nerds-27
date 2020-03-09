var button = document.querySelector(".button-modal");
var popup = document.querySelector(".write-modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-modal-show");

    if (storage) {
        username.value = storage;
        email.focus();
    } else {
        username.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-modal-show");
    popup.classList.remove("write-modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("write-modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("write-modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("write-modal-show")) {
            popup.classList.remove("write-modal-show");
            popup.classList.remove("write-modal-error");
        }
    }
});