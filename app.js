//  Navigation Bar  
let nav_links = document.querySelectorAll("nav a ");
nav_links.forEach(nav_link => {
  nav_link.addEventListener("mouseenter", function() {
    this.style.color = "yellow";
    });
        
  nav_link.addEventListener("mouseleave", function() {
    this.style.color = "white";
    });
        
  nav_link.addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    if (window.innerWidth <= 991 && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      }
  });

});

 
let menuToggle = document.querySelector('.menu-toggle');
let navLinks = document.querySelector('.nav-links');
    
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    });
  }

//  Title Change  
let page_titles = {
  "home": "GreenBite | Home",
  "recipes": "GreenBite | Recipes",
  "calculator": "GreenBite | Calorie & Nutrition Calculator",
  "workouts": "GreenBite | Workouts",
  "mindfulness": "GreenBite | Mindfulness",
   "contact": "GreenBite | Contact"
};

function update_title() {
  let hash = window.location.hash.substring(1);
  if (page_titles[hash]) {
    document.title = page_titles[hash];
  }
}

window.addEventListener("hashchange", update_title);

if (!window.location.hash) {
  window.location.hash = "home";
  update_title();
}

// Home page  
let slogans = [
  "Eat Green, Live Clean",
  "Fuel Your Body, Naturally",
  "Your health is your wealth",
  "Invest in your health, it pays the best interest",
  "Prevention is better than cure"
];

let index = 0; 
let sloganElement = document.getElementById("slogan-text");
  if (sloganElement) {
    sloganElement.textContent = slogans[index];
  }

setInterval(() => {
  index = (index + 1) % slogans.length;  
  if (sloganElement) {
    sloganElement.textContent = slogans[index];
  }
}, 10000);

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

  let todayIndex = new Date().getDate() % tips.length;
  let todayTip = tips[todayIndex];

  let tipBox = document.getElementById("tipbox");
  let titleEl = document.getElementById("tiptitle");
  let arrowEl = document.getElementById("tiparrow");
  let descEl = document.getElementById("tipdescription");

  if (titleEl) titleEl.textContent = todayTip.title;
    if (descEl) descEl.textContent = todayTip.desc;
      if (tipBox) tipBox.style.backgroundImage = `url("${todayTip.img}")`;

        if (tipBox) {
          tipBox.addEventListener("click", () => {
              tipBox.classList.toggle("expanded"); 
              if (arrowEl) {
                arrowEl.innerHTML = tipBox.classList.contains("expanded") 
                ? '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>' 
                : '<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>';
                }
          });
        }
});
  
