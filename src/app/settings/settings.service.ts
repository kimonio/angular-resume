import {Injectable} from '@angular/core';

declare const $;
declare const GMaps;
declare const particlesJS;

@Injectable()
export class SettingsService {

  constructor() {
  }

  initScript() {
    const x = $('.animation_bottom');
    setTimeout(function () {
      x.addClass('edgtf-appeared');
    }, 30);

    $('.burger_icon li').on('click', function () {
      $(this).toggleClass('Cross');
      $('body').toggleClass('menuEffect');
    });
    /*************************
     Color Preset js
     *************************/

    if ($('.td-color-theme-demos').length > 0) {
      // switcher
      let switchs = true;
      $('.settingBtn').on('click', function (e) {
        e.preventDefault();
        if (switchs) {
          $(this).addClass('active');
          $('.td-color-theme-demos').animate({'left': '0px'}, 400);
          switchs = false;
        }
        else {
          $(this).removeClass('active');
          $('.td-color-theme-demos').animate({'left': '-250px'}, 400);
          switchs = true;
        }
      });
      // Normal
      if ($('#actionColors a').length > 0) {
        $('#actionColors a').on('click', function (e) {
          e.preventDefault();
          const color = $(this).attr('href');
          $('#actionColors a').removeClass('active');
          $(this).addClass('active');
          $('#triggerColor').attr('href', 'css/triggerPlate/' + color + '.css');
        });
      }
    }
    $('#actionColors li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });


    /*************************
     Skill Slider
     *************************/
    function progressBarConfig() {
      const progressBar = $('.progress-two');
      if (progressBar.length) {
        progressBar.each(function () {
          const Self = $(this);
          Self.appear(function () {
            const progressValue = Self.data('value');

            Self.find('.progress-bar').animate({
              width: progressValue + '%'
            }, 1000);

            Self.find('.number').countTo({
              from: 0,
              to: progressValue,
              speed: 1000
            });
          });
        });
      }
    }

    progressBarConfig();

    /*************************
     NiceScroll
     *************************/

    function niceScroll() {
      if ($(window).width() < 767) {
        $('#boxscroll').getNiceScroll().hide();
      } else {

        const boxScroll = $('#boxscroll');
        boxScroll.niceScroll({
          scrollspeed: 50,
          mousescrollstep: 30,
          cursorcolor: 'transparent',
          cursorwidth: '0px',
          cursorminheight: 32,
          cursorborderradius: '0px',
          smoothscroll: true
        });
      }
    }

    niceScroll();


    /*************************
     portfolio Gallary
     *************************/
    function portfolio_g() {
      if ($('.portfolio_gallery').length) {
        // Activate isotope in container
        $('.portfolio_gallery').imagesLoaded(function () {
          $('.portfolio_gallery').isotope({});
        });
        // Add isotope click function
        $('.portfolio_fillter li').on('click', function () {
          $('.portfolio_fillter li').removeClass('active');
          $(this).addClass('active');

          const selector = $(this).attr('data-filter');
          $('.portfolio_gallery').isotope({
            filter: selector,
            animationOptions: {
              duration: 450,
              easing: 'linear',
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
    function client_slider() {
      if ($('.testimonial_slider').length) {
        $('.testimonial_slider').owlCarousel({
          loop: true,
          margin: 20,
          items: 2,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            }
          }
        });
      }
    }

    client_slider();

    /*----------------------------------------------------*/

    /*  client logo slider
    /*----------------------------------------------------*/
    function client_logo_slider() {
      if ($('.clients_logo_slider').length) {
        $('.clients_logo_slider').owlCarousel({
          loop: true,
          margin: 0,
          items: 6,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
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
        });
      }
    }

    client_logo_slider();

    $('.navbar-toggler').on('click', function () {
      $('#menu-toggle').toggleClass('open');
    });

    // Simple LightBox js
    $('.light_popup').simpleLightbox();

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/

    if ($('#mapBox1').length) {
      const $lat = $('#mapBox1').data('lat');
      const $lon = $('#mapBox1').data('lon');
      const $zoom = $('#mapBox1').data('zoom');
      const $marker = $('#mapBox1').data('marker');
      const $info = $('#mapBox1').data('info');
      const $markerLat = $('#mapBox1').data('mlat');
      const $markerLon = $('#mapBox1').data('mlon');
      const map = new GMaps({
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
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#5cbdee'
              }
            ]
          },
          {
            'featureType': 'transit',
            'stylers': [
              {
                'color': '#5cbdee'
              },
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#5cbdee'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#ffffff'
              },
              {
                'weight': 1.8
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#5cbdee'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#000'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#5cbdee'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#f2f2f2'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#000'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#737373'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#f2f2f2'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {},
          {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#5cbdee'
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
      });
    }


    $(window).on('load', function () {
      $('#loading').fadeOut();
      $('#loading .object').delay(700).fadeOut('slow');
      $('.fadeInOnLoad').delay(700).fadeTo('slow', 1);
    });
  }

  initParticles() {
    particlesJS('particles-js',
      {
        'particles': {
          'number': {
            'value': 100,
            'density': {
              'enable': true,
              'value_area': 1000
            }
          },
          'color': {
            'value': '#78d3f5'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 6
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.05,
              'sync': false
            }
          },
          'size': {
            'value': 12,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 20,
              'size_min': 0.2,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 120,
            'color': '#78d3f5',
            'opacity': 1,
            'width': 1.5
          },
          'move': {
            'enable': true,
            'speed': 5,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'attract': {
              'enable': false,
              'rotateX': 400,
              'rotateY': 800
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 800,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 800,
              'size': 40,
              'duration': 2,
              'opacity': 8,
              'speed': 3
            },
            'repulse': {
              'distance': 200
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true,
        'config_demo': {
          'hide_card': false,
          'background_color': '#b61924',
          'background_image': '',
          'background_position': '50% 50%',
          'background_repeat': 'no-repeat',
          'background_size': 'cover'
        }
      });
  }
}
