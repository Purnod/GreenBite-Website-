//slogans 
let slogans = [
  "Eat Green, Live Clean",
  "Fuel Your Body, Naturally",
  "Your health is your wealth",
  "Invest in your health, it pays the best interest",
  "Prevention is better than cure"
];

let index = 0; 
let sloganElement = document.getElementById("slogan-text");
sloganElement.textContent = slogans[index];

setInterval(() => {
  index = (index + 1) % slogans.length;  
  sloganElement.textContent = slogans[index];
}, 10000);

//navigation bar 
let nav_links = document.querySelectorAll("nav a ");
nav_links.forEach
    (nav_links => {nav_links.addEventListener("mouseenter", function(){
    this.style.color = "yellow"
});

nav_links.addEventListener("mouseleave", function(){
    this.style.color = "white"
});
});

//footer 
let footer_links = document.querySelectorAll("footer a");
footer_links.forEach
    (link => {link.addEventListener("mouseenter", function(){
    this.style.color = "yellow"
});

link.addEventListener("mouseleave", function(){
   this.style.color = "white"
});
});
// news letter 
let form = document.getElementById("newsletterForm");
let emailInput = document.getElementById("newsletterEmail");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    // Browser HTML validation will already run here
    if (!emailInput.checkValidity()) {
        emailInput.reportValidity(); // show default validation message
        return;
    }

    // Only push if valid
    let emails = JSON.parse(localStorage.getItem("emails") || "[]");
    emails.push(emailInput.value);
    localStorage.setItem("emails", JSON.stringify(emails));

    alert("Subscribed!");
    emailInput.value = ""; // reset field
});

//Title change 

window.addEventListener("hashchange", update_title)

let page_titles = {
    "home": "GreenBite | Home",
    "recipes": "GreenBite | Recipes",
    "Calorie&NutritionCalculator": "GreenBite | Calorie & Nutrition Calculator",
    "workouts": "GreenBite | Workouts",
    "mindfulness": "GreenBite | Mindfulness",
    "contact": "GreenBite | Contact"
};

function update_title(){
    let hash = window.location.hash.substring(1);
    if (page_titles [hash]){
        document.title = page_titles [hash];
    }
}

if(!window.location.hash){
    window.location.hash = "home";
    update_title();
    }

/* health_tip */

document.addEventListener("DOMContentLoaded", () => {
    let tips = [
        {
            title: "Stay Hydrated ",
            desc: "Sip water steadily throughout the day. Start with a glass when you wake up and keep a bottle nearby — hydration helps focus, digestion and skin health.",
            img: "Stay Hydrated.jpg"
        },
        {
            title: "Add One More Green ",
            desc: "Add an extra handful of leafy greens to any meal — salads, smoothies, or sandwiches. Greens are high in fiber and micronutrients with very few calories.",
            img: "Add One More Green.jpeg"
        },
        {
            title: "Move for 10 Minutes ",
            desc: "Micro-workouts add up. A brisk 10-minute walk after a meal helps digestion and raises your daily activity without needing a full workout session.",
            img: "Move for 10 Minutes.jpeg"
        },
        {
            title: "Prioritize Sleep ",
            desc: "Keep a consistent bedtime and wind down 30 minutes before sleep—no screens, dim the lights, and relax. Good sleep supports immunity and mental clarity.",
            img: "Prioritize Sleep.jpg"
        },
        {
            title: "Small Protein Boost ",
            desc: "Add a palm-sized serving of protein to your meals (eggs, beans, yogurt, fish). Protein helps satiety and supports muscle repair.",
            img: "Small Protein Boost.jpeg"
        }
    ];



     // actuall code rotate every day 
    let todayIndex = new Date().getDate() % tips.length;
    let todayTip = tips[todayIndex];

    let tipBox = document.getElementById("tipbox");
    let titleEl = document.getElementById("tiptitle");
    let arrowEl = document.getElementById("tiparrow");
    let descEl = document.getElementById("tipdescription");

    titleEl.textContent = todayTip.title;
    descEl.textContent = todayTip.desc;
    tipBox.style.backgroundImage = `url("${todayTip.img}")`;

tipBox.addEventListener("click", () => {
    tipBox.classList.toggle("expanded"); 
    arrowEl.innerHTML = tipBox.classList.contains("expanded") 
        ? '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>' 
        : '<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>';
});
})

        // testing rotation 5 seconds 

// let tipBox = document.getElementById("tipbox");
// let titleEl = document.getElementById("tiptitle");
// let arrowEl = document.getElementById("tiparrow");
// let descEl = document.getElementById("tipdescription");


// let currentIndex = 0;

// function showTip(index) {
//     let todayTip = tips[index];
//     titleEl.textContent = todayTip.title;
//     descEl.textContent = todayTip.desc;
//     tipBox.style.backgroundImage = `url("${todayTip.img}")`;
// }

// // Initial display
// showTip(currentIndex);

// // Rotate every 5 seconds
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % tips.length;
//     showTip(currentIndex);
// }, 5000);

// arrowEl.addEventListener("click", (ev) => {
//     ev.stopPropagation();
//     tipBox.classList.add("expanded");
// });

// tipBox.addEventListener("click", () => {
//     if (tipBox.classList.contains("expanded")) {
//         tipBox.classList.remove("expanded");
//     }
// });
