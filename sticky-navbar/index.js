
const navbare1 = document.querySelector("#container");

const lorem1 = document.querySelector("#welcom");

// console.log(navbare1.offsetHeight);

window.addEventListener("scroll", () => {
    
// console.log("navbare1");
    if (window.scrollY >=100) {
        navbare1.classList.add("active")
    } else {
        navbare1.classList.remove("active")
    }

})