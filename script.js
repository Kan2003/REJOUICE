function cursoreffect(){
    var cursor = document.querySelector("#cursor");
var page1 = document.querySelector("#page1-content");

page1.addEventListener("mousemove",function(dets){
    gsap.to(cursor ,{
        opacity : 1,
        left : dets.x + "px-50px",
        top : dets.y + "px-50px",
        // delay : 0.25
    })
})
page1.addEventListener("mouseleave",function(){
    gsap.to(cursor ,{
        sacle : 0,
        opacity : 0
    })
})
page1.addEventListener("mouseenter",function(){
    gsap.to(cursor ,{
        sacle : 1,
        opacity : 1
    })
})
}

cursoreffect();
function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locoscroll();






function page2animation(){
    gsap.from("#page2 h3",{
        y:120,
        stagger : 0.2,
        duration : 1,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "#main",
            start : "0% 80%",
            end: "10% 80%",
            // markers : true,
            scrub :2
        }
    })
}

page2animation();


gsap.from(".revel h3",{
    y:100,
    stagger : 0.2,
    duration : 1,
    scrollTrigger : {
        trigger : "#page3",
        scroller : "#main",
        start : "10% 80%",
        end: "50% 80%",
        // markers : true,
        scrub :2
    }
})

function swipperslider(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay : 2500,
            disableOnInteraction: true
        }
      });
}


swipperslider();


var tl = gsap.timeline();

tl.from("#loader h3",{
    x : 100,
    opacity : 0,
    duration : 1,
    stagger : 0.2
})
.to("#loader h3",{
    opacity: 0,
    x:-50,
    duration:1,
    stagger : 0.1
})
.to("#loader",{
   opacity : 0
})
.to("#loader",{
   display : "none"
})
.from("#page1 #heading span",{
    y:300,
    opacity:0,
    stagger :0.1,
    delay : -1
})

var menu = document.querySelector("#menu");

menu.addEventListener("click",function(){
    gsap.to("#navbar",{
        height:"60vh",
        duration:0.5
    })
})