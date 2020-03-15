var button = document.querySelector(".button-modal");
var popup = document.querySelector(".write-modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-modal-close");
    username.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-modal-close");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("write-modal-error");

        setTimeout(function() {
          popup.classList.remove("write-modal-error");
        }, 1000);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.add("write-modal-close");
    }
});

var myMap;
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map("map", {
    center: [59.9390415899662,30.315842480803756],
    controls: ["zoomControl"],
    zoom: 16
});

myMap.geoObjects.add(new ymaps.Placemark( [59.93863506417266,30.323117499999945], {
    balloonContentHeader: "<strong>NЁRDS DESIGN STUDIO</strong>",
    balloonContentBody: "Адрес: 191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8",
    balloonContentFooter: "Телефон: +7 (812) 275-75-75"
}, {
    iconLayout: "default#image",
    iconImageSize: [231, 190],
    iconImageOffset: [-50, -190],
    iconImageHref: "img/map-marker.png"
}));

myMap.behaviors.disable("scrollZoom");}
