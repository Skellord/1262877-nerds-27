var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=username]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=useremail]");
var text =  popup.querySelector("[name=usercomment");
var isStorageSupport = true;
var storage = "";
var emailStorage = "";

try {
    storage = localStorage.getItem("login");
    emailStorage = localStorage.getItem("email");
}   catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        email.focus();
        if (emailStorage) {
            email.value = emailStorage;
            text.focus();
        }
    }
    else {
        login.focus();
    }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})
form.addEventListener ("submit", function (evt) {
    if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } else {
        if (isStorageSupport){
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
        }
    }
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})