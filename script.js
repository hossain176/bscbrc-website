/* ==========================================
   BSCBRC Website v1.0
   Production JavaScript
========================================== */

"use strict";

/* ===========================
   Navbar Shadow
=========================== */
const navbar = document.querySelector(".navbar");

if (navbar) {

  window.addEventListener("scroll", () => {

if (window.scrollY > 20) {  

      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }

  });

}

/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", e => {

    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  });

});

/* ===========================
   Reveal Animation
=========================== */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

observer.unobserve(entry.target);

}

});

},

{

threshold:0.15

}

);

document

.querySelectorAll(

".feature-card,.stat-card,.about-content,.cta-box"

)

.forEach(el=>observer.observe(el));

/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY >= top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/* ===========================
   Hero Button Ripple
=========================== */

document

.querySelectorAll(".primary-btn,.secondary-btn")

.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===========================
   Lazy Images
=========================== */

document

.querySelectorAll("img")

.forEach(img=>{

img.loading="lazy";

img.decoding="async";

});

/* ===========================
   Console
=========================== */

console.log(

"%cBSCBRC",

"color:#0052FF;font-size:22px;font-weight:bold;"

);

console.log(

"Learning • Testing • Building on Base"

);

console.log(

"https://bscbrc.xyz"

);

/* ===========================
   Mobile Menu Toggle
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });
}

/* ===========================
   Loader
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});

/* ===========================
   Scroll Progress
=========================== */


const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================================
   End
========================================== */
