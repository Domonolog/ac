import WebFont from 'webfontloader';
import Typed from 'typed.js';

/* eslint-disable no-var */
// require( 'magnific-popup' );
require('./jquery');
require('slick-carousel');
require('./retina');
require('./header');
require('./blog');
require('./smooth-scroll');
require('./target-blank');
require('./jquery.rateyo');

WebFont.load({
  google: {
    families: [
      'Roboto:300,400,500,600,700',
    ]
  }
});

jQuery($ => {
  $(function () {
    $("#rateYo").rateYo({
      rating: 1.5,
      halfStar: true,
      spacing: "12px",
      starWidth: "17px",
      multiColor: {

        "startColor": "#F1B314",
        "endColor": "#F1B314"
      }
    });
  });

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

  $('.detail-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          dots: true,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });

  $(window).scroll(function () {
    $('.fixed-left').toggleClass('content-fixed', $(this).scrollTop() > 155);
  });

  var text = $('.typewriter').text();
  var length = text.length;
  var timeOut;
  var character = 0;

  (function typeWriter() {
    timeOut = setTimeout(function () {
      character++;
      var type = text.substring(0, character);
      $('.typewriter').text(type);
      typeWriter();

      if (character == length) {
        clearTimeout(timeOut);
      } else {
        setTimeout(timeOut);
      }
    }, 300);
  }());

  $(window).scroll(function () {
    $('.up-scroll').toggleClass('scroll-fixed', $(this).scrollTop() > 155);
  });

  var text = $('.typewriter').text();
  var length = text.length;
  var timeOut;
  var character = 0;

  (function typeWriter() {
    timeOut = setTimeout(function () {
      character++;
      var type = text.substring(0, character);
      $('.typewriter').text(type);
      typeWriter();

      if (character == length) {
        clearTimeout(timeOut);
      } else {
        setTimeout(timeOut);
      }
    }, 300);
  }());


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $(".version1").addClass("hidden");
    } else {
      $(".version1").removeClass("hidden");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
      $(".version1 #sticky-header").addClass("hidden-shadow");
    } else {
      $(".version1 #sticky-header").removeClass("hidden-shadow");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
      $(".version2").addClass("vision");
    } else {
      $(".version2").removeClass("vision");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".home__search .jqcs_options").addClass("active");
    } else {
      $(".home__search .jqcs_options").removeClass("active");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".section-details-fixed").addClass("active");
    } else {
      $(".section-details-fixed").removeClass("active");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".tabs-details").addClass("fixed");
    } else {
      $(".tabs-details").removeClass("fixed");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $(".menu-button").addClass("fixed");
    } else {
      $(".menu-button").removeClass("fixed");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $(".header.version2.vision").addClass("fixed");
    } else {
      $(".header.version2.vision").removeClass("fixed");
    }
  });

  $('.tabs-details ul li .top__details').click(function () {
    $(this).parent().toggleClass('active');
  });

  $('.show-all').click(function () {
    $(this).parent().toggleClass('active');
  });

  $('.show-all').click(function () {
    $(this).toggleClass('active');
  });

  $('.tabs li p').click(function () {
    $().parent().addClass('active');
    $(this).parent().toggleClass('active');
  });

  $('.section-frequent__mobile ul li .frequent__top').click(function () {
    $().parent().addClass('active');
    $(this).parent().toggleClass('active');
  });

  $(".fixed-left ul li").click(function (e) {
    e.preventDefault();
    $(".fixed-left ul li").removeClass('active');
    $(this).addClass('active');
  });

  $('.section-tabs__mobile ul li .content__top').click(function () {
    $().parent().addClass('active');
    $(this).parent().toggleClass('active');
  });

  $('.section-details .wrapper .left .left__info p span').click(function () {
    $().parent().addClass('active');
    $(this).toggleClass('active');
  });

  //$(".button-show-statement .btn").click(function (e) {
  //  e.preventDefault();
  //  $(".hidden__content").addClass('active');
  //  $(this).removeClass('active');
  //});

  $(".select__popup").click(function (e) {
    e.preventDefault();
    $(".select__popup").addClass('active');
  });

  $('.button__read .vision').click(function () {
    $('.button__read').parent().removeClass("active");
    $(this).parent().toggleClass('active');
  });

  $('.button__read .close').click(function () {
    $('.button__read').parent().removeClass("active");
    $(this).parent().toggleClass('active');
  });

  $('.error__section .buttons').click(function () {
    $().parent().addClass("active");
    $(this).parent().toggleClass('active');
  });

  // var updateTime=function(){loaderclear.style.display="none"}
  // setTimeout(updateTime,3200);
  // clearTimeout(updateTime);

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

  var target = $('.up-scroll');
  if (target.length) {
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem) {
        $(".up-scroll").addClass('up-scroll-fixed-bottom');
      } else {
        $(".up-scroll").removeClass('up-scroll-fixed-bottom');
      }
    });
  };

  $('.select, .select-popup').each(function () {
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
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });

  $(function () {
    $('.scroll-top').click(scrollToTop);

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

  $('#modal-audit').change(function () {
    if ($(this).is(":checked")) {
      $('.container').addClass("blur");
    } else {
      $('.container').removeClass("blur");
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
});

(function ($) {
  $.customSelect = function (options) {
    if (typeof options.identifier === "undefined" || options.identifier == "") {
      options.identifier = Math.floor((Math.random() * 8645));
    }

    $(options.selector).after(
      "<div id='jqcs_s_" + options.identifier + "' class='jqcs_select " + options.cssClass + "'>" +
      "<div class='jqcs_value'><p class='jqcs_placeholder'>" + options.placeholder + "</p></div>" +
      "<div class='jqcs_arrow'></div>" +
      "</div>" +
      "<div id='jqcs_o_" + options.identifier + "' class='jqcs_options'></div>"
    );

    $('#jqcs_s_' + options.identifier + ' .jqcs_arrow').width($('#jqcs_s_' + options.identifier).height());


    for (var i = 0; i < options.options.length; i++) {
      var currenthtml = $('#jqcs_o_' + options.identifier).html();
      var template = options.template;

      for (var j = 0; j < options.options[i].length; j++) {
        var regex = new RegExp("\\$" + j, "g");
        template = template.replace(regex, options.options[i][j]);
      }

      $('#jqcs_o_' + options.identifier).html(currenthtml + template);
    }

    $('#jqcs_s_' + options.identifier).click(function (e) {
      e.stopPropagation();
      if ($('#jqcs_o_' + options.identifier).css('display') == "block") {
        $('#jqcs_o_' + options.identifier).slideUp();
        $($('#jqcs_s_' + options.identifier + ' .jqcs_arrow')[0]).removeClass('rotated');
      } else {
        $('#jqcs_o_' + options.identifier).slideDown();
        $($('#jqcs_s_' + options.identifier + ' .jqcs_arrow')[0]).addClass('rotated');
      }
    });

    $('#jqcs_o_' + options.identifier + ' .jqcs_option').click(function (e) {
      $('input#countrySelect')[0].value = $(this).data('select-value');
      $($('#jqcs_s_' + options.identifier + ' .jqcs_value')[0]).html(this.outerHTML);
    });

    $(window).click(function (e) {
      $('#jqcs_o_' + options.identifier).slideUp();
      $($('#jqcs_s_' + options.identifier + ' .jqcs_arrow')[0]).removeClass('rotated');
    });
  }
})(jQuery);

(function ($) {
  $.customSelect({
    identifier: 'select-home',
    selector: '#countrySelect',
    placeholder: 'United States',
    options: [['us', 'us.png', 'United States'], ['ca', 'ca.png', 'Canada'], ['eu', 'eu.png', 'Europe'], ['ge', 'ge.png', 'Germany'], ['au', 'au.png', 'Australia'], ['fr', 'fr.png', 'France'], ['uk', 'uk.png', 'United Kingdom'], ['ww', 'ww.png', 'Worldwide']],
    template: "<div class='jqcs_option' name='flag' data-select-value='$0' style='background-image:url(/wp-content/themes/accessibility/assets/images/$1);'>$2</div>"
  });

  $().click(function (e) {
    $('#currentValue').html('Current value is: \'' + $('input#countrySelect')[0].value + '\'');
  });

  $.customSelect({
    identifier: 'select-home-popup',
    selector: '#countrySelectPopup',
    placeholder: 'United States',
    options: [['us', 'us.png', 'United States'], ['ca', 'ca.png', 'Canada'], ['eu', 'eu.png', 'Europe'], ['ge', 'ge.png', 'Germany'], ['au', 'au.png', 'Australia'], ['fr', 'fr.png', 'France'], ['uk', 'uk.png', 'United Kingdom'], ['ww', 'ww.png', 'Worldwide']],
    template: "<div class='jqcs_option' name='flag' data-select-value='$0' style='background-image:url(/wp-content/themes/accessibility/assets/images/$1);'>$2</div>"
  });

  $().click(function (e) {
    $('#currentValue').html('Current value is: \'' + $('input#countrySelectPopup')[0].value + '\'');
  });


  document.documentElement.style.setProperty('--animate-duration', '2s');

})(jQuery);

(function ($) {
  $.customSelect({
    identifier: 'select-header',
    selector: '#flagSelect',
    placeholder: 'US',
    options: [['us', 'us.png', 'US'], ['ca', 'ca.png', 'CA'], ['eu', 'eu.png', 'EU'], ['ge', 'ge.png', 'GE'], ['au', 'au.png', 'AU'], ['fr', 'fr.png', 'FR'], ['uk', 'uk.png', 'UK'], ['ww', 'ww.png', 'WW']],
    template: "<div class='jqcs_option' data-select-value='$0' style='background-image:url(/wp-content/themes/accessibility/assets/images/$1);'>$2</div>"
  });

  $().click(function (e) {
    $('#currentValue').html('Current value is: \'' + $('input#flagSelect')[0].value + '\'');
  });

  var typed = new Typed('.element-popup', {
    strings: ["ADA compliant", "Section 508 compliant", "AODA compliant", "WCAG 2.1 compliant", "ACA compliant", "BITV compliant"],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true,
    cursorChar: ""
  });

  var typed = new Typed('.element', {
    strings: ["ADA compliant", "Section 508 compliant", "AODA compliant", "WCAG 2.1 compliant", "ACA compliant", "BITV compliant"],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true,
    cursorChar: ""
  });

})(jQuery);
