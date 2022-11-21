

var app_language_element = getById("app-lang");

console.log(app_language_element);

var app_language = app_language_element.getAttribute("app-lang");

var content_hello = "Witaj!";

if (app_language == 'pl') {
    content_hello = "Witaj";
} else if (app_language == 'en') {
    content_hello = "Hello";
}

function getById(element) {
    return document.getElementById(element);
}