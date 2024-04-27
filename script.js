const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");

icon.addEventListener("click",()=>{
   ul.classList.toggle("showData");
   if(ul.className == "showData"){
    document.getElementById("bar").className= "fa-solid fa-xmark";
   }
   else{
    document.getElementById("bar").className= "fa-solid fa-mark";
   }
});


let slideImg = document.getElementById("slideImg");
let images = new Array(
   "image/school img-3.avif",
   "image/school -img-4.jpg"
);
let len = images.length;
let i = 0;

function slider(){
   if(i > len-1){
      i = 0
   }
   slideImg.src = images[i];
   i++;
   setTimeout('slider()',3000);
}

// gsap

let tl = gsap.timeline()
tl.from(".nav img , .nav h1",{
   y: -100,
   duration:.5,
   delay:0,
   opacity:0,
   stagger: 0.2
})
tl.from(".nav2, .nav2>ul>li>a",{
   y: 100,
   duration:.5,
   delay:0,
   opacity:0,
   stagger: 0.2
})
tl.from(".content,.content>h1,.content>h3,#btn",{
   y: 100,
   duration:.5,
   delay:0,
   opacity:0,
   stagger: 0.2
})
