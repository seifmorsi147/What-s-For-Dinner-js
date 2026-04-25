const recipes = [
    {
        title: "Shrimp Scampi",
        description: "Garlicky shrimp in white wine butter sauce",
        bgImage: "images/shrimp.jpg",
        badgeLevel: "Easy",
        badgeType: "Seafood",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        rate: "4.8",
        reviews: "(356 reviews)",
        ingredients: ["400g Large shrimp, peeled", "300g Linguine pasta", "6 Cloves garlic, minced", "1/2 cup White wine", "4 tbsp Unsalted butter", "2 tbsp Olive oil", "Fresh parsley", "Red pepper flakes", "Lemon zest"],
        instructions: ["Boil pasta in salted water.", "Sauté garlic and pepper flakes in butter and oil.", "Add shrimp and cook until pink.", "Deglaze with wine and simmer.", "Toss with pasta and garnish with parsley and zest."],
        nutrition: ["520 kcal", "36g", "54g", "18g", "3g", "620mg"],
        chefTips: ["Don't overcook shrimp; they get rubbery.", "Use a dry white wine like Pinot Grigio.", "Save pasta water to adjust sauce consistency."]
    },
    {
        title: "Chicken Alfredo",
        description: "Creamy pasta with grilled chicken and parmesan",
        bgImage: "images/pasta.jpg",
        badgeLevel: "Medium",
        badgeType: "Pasta",
        prepTime: "10 min",
        cookTime: "20 min",
        servings: "2 people",
        rate: "4.6",
        reviews: "(215 reviews)",
        ingredients: ["2 Chicken breasts, sliced", "250g Fettuccine pasta", "1 cup Heavy cream", "1/2 cup Grated Parmesan", "2 Cloves garlic", "Butter and oil", "Salt and black pepper", "Dried oregano"],
        instructions: ["Season and grill chicken until golden.", "Cook pasta according to package instructions.", "Melt butter, sauté garlic, and add cream.", "Slowly stir in Parmesan until sauce thickens.", "Combine pasta, chicken, and sauce."],
        nutrition: ["680 kcal", "42g", "60g", "30g", "2g", "580mg"],
        chefTips: ["Freshly grated Parmesan melts better than pre-shredded.", "Warm the cream slightly before adding to prevent curdling.", "Garnish with fresh parsley."]
    },
    {
        title: "Classic Beef Burger",
        description: "Juicy beef patty with fresh toppings and sauce",
        bgImage: "images/burger.jpg",
        badgeLevel: "Medium",
        badgeType: "Meat",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "1 person",
        rate: "4.9",
        reviews: "(512 reviews)",
        ingredients: ["200g Ground beef (80/20)", "1 Brioche bun", "1 slice Cheddar", "Fresh lettuce", "2 slices Tomato", "Red onion rings", "Pickles", "Burger sauce", "Sea salt"],
        instructions: ["Shape the beef into a thick patty.", "Season both sides with salt and pepper.", "Grill for 4 minutes per side.", "Melt cheese on top in the last minute.", "Toast buns and assemble with sauce and veggies."],
        nutrition: ["750 kcal", "45g", "40g", "35g", "4g", "890mg"],
        chefTips: ["Don't press the patty while grilling.", "Let the burger rest for 2 minutes.", "Use a high-quality brioche bun."]
    },
    {
        title: "Margherita Pizza",
        description: "Authentic Neapolitan pizza with fresh basil",
        bgImage: "images/pizza.jpg",
        badgeLevel: "Hard",
        badgeType: "Italian",
        prepTime: "20 min",
        cookTime: "12 min",
        servings: "2-3 people",
        rate: "4.7",
        reviews: "(420 reviews)",
        ingredients: ["300g Pizza dough", "1/2 cup Tomato sauce", "150g Fresh mozzarella", "Fresh basil leaves", "Extra virgin olive oil", "Sea salt"],
        instructions: ["Preheat oven to max temp.", "Stretch dough into a thin circle.", "Spread sauce and add mozzarella chunks.", "Bake until crust is charred.", "Top with fresh basil and olive oil."],
        nutrition: ["820 kcal", "28g", "98g", "24g", "5g", "1100mg"],
        chefTips: ["Use fresh mozzarella di bufala.", "High heat is the secret to a crispy crust.", "Add basil after baking to keep it fresh."]
    },
    {
        title: "Ribeye Steak",
        description: "Pan-seared steak with garlic butter and rosemary",
        bgImage: "images/steak.jpg",
        badgeLevel: "Medium",
        badgeType: "Steak",
        prepTime: "5 min",
        cookTime: "12 min",
        servings: "1 person",
        rate: "5.0",
        reviews: "(890 reviews)",
        ingredients: ["350g Ribeye steak", "3 tbsp Salted butter", "3 Cloves garlic, smashed", "2 sprigs Fresh rosemary", "Coarse sea salt", "Black pepper", "Grapeseed oil"],
        instructions: ["Bring steak to room temperature.", "Pat dry and season heavily.", "Sear in a hot pan for 3 mins each side.", "Add butter, garlic, and rosemary to baste.", "Rest for 10 minutes before slicing."],
        nutrition: ["620 kcal", "52g", "0g", "48g", "0g", "450mg"],
        chefTips: ["Dry the steak thoroughly before searing.", "Always rest your meat.", "Use a cast-iron skillet."]
    },
    {
        title: "Greek Salad",
        description: "Fresh Mediterranean salad with feta and olives",
        bgImage: "images/salad.jpg",
        badgeLevel: "Easy",
        badgeType: "Healthy",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",
        rate: "4.5",
        reviews: "(150 reviews)",
        ingredients: ["3 Large tomatoes", "1 English cucumber", "1/2 Red onion", "1/2 cup Kalamata olives", "150g Feta cheese", "Dried oregano", "Olive oil", "Red wine vinegar"],
        instructions: ["Chop tomatoes and cucumbers into chunks.", "Thinly slice red onions.", "Combine veggies and olives in a bowl.", "Whisk oil, vinegar, and oregano.", "Place feta on top and drizzle dressing."],
        nutrition: ["280 kcal", "9g", "14g", "22g", "4g", "720mg"],
        chefTips: ["Don't peel the cucumber.", "Use high quality extra virgin olive oil.", "Keep the feta in large pieces."]
    }
];

