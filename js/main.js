
// $(document).ready(function(){


     
//     //animated header class
//     $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//      //console.log(scroll);
//     if (scroll > 200) {
//         //console.log('a');
//         $(".navigation").addClass("animated");
//     } else {
//         //console.log('a');
//         $(".navigation").removeClass("animated");
//     }});



//     $(".gallery-slider").owlCarousel(
//         {
//         pagination : true,
//         autoPlay : 5000,
//         itemsDesktop  :  [1500,4],
//         itemsDesktopSmall :  [979,3]
//         }
//     );

//     // Gallery Popup
//     $('.image-popup').magnificPopup({type:'image'});



// });


function addsubject(e){"static"==e?$("#contactSubject").val("Enquiry for the Static website development."):"dynamic"==e?$("#contactSubject").val("Enquiry for the Dynamic website development."):"corporate"==e?$("#contactSubject").val("Enquiry for the Corporate website development."):"ecommerce"==e?$("#contactSubject").val("Enquiry for the E commerce website development."):$("#contactSubject").val("Enquiry for the website development.")}!function(e){"use strict";setTimeout(function(){e("#intro h1").fitText(1,{minFontSize:"42px",maxFontSize:"84px"})},100),e(".fluid-video-wrapper").fitVids(),e("#owl-slider").owlCarousel({navigation:!1,pagination:!0,itemsCustom:[[0,1],[700,2],[960,3]],navigationText:!1}),e(".alert-box").on("click",".close",function(){e(this).parent().fadeOut(500)});var t=e("#stats"),n=e(".stat-count");t.waypoint({handler:function(t){"down"===t&&n.each(function(){var t=e(this);e({Counter:0}).animate({Counter:t.text()},{duration:4e3,easing:"swing",step:function(e){t.text(Math.ceil(e))}})}),this.destroy()},offset:"90%"});var a=e("#folio-wrapper");a.imagesLoaded(function(){a.masonry({itemSelector:".folio-item",resize:!0})}),e(".item-wrap a").magnificPopup({type:"inline",fixedContentPos:!1,removalDelay:300,showCloseBtn:!1,mainClass:"mfp-fade"}),e(document).on("click",".popup-modal-dismiss",function(t){t.preventDefault(),e.magnificPopup.close()});var i=e(".menu-toggle"),o=e(".main-navigation");i.on("click",function(e){e.preventDefault(),i.toggleClass("is-clicked"),o.slideToggle()}),o.find("li a").on("click",function(){i.toggleClass("is-clicked"),o.fadeOut()});var s=e("section"),r=e("#main-nav-wrap li a");s.waypoint({handler:function(t){var n;n=e("section#"+this.element.id),"up"===t&&(n=n.prev());var a=e('#main-nav-wrap a[href="#'+n.attr("id")+'"]');r.parent().removeClass("current"),a.parent().addClass("current")},offset:"25%"}),e(".smoothscroll").on("click",function(t){t.preventDefault();var n=this.hash,a=e(n);e("html, body").stop().animate({scrollTop:a.offset().top},800,"swing",function(){window.location.hash=n})}),e("input, textarea, select").placeholder(),e("#contactForm").validate({submitHandler:function(t){var n=e("#submit-loader");e.ajax({type:"POST",url:"inc/sendEmail.php",data:e(t).serialize(),beforeSend:function(){n.fadeIn()},success:function(t){"OK"==t?(n.fadeOut(),e("#message-warning").hide(),e("#contactForm").fadeOut(),e("#message-success").fadeIn()):(n.fadeOut(),e("#message-warning").html(t),e("#message-warning").fadeIn())},error:function(){n.fadeOut(),e("#message-warning").html("Something went wrong. Please try again. OR<br> Mail at bhaveshpatel640@gmail.com "),e("#message-warning").fadeIn()}})}});jQuery(window).scroll(function(){e("#header-search").hasClass("is-visible")||(jQuery(window).scrollTop()>=300?jQuery("#go-top").fadeIn(400):jQuery("#go-top").fadeOut(400))})}(jQuery)





