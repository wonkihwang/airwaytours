var isZoom = false;
var dX, dY, dS;
var modal, btn, span;
jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#ffffff',
        color: '#ffffff',
        hoverOpacity: 0.5,
        selectedColor: '#666666',
        borderColor: '#ffffff',
        colors: test,
        enableZoom: false,
        showTooltip: true,
        onRegionOver: function (element, code, region) {
            highlightRegionOfCountry(code);
        },
        onRegionOut: function (element, code, region) {
            unhighlightRegionOfCountry(code);
        },
        onRegionClick: function (element, code, region) {
            if (countryMap[code] == "Asia") {
                modal = document.getElementById('myModal1');

                var x = document.getElementsByClassName("city");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                document.getElementById('Nepal').style.display = "block";   // first shown city

                var span = document.getElementsByClassName("close1")[0];
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
            if (countryMap[code] == "Africa") {
                modal = document.getElementById('myModal2');

                var x = document.getElementsByClassName("city");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                document.getElementById('southAfrica').style.display = "block";   // first shown city

                var span = document.getElementsByClassName("close2")[0];
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
            if (countryMap[code] == "Europe") {
                modal = document.getElementById('myModal3');

                var x = document.getElementsByClassName("city");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                document.getElementById('Italy').style.display = "block";   // first shown city

                var span = document.getElementsByClassName("close3")[0];
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
            if (countryMap[code] == "northAmerica") {
                modal = document.getElementById('myModal4');

                var x = document.getElementsByClassName("city");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                document.getElementById('Canada').style.display = "block";   // first shown city

                var span = document.getElementsByClassName("close4")[0];
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
            if (countryMap[code] == "southAmerica") {
                modal = document.getElementById('myModal5');

                var x = document.getElementsByClassName("city");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                document.getElementById('Argentina').style.display = "block";   // first shown city

                var span = document.getElementsByClassName("close5")[0];
                modal.style.display = "block";
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }
    });
});

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}