// Selectors
const imageContainer = document.getElementById("recipe-image-container");
const btn = document.querySelector(".my-btn");
const badgeLevel = document.getElementById("badge-level");
const badgeType = document.getElementById("badge-type");
const ingredientsList = document.querySelector(".Ingredients");
const instructionsList = document.querySelector(".Instructions");
const tipsList = document.querySelector(".tips");
const nutritionBoxes = document.querySelectorAll(".Nutrition .box-1");

let currentRecipeIndex = -1;

function changeRecipe() {
    let randomIdx;
    do {
        randomIdx = Math.floor(Math.random() * recipes.length);
    } while (randomIdx === currentRecipeIndex);
    
    currentRecipeIndex = randomIdx;
    const recipe = recipes[currentRecipeIndex];

    // Background Image
    imageContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${recipe.bgImage}')`;

    // Badges & Texts
    badgeLevel.textContent = recipe.badgeLevel;
    badgeType.textContent = recipe.badgeType;
    document.querySelector(".content h3").textContent = recipe.title;
    document.querySelector(".content .text-p.fs-5").textContent = recipe.description;
    document.getElementById("time-prep").textContent = recipe.prepTime;
    document.getElementById("time-cook").textContent = recipe.cookTime;
    document.getElementById("Servings").textContent = recipe.servings;
    document.getElementById("rate").textContent = recipe.rate;
    document.getElementById("reviews").textContent = recipe.reviews;

    // Ingredients
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach((item, i) => {
        ingredientsList.innerHTML += `<li><div>${i+1}</div><span>${item}</span></li>`;
    });

    // Instructions
    instructionsList.innerHTML = "";
    recipe.instructions.forEach((step, i) => {
        instructionsList.innerHTML += `<div class="bog"><div>${i+1}</div><p>${step}</p></div>`;
    });

    // Nutrition (Update Black Text Only)
    recipe.nutrition.forEach((val, i) => {
        const valueSpan = nutritionBoxes[i].querySelector(".s-2");
        if (valueSpan) valueSpan.textContent = val;
    });

    // Chef's Tips
    tipsList.innerHTML = "";
    recipe.chefTips.forEach(tip => {
        tipsList.innerHTML += `
            <div class="tep d-flex align-items-center mb-2">
                <i class="fa-solid fa-circle-check orange me-2"></i>
                <p class="mb-0">${tip}</p>
            </div>`;
    });
}

btn.addEventListener("click", changeRecipe);

// Initial Call
changeRecipe();