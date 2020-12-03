/* eslint-disable no-var */
// require( 'magnific-popup' );
require( 'slick-carousel' );
// require( './map' );
require( './retina' );
require( './header' );
require( './blog' );
require( './smooth-scroll' );
require( './target-blank' );

import WebFont from 'webfontloader';

WebFont.load( {
  google: {
    families: [
      'Roboto:300,400,500,600,700',
      'SF UI Display:300,400,500,600,700'
    ]
  }
} );

jQuery( $ => {
  $('.slider-home').slick({
    infinite: true,
    slidesToShow: 9,
    centerPadding: '30px',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 7
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $(window).scroll(function(){
    $('.fixed-left').toggleClass('content-fixed', $(this).scrollTop() > 155);
  });

  $(".about-title .inner ul li").click(function(e) {
    e.preventDefault();
    $(".about-title .inner ul li").removeClass('active');
    $(this).addClass('active');
  });

  $(".fixed-left ul li").click(function(e) {
    e.preventDefault();
    $(".fixed-left ul li").removeClass('active');
    $(this).addClass('active');
  });

  var target = $('.fixed-bg');
  if (target.length) {
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem) {
        $(".fixed-left").addClass('content-fixed-bottom');
      } else {
        $(".fixed-left").removeClass('content-fixed-bottom');
      }
    });
  };

  var filter_select_el = document.getElementById('filter-left');
  var items_el = document.getElementById('items');

  filter_select_el.onchange = function() {
    console.log(this.value);
    var items = items_el.getElementsByClassName('item-blog');
    for (var i=0; i<items.length; i++) {
      if (items[i].classList.contains(this.value)) {
        items[i].style.display = 'flex';
      } else {
        items[i].style.display = 'none';
      }
    }
  };
} );
