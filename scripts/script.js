const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbar.classList.add("changeOpacity");
  } else {
    navbar.classList.remove("changeOpacity");
  }
});

const paragraphs = document.querySelectorAll(".spara");

document.addEventListener("scroll", () => {
  paragraphs.forEach((paragraph) => {
    if (showParagraph(paragraph)) {
      paragraph.classList.add("spara--visible");
    }
  });
});

function showParagraph(element) {
  const section = element.getBoundingClientRect();
  return section.bottom > 0 && section.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150);
}

const marketplaceItems = [
  {
    id: 1,
    name: "Tent Rental",
    category: "Camping Equipment",
    price: 30.0,
    description: "A two-person tent available for daily rental.",
    stock: 10,
    available: true,
    rating: 4.5,
    supplier: "Outdoor Rentals Co.",
    rentalDuration: "24 hours", // Defines rental duration if item is rented
    discount: 5, // Discount as a percentage, if applicable
    tags: ["camping", "shelter", "two-person"],
    imageURL: "burnt-orange-free-duo_2048x.webp",
  },
  {
    id: 2,
    name: "Hiking Boots",
    category: "Hiking Gear",
    price: 75.0,
    description: "Durable hiking boots available in multiple sizes.",
    stock: 20,
    available: true,
    rating: 4.8,
    supplier: "Park Store",
    rentalDuration: null, // Set to null if the item is only for purchase
    discount: 10,
    tags: ["footwear", "hiking", "all-terrain"],
    imageURL: "Berghaus-VC22-Mid-GTX-01.avif",
  },
  {
    id: 3,
    name: "Park T-Shirt",
    category: "Souvenirs",
    price: 15.0,
    description: "Commemorative T-shirt with park logo.",
    stock: 50,
    available: true,
    rating: 4.3,
    supplier: "Park Merchandise",
    rentalDuration: null,
    discount: 0,
    tags: ["apparel", "souvenir", "logo"],
    imageURL: "preview (1).jpeg",
  },
  {
    id: 4,
    name: "Backpack",
    category: "Hiking Gear",
    price: 40.0,
    description: "Lightweight backpack suitable for day hikes.",
    stock: 15,
    available: true,
    rating: 4.6,
    supplier: "Outdoor Essentials",
    rentalDuration: null,
    discount: 15,
    tags: ["gear", "daypack", "hiking"],
    imageURL: "osprey.jpg",
  },
  {
    id: 5,
    name: "Camping Chair",
    category: "Camping Equipment",
    price: 10.0,
    description: "Foldable camping chair available for rent.",
    stock: 8,
    available: true,
    rating: 4.2,
    supplier: "Camp Co.",
    rentalDuration: "24 hours",
    discount: 5,
    tags: ["seating", "camping", "portable"],
    imageURL: "81Kk3uGfm4L.jpg",
  },
  {
    id: 6,
    name: "Water Bottle",
    category: "Souvenirs",
    price: 8.0,
    description: "Reusable water bottle with park logo.",
    stock: 30,
    available: true,
    rating: 4.7,
    supplier: "Eco Gear",
    rentalDuration: null,
    discount: 0,
    tags: ["drinkware", "souvenir", "eco-friendly"],
    imageURL: "preview (5).jpeg",
  },
  {
    id: 7,
    name: "Binoculars Rental",
    category: "Outdoor Activities",
    price: 15.0,
    description: "Compact binoculars, ideal for bird watching and nature observation.",
    stock: 12,
    available: true,
    rating: 4.6,
    supplier: "Nature Co.",
    rentalDuration: "6 hours",
    discount: 5,
    tags: ["bird watching", "wildlife", "optics"],
    imageURL: "91qe50c4eJL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    name: "Energy Bars (Pack of 5)",
    category: "Snacks",
    price: 12.0,
    description: "Assorted flavors of energy bars, perfect for quick hikes.",
    stock: 25,
    available: true,
    rating: 4.4,
    supplier: "Trail Snacks Inc.",
    rentalDuration: null,
    discount: 10,
    tags: ["snacks", "energy", "food"],
    imageURL: "clifimages.jpeg",
  },
  {
    id: 9,
    name: "Park Map",
    category: "Guides",
    price: 2.0,
    description: "Detailed map of the park with marked trails and points of interest.",
    stock: 100,
    available: true,
    rating: 4.9,
    supplier: "Park Info Services",
    rentalDuration: null,
    discount: 0,
    tags: ["map", "guide", "navigation"],
    imageURL: "il_570xN.3746563200_77ur.avif",
  },
  {
    id: 10,
    name: "Sleeping Bag Rental",
    category: "Camping Equipment",
    price: 20.0,
    description: "Warm and comfortable sleeping bag, available for overnight rental.",
    stock: 15,
    available: true,
    rating: 4.3,
    supplier: "Outdoor Rentals Co.",
    rentalDuration: "24 hours",
    discount: 10,
    tags: ["camping", "sleep", "overnight"],
    imageURL: "71iS3T651nL.jpg",
  },
  {
    id: 11,
    name: "Sun Hat",
    category: "Apparel",
    price: 10.0,
    description: "Wide-brimmed hat to protect against sun during hikes.",
    stock: 30,
    available: true,
    rating: 4.2,
    supplier: "Park Merchandise",
    rentalDuration: null,
    discount: 0,
    tags: ["apparel", "hat", "sun protection"],
    imageURL: "2e963d145e504344a8f27547a2e6704d.thumbnail.0000000000.webp",
  },
  {
    id: 12,
    name: "Portable Hammock",
    category: "Outdoor Activities",
    price: 25.0,
    description: "Easy to set up hammock, perfect for relaxing in nature.",
    stock: 7,
    available: true,
    rating: 4.7,
    supplier: "Outdoor Essentials",
    rentalDuration: null,
    discount: 5,
    tags: ["hammock", "relaxation", "portable"],
    imageURL: "Rust-Titanium_MIUSA.webp",
  },
  {
    id: 13,
    name: "Waterproof Jacket",
    category: "Apparel",
    price: 35.0,
    description: "Lightweight, waterproof jacket to keep you dry on rainy hikes.",
    stock: 18,
    available: true,
    rating: 4.5,
    supplier: "Park Store",
    rentalDuration: null,
    discount: 15,
    tags: ["apparel", "waterproof", "jacket"],
    imageURL: "preview (4).jpeg",
  },
  {
    id: 14,
    name: "Firewood Bundle",
    category: "Camping Supplies",
    price: 8.0,
    description: "Bundle of firewood suitable for campfires.",
    stock: 50,
    available: true,
    rating: 4.8,
    supplier: "Park Store",
    rentalDuration: null,
    discount: 0,
    tags: ["campfire", "wood", "camping"],
    imageURL: "firewood-featured.webp",
  },
  {
    id: 15,
    name: "Portable Grill",
    category: "Camping Equipment",
    price: 50.0,
    description: "Compact grill for outdoor cooking. Ideal for picnics and campsites.",
    stock: 5,
    available: true,
    rating: 4.4,
    supplier: "Camp Co.",
    rentalDuration: "24 hours",
    discount: 10,
    tags: ["cooking", "grill", "portable"],
    imageURL: "61jZwWjCG2S.jpg",
  },
];

