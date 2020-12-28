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

  $('.detail-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1130,
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

  $(window).scroll(function(){
    $('.fixed-left').toggleClass('content-fixed', $(this).scrollTop() > 155);
  });

  var text = $('.typewriter').text();
  var length = text.length;
  var timeOut;
  var character = 0;

  (function typeWriter() {
    timeOut = setTimeout(function() {
      character++;
      var type = text.substring(0, character);
      $('.typewriter').text(type);
      typeWriter();

      if (character == length) {
        clearTimeout(timeOut);
      } else  {
        setTimeout(timeOut);
      }
    }, 300);
  }());


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 800) {
      $(".version1 #sticky-header").addClass("hidden");
    } else {
      $(".version1 #sticky-header").removeClass("hidden");
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 800) {
      $(".version2").addClass("vision");
    } else {
      $(".version2").removeClass("vision");
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 200) {
      $(".home__search .jqcs_options").addClass("active");
    } else {
      $(".home__search .jqcs_options").removeClass("active");
    }
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

  $(".select__popup").click(function(e) {
    e.preventDefault();
    $(".select__popup").addClass('active');
  });

  document.querySelector('.radial-progress').setAttribute('data-progress', 75);

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

  $('#modal-audit').change(function(){
    if($(this).is(":checked")) {
      $('.container').addClass("blur");
    } else {
      $('.container').removeClass("blur");
    }
  });

  $(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 150
      }, 1000);
      e.preventDefault();
    });
    return false;
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

(function( $ ){
  $.customSelect = function(options){
    if(typeof options.identifier === "undefined" || options.identifier == ""){
      options.identifier = Math.floor((Math.random() * 8645));
    }

    $(options.selector).after(
      "<div id='jqcs_s_"+options.identifier+"' class='jqcs_select "+options.cssClass+"'>"+
      "<div class='jqcs_value'><p class='jqcs_placeholder'>"+options.placeholder+"</p></div>"+
      "<div class='jqcs_arrow'></div>"+
      "</div>"+
      "<div id='jqcs_o_"+options.identifier+"' class='jqcs_options'></div>"
    );

    $('#jqcs_s_'+options.identifier+' .jqcs_arrow').width($('#jqcs_s_'+options.identifier).height());


    for(var i = 0; i < options.options.length; i++){
      var currenthtml = $('#jqcs_o_'+options.identifier).html();
      var template = options.template;

      for(var j = 0; j < options.options[i].length; j++){
        var regex = new RegExp("\\$"+j, "g");
        template = template.replace(regex, options.options[i][j]);
      }

      $('#jqcs_o_'+options.identifier).html(currenthtml + template);
    }

    $('#jqcs_s_'+options.identifier).click(function(e){
      e.stopPropagation();
      if($('#jqcs_o_'+options.identifier).css('display') == "block"){
        $('#jqcs_o_'+options.identifier).slideUp();
        $($('#jqcs_s_'+options.identifier+' .jqcs_arrow')[0]).removeClass('rotated');
      }else{
        $('#jqcs_o_'+options.identifier).slideDown();
        $($('#jqcs_s_'+options.identifier+' .jqcs_arrow')[0]).addClass('rotated');
      }
    });

    $('#jqcs_o_'+options.identifier+' .jqcs_option').click(function(e){
      $('input#countrySelect')[0].value = $(this).data('select-value');
      $($('#jqcs_s_'+options.identifier+' .jqcs_value')[0]).html(this.outerHTML);
    });

    $(window).click(function(e){
      $('#jqcs_o_'+options.identifier).slideUp();
      $($('#jqcs_s_'+options.identifier+' .jqcs_arrow')[0]).removeClass('rotated');
    });
  }
})( jQuery );

(function($){
  $.customSelect({
    identifier: 'select-home',
    selector: '#countrySelect',
    placeholder: 'United States',
    options: [
      ['us', 'us.png', 'United States'],
      ['ca', 'ca.png', 'Canada'],
      ['eu', 'eu.png', 'Europe'],
      ['ge', 'ge.png', 'Germany'],
      ['au', 'au.png', 'Australia'],
      ['dn', 'dn.png', 'Denmark'],
      ['fr', 'fr.png', 'Finland']
    ],
    template: "<div class='jqcs_option' data-select-value='$0' style='background-image:url(../wp-content/themes/accessibility/assets/images/$1);'>$2</div>"
  });

  $(window).click(function(e){
    $('#currentValue').html('Current value is: \''+ $('input#countrySelect')[0].value +'\'');
  });
})(jQuery);

(function($){
  $.customSelect({
    identifier: 'select-header',
    selector: '#flagSelect',
    placeholder: 'US',
    options: [
      ['us', 'us.png', 'US'],
      ['ca', 'ca.png', 'CA'],
      ['eu', 'eu.png', 'EU'],
      ['ge', 'ge.png', 'GE'],
      ['au', 'au.png', 'AU'],
      ['dn', 'dn.png', 'DE'],
      ['fr', 'fr.png', 'FN']
    ],
    template: "<div class='jqcs_option' data-select-value='$0' style='background-image:url(../wp-content/themes/accessibility/assets/images/$1);'>$2</div>"
  });

  $(window).click(function(e){
    $('#currentValue').html('Current value is: \''+ $('input#flagSelect')[0].value +'\'');
  });
})(jQuery);

