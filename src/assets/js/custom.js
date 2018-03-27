;(function($) {
    "use strict";

    var x= $(".animation_bottom");
    window.onload = function() {
    // short timeout
        setTimeout(function() {
            x.addClass("edgtf-appeared");
        }, 30);
    };


    $('.burger_icon li').on('click', function(){
        $(this).toggleClass('Cross');
        $('body').toggleClass('menuEffect');
    });
    /*************************
       Color Preset js
    *************************/

    if ($(".td-color-theme-demos").length > 0)
    {
        //switcher
        var switchs = true;
        $(".settingBtn").on("click", function (e)
        {
            e.preventDefault();
            if (switchs)
            {
                $(this).addClass("active");
                $(".td-color-theme-demos").animate({"left": "0px"}, 400);
                switchs = false;
            }
            else
            {
                $(this).removeClass("active");
                $(".td-color-theme-demos").animate({"left": "-250px"}, 400);
                switchs = true;
            }
        });
        //Normal
        if ($("#actionColors a").length > 0)
        {
            $("#actionColors a").on("click", function (e)
            {
                e.preventDefault();
                var color = $(this).attr("href");
                $("#actionColors a").removeClass("active");
                $(this).addClass("active");
                $("#triggerColor").attr("href", "css/triggerPlate/" + color + ".css");
            });
        }
    }
     $('#actionColors li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /*************************
       Skill Slider
    *************************/
    function progressBarConfig () {
	  var progressBar = $('.progress-two');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'
	        }, 1000);

	        Self.find('.number').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 1000
	        });
	      });
	    })
	  }
	}
    progressBarConfig ();

    /*************************
       NiceScroll
    *************************/

    function niceScroll() {
        if ($(window).width() < 767) {
            $("#boxscroll").getNiceScroll().hide();
        } else {

	        var boxScroll = $("#boxscroll");

	        boxScroll.niceScroll({
                scrollspeed: 50,
                mousescrollstep: 30,
                cursorcolor: "transparent",
                cursorwidth: "0px",
                cursorminheight: 32,
                cursorborderradius: "0px",
                smoothscroll: true
            });
        }
    }
    niceScroll();


    /*************************
       portfolio Gallary
    *************************/
    function portfolio_g(){
        if ( $('.portfolio_gallery').length ){
            // Activate isotope in container
            $(".portfolio_gallery").imagesLoaded( function() {
                $(".portfolio_gallery").isotope({
                });
            });
            // Add isotope click function
            $(".portfolio_fillter li").on('click',function(){
                $(".portfolio_fillter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio_gallery").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    portfolio_g();


    /*----------------------------------------------------*/
    /*  testimonial slider
    /*----------------------------------------------------*/
    function client_slider(){
        if ( $('.testimonial_slider').length ){
            $('.testimonial_slider').owlCarousel({
                loop:true,
                margin: 20,
                items: 2,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    }
                }
            })
        }
    }
    client_slider();

    /*----------------------------------------------------*/
    /*  client logo slider
    /*----------------------------------------------------*/
    function client_logo_slider(){
        if ( $('.clients_logo_slider').length ){
            $('.clients_logo_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 6,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    320: {
                        items: 2,
                    },
                    500: {
                        items: 3,
                    },
                    800: {
                        items: 5,
                    },
                    992: {
                        items: 6,
                    },
                }
            })
        }
    }
    client_logo_slider();

    $('.navbar-toggler').on('click', function(){
      $('#menu-toggle').toggleClass('open');
    })

    //*  Simple LightBox js
    $('.light_popup').simpleLightbox();

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/

    if ( $('#mapBox1').length ){
        var $lat = $('#mapBox1').data('lat');
        var $lon = $('#mapBox1').data('lon');
        var $zoom = $('#mapBox1').data('zoom');
        var $marker = $('#mapBox1').data('marker');
        var $info = $('#mapBox1').data('info');
        var $markerLat = $('#mapBox1').data('mlat');
        var $markerLon = $('#mapBox1').data('mlon');
        var map = new GMaps({
        el: '#mapBox1',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#5cbdee"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#5cbdee"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#5cbdee"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#5cbdee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#5cbdee"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#5cbdee"
                        }
                    ]
                }
            ]
        });

        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
              content: $info
            }
        })
    }


    $(window).on('load', function() {
        $("#loading").fadeOut();
        $("#loading .object").delay(700).fadeOut("slow");
        $('.fadeInOnLoad').delay(700).fadeTo("slow", 1);
    })


})(jQuery)

