window.onload = function() {
	"use strict";
 
	// при клике на бургер скрывать или показывать попап
	var headMenuBurgerBtn = $("#head-menu_burger-btn"),
		popupCloseBtn = $("#popup__close-btn"),
		headMenuContent = $("#head-menu-list").html(),
		popup = $("#popup"),
		popupInner = $("#popup__inner");

	function addVisibleClass(){
		popup.addClass( "visible" );
	}

	function removeVisibleClass(){
		popup.removeClass( "visible" );
	}

	function removeContentFromPopup(){
		popupInner.empty();
	}

	function addContentInPopup(){
		popupInner.append( headMenuContent );
	}

	function bodyToggleScroll(){
		$('body').toggleClass('no-scroll');
	};

	headMenuBurgerBtn.on('click', function(){
		addVisibleClass();
		addContentInPopup();
		bodyToggleScroll();
	});
	popupCloseBtn.on('click', function(){
		removeVisibleClass();
		removeContentFromPopup();
		bodyToggleScroll();
	});

	// При клике на "обратный звонок" открывать popup
	var callBackBtn = $(".call-back__btn"),
		callBackContent = $("#call-back__content").html();
	
	function addContentCallBackInPopup(){
		popupInner.append( callBackContent );
	}		

 	callBackBtn.on('click', function(){
		addVisibleClass();
		addContentCallBackInPopup();
		bodyToggleScroll();
	});

};

$(document).ready(function () {
  $('.slider').slick({ });
});