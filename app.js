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




// contact page 

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let type = document.querySelector("input[name='type']:checked");

    if (!name || !email || !message || !type) {
        alert("Please fill in all fields.");
        return;}

    let feedback = {
        name: name,
        email: email,
        message: message,
        type: type.value,
        date: new Date().toLocaleString()
      };

    // Save to localStorage
    let stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    stored.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(stored));

    document.getElementById("confirmation").textContent = "Thank you! Your feedback has been submitted.";
    document.getElementById("feedbackForm").reset();
    });

    // FAQ toggle
    document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });

// recepie page 

let recipes = [
      {
        name: "Chocolate Cake",
        category: "dessert",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMTEhMWFhUVFxgVFxcXFxgVFRcVFxUWFhYXFRcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0gHyUtLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgABBwj/xAA9EAABAwIEAwUGBQMDBAMAAAABAAIRAyEEEjFBBVFhBiJxgZETMkKhsfAUUsHR4SNy8TNiggcVotIWNJL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAoEQACAgICAgEDBAMAAAAAAAAAAQIRAxIhMQRBEyJRYTJxgfBSkaH/2gAMAwEAAhEDEQA/ANCuU4XQAug5wbWFSFJEzLvaBYxaUKtYU9AWx5wgsfaXNI8QhYTjnsoDrtReKccbUEMHmYU6aY/DQerWpBm0qiq40TAulq5Lt11BgBlURN0P4Z7nmGhaXhuAcB/UBAPoVlqGMLXS3VaWl2gdUZlygHQmfoEsrGjRZ1eEsEEDRZjtWGy0NEHwt6q3p8cA986Km47xdtdzWtaQAZk7+A5JY3Y8qoz5pqVOimywL3RWIC4wyKzC9FP2i8fjmt95zW7XIF0G6ClfRzsMvG4dKV+0GHYSHVASIs3vTIm0aonBuMU8ROSxBsDqR97JPkjdWU+Keu1cDX4cKP4VOCmitansmIjDKdGg5pkJ9jVOE6kTcTxlWRDgoN4RSfsF49wS7sSW6FTlhUuUFZnHsniOzMXpny1SL+G1m2yz4Kyw/aCLOVnQ4ux24U3jyRLLJjkZGuHs95rm+IKHS4mAYK3FerTeNAqzEcLon4Ql2a7RnBPpgcE6m8J0YNnIJOjw5g0MIvs4+JDcCxsN+BZyCGcCzkEtVqOHxKJLo95DdG+N/YeZhWcgi+yaqd73gTmQnYxw3W+RB0f2LirhGnkqzF4Dkq+txZ4vKawnaBrrORjK+gOFdgg6ozdcOKv3CtCxrrhLPwQlMJQFhK6oCU6KPRGbh+iuGyoFNyIyg5W7MMjsoLWAoMVg+6q4NjZbYYcHXRVfF2U6d4U5SopFWZ6U/gKlMA5tUg/iNJxhqXrcRDT7p9ENhtS7wuTvEoJqkE5SYVKePR8B9Fe9m6za5kiI6LbG1YB53QTLvdW84Zg6TswAaYtcBUvEPZUnODY1257owfIk1SKjhmEe43V4OGgC6QoYmDLV7xHjIpU3VKjoa0T18ANynbonFN8Iqe2eI/D0S5nvEhoNjE7x4Ar5ViHOc7W7h4mSdzsi8Z4o+s99TNJqOnkA0WAA8FX1sQCcregLthfbqvOyTc5X6Pc8fFHFCvYy1hZYgnqfdvYydkxw7GupuBEgNdILSR3jHLVBp4jJDSZY6e6RsBFp8VGpRdaPdktje30Uy7/JtWdt3tylwB2IiBpudQJV5w/thSfOdjmR/wAgemxnyXzT8I47WkG/TSZ+gS9fEyWlzjAJ7rbkxe/O0qqyzXTOefjYn2q/Y+1cN4vSrj+m6+7XAteP+Jv5pl5K+L0uJOa7LmAJNjJ1JtGUWNxorrAdqsXSt7QPF/f725GpvCtHyf8AJHLk8D/B/wCz6M5ruSC6g47LJUP+odYe/QY4f7cw+pK0HB+3OGquyVB7J3MkGn5u28wrx8mD9nJPwcqV1f7DD8ATsoO4aRoSFfmq0gFpBB0IuD4FCMFdCmzjcEULadUaORDiqzRzVv7IJerSCNpgpropX8fe0wWqB7TDcKyqYJpStThTJuEdYA2mhWp2hp7of/yKl+b5qWL4LTOyr6nZVrtFtIh3mOP7Q0vzfNAqdoaPNVeI7IxoUq7sl4oPGhlkZZYjtDR5qsr9oqY0XHsahO7Iwl1roba+xnh3br2bgDdq3OC7S0ajA7MLr5u/ssQup8BqNENcQOiR47G3R9zbRCLkCWbVRqZlIUTJwF4QpAKWYIBIQh1sO1whwlHleZkQFA7szTnMBC48EHJX68LUNUw7NdGcfwIcgjYThZZ7tlewFyyikByk/ZUjhz/zET1XDgo1N1bgriUbBQjS4e1q+V/9R+ONrVRRp+7ScRIiXP0MHkNPVfSO1/FhhsLUfmDXkQzq86COS/PleqS48pnxJ0mdtVz55X9J2+HjX63/AAEqVDBjWIAH1/lALgIaNQQTz9N91zHQbjQTPPcxzQHnKC46uO+w+4UaO1scqCSwnmSSbZW2m3y81sKtDOG7QJOwPM3tzVFwKixzssAudJMiRlAHiJlW/HMQKbTGpIAG0g2kchMnwKR8FFzyUvH8WMzGtEEmZkyOVvXyVXTAbfcyb67W6boWQ5yX+9M87kXhGp1A0jmbRtMa+PinSJt27PcdJl0mWkTFhEfWPqiYjEHIQDFpPi7n4W9ErWpkVC75erf0R8Q5tgQSTfUwdfvzWoCk+WGp4owO6coBEmANgfsI2JpgNDm2J5e6Bbz80L2B9m2RAmCDBnXpa5OqsaVCKDRHvXHhFoU5UXgmyfAON1qNVuR9iYLZ7jifzA2nS9vFfV8Bjm1WCow2NiN2uGrXDYjkvjfD8F3nF9mjWx3tY7c1d8O4tWw75aSJcWuGocPeaIdvFxJuNxBVMOZ4+PRz+X4qy8riX97PqDa8IFesSpPqNLQ4aESJiYNxMEj0KSqujVequTwWmuCX4iFI4koVLKV5i2/lRBQQ1l4MQlQzmVF9G1iiahv2kqWXdIMa5HbnhBhCOqJWo9FUMq1mAl/MLwPCK9oQvZLWajTcWr4ljfaUmtcwaj4oR+C8XZXbIs4at3CeY5zLgS06t/ZU3FuAyfxGDOV4u5mx/lePLNlwz+vlM9SOLHlh9PD/AL2XudTD1ScG4wKvceMtQWc02urtq7ozjNXE45QlB1II1SCiHLnPRMTK7KolyVxXEqdMS94HmsYZLF5Cy+N7c0mmGNLjz0Cp8R2wqvkCG+GqyYDflwGpS9XHU2+88DzXzd3FqjiCXuPmqrtPxYhppNN3a+HJCUqVj447y1Qr264+MVXLwwAU81NneJLhPvAaArIk6mZ09Z/wmXjfXx62slqnjbWdtNlyd8s9VVFUjzJMX036TJ8AlamIzZtSCYATWIqw0xqRA6qz7P4ADK5/vOjLyAnSOcrN1yanJ0i74FhzSotLmxAOY7kydOe6p+OYjO+Q4ENBiO9BI28xqr7iWPbTZF7mAPO5nl1WMqvkxDZOsa8/mZ15qaVsrJqKohU942taOsnefD5qNadBeCPWLR97ojGyb+XPc+nVd7INmfs6x98lQiyQPevyjTcA3Pr8kRlM5mPsYvy5iw6ffSDCTGugJ8do8z8kfBDM8NFjMHQkS6NbX0vusHgdZQc4UWtvYzpMNk39FoAxr3Oj3GDKP+IHzkfNLcLpZRUeWwGt9m06xABt6ASluI1TTohgN3949B/J+i558ujtx8Rth+F1Gmq6/cczQcw7+EavhTUeGENDHN94G4awyHFuxafikQC7WAsgKrmnM0wR9wr3CY0VWipJa+nObexBBMWmQSEyVIjJ3KzfdkMaMRhpAINF3sXzGrQIiOlp6K6GFafeWX7O0sK2i2qHhuIdmOTO3N7JjnU3EEf6mbKXQ02y6GFdvDxoZXfhyvVJnjeThSm2vYzUwzW3CXrG2iCca4e8ExTxjXCJV/kXs5tH6FQwnZeupQmw07Ln0gdSnsWhE1YU242Ava2GEWSooLcADVMUCuYJ0UBSHJT9nGixgNcOQcrlY06Uo7WBCw0asoWYtOZljuNipSvTCjKMZKmWi3F2hHifCWYn+pTPs67fKeh5hGwFY5Ifaoyz2nUf7h+Zp5qbxuLEaEaqReyqQ2r3Kg9yoLT5/oV50seTx5bQ5R2qcM0dZ9hmlKcU41SoNl7h0G6puO1MTh2FoAM+67Y9ByPRfM+IY573HOTO8rshmjkXBzTxSh2avjXbmo/u0u435+qy2I4g95lziT1KrXkolJVSJtjVN5R6TifFCp0yU5QwTjcahNTJtoI7EBjS91oHzWSxNYvJJPeJnWdVacexJJyRGU32k9FT+zEAGB56Cf4XJlltKvR6njYljhb7YGrUiB0kjSXA6SoUm8+WnXVGxFW8Wg35SRYfrKTr4mdPijKIgTbb5JSrfsLSoPfUYwWJ6aCNfkVvcDhmUafegBoPkCJl282We7MYCoKj6zrktgDrrfloQneI4uWudUDtcrWzBcBNz0gT4gKcnbKwTSsR4njy4Bzg28luadBpDRsRv1Oyoqzoy6CYkQLefSEXF1zUdJGo1tbkOnJL5PdmdoibWEjw8U8UTm7ZN5uQNjrpbSPqjkE2MAC43MXBg8roFGoBIjfnyKNTMgkHY6ct5RMTpvIEO+KNbaklo8rHzVlw3DZQ55sTcDcgzr6H1HJV1MS7WbX8ssRJ6k8rrQspE+zYHS7Ug2s2HGZ31KWTpBgtpFnhnl1FlKIkyed7n6g+areNDvuGoByjplEHprOivOC4cCahMAHK2TF3GB43IEfss1iq7jUIdOaZPKek7aqEezsycR4FqmFBVcS6i8Ob6bOG4KugPBL4yk1wOxT2c9DAr0yyjUp5mhtpBux7TmEbg3tzha7h/Ge4IMt90EiNLabL5rgMT7OpBPddZ3TkfEfutfQe939OMxdNQEe9IHev5H0VcMtZJEfKhvjbXaNC/iQdshmvy0VAK7gi08bIg6rv4PG5L/D40i+byVjhMUH+KyYrHdWXDMRc3/wk1rmLH2v9SNCXDQrhlStGtPgiOjYz12TKViuPsK4NQXU9wVEtnZRDSU4oZ1WF57VLlp0K4MWMaltc7KYqnklmgBMteplSPtCst2t47lbkadeWvRaXH1IY4+XqvlHHyXVGjfMSfX+FDN9S1KYuHsbPs/2zGUUMd3qZsKhFx/f/AOyn2n7Hgt9rSIcwiW1BeBsHxq3/AHbLIezzBWnZvtFWwbst30T71M7cyydD00K4p4nB7QOqOVSVSM+/CFji1wgj7kcwmqVAHZbLtRw6hUw/42gf6Qu8AXpczGoaDqNtdFmcHFoIM3HIjxXd4+VZF+Tlz4tH+AmHwY5J3EYptCk55iwMf3RZMYSiSeQ5rLdveINztpMcCGg5ov3yY20IH1Vcs9Y8CYMXyTV9GexeJc95e5xcZkkW6RyjRCFBzbzJeJHQXP7wgMqS4jy6WXPqGb7WcdBysuNHrMHXxDTIA2E/f6LsEzNVps+InWJDbTp4wVHEVQBG8gG0DnbzWr7McGa1raxkuc23IAmbeIj5rN0aMb4LJlHJTIkNESdiDEm97rJcUqF9Uwe4BlAnqPqD8ld9pMbkhsySCTsbQBMbn9FljUc50nYQTyMaDokihpv0dUfLTIm1gOkeup9FOmyIFidJ5HbzmVztTBtEnbuzHlofVDqkCDoBJsT1gHbr5KhI9a6JaBJ0nnMfcIrbh1rQdLgAwCL9Pqo6nN4N5ACwJEfd/FFpMzFsa6HYGSfmQsa6LPheDcYc5hLBP9uoMayd9Nr3T3C3F9VxGmptoAREHbUlL4h8Myjzg7wASbm4Fkxw4+zouqfE4ODfEw1ptrEEjxKjN2dWKNKyHavisxh6Z7jPej4njn4aeqhxGlNWqRBLSwO01NNrp5nXXos+0zUb1cPqm+I4pzMQ+u3R73ZhzZMD5Qso8mnkbX8lhSM/5+7Lx6nmBDXsMtcJ5ePQX26KFR237fogzIpeJ0YMwtF2T4lJYSYfTNj00PnEFVmNZLTH6zKQ4PULaoGk/f7o9oXpm4rQSXN0JI8xc/UeqUlNBwJLSYOUPjXMbBwBGhGt/wBEIsC78UrieT5GNRnx0QBKscJVyiwuVX6m+iYa/kqHO0WravW/JWWDqwId7p1HLqqWhUVjRaTr6JZdBiWT6WUm69a3mUOrUOWm6LwW/wD50+qi2pzK0ZWjSjTom9omxXhaF62sPy+a8DzyCYUv6QCZACrM7humqVUlZoOxHirf6RMwAQT8wPnC+a8SpAVqhIk5rHeIt8l9UYQZB0II8J3WF7R8PcDLh3hZ3IjZw52UJqpWVi7VFLR1RzRkXSuHqXg+X7FWNP1TJAY52e4iMMajav8A9eqxzKoOgBaQHR5weh6L5r2b7QGg4NqAupbjdvVv6haDtpj8tMUW+9U97+wH9T9CsSyioSqE3JHTjTlCmfWzxin7B1drwWNbILbjoOhlfMqlYvcSTqSSeZJuSlWFzQQ1xAOrZ7pjSRup0i4nutk6wJgADU9AtKe9FMUFjTGsomdAJNh02O/ioHQTF/O9j5b+pRsM0gG7XGBzhomfMylKrvecREWtoNxCU6PyydLDGrVps0aXNadpkw4jyX0VrW06Yps0YMvgQND8lmux+SX1CLw0NkTBMzHPbwT3GMflY5sQ4xLgIzEgB7mg8p6pJP0UikvqKPjrpeJcYMuEgbHLfkD5KuLT3oFs0T4305wD6L2pXl0wbADUuPgJ8V5ctbOxnpINyOevyKdKiLdntTztdx9420MjT4vXzQXgmSRa8bzE2A56lHbS+EzBMRMiAIBd4FTLmyHGJkgCxGXKSekbEz8XQpgNE6dMDU+9GaNQCJ/9Psqw4XT7wc4SGAuNpGc2A6mdv4SFLWw1gcrzYuMeX3a7xFRrKRa3a14sSIN5ulk6QYLaQk0lxyjUz6G5J9Au47XAPs2mzLdJ+/qneGUvZ06mIfqBDBvJsPms1iqkklRSs626R5gz/Ub0M+l0avcQfvqgYL4jyH1t+qO3S6L7Jx5iecBxeVxpHRxt0dsR46eitXuiVmqgyvnQH7lX/tgWh2ki/jv85RmvYuJ8V9ghE/zp8vNVgGWo08nSmH44DdLV8azMTr43QimGcki/oY7MbH4oEETvNjeCCdFYa2WW4K8iqHxY93wnda0NK7cUdUebnntI7IBqvWPQ3I9CkqWc7Q1hpVpgXSRGkFVfQa7/ALK94bhrRzuf7UspUjRVsY4r3KVBh1IdUP8AzPd+TQfNU4qXurzGnO7M7XTyAgAcgqvEUAZWjwjS5ZMP5KYYN0kyn1TGYprF1NQ2gDujMbCDTpHdEczmnFDl9lzqbagyvEGIa6NOh6IQ8EVmqVxTRlJp2YjtB2bfTOZokawASI/2ncdNVRUKxBgnu/MeK+r1IIyuAc38p08uRVFxXsvTq3pnK47GJ/Z316qPMey3Euj5t2qwWdragOYgGIuSNXD9fIrJMa42a0k+vyX0qpwurRcW1Gd3Y/rpLT8l5SrspCHMa0/mAhp6mBY/JcWeereqs7cCtfVwYTDdnsS/Sk4dXd36q1p9lq+HY6uXtlgnK0F0g2IJtaCZsr9vEajWuY59OqxwIzhxo1WA6QWHKSNiI0uCq3H1jVayk6o+oKZ7hGWnVuR/qOb7+ljqudZMknx/xHRUI9iWD4OMQ0mi4NMQadyJ6H4bW5XVUMLVpvyPpOGZwB7ri0tbGfvAQbAXH5uqvvxz6QIpNawus7KGh7hO7jc3SGNrvyauzEyWusLj3pJ7xsF1bSkv0kYyUXWwVoeys0UwWsBhweRmAkDKBPe8v0VNxLFl9QGCJLnRO0R6k3K8w2JMVHPFSZyxBIgtPkbque4ZpzXvrYAdE8Yv2O8lodpvO99jvuOfSbobsznAG2s+d/pAUXVIINp6GQQRspU3WfcwZIiNSdLeITi9jDHfIkC3eMd2w8h/G43gyRJsO6b2LgANPy/r0XlCo0gRYkWA57fOPCSiPfMWIufXSSdt/l1WA2O4HumTa2Wbg7ZjbkAupzVqBo+IyT0kkz8kCu8N7o0Fj1P2I+5TvC3+za989828Bf7tyUZvk6cSpWw3aDHC1Jvus15F1wPS6zNZ2ybxDzuZ/nVIbowQMkuKLDDs7oHO/p/n5KRMT0QPxBNmAn6Lhhnu1KKg5MSWaMFQHHVs3JSZXdlDR9/d05h+GE7K0w3B7TY9P3Vlivg5JeQ020Z6ngnOvBKdpYEASRdXooN0Hd+dvFCOGdvp8lZQo53kb7F8C3vCdPshaUUQqBtB0j7hX+FrNgSddryCIkHpfVEWw1HDjlPyUy8g5QP89EVtNxAnug6WJcf7QLlXfDuEtaMxtI3jP+zfqklNIyi5CGAwRBkiXHQct5ctBSo5R1Oq9ota33QFOrWSpNu5DWkqQliHBV1aqm8a+dlVvYnAcai9DuqA8+Kk1iyMbhjiu8VWtxjpjf5or6xkA35fzZXo59h4Ec0ZhCToUjufL+U7SpjVBhSZMidkGrbp4prNZKVCUEB8A31g4Q8Bw5Ov6HZI43g9Cq0tuyeckeoTFcSkn1XN0MjkUjwxfQ6zNdmdxf8A0/d71Itd1ET6tH6Kmx3AsSPfY5xHxC7xfUxePFb2jxNu8tPPb1Cs6eMzD3g4dYcFJ4misckX7PkfsHEOa8EwJBcDII2Mxr4peqx2UhuV52Djp1MfRfXsXSpvBDqTTPL+VS1+z+HM+809Rb5IKvaGt+j5jjeHPcwNDg0zJiYNvBF4ZwWm3UBx5m4F9p/Rbep2ZYPdrfr9YS9Tg9QEZQ228C/pKeLgLJzqjP8AEOCsqAANDYEZrTAkxG2+gVHxfgYp5RmdDuTCbgC5IsIkLbvwdTcAnmDE+u6G+jUaIyOiRYibRzCZqLFjknE+f1uGPptBGjrA2kiJN5+abwzPZAveZL2kBpiIIEfMfJavimBrVGBrGb3Dw4D5Ah3mqKr2cxTiM2Ro0FzAAtEAWUZxd1FHZhywUU5v+Clz3B1NiPLQfRMVauRsHxk7ncgbpp/ZiroXjyDv1TOH7L7lwtyBJSLBJ9lZ+ZBLgz1RxdoD9EXD8MnWfBa3D8AAiA4z0Vrh+zxgy0zpe3pCtHEkck/JcjGYfAO0DT6WF1aYfhDo7wI++a1VPg+XRsEczA8hP3KkODuIv3bayLwdU/0r2QcpPpGfp4QNsSPCJ6i50R34cXtroZlXlPg7SJc7T8sT9FP/ALSwECCQY36+CHyRRtJszRw88rctdd7a+SIzAucJALuugHSTZbTD8OpMHujXl+plTPs2STF+d/rZB5G+kN8f3Zk8F2efUN3CP9o+rjDR43V/g+z9OkLGHaHL3nHxqOEN/wCIR38SA93laUtUxjnamyXWcu2HaMeizzMaMrYHM7nxcblQNXYbJAVVLMeadQURXJsZFZDqYhKvrAJZ9dZmQ1UrJKo6VB1ResEoDHtNpTjKJjZQpUgm2rGHhT36fPwU6Toy7+VxzUxQJgz/ADKnkif8f5V7OehtrlL245+l0kXGI3+9QuL45ek3QGsbOIld6fwk2VeeiLn028/qsKEqX/x+iE/DotEjn9+KM5jea1mopq2CF1XVcIWmWkg9DC09SmOl0tUoBHYVxKBvE67NYd4iD6hEZ2jHx03DwghWFXBg7fqkq3CZW4NckSbxeg74gP7hH1Rmupu90jyKqa/CBySFXhhGghDRDqbRpDT6lDqUpjvLLnDVRo948HH6KPt8QD/qO84P1CXRBWRmsaLRbWVzwSdbdLLKfj8QPj/8QvRxOvzHoh8aG+Q1hqOkGdBG6hWe4gjMsv8A9zrcx6fyoHiVXmPRD44h+RmhqUXECXXHVEpiPius0cdU/N8gofi6h+IrfHH7G+RmoqZTqV4cTTbuPMrMZidST5lcGLaR+xvkZoncYpjS/gJSlXj5+FvqqgNUgOiNIGzHH8TqO+KPD90Km4kyTKF7LomKTAAiAk5ymH6cktU8VDOd1g0Wba4Cg7FHZIh9uiIxkjpzQCHDid1IUp3KhSwx2M/JHp0nDX780KGsCacapikxFJBGn6o1GiHDl5LUaz1jgN/kmAAUB1AN3n6pd1Nv5o8f8o0CzRsrhDq4kESCPUWXLlRInJgG4sDfXb9kCpjDMg25fvOi8XJqJ2e065Bi/Xw/cI5q2GvmuXLBPGVn5ogxOqdbV6+S5cl7MTNQ+HXp5L2k+dwfJeLkPQfYSOa8ezovFyUagLmC8j/CUrNaYi8rxcmQrFzhRuEpXwoE2+/FcuWAJPwoKC7DNC8XJqADrUbWBQRhSVy5AJJ2Fjoo+xXq5AJJuHP5T6L1tC65cgEMKA5KTWRsuXIDEh1QajZ0lerljAgzovXYYk6LlywSdLD37wVqzBgC0wuXLMyJig4DSfCyg14NjbxXLlkEIKjW90kR0CMAzZwXLkaBYvUEmJ/de+z8ly5Yx//Z",
        description: "A rich chocolate cake",
        ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs"],
        steps: ["Mix ingredients", "Bake at 180°C for 30 mins", "Cool and serve"],
        nutrition: { Calories: "350", Protein: "6g", Fat: "15g" }
      },
      {
        name: "Grilled Chicken",
        category: "main",
        image: "data:image/jpeg;base64,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",
        description: "Juicy grilled chicken",
        ingredients: ["Chicken breast", "Olive oil", "Salt", "Pepper"],
        steps: ["Season chicken", "Grill 6 mins each side", "Serve hot"],
        nutrition: { Calories: "250", Protein: "30g", Fat: "10g" }
      },

      {
        name: "chickpea-salad",
        category: "Lunch",
        image: "https://www.themediterraneandish.com/wp-content/uploads/2023/12/TMD-Chickpea-Salad-Leads-01-Angle-Horizontal.jpg",
        description: "High-protein chickpeas with crunchy veggies and lemon dressing.",
        ingredients: [ "1 can chickpeas (drained)", "1 cucumber (diced)", "1 tomato (diced)", "1/4 red onion (thinly sliced)", "2 tbsp olive oil", "1 lemon (juiced)", "Salt & pepper"],
        steps: [ "Combine chickpeas and chopped veggies in a bowl.", "Whisk olive oil, lemon juice, salt and pepper.", "Toss together and serve chilled."],
        nutrition: { Calories: 410, Protein: "16 g", Carbs: "50 g", Fat: "16 g" }
      }

    ];

    let recipeList = document.getElementById("recipe-list");
    let searchInput = document.getElementById("search");
    let categoryFilter = document.getElementById("category");

    function displayRecipes() {
      recipeList.innerHTML = "";
      let search = searchInput.value.toLowerCase();
      let category = categoryFilter.value;

      recipes.forEach((recipe, index) => {
        if (
          (category === "all" || recipe.category === category) &&
          recipe.name.toLowerCase().includes(search)
        ) {
          let card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
          `;
          card.onclick = () => openModal(recipe);
          recipeList.appendChild(card);
        }
      });
    }
    
function openModal(recipe) {
  document.getElementById("modalTitle").textContent = recipe.name;
  
  document.getElementById("modalIngredients").innerHTML = 
    recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  
  document.getElementById("modalSteps").innerHTML = 
    recipe.steps.map(s => `<li>${s}</li>`).join("");
  
  document.getElementById("modalNutrition").innerHTML = `
    <tr><th>Nutrient</th><th>Value</th></tr>
    ${Object.entries(recipe.nutrition)
      .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
      .join("")}
  `;
  
  document.getElementById("recipeModal").style.display = "flex";
}

    function closeModal() {
      document.getElementById("recipeModal").style.display = "none";
    }

    searchInput.addEventListener("input", displayRecipes);
    categoryFilter.addEventListener("change", displayRecipes);

    displayRecipes();

  // midfullness page 

// --- Session Tracker ---
let sessions = localStorage.getItem("sessions") || 0;
document.getElementById("sessionTracker").innerText = " " + sessions;

// --- Breathing Exercise ---
let breathingInterval;
function startBreathing() {
  let heart = document.getElementById("heart");
  let text = document.getElementById("breathText");
  let inhale = true;

  clearInterval(breathingInterval);

  // Trigger immediately on start
  heart.classList.add("breathing-grow");
  text.innerText = "Inhale...";
  inhale = false; // so the next cycle will be exhale

  // Continue with the 4s cycle
  breathingInterval = setInterval(() => {
    if (inhale) {
      heart.classList.add("breathing-grow");
      text.innerText = "Inhale...";
    } else {
      heart.classList.remove("breathing-grow");
      text.innerText = "Exhale...";
    }
    inhale = !inhale;
  }, 4000);
}

function stopBreathing() {
  clearInterval(breathingInterval);
  document.getElementById("heart").classList.remove("breathing-grow");
  document.getElementById("breathText").innerText = "Stopped";
}

// --- Meditation Timer ---
let timerInterval;
let alarmSound = new Audio("bell.mp3");

function startTimer() {
  let minutes = parseInt(document.getElementById("timerSelect").value);
  let display = document.getElementById("timerDisplay");
  let time = minutes * 60;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    display.innerText = `${min}:${sec.toString().padStart(2, "0")}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      alarmSound.play();
      setTimeout(() => {
        alert("Meditation timer is up!");
        }, 100);
      sessions++;
      localStorage.setItem("sessions", sessions);
      document.getElementById("sessionTracker").innerText = "" + sessions;
    }
    time--;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById("timerDisplay").innerText = "00:00";
}

// --- Ambient Sounds ---
let currentSound;

function startSound() {
  let selected = document.getElementById("sound_Select").value;
  stopSound(); // stop previous
  currentSound = new Audio(selected);
  currentSound.loop = true;
  currentSound.play();
}

function stopSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
}


// Calorie Calculator functionality
// Calorie Calculator functionality
document.addEventListener("DOMContentLoaded", function() {
    // Initialize calculator when page loads
    initCalorieCalculator();
    
    // Re-initialize calculator when navigating to it
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#calculator') {
            initCalorieCalculator();
        }
    });
});