// Recipe Page 
let recipes = [
  {
    name: "Chocolate Cake",
    category: "dessert",
    image: "",
    ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs"],
    steps: ["Mix ingredients", "Bake at 180°C for 30 mins", "Cool and serve"],
    nutrition: { Calories: "350", Protein: "6g", Fat: "15g" }
  },
  
  {
    name: "Grilled Chicken",
    category: "main",
    image: "",
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
  if (!recipeList) return;
        
    recipeList.innerHTML = "";
    let search = searchInput.value.toLowerCase();
    let category = categoryFilter.value;
        
    recipes.forEach((recipe) => {
      if (
          (category === "all" || recipe.category === category) && recipe.name.toLowerCase().includes(search)
        ) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <p>${recipe.description || ""}</p>
        `;
        card.onclick = () => openModal(recipe);
        recipeList.appendChild(card);
        }
      });
}

    function openModal(recipe) {
        let modal = document.getElementById("recipeModal");
        let modalTitle = document.getElementById("modalTitle");
        let modalIngredients = document.getElementById("modalIngredients");
        let modalSteps = document.getElementById("modalSteps");
        let modalNutrition = document.getElementById("modalNutrition");
        
        if (modalTitle) modalTitle.textContent = recipe.name;
        if (modalIngredients) modalIngredients.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
        if (modalSteps) modalSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
        
        if (modalNutrition) {
            modalNutrition.innerHTML = `
                <tr><th>Nutrient</th><th>Value</th></tr>
                ${Object.entries(recipe.nutrition)
                    .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
                    .join("")}
            `;
        }
        
        if (modal) modal.style.display = "flex";
    }

    function closeModal() {
        let modal = document.getElementById("recipeModal");
        if (modal) modal.style.display = "none";
    }

    if (searchInput) searchInput.addEventListener("input", displayRecipes);
    if (categoryFilter) categoryFilter.addEventListener("change", displayRecipes);

    displayRecipes();

   //Calorie & Nutrition Calculator Page
    document.addEventListener("DOMContentLoaded", function() {
    
    initCalorieCalculator();
    
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#calculator') {
            initCalorieCalculator();
        }
    });
});

function initCalorieCalculator() {
    
    let animateCounter = (el, start, end, duration = 900, fmt = v => Math.round(v)) => {
        if (!el) return;
        let t0 = performance.now();
        let step = (now) => {
            let p = Math.min(1, (now - t0) / duration);
            let val = start + (end - start) * p;
            el.textContent = fmt(val);
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };
    
    let setBarWidth = (el, pct) => { 
        if (el) el.style.width = Math.max(0, Math.min(100, pct)) + '%'; 
    };
    
    let round1 = n => Math.round(n * 10) / 10;

    let calculatorForm = document.getElementById('calculatorForm');
    let calcBtn = document.getElementById('calculator-calcBtn');
    let resetBtn = document.getElementById('calculator-resetBtn');
    let ageEl = document.getElementById('calculator-age');
    let heightEl = document.getElementById('calculator-height');
    let weightEl = document.getElementById('calculator-weight');
    let activityEl = document.getElementById('calculator-activity');

    let resultsArea = document.getElementById('calculator-resultsArea');
    let bmrNum = document.getElementById('calculator-bmrNum');
    let tdeeNum = document.getElementById('calculator-tdeeNum');
    let carbGrams = document.getElementById('calculator-carbGrams');
    let proteinGrams = document.getElementById('calculator-proteinGrams');
    let fatGrams = document.getElementById('calculator-fatGrams');
    let barCarbs = document.getElementById('calculator-barCarbs');
    let barProtein = document.getElementById('calculator-barProtein');
    let barFat = document.getElementById('calculator-barFat');

    let calcBMR = ({sex, weight, height, age}) =>
        sex === 'male'
            ? 10 * weight + 6.25 * height - 5 * age + 5
            : 10 * weight + 6.25 * height - 5 * age - 161;

    let calcTDEE = (bmr, factor) => bmr * factor;
    
    let calcMacros = (tdee) => ({
        carbsG: (tdee * 0.50) / 4,
        proteinG: (tdee * 0.20) / 4,
        fatG: (tdee * 0.30) / 9
    });
    
    if (calcBtn) {
        calcBtn.addEventListener('click', function() {
            if (!calculatorForm.checkValidity()) {
                calculatorForm.reportValidity();
                return;
            }
            
            performCalculation();
        });
    }

    function performCalculation() {
        let age = Number(ageEl.value);
        let height = Number(heightEl.value);
        let weight = Number(weightEl.value);
        let gender = document.querySelector('input[name="calculator-gender"]:checked')?.value || 'male';
        let factor = Number(activityEl.value || '1.2');

        let bmr = calcBMR({sex: gender, weight, height, age});
        let tdee = calcTDEE(bmr, factor);
        let { carbsG, proteinG, fatG } = calcMacros(tdee);

        resultsArea.style.display = 'block';

        animateCounter(bmrNum, 0, Math.round(bmr), 900, v => Math.round(v));
        animateCounter(tdeeNum, 0, Math.round(tdee), 900, v => Math.round(v));
        animateCounter(carbGrams, 0, round1(carbsG), 900, v => round1(v) + ' g');
        animateCounter(proteinGrams, 0, round1(proteinG), 900, v => round1(v) + ' g');
        animateCounter(fatGrams, 0, round1(fatG), 900, v => round1(v) + ' g');

        let animateProgressBar = (el, valuePercent, duration = 900) => {
            let maxPercent = 95;
            let startTime = null;
            let step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                let progress = Math.min((timestamp - startTime) / duration, 1);
                let width = Math.min(valuePercent * progress, maxPercent);
                el.style.width = width + '%';
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        animateProgressBar(barCarbs, (carbsG * 4 / tdee) * 100);
        animateProgressBar(barProtein, (proteinG * 4 / tdee) * 100);
        animateProgressBar(barFat, (fatG * 9 / tdee) * 100);
    }

    let clearResults = () => {
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

    if (activityEl) {
        activityEl.value = '1.2';
    }
}

// Workout Generator page 
    document.addEventListener("DOMContentLoaded", function() {

        let workoutData = {
            full: {
                none: [
                    { name: "10-Second Test", duration: 10, instructions: "Quick test exercise", sets: 1 },
                    { name: "15-Second Test", duration: 15, instructions: "Short test exercise", sets: 1 },
                    { name: "Jumping Jacks", duration: 60, instructions: "Do 3 sets of 30 seconds", sets: 3 },
                    { name: "Push-ups", duration: 45, instructions: "Do 3 sets of 10 reps", sets: 3 },
                    { name: "Bodyweight Squats", duration: 60, instructions: "Do 3 sets of 15 reps", sets: 3 },
                    { name: "Plank", duration: 45, instructions: "Hold for 30 seconds", sets: 3 },
                    { name: "Lunges", duration: 60, instructions: "Do 3 sets of 10 reps per leg", sets: 3 }
                ],
                dumbbells: [
                    { name: "Goblet Squats", duration: 60, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Dumbbell Press", duration: 45, instructions: "Do 3 sets of 10 reps", sets: 3 },
                    { name: "Bent-over Rows", duration: 60, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Dumbbell Lunges", duration: 60, instructions: "Do 3 sets of 10 reps per leg", sets: 3 },
                    { name: "Dumbbell Curls", duration: 45, instructions: "Do 3 sets of 12 reps", sets: 3 }
                ]
            },
            arms: {
                none: [
                    { name: "Push-ups", duration: 45, instructions: "Do 3 sets of 10-15 reps", sets: 3 },
                    { name: "Tricep Dips", duration: 45, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Arm Circles", duration: 60, instructions: "Do 3 sets of 30 seconds forward and backward", sets: 3 },
                    { name: "Plank to Push-up", duration: 60, instructions: "Do 3 sets of 10 reps per arm", sets: 3 }
                ],
                dumbbells: [
                    { name: "Bicep Curls", duration: 45, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Tricep Extensions", duration: 45, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Hammer Curls", duration: 45, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Overhead Press", duration: 45, instructions: "Do 3 sets of 10 reps", sets: 3 }
                ]
            },
            legs: {
                none: [
                    { name: "Bodyweight Squats", duration: 60, instructions: "Do 4 sets of 15 reps", sets: 4 },
                    { name: "Lunges", duration: 60, instructions: "Do 3 sets of 10 reps per leg", sets: 3 },
                    { name: "Calf Raises", duration: 45, instructions: "Do 3 sets of 20 reps", sets: 3 },
                    { name: "Glute Bridges", duration: 45, instructions: "Do 3 sets of 15 reps", sets: 3 }
                ],
                dumbbells: [
                    { name: "Goblet Squats", duration: 60, instructions: "Do 4 sets of 12 reps", sets: 4 },
                    { name: "Dumbbell Lunges", duration: 60, instructions: "Do 3 sets of 10 reps per leg", sets: 3 },
                    { name: "Romanian Deadlifts", duration: 60, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Dumbbell Calf Raises", duration: 45, instructions: "Do 3 sets of 15 reps", sets: 3 }
                ]
            },
            core: {
                none: [
                    { name: "Plank", duration: 60, instructions: "Hold for 45 seconds, 3 sets", sets: 3 },
                    { name: "Russian Twists", duration: 60, instructions: "Do 3 sets of 20 reps", sets: 3 },
                    { name: "Leg Raises", duration: 60, instructions: "Do 3 sets of 15 reps", sets: 3 },
                    { name: "Mountain Climbers", duration: 60, instructions: "Do 3 sets of 30 seconds", sets: 3 }
                ],
                dumbbells: [
                    { name: "Weighted Russian Twists", duration: 60, instructions: "Do 3 sets of 15 reps per side", sets: 3 },
                    { name: "Dumbbell Side Bends", duration: 45, instructions: "Do 3 sets of 15 reps per side", sets: 3 },
                    { name: "Weighted Sit-ups", duration: 60, instructions: "Do 3 sets of 12 reps", sets: 3 },
                    { name: "Dumbbell Plank Drag", duration: 60, instructions: "Do 3 sets of 10 reps per side", sets: 3 }
                ]
            }
        };

        
        let generateBtn = document.getElementById("generate-btn");
        let startTimerBtn = document.getElementById("start-timer");
        let continueBtn = document.getElementById("continue-btn");
        let resetSelectionBtn = document.getElementById("reset-selection");
        let pauseTimerBtn = document.getElementById("pause-timer");
        let resumeTimerBtn = document.getElementById("resume-timer");
        let newWorkoutBtn = document.getElementById("new-workout-btn");
        let bodyPartSelect = document.getElementById("body-part");
        let equipmentSelect = document.getElementById("equipment");
        let workoutPlan = document.getElementById("workout-plan");
        let exercisesContainer = document.getElementById("exercises-container");
        let timerContainer = document.getElementById("timer-container");
        let timerDisplay = document.getElementById("timer-display");
        let currentExerciseEl = document.getElementById("current-exercise");
        let exerciseInstructions = document.getElementById("exercise-instructions");
        let setInfo = document.getElementById("set-info");
        let completedWorkout = document.getElementById("completed-workout");
        let selectionInfo = document.getElementById("selection-info");

        let selectedExercises = [];
        let currentExerciseIndex = 0;
        let currentSet = 1;
        let timerInterval;
        let isPaused = false;
        let remainingTime = 0;
        let bellSound = new Audio("bell.mp3");
        let workoutExercises = [];

        function resetSelection() {
            selectedExercises = [];
            let exerciseCards = document.querySelectorAll(".exercise-card");
            exerciseCards.forEach(function(card) {
                card.classList.remove("selected");
            });
            selectionInfo.style.display = "none";
        }

        if (generateBtn) {
            generateBtn.addEventListener("click", function() {
                let bodyPart = bodyPartSelect.value;
                let equipment = equipmentSelect.value;
                
                if (!workoutData[bodyPart] || !workoutData[bodyPart][equipment]) {
                    alert("No workouts available for this selection");
                    return;
                }
                
                let availableExercises = workoutData[bodyPart][equipment];
                workoutExercises = [];

                if (bodyPart === "full" && equipment === "none") {
                    workoutExercises.push(availableExercises[0]);
                    workoutExercises.push(availableExercises[1]);
                    
                    let usedIndices = [0, 1];
                    for (let i = 0; i < 2; i++) {
                        let randomIndex;
                        do {
                            randomIndex = Math.floor(Math.random() * availableExercises.length);
                        } while (usedIndices.includes(randomIndex));
                        
                        usedIndices.push(randomIndex);
                        workoutExercises.push(availableExercises[randomIndex]);
                    }
                } else {
                    let usedIndices = [];
                    for (let i = 0; i < 4; i++) {
                        let randomIndex;
                        do {
                            randomIndex = Math.floor(Math.random() * availableExercises.length);
                        } while (usedIndices.includes(randomIndex));
                        
                        usedIndices.push(randomIndex);
                        workoutExercises.push(availableExercises[randomIndex]);
                    }
                }
                
                exercisesContainer.innerHTML = "";
                for (let i = 0; i < workoutExercises.length; i++) {
                    let exercise = workoutExercises[i];
                    let exerciseCard = document.createElement("div");
                    exerciseCard.className = "exercise-card";
                    exerciseCard.dataset.index = i;
                    
                    
                    let durationText = exercise.duration + " seconds";
                    if (exercise.duration >= 60) {
                        let minutes = Math.floor(exercise.duration / 60);
                        let seconds = exercise.duration % 60;
                        durationText = minutes + " minute" + (minutes > 1 ? "s" : "");
                        if (seconds > 0) {
                            durationText += " " + seconds + " second" + (seconds > 1 ? "s" : "");
                        }
                    }
                    
                    exerciseCard.innerHTML = `
                        <div class="exercise-title">${exercise.name}</div>
                        <div class="exercise-details">Duration: ${durationText} per set</div>
                        <div class="exercise-details">Sets: ${exercise.sets}</div>
                        <div class="exercise-details">${exercise.instructions}</div>
                    `;
                    
                    
                    exerciseCard.addEventListener("click", function() {
                        this.classList.toggle("selected");
                        let index = parseInt(this.dataset.index);
                        
                        if (this.classList.contains("selected")) {
                            if (!selectedExercises.includes(workoutExercises[index])) {
                                selectedExercises.push(workoutExercises[index]);
                            }
                        } else {
                            selectedExercises = selectedExercises.filter(function(ex) {
                                return ex.name !== workoutExercises[index].name;
                            });
                        }
                        
                        if (selectedExercises.length > 0) {
                            selectionInfo.textContent = `${selectedExercises.length} exercise(s) selected`;
                            selectionInfo.style.display = "block";
                        } else {
                            selectionInfo.style.display = "none";
                        }
                    });
                    
                    exercisesContainer.appendChild(exerciseCard);
                }
                 
                resetSelection();
                
                
                workoutPlan.style.display = "block";
                timerContainer.style.display = "none";
                completedWorkout.style.display = "none";
            });
        }

        if (startTimerBtn) {
            startTimerBtn.addEventListener("click", function() {
                if (selectedExercises.length === 0) {
                    alert("Please select at least one exercise to start the timer");
                    return;
                }
                
                currentExerciseIndex = 0;
                currentSet = 1;
                isPaused = false;
                startSetTimer();
                
                workoutPlan.style.display = "none";
                timerContainer.style.display = "block";
                completedWorkout.style.display = "none";
                if (pauseTimerBtn) pauseTimerBtn.style.display = "block";
                if (resumeTimerBtn) resumeTimerBtn.style.display = "none";
                if (continueBtn) continueBtn.style.display = "none";
            });
        }

        if (continueBtn) {
            continueBtn.addEventListener("click", function() {
                continueBtn.style.display = "none";
                isPaused = false;
                if (pauseTimerBtn) pauseTimerBtn.style.display = "block";
                if (resumeTimerBtn) resumeTimerBtn.style.display = "none";
                startSetTimer();
            });
        }

        if (resetSelectionBtn) {
            resetSelectionBtn.addEventListener("click", function() {
                resetSelection();
            });
        }

        if (newWorkoutBtn) {
            newWorkoutBtn.addEventListener("click", function() {
                completedWorkout.style.display = "none";
                workoutPlan.style.display = "block";
            });
        }

        if (pauseTimerBtn) {
            pauseTimerBtn.addEventListener("click", function() {
                isPaused = true;
                clearInterval(timerInterval);
                pauseTimerBtn.style.display = "none";
                if (resumeTimerBtn) resumeTimerBtn.style.display = "block";
            });
        }

        if (resumeTimerBtn) {
            resumeTimerBtn.addEventListener('click', function() {
                isPaused = false;
                pauseTimerBtn.style.display = "block";
                resumeTimerBtn.style.display = "none";
                startSetTimer(remainingTime);
            });
        }

        function startSetTimer(timeLeft) {
            if (currentExerciseIndex >= selectedExercises.length) {

                timerContainer.style.display = "none";
                completedWorkout.style.display = "block";
                if (bellSound) bellSound.play();
                
                resetSelection();
                return;
            }
            
            let exercise = selectedExercises[currentExerciseIndex];
            
            if (timeLeft === undefined) {
                timeLeft = exercise.duration;
            }
             
            if (currentExerciseEl) currentExerciseEl.textContent = exercise.name;
            if (setInfo) setInfo.textContent = `Set ${currentSet} of ${exercise.sets}`;
            if (exerciseInstructions) exerciseInstructions.textContent = exercise.instructions;
            
            clearInterval(timerInterval);
            
            if (timerDisplay) timerDisplay.textContent = formatTime(timeLeft);
            
            timerInterval = setInterval(function() {
                if (!isPaused) {
                    timeLeft--;
                    remainingTime = timeLeft;
                    
                    if (timerDisplay) timerDisplay.textContent = formatTime(timeLeft);
                    
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        if (bellSound) bellSound.play();
                        
                        currentSet++;
                        
                        if (currentSet > exercise.sets) {

                            currentExerciseIndex++;
                            currentSet = 1;
                            
                            if (currentExerciseIndex >= selectedExercises.length) {

                                timerContainer.style.display = "none";
                                completedWorkout.style.display = "block";
                                if (bellSound) bellSound.play();
                                
                                resetSelection();
                                return;
                            }
                        }
                        
                        if (continueBtn) continueBtn.style.display = "block";
                        if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
                    }
                }
            }, 1000);
        }

        function formatTime(seconds) {
            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
    });

    // Mindfulness Page 

    let sessions = localStorage.getItem("sessions") || 0;
    let sessionTracker = document.getElementById("sessionTracker");
    if (sessionTracker) sessionTracker.innerText = sessions;

    let breathingInterval;
    function startBreathing() {
        let heart = document.getElementById("heart");
        let text = document.getElementById("breathText");
        
        if (!heart || !text) return;
        
        let inhale = true;
        clearInterval(breathingInterval);
        
        heart.classList.add("breathing-grow");
        text.innerText = "Inhale...";
        inhale = false;
        
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
        let heart = document.getElementById("heart");
        let text = document.getElementById("breathText");
        
        if (heart) heart.classList.remove("breathing-grow");
        if (text) text.innerText = "Stopped";
    }

    let timerInterval;
    let alarmSound = new Audio("bell.mp3");

    function startTimer() {
        let timerSelect = document.getElementById("timerSelect");
        let display = document.getElementById("timerDisplay");
        
        if (!timerSelect || !display) return;
        
        let minutes = parseInt(timerSelect.value);
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
                
                if (sessionTracker) sessionTracker.innerText = sessions;
            }
            time--;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        let display = document.getElementById("timerDisplay");
        if (display) display.innerText = "00:00";
    }

    let currentSound;

    function startSound() {
        let soundSelect = document.getElementById("sound_Select");
        if (!soundSelect) return;
        
        let selected = soundSelect.value;
        stopSound();
        
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

    // Contact Page 
    let feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let type = document.querySelector("input[name='type']:checked");
            
            if (!name || !email || !message || !type) {
                alert("Please fill in all fields.");
                return;
            }
            
            let feedback = {
                name: name,
                email: email,
                message: message,
                type: type.value,
                date: new Date().toLocaleString()
            };
            
            let stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
            stored.push(feedback);
            localStorage.setItem("feedbacks", JSON.stringify(stored));
            
            let confirmation = document.getElementById("confirmation");
            if (confirmation) {
                confirmation.textContent = "Thank you! Your feedback has been submitted.";
            }
            
            feedbackForm.reset();
        });
    }

     let faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // Footer 
    let footer_links = document.querySelectorAll("footer a");
    footer_links.forEach(link => {
        link.addEventListener("mouseenter", function() {
            this.style.color = "yellow";
        });
        
        link.addEventListener("mouseleave", function() {
            this.style.color = "white";
        });
    });


    let form = document.getElementById("newsletterForm");
    let emailInput = document.getElementById("newsletterEmail");

    if (form && emailInput) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            if (!emailInput.checkValidity()) {
                emailInput.reportValidity();
                return;
            }
            
            let emails = JSON.parse(localStorage.getItem("emails") || "[]");
            emails.push(emailInput.value);
            localStorage.setItem("emails", JSON.stringify(emails));
            
            alert("Subscribed!");
            emailInput.value = "";
        });
    }