/* eslint-disable no-var */
// require( 'magnific-popup' );
require( './jquery' );
require( 'slick-carousel' );
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
    ]
  }
} );

jQuery( $ => {
  $('.slider-home').slick({
    infinite: true,
    slidesToShow: 9,
    centerPadding: '30px',
    slidesToScroll: 1,
    rows: 1,
    swipeToSlide: true,
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

  $(window).scroll(function(){
    $('.version1').toggleClass('hidden', $(this).scrollTop() > 500);
  });

  $(window).scroll(function(){
    $('.version2').toggleClass('vision', $(this).scrollTop() > 500);
  });

  $(".tabs-details ul li").click(function(e) {
    e.preventDefault();
    $(".tabs-details ul li").removeClass('active');
    $(this).addClass('active');
  });

  $(".tabs li").click(function(e) {
    e.preventDefault();
    $(".tabs li").removeClass('active');
    $(this).addClass('active');
  });

  $(".section-frequent__mobile ul li").click(function(e) {
    e.preventDefault();
    $(".section-frequent__mobile ul li").removeClass('active');
    $(this).addClass('active');
  });

  $(".fixed-left ul li").click(function(e) {
    e.preventDefault();
    $(".fixed-left ul li").removeClass('active');
    $(this).addClass('active');
  });

  $(".section-tabs__mobile ul li").click(function(e) {
    e.preventDefault();
    $(".section-tabs__mobile ul li").removeClass('active');
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

  $('.select, .select-popup').each(function() {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
      class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function() {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text( $(this).find('span').text() );

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });

  $(function() {
    $('.scroll-top').click( scrollToTop );
    function scrollToTop() {
      $('html, body').animate({scrollTop: 0}, 'slow');
      return false;
    }
  });

  $(function () {
    $(".section-tabs .left ul").on("click", ":not(.active)", function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass("active")
        .closest(".section-tabs")
        .find(".content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });

  $(function () {
    $(".section-tabs .left ul").on("click", ":not(.active)", function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass("active")
        .closest(".section-tabs")
        .find(".content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
} );
