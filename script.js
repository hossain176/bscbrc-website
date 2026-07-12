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

/* ===========================
   Back To Top
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* ===========================
   Mouse Glow
=========================== */

document.querySelectorAll(".feature-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        card.style.setProperty("--x",(e.clientX-rect.left)+"px");

        card.style.setProperty("--y",(e.clientY-rect.top)+"px");

    });

});

/* ===========================
   Animated Counter
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const update = () => {

            const increment = Math.ceil(target / 40);

            current += increment;

            if(current > target){
                current = target;
            }

            counter.textContent = current + "+";

            if(current < target){
                requestAnimationFrame(update);
            }

        };

        update();

        counterObserver.unobserve(counter);

    });

},{
    threshold:.5
});

counters.forEach(counter=>counterObserver.observe(counter));


/* ===========================
   Hero Parallax
=========================== */

const parallaxItems = document.querySelectorAll(".parallax");

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    parallaxItems.forEach(item=>{
        item.style.transform =
        `translate(${x}px, ${y}px)`;
    });

});

/* ===========================
   Card Tilt Effect
=========================== */

document.querySelectorAll(".article-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 8;
        const rotateX = (0.5 - y / rect.height) * 8;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});

/* ===========================
   Professional Guide Search
=========================== */

const guideSearch = document.getElementById("guideSearch");
const searchResults = document.getElementById("searchResults");
const clearSearch = document.getElementById("clearSearch");

if (guideSearch && searchResults) {

   const guides = [

      {
    title: "💙 Base Guide",
    url: "base-guide.html",
    description: "Learn the fundamentals of the Base ecosystem.",
    keywords: [
        "base",
        "base ecosystem",
        "layer2",
        "coinbase",
        "l2"
    ]
},

    {
        title: "🪂 Airdrop Guide",
        url: "airdrop-guide.html",
        description: "Learn how to identify quality airdrops safely.",
        keywords: [
            "airdrop",
            "farming",
            "rewards",
            "points"
        ]
    },

    {
        title: "🧪 Testnet Guide",
        url: "testnet-guide.html",
        description: "Build real onchain experience through testnets.",
        keywords: [
            "testnet",
            "test",
            "devnet",
            "network"
        ]
    },

    {
        title: "💼 Wallet Guide",
        url: "wallet-guide.html",
        description: "Understand crypto wallets and wallet security.",
        keywords: [
            "wallet",
            "metamask",
            "rabby",
            "coinbase wallet",
            "security",
            "seed phrase"
        ]
    }

{
    title: "🌉 Bridge Guide",
    url: "bridge-guide.html",
    description: "Learn how crypto bridges work and transfer assets safely.",
    keywords: [
        "bridge",
        "bridging",
        "crypto bridge",
        "base bridge",
        "cross chain",
        "cross-chain",
        "ethereum",
        "arbitrum",
        "optimism"
    ]
}
      
];

    guideSearch.addEventListener("input", () => {

        const keyword = guideSearch.value.toLowerCase().trim();
       clearSearch.style.display =
    keyword ? "flex" : "none";

        searchResults.innerHTML = "";

        if (keyword === "") return;

       const filtered = guides.filter(guide => {

    const title = guide.title
        .toLowerCase()
        .replace(/[^\w\s]/g, "");

    if (title.includes(keyword)) {
        return true;
    }

    return guide.keywords.some(item =>
        item.toLowerCase().includes(keyword)
    );

});
       
        if (filtered.length === 0) {
 
        searchResults.innerHTML =
          "<p>🔍 No results found.</p>";
           
       return;
        }

       filtered.forEach(guide => {

    searchResults.innerHTML += `
        <a href="${guide.url}" class="search-item">

            <strong>${guide.title}</strong>

            <small>${guide.description}</small>

        </a>
    `;

});

    });

clearSearch.addEventListener("click", () => {

    guideSearch.value = "";

    searchResults.innerHTML = "";

    clearSearch.style.display = "none";

    guideSearch.focus();

});
   
}

/* ===========================
   Theme Toggle
=========================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

    themeToggle.classList.add("bulb-on");

} else {

    themeToggle.classList.remove("bulb-on");

        }

    });

}

/* ===========================
   Dynamic Reading Time
=========================== */

const article = document.querySelector("#article");

const readingTime = document.getElementById("reading-time");

if (article && readingTime) {

    const words = article.innerText.trim().split(/\s+/).length;

    const minutes = Math.max(1, Math.ceil(words / 200));

    readingTime.textContent = `${minutes} min read`;

}

/* ==========================================
   End
========================================== */
