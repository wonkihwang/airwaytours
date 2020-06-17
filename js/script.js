/****************** Click to Top button ******************/
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }

    $('.fadein').each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() - 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ 'opacity': '1' }, 1000);
        }
    });
});

function scrollingTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
}

// ========== get parameter id from url ==========
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "1" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var id = getParameterByName('id');  // usage: url_address?id=[id_number]

// ========== show selected id content ==========
$('#myCarousel').carousel(id - 1);
$('[id^=carousel-selector-]').removeClass('selected');
$('[id=carousel-selector-' + id + ']').addClass('selected');
$('[id^=package]').hide();
$('[id=package' + id + ']').show();

// ========== script for testimonials ==========
// $("#testimonial-slider").owlCarousel({
//     items: 2,
//     itemsDesktop: [1000, 2],
//     itemsDesktopSmall: [979, 2],
//     itemsTablet: [767, 1],
//     pagination: true,
//     autoPlay: true
// });

// ========== script for the carousel ==========
$('#myCarousel').carousel({
    interval: false
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    //console.log(id_selector);
    var id = id_selector.substr(id_selector.length - 1);
    //console.log(id);
    id = parseInt(id);
    $('#myCarousel').carousel(id - 1);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
    //console.log(this);

    $('[id^=package]').hide();
    $('[id=package' + id + ']').show();
});

// when the carousel slides, auto update
$('#myCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-' + id + ']').addClass('selected');

    $('[id^=package]').hide();
    $('[id=package' + id + ']').show();
});

// ==================== sidemenu icon ====================
$('.list-group-item').on('click', function () {
    $('.fa', this)
        .toggleClass('fa-chevron-circle-right')
        .toggleClass('fa-chevron-circle-down');
});

// Button click scroll
$(".pkgbutton").click(function () {
    $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 1200);
});

function scrolling(pos) {
    $('html, body').animate({
        scrollTop: $(pos).offset().top
    }, 1200);
}


/****************** Script for Top Nav contents (Logo and Slide Menu) ******************/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// $('.icon').parallaxBackground({
//     event: 'mouse_move',
//     animation_type: 'rotate',
//     animate_duration: 1,
//     zoom: 70,
//     rotate_perspective: 1000
// });


/****************** Script for Book Now Button ******************/
$('#bookbutton').on('click', function () {
    var Data = "";
    var elemButton = document.querySelector('#bookbutton');
    $('.packageList').each(function (i) {
        if ($(this).hasClass('selected')) {
            Data = this.getAttribute("data-package");
            elemButton.setAttribute("data-package", Data);
        }
    });

    if (Data.length == 0) {   // means there is no selected package
        document.getElementById("mbody").innerHTML = '<div style="text-align: center; padding: 10px 20px 5px 20px;"><h6>No Package has been selected.</h6></div>'
    } else {
        sessionStorage.setItem('objectToPass', Data);
        document.getElementById("mbody").innerHTML = '<object width="470" height="540" data="modalform.html" style="padding: 0 20px;"></object>'
    }
});

$('#booknow_form').ready(function () {
    var receivedData = sessionStorage.getItem('objectToPass');
    var Data = JSON.parse(receivedData);
    sessionStorage.removeItem('objectToPass'); // Clear the sessionStorage
    $('#Destination').val(Data.dest);
    $('#Package').val(Data.pkg);
});
