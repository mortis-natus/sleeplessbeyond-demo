// weesnaw
"use strict";
$(document).ready(initializePage);
// $(window).resize(updateWidthMeasurement);
window.addEventListener('resize', updateWidthMeasurement);

// TODO: preload font + change urls to variables, other preload method responsiveness, collapse/expand text on volume headings hover?, try changing mouseenter/mouseleave to mouseover?, incraese just body text, link text, and char decs on tablet view, add footer, ask if hek wants an autosave feature?, make sure scroll bars disappear completely, weird page gap issue on the bottom, weird gap at top of #content, figure out how to fix the media queries problem (it works on desktop but not on tablets and mobile??? wtf), make sure nav title with the arrows never has its last button go off to a new row, redo font structure properly?, headings go off of the edge of the window (low priority), glitch at bottom of mobile [page], failure to have div out on mobile at times, cross-bowser compatibility issue: bg not scrolling on samsung internet/safari + check if it works on firefox and edge too, bullet points and scrollbar, graphical glitch on dashed underlines, iphone x view not swapping properly, try to make it so you won'y need to have the scroll visible?, scrollbar on firefox not working, add tentacles to below wrapper so that on apple devices the don't appear to be cut off at bottom of page, ipad image stretch/compress?, back and forward keyboard shortcuts

// OPTIMIZE: all existing js, remove unecessary css, da font: https://css-tricks.com/three-techniques-performant-custom-font-usage/,

// function preloader() {
//   if (document.images) {
//     var img1 = new Image();
//     var img2 = new Image();
//     var img3 = new Image();
//     var img4 = new Image();
//     var img5 = new Image();
//     var img6 = new Image();
//     var img7 = new Image();
//     var img8 = new Image();
//     var img9 = new Image();
//     var img10 = new Image();
//     var img11 = new Image();
//     var img12 = new Image();
//     var img13 = new Image();
//     var img14 = new Image();
//     var img15 = new Image();
//     var img16 = new Image();
//     var img17 = new Image();
//     var img18 = new Image();
//     var img19 = new Image();
//     var img20 = new Image();
//     var img21 = new Image();
//     var img22 = new Image();
//     var img23 = new Image();
//
//     img1.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/StartReading_ButtonAnimated.gif";
//     img2.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/StartReading_ButtonStatic.gif";
//
//     img3.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Cast_ButtonAnimated.gif";
//     img4.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Cast_ButtonStatic.png";
//
//     img5.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Archive_ButtonAnimated.gif";
//     img6.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Archive_ButtonStatic.png";
//
//     img7.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/About_ButtonAnimated.gif";
//     img8.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/About_ButtonStatic.png";
//
//     img9.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Latest_ButtonAnimated.gif";
//     img10.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Latest_ButtonStatic.png";
//
//     img11.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Background.png";
//     img12.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Tentacles1.png";
//     img13.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Tentacles2.png";
//
//     img14.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/NavigationBar.png";
//     img15.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/NavigationBar_NoArrows.png";
//     img16.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/NavigationArrows_Only.png";
//
//     img17.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/magilou.png";
//     img18.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/rokurou.png";
//     img19.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/eizen.png";
//
//     img20.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/Patreon_Mark_Black.png";
//     img21.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/iconmonstr-twitter-1-240.png";
//     img22.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/iconmonstr-tumblr-1-240.png";
//
//     img23.src = "/mortis-natus.github.io/sleeplessbeyond-demo/assets/SleeplessBeyond_Logo_Large.png";
//   }
// }
// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload != 'function') {
//     window.onload = func;
//   } else {
//     window.onload = function() {
//       if (oldonload) {
//         oldonload();
//       }
//       func();
//     }
//   }
// }

const INITIAL_VW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const INITIAL_VH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const SWAP_THRESHOLD = 981;
let divOnTheOutside = false;
let storedW = 0;
// console.log("triggered");

function updateWidthMeasurement() {
  var currentVW = window.innerWidth;
  // console.log(window.innerWidth);
  // var currentVW = document.documentElement.clientWidth;
  // console.log(document.documentElement.clientWidth);
  if (currentVW < SWAP_THRESHOLD && storedW >= SWAP_THRESHOLD) {
    console.log("mobile state");
    if (!divOnTheOutside) {
      bigSwappy();
    }
    console.log(divOnTheOutside);
    divOnTheOutside = true;
    storedW = currentVW;
  } else if(currentVW > SWAP_THRESHOLD && storedW <= SWAP_THRESHOLD) {
    console.log("desktop or tablet state");
    if (divOnTheOutside) {
      bigSwappy();
    }
    console.log(divOnTheOutside);
    divOnTheOutside = false;
    storedW = currentVW;
  }
}

