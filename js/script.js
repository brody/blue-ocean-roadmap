// var didScroll;
// var lastScrollTop = 0;
// var delta = 50;
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     var st = $(this).scrollTop();
//
//     // Make sure they scroll more than delta
//     if (Math.abs(lastScrollTop - st) <= delta)
//         return;
//
//     if (st > lastScrollTop) {
//         // Scroll Down
//         $('.socialLinks').removeClass('showLabel');
//
//     } else {
//         // Scroll Up
//         if (st + $(window).height() < $(document).height()) {
//             $('.socialLinks').addClass('showLabel');
//         }
//     }
//
//     lastScrollTop = st;
// }
//
// function goclicky(meh) {
//   var x = screen.width / 2 - 700 / 2;
//   var y = screen.height / 2 - 600 / 2;
//   window.open(meh.href, "", 'height=700,width=600,left=' + x + ',top=' + y);
// }
//
// // Youtube modal
//
// $(function() {
//   $(".video").click(function () {
//     var theModal = $(this).data("target"),
//     videoSRC = $(this).attr("data-video"),
//     videoSRCauto = videoSRC + "?modestbranding=1&rel=0&html5=1&autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal + ' button.close').click(function () {
//       $(theModal + ' iframe').attr('src', videoSRC);
//     });
//     $(theModal).click(function () {
//       $(theModal + ' iframe').attr('src', videoSRC);
//     });
//   });
// });
