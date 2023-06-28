'use strict'

$(document).ready(function () {

  function showHideBlock(parentBlock, hideBlock, trigger) {
    $(parentBlock).each(function (index, item) {
      const hideBlcok = $(item).find(hideBlock),
        triggerElement = $(item).find(trigger);

      $(triggerElement).on('click', function () {
        $(this).toggleClass('open');
        $(hideBlcok).stop().slideToggle()
      });

    });
  }
  showHideBlock('.cabinet__list .item', '.item-body', '.item-header__product-button');
  if ($(window).width() <= 540) {
    showHideBlock('.navigation__item-list', 'ul', 'h3');
  }

  // Open side menu on mobile version
  $('.cabinet__main-open-button button').on('click', function () {
    $('.cabinet__side').addClass('open');
    $('body').addClass('no-scroll');
  });

  // Close side menu on mobile version
  $('.cabinet__side-close-button').on('click', function () {
    $('.cabinet__side').removeClass('open');
    $('body').removeClass('no-scroll');
  });


  $('.cabinet__list .item').each(function (index, item) {
    const cards = $(item).find('.item-slide');
    const cardButton = $(item).find('.card-top__button');

    function hideCards() {
      $(cards).each(function (indexCards, card) {
        $(card).addClass('hide').removeClass('show active');
      });
    }

    function showCards(i = 0) {
      $(cards).eq(i).addClass('show').removeClass('hide');
    }

    hideCards();
    showCards();

    $(cardButton).on('click', function () {
      setTimeout(function(){
        window.scrollTo(0, 0);
      },400)
      $('.cabinet__main-back-button').addClass('open');
      hideCards();
      showCards(1);
      $(cards).eq(1).addClass('active');
      $('.cabinet__list .item-mobile-card').each(function () {
        $(this).hide();
      });
    });

    $('.cabinet__main-back-button').on('click', function () {
      window.scrollTo(0, 0);
      $('.cabinet__main-back-button').removeClass('open');
      hideCards();
      showCards(0);
      $(cards).eq(0).addClass('active');
      $('.cabinet__list .item-mobile-card').each(function () {
        $(this).show();
      });
    });

  });

});