function initCalorieCalculator() {
    console.log('Initializing calorie calculator');
    
    // Utility functions
    const animateCounter = (el, start, end, duration = 900, fmt = v => Math.round(v)) => {
        if (!el) return;
        const t0 = performance.now();
        const step = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const val = start + (end - start) * p;
            el.textContent = fmt(val);
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };
    
    const setBarWidth = (el, pct) => { 
        if (el) el.style.width = Math.max(0, Math.min(100, pct)) + '%'; 
    };
    
    const round1 = n => Math.round(n * 10) / 10;

    // DOM elements
    const calculatorForm = document.getElementById('calculatorForm');
    const calcBtn = document.getElementById('calculator-calcBtn');
    const resetBtn = document.getElementById('calculator-resetBtn');
    const ageEl = document.getElementById('calculator-age');
    const heightEl = document.getElementById('calculator-height');
    const weightEl = document.getElementById('calculator-weight');
    const activityEl = document.getElementById('calculator-activity');
    const genderRadios = document.querySelectorAll('input[name="calculator-gender"]');

    const resultsArea = document.getElementById('calculator-resultsArea');
    const bmrNum = document.getElementById('calculator-bmrNum');
    const tdeeNum = document.getElementById('calculator-tdeeNum');
    const carbGrams = document.getElementById('calculator-carbGrams');
    const proteinGrams = document.getElementById('calculator-proteinGrams');
    const fatGrams = document.getElementById('calculator-fatGrams');
    const barCarbs = document.getElementById('calculator-barCarbs');
    const barProtein = document.getElementById('calculator-barProtein');
    const barFat = document.getElementById('calculator-barFat');

    // Check if all required elements exist
    if (!calcBtn || !resultsArea) {
        console.error('Calculator elements not found');
        return;
    }

    // Calculation functions
    const calcBMR = ({sex, weight, height, age}) =>
        sex === 'male'
            ? 10 * weight + 6.25 * height - 5 * age + 5
            : 10 * weight + 6.25 * height - 5 * age - 161;

    const calcTDEE = (bmr, factor) => bmr * factor;
    
    const calcMacros = (tdee) => ({
        carbsG: (tdee * 0.50) / 4,
        proteinG: (tdee * 0.20) / 4,
        fatG: (tdee * 0.30) / 9
    });

    // Function to perform calculation
    function performCalculation() {
        const age = Number(ageEl.value);
        const height = Number(heightEl.value);
        const weight = Number(weightEl.value);
        const gender = document.querySelector('input[name="calculator-gender"]:checked')?.value || 'male';
        const factor = Number(activityEl.value || '1.2');

        if (!age || age < 10 || age > 120) { 
            alert('Please enter a valid age between 10 and 120');
            ageEl.focus();
            return; 
        }
        if (!height || height < 80 || height > 250) { 
            alert('Please enter a valid height between 80 and 250 cm');
            heightEl.focus();
            return; 
        }
        if (!weight || weight < 25 || weight > 400) { 
            alert('Please enter a valid weight between 25 and 400 kg');
            weightEl.focus();
            return; 
        }

        const bmr = calcBMR({sex: gender, weight, height, age});
        const tdee = calcTDEE(bmr, factor);
        const { carbsG, proteinG, fatG } = calcMacros(tdee);

        resultsArea.style.display = 'block';

        animateCounter(bmrNum, 0, Math.round(bmr), 900, v => Math.round(v));
        animateCounter(tdeeNum, 0, Math.round(tdee), 900, v => Math.round(v));
        animateCounter(carbGrams, 0, round1(carbsG), 900, v => round1(v) + ' g');
        animateCounter(proteinGrams, 0, round1(proteinG), 900, v => round1(v) + ' g');
        animateCounter(fatGrams, 0, round1(fatG), 900, v => round1(v) + ' g');

        const animateProgressBar = (el, valuePercent, duration = 900) => {
            const maxPercent = 95;
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const width = Math.min(valuePercent * progress, maxPercent);
                el.style.width = width + '%';
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        animateProgressBar(barCarbs, (carbsG * 4 / tdee) * 100);
        animateProgressBar(barProtein, (proteinG * 4 / tdee) * 100);
        animateProgressBar(barFat, (fatG * 9 / tdee) * 100);
    }

    // Event handlers - ONLY for the Calculate button
    if (calcBtn) {
        calcBtn.addEventListener('click', performCalculation);
    }

    const clearResults = () => {
        if (resultsArea) resultsArea.style.display = 'none';
        if (bmrNum) bmrNum.textContent = '0';
        if (tdeeNum) tdeeNum.textContent = '0';
        if (carbGrams) carbGrams.textContent = '0 g';
        if (proteinGrams) proteinGrams.textContent = '0 g';
        if (fatGrams) fatGrams.textContent = '0 g';
        if (barCarbs) setBarWidth(barCarbs, 0);
        if (barProtein) setBarWidth(barProtein, 0);
        if (barFat) setBarWidth(barFat, 0);
    };

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (calculatorForm) calculatorForm.reset();
            if (activityEl) activityEl.value = '1.2';
            clearResults();
        });
    }

    // Initialize activity selector
    if (activityEl) {
        activityEl.value = '1.2';
    }
    

}