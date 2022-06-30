function initMap() {
    const underground = [
        ['KamennayaGorka',53.906856, 27.437603],
        ['Kuntsauschchana',53.906260, 27.453983],
        ['Srartyunaya',53.908469, 27.479726],
        ['Pushkinskaya',53.909651, 27.497130],
        ['Maladzezhnaya',53.906626, 27.522498],
        ['Frunzenskaya',53.905344, 27.539336],
        ['Yubileynaya',53.904409, 27.539983],
        ['Nyamiga',53.905749, 27.554018],
        ['Kastrychnitskaya',53.902090, 27.562061],
        ['Pershamayskaya',53.893926, 27.570643],
        ['Praletarskaya',53.890217, 27.585904],
        ['TraktarnyZavod', 53.889899, 27.614872],
        ['Partyzanskaya', 53.875400, 27.629707],
        ['Autazavadskaya', 53.869064, 27.648565],
        ['Magileuskaya', 53.861968, 27.674149],


    ];
    const map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 11,
        center: new google.maps.LatLng(53.90089008939261, 27.55758402318272),
    });

    const infowindow = new google.maps.InfoWindow;

    let marker, i;

    for (i = 0; i < underground.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(underground[i][1], underground[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(underground[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
window.initMap = initMap;
