var crsr=document.querySelector("#Cursor")
var blur=document.querySelector(".cursor-blur")
document.addEventListener('mousemove' ,function(dets){
  crsr.style.left = dets.x+ "px"
  crsr.style.top= dets.y +"px"
  blur.style.left = dets.x-150+ "px"
  blur.style.top= dets.y-150 +"px"

})



gsap.to('#navb', {
  backgroundColor: "#000",
  opacity: 0.5,
  duration: 0.5,
  height: "70px",
  
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to(".main", {
  
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});