function bigSwappy() {
  var navTitle = document.getElementById("nav-title");
  var navArrows = document.getElementById("arrows");
   if(navTitle != null && navArrows != null) {
     console.log("nav title and arrows present");
     if (divOnTheOutside) {
       // put it back on the inside
       $( "#content" ).before($( "#nav-title" ));
       $( "#page-slot" ).after($( "#arrows" ));
       $( "#left-tentacles" ).css( "display", "block" );
       $( "#right-tentacles" ).css( "display", "block" );
       $( "#inner-wrapper" ).css( "width", "66.1vw" );
       $( "body" ).removeClass( "has-bg" );
     } else {
       // put it on the outside
       $( "#super-wrapper" ).before($( "#nav-title" ));
       $( "#super-wrapper" ).after($( "#arrows" ));
       $( "#left-tentacles" ).css( "display", "none" );
       $( "#right-tentacles" ).css( "display", "none" );
       $( "#inner-wrapper" ).css( "width", "100%" );
       $( "body" ).addClass( "has-bg" );
     }
   } else {
     var navTitleArrowless = document.getElementById("nav-title-arrowless");
     if (navTitleArrowless != null) {
       console.log("nav title arrowless present");
       if (divOnTheOutside) {
         // put it back on the inside
         $( "#content" ).before($( "#nav-title-arrowless" ));
       } else {
         // put it on the outside
         $( "#super-wrapper" ).before($( "#nav-title-arrowless" ));
       }
     } else {
       console.log("this aint it chief");
     }
   }
}

function initializePage() {
  var onDesktop;
  console.log(INITIAL_VW);
  if (INITIAL_VW < SWAP_THRESHOLD) {
    onDesktop = false;
  } else {
    onDesktop = true;
  }
  if (INITIAL_VW < SWAP_THRESHOLD) {
    bigSwappy();
    divOnTheOutside = true;
  } else {
    storedW = 1555;
  }
  console.log(divOnTheOutside);

  // var keyThatWasPressed = 0;
  // $("#target").keydown(function(event){
  //   const key = event.key; // "a", "1", "Shift", etc.
  //   console.log("key is" + key);
  //   console.log(typeof key);
  //   switch (key) {
  //     case "ArrowLeft":
  //       console.log("goback");
  //
  //       break;
  //     case "ArrowRight":
  //       console.log("next");
  //       break;
  //   }
  // });

  // let preloaded = false;
  //
  // if (!preloaded) {
  //   addLoadEvent(preloader);
  //   preloaded = true;
  // }

  // $( "body" ).click(function() {
  //   bigSwappy();
  //   divOnTheOutside = !divOnTheOutside;
  //   console.log(divOnTheOutside);
  // });

  if (onDesktop) {
    $( "#first" )
      .mouseenter(function() {
        $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/StartReading_ButtonAnimated.gif");
      })
      .mouseleave(function() {
        $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/StartReading_ButtonStatic.gif");
      });
  } else {
    $("#first").attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/StartReading_ButtonAnimated.gif");

  }

  $( "#cast" )
    .mouseenter(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/Cast_ButtonAnimated.gif");
    })
    .mouseleave(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/Cast_ButtonStatic.png");
    });

  $( "#archive" )
    .mouseenter(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/Archive_ButtonAnimated.gif");
    })
    .mouseleave(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/Archive_ButtonStatic.png");
    });

  $( "#about" )
    .mouseenter(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/About_ButtonAnimated.gif");
    })
    .mouseleave(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/About_ButtonStatic.png");
    });

  $( "#latest" )
    .mouseenter(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/Latest_ButtonAnimated.gif");
    })
    .mouseleave(function() {
      $(this).attr("src","/mortis-natus.github.io/sleeplessbeyond-demo/assets/Latest_ButtonStatic.png");
    });

  let toggled1 = false;
  let toggled2 = false;
  let toggled3 = false;

  $( "#vol-1 h2 a" ).click(function() {
    toggled1 = !toggled1;
    if (toggled1) {
      $("#vol-1 h2 a").addClass("pink active").removeClass("lime inactive");
    } else {
      $("#vol-1 h2 a").addClass("lime inactive").removeClass("pink active");
    }
    $( "#vol-1 .pagecontainer" ).toggle( 150, function() {
      // Animation complete.
      console.log(toggled1);
    });
  });

  $( "#vol-2 h2 a" ).click(function() {
    toggled2 = !toggled2;
    if (toggled2) {
      $("#vol-2 h2 a").addClass("pink active").removeClass("lime inactive");
    } else {
      $("#vol-2 h2 a").addClass("lime inactive").removeClass("pink active");
    }
    $( "#vol-2 .pagecontainer" ).toggle( 150, function() {
      // Animation complete.
      console.log(toggled2);
    });
  });

  $( "#vol-3 h2 a" ).click(function() {
    toggled3 = !toggled3;
    if (toggled3) {
      $("#vol-3 h2 a").addClass("pink active").removeClass("lime inactive");
    } else {
      $("#vol-3 h2 a").addClass("lime inactive").removeClass("pink active");
    }
    $( "#vol-3 .pagecontainer" ).toggle( 150, function() {
      // Animation complete.
      console.log(toggled3);
    });
  });
}
