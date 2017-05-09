var main = function() {

    //========== START OF NAVBAR ============//
    $('#navicon').click(function() {
        $('.nav').css({
            'transform': 'translateX(0)'
        });
    });

    $('.nav').click(function() {
        $('.nav').css({
            'transform': 'translateX(-200px)'
        });
    });

    $('#container').click(function() {
        $('.nav').css({
            'transform': 'translateX(-200px)'
        });
        _exit();
    });

    function _exit() {
        $('.nav').css({
            'transform': 'translateX(-200px)'
        });
    };
    //========== END OF NAVBAR ============//

    //========== START OF GMAPS ============//
    /*var map;
    function initialize() {
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: new google.maps.LatLng(-37.813, 144.963)
        };
        
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);*/

    google.maps.event.addDomListener(window, 'load', init);
    var map;

    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(-37.813, 144.963),
            zoom: 11,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable: true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "color": "#fa8072"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#2a4d60"
                }, {
                    "visibility": "on"
                }]
            }],
        }
        var mapElement = document.getElementById('map-canvas');
        var map = new google.maps.Map(mapElement, mapOptions);
    }

    //========== END OF GMAPS ============//

    //========== START OF TO-TOP ============//
    $('button').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
    });
    //========== END OF TO-TOP ============//


};

$(document).ready(main);