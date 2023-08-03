let curser = document.querySelector(".curser");
let button = document.querySelectorAll(".btn");
let main = document.querySelector("#main");
let page1video = document.querySelector(".page1-video");
console.log(button);
document.addEventListener("mousemove", (dets) => {
  // console.log(dets)
  curser.style.left = dets.x + "px";
  curser.style.top = (dets.y - 20) + "px";
  // curser.style.left = (dets.x - 20) +  "px";
  // curser.style.top = dets.y + 20 + "px";
})

function mousehoverbtn(element2) {
  element2.addEventListener('mouseenter', () => {
    curser.style.width = "35px";
    curser.style.height = "35px";
    element2.style.curser = "pointer";
  });

  element2.addEventListener('mouseleave', () => {
    curser.style.width = "17px";
    curser.style.height = "17px";
  });
}
button.forEach((butto) => {
  mousehoverbtn(butto);
});

function mousehover(element) {
  element.addEventListener('mouseenter', () => {
    curser.innerText = 'Sound on'; 
    curser.style.width = "100px";
    curser.style.height = "20px";
    curser.style.borderRadius = "600px";
  });

  element.addEventListener('mouseleave', () => {
    curser.innerText = ''; 
    curser.style.width = "17px";
    curser.style.height = "17px";
    
  });
}
mousehover(page1video);

function init() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
init();




let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top 30%",
    end: "top 0",
    scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "govi")
tl.to(".page1 h2", {
  x: 100,
}, "govi")
tl.to(".page1 video", {
  width: "95%",
}, "govi")

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -105%",
    end: "top -120%",
    scrub: 3
  }
})
tl2.to("#main", {
  backgroundColor: "#fff"
})



let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -550%",
    end: "top -570%",
    scrub: 3
  }
})

tl3.to("#main", {
  backgroundColor: "#0F0D0D"
})





let boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let att = elem.getAttribute("data-image");
    curser.style.height = "250px";
    curser.style.width = "400px";
    curser.style.curser = "pointer";
    curser.style.borderRadius = "0";
    curser.style.backgroundImage = `url(${att})`;
    document.addEventListener("mousemove", (dets) => {
      curser.style.left = (dets.x - 190) + "px";
      curser.style.top = (dets.y - 135) + "px";
    })
  })
  elem.addEventListener("mouseleave", function () {
    // let att = elem.getAttribute("data-image");
    elem.style.backgroundColor = "transparent"
    curser.style.height = "17px";
    curser.style.width = "17px";
    curser.style.borderRadius = "50%";
    curser.style.backgroundImage = ``;
    document.addEventListener("mousemove", (dets) => {
      curser.style.left = dets.x + "px";
      curser.style.top = (dets.y - 20) + "px";
    })
  })
})


let rounddiv = document.querySelector(".round-div");
let rounddivP = document.querySelector(".round-div p");
rounddiv.addEventListener("mouseenter" , ()=>{
  rounddivP.style.color = "#fff";
  curser.style.display = "none";
  rounddiv.style.transition = "background .3s ease-in";
})
rounddiv.addEventListener("mouseleave" , ()=>{
  rounddivP.style.color = "#000";
  curser.style.display = "flex";
})


// let navlis = document.querySelectorAll(".nav h4");
// let purple = document.querySelector(".purple");
// navlis.forEach(function(elem){
//   elem.addEventListener("mouseenter",function (){
// purple.style.display = "";
// purple.style.opacity = "1";
//   })
// })

// JavaScript
let navlis = document.querySelectorAll(".nav h4");
let purple = document.querySelector(".purple");

navlis.forEach(function(elem){
  elem.addEventListener("mouseenter", function () {
    purple.style.opacity = "1";
    // purple.style.display = "bloke";
  });

  elem.addEventListener("mouseleave", function () {
    purple.style.opacity = "0";
    // purple.style.display = "none";
  });
});

gsap.to(".purple span" ,{
  x:-2000,
  duration:8,
  repeat:-1
})