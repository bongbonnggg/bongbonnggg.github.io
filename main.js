//GSAP

var tl = gsap.timeline({ repeat: -1 });
tl.to('#space', { x: 500, duration: 10, rotate: 50, yoyo: true, repeat: -1, ease: "power1. out" }, 0);
tl.to("#space .d", 0.5, { fill: '#A33327', repeat: -1 }, 0);
tl.to("#space .e", 0.5, { delay: 0.5, fill: '#000', repeat: -1 }, 0);

gsap.from("#monitor", { duration: 2, x: 300, opacity: 0, scale: 0.5, rotate: 360 });
gsap.from("#monitor1", { duration: 6, x: 300, opacity: 0, scale: 0.5, rotate: 360 });
gsap.from("#monitor2", { duration: 4, x: 300, opacity: 0, scale: 0.5, rotate: 360 });
gsap.to("#html", { duration: 5, delay: 6, opacity: 1, width: 50, rotate: 360, y: -200, repeat: -1 });
gsap.to("#css", { duration: 7, delay: 6, opacity: 1, width: 50, rotate: 360, y: -300, repeat: -1 });
gsap.to("#photoshop", { duration: 6, delay: 6, opacity: 1, width: 40, rotate: 360, y: -350, repeat: -1 });
gsap.to("#wordpress", { duration: 3, delay: 6, opacity: 1, width: 50, rotate: 360, y: -200, repeat: -1 });



// Swiper JS - HOME
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});