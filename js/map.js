var myMap;
ymaps.ready(init);

function init () {
myMap = new ymaps.Map('map', {
center: [59.9390415899662,30.315842480803756],
controls: ['zoomControl'],
zoom: 16
});
myMap.geoObjects.add(new ymaps.Placemark( [59.93863506417266,30.323117499999945], {
balloonContentHeader: '<strong>NЁRDS DESIGN STUDIO</strong>'
, balloonContentBody: 'Адрес: 191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
, balloonContentFooter: 'Телефон: +7 (812) 275-75-75'
}, {
iconLayout: 'default#image',
iconImageSize: [231, 190],
iconImageOffset: [-50, -190],
iconImageHref: 'img/map-marker.png'
}));

myMap.behaviors.disable('scrollZoom');}