const storeCategory = document.querySelector("#storeCategory");
const showCase = document.querySelector("#showCase");

function displayAllStoreOptions() {
  const categories = new Set(["All"]);

  for (let i = 0; i < marketplaceItems.length; i++) {
    // for(let x = 0; x < marketplaceItems[i].tags.length; i++){
    categories.add(marketplaceItems[i].category);
    // }
  }
  categories.forEach((category) => {
    let createOptions = document.createElement("option");
    createOptions.value = category;
    createOptions.innerText = category;
    storeCategory.appendChild(createOptions);
  });
  // let createOptions = document.createElement("option");
  // createOptions.value = marketplaceItems[i].category;
  // createOptions.innerText = marketplaceItems[i].category;
  // storeCategory.appendChild(createOptions);
}

displayAllStoreOptions();

function createCardsOfProducts() {
  showCase.innerHTML = "";

  marketplaceItems.forEach((item) => {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createElement.appendChild(createCardHeader);

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = item.category;
    createCardHeader.appendChild(createCardHeaderText);

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `parkmountainsproduct/${item.imageURL}`);
    createElement.appendChild(mountainImage);

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");
    createElement.appendChild(createCardBody);

    let buttonForShow = document.createElement("button");
    buttonForShow.classList.add("btn", "btn-primary", "w-25", "mb-3", "rounded-5", "ms-3");
    buttonForShow.innerText = "Show";

    buttonForShow.addEventListener("click", () => {
      if (buttonForShow.innerText === "Hide") {
        buttonForShow.innerText = "Show";
        createCardBodyText.style.display = "none";
      } else {
        buttonForShow.innerText = "Hide";
        createCardBodyText.style.display = "block";
      }
    });
    createElement.appendChild(buttonForShow);

    let createCardBodyTextTwo = document.createElement("p");
    createCardBodyTextTwo.innerText = item.name;
    createCardBody.appendChild(createCardBodyTextTwo);

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = item.description;
    createCardBodyText.style.display = "none";
    createCardBody.appendChild(createCardBodyText);

    let createCardImageTop = document.createElement("img");
    createCardImageTop.classList.add("card-img-top");
    createElement.appendChild(createCardImageTop);

    let createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer", "text-center");
    createElement.appendChild(createCardFooter);

    // let createTextFooter = document.createElement("p");
    // createTextFooter.innerText = `Coordinates are ${mountain.coords.lat} and ${mountain.coords.lng}`;
    // createCardFooter.appendChild(createTextFooter);

    // columns.appendChild(createElement);
    columns.appendChild(createElement);
    showCase.appendChild(columns);
  });
}

createCardsOfProducts();

function showCertainItems() {
  let categoryId = storeCategory.value;

  let categoryFilter =
    categoryId === "All" ? marketplaceItems : marketplaceItems.filter((item) => item.category === categoryId);

  // let items = categoryFilter[i]
  showCase.innerHTML = "";

  for (let i = 0; i < categoryFilter.length; i++) {
    let item = categoryFilter[i];
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createElement.appendChild(createCardHeader);

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = item.category;
    createCardHeader.appendChild(createCardHeaderText);

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `parkmountainsproduct/${item.imageURL}`);
    createElement.appendChild(mountainImage);

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");
    createElement.appendChild(createCardBody);

    let buttonForShow = document.createElement("button");
    buttonForShow.classList.add("btn", "btn-primary", "w-25", "mb-3", "rounded-5", "ms-3");
    buttonForShow.innerText = "Show";

    buttonForShow.addEventListener("click", () => {
      if (buttonForShow.innerText === "Hide") {
        buttonForShow.innerText = "Show";
        createCardBodyText.style.display = "none";
      } else {
        buttonForShow.innerText = "Hide";
        createCardBodyText.style.display = "block";
      }
    });
    createElement.appendChild(buttonForShow);

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = item.description;
    createCardBodyText.style.display = "none";
    createCardBody.appendChild(createCardBodyText);

    let createCardImageTop = document.createElement("img");
    createCardImageTop.classList.add("card-img-top");
    createElement.appendChild(createCardImageTop);

    let createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer", "text-center");
    createElement.appendChild(createCardFooter);

    // let createTextFooter = document.createElement("p");
    // createTextFooter.innerText = `Coordinates are ${mountain.coords.lat} and ${mountain.coords.lng}`;
    // createCardFooter.appendChild(createTextFooter);

    // columns.appendChild(createElement);
    columns.appendChild(createElement);
    showCase.appendChild(columns);
  }
  // let columns = document.createElement("div");
  // columns.classList.add("col-md-4", "my-4");

  // let createElement = document.createElement("div");
  // createElement.classList.add("card", "h-100");

  // let createCardHeader = document.createElement("div");
  // createCardHeader.classList.add("card-header");
  // createElement.appendChild(createCardHeader);

  // let createCardHeaderText = document.createElement("p");
  // createCardHeaderText.innerText = item.category;
  // createCardHeader.appendChild(createCardHeaderText);

  // let mountainImage = document.createElement("img");
  // mountainImage.setAttribute("src", `images/${item.imageURL}`);
  // createElement.appendChild(mountainImage);

  // let createCardBody = document.createElement("div");
  // createCardBody.classList.add("card-body");
  // createElement.appendChild(createCardBody);

  // let buttonForShow = document.createElement("button");
  // buttonForShow.classList.add("btn", "btn-primary", "w-25", "mb-3", "rounded-5", "ms-3");
  // buttonForShow.innerText = "Show";

  // buttonForShow.addEventListener("click", () => {
  //   if (buttonForShow.innerText === "Hide") {
  //     buttonForShow.innerText = "Show";
  //     createCardBodyText.style.display = "none";
  //   } else {
  //     buttonForShow.innerText = "Hide";
  //     createCardBodyText.style.display = "block";
  //   }
  // });
  // createElement.appendChild(buttonForShow);

  // let createCardBodyText = document.createElement("p");
  // createCardBodyText.innerText = item.description;
  // createCardBodyText.style.display = "none";
  // createCardBody.appendChild(createCardBodyText);

  // let createCardImageTop = document.createElement("img");
  // createCardImageTop.classList.add("card-img-top");
  // createElement.appendChild(createCardImageTop);

  // let createCardFooter = document.createElement("div");
  // createCardFooter.classList.add("card-footer", "text-center");
  // createElement.appendChild(createCardFooter);

  // // let createTextFooter = document.createElement("p");
  // // createTextFooter.innerText = `Coordinates are ${mountain.coords.lat} and ${mountain.coords.lng}`;
  // // createCardFooter.appendChild(createTextFooter);

  // // columns.appendChild(createElement);
  // columns.appendChild(createElement);
  // showCase.appendChild(columns);
}
