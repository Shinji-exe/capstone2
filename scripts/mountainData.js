const mountainsArray = [
  {
    name: "Mt. Washington",
    elevation: 6288,
    effort: "Strenuous",
    img: "Washington-StoryImage_2.jpg",
    desc: "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
    coords: {
      lat: 44.270403,
      lng: -71.303501,
    },
  },
  {
    name: "Mt. Adams",
    elevation: 5799,
    effort: "Strenuous",
    img: "Adams-StoryImage_2.jpg",
    desc: "Mt. Adams (5,799') is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.",
    coords: {
      lat: 44.320686,
      lng: -71.291742,
    },
  },
  {
    name: "Mt. Jefferson",
    elevation: 5716,
    effort: "Strenuous",
    img: "Jefferson-StoryImage_2.jpg",
    desc: "Mt. Jefferson (5,716 feet) has three summits a short distance apart, in line northwest and southeast, with the highest in the middle. Perhaps the most striking view is down the Great Gulf with the Carter Range beyond.",
    coords: {
      lat: 44.304196,
      lng: -71.316848,
    },
  },
  {
    name: "Mt. Monroe",
    elevation: 5372,
    effort: "Strenuous",
    img: "Monroe-StoryImage_2.jpg",
    desc: "Mt. Monroe (5,372 feet) is the highest of the Southern Presidentials, and is a sharply pointed peak rising abruptly from the area around the Lakes of the Clouds. The summit is completely above treeline and affords fine views of the deep chasm of Oakes Gulf.",
    coords: {
      lat: 44.255036,
      lng: -71.321483,
    },
  },
  {
    name: "Mt. Madison",
    elevation: 5366,
    effort: "Strenuous",
    img: "Madison-StoryImage_2.jpg",
    desc: "Mt. Madison (5,366 feet) is the farthest northeast of the high peaks of the Presidential Range, remarkable for the great drop of more than 4,000 feet to the river valleys east and northeast from the summit.",
    coords: {
      lat: 44.328422,
      lng: -71.277795,
    },
  },
  {
    name: "Mt. Lafayette",
    elevation: 5260,
    effort: "Strenuous",
    img: "Lafayette-StoryImage_2.jpg",
    desc: "Mt. Lafayette (5,260 feet) represents the highest peak in the Franconia Ridge and, from the summit, offers a stunning view of the Pemigewasset Wilderness Area.",
    coords: {
      lat: 44.16078,
      lng: -71.644464,
    },
  },
  {
    name: "Mt. Lincoln",
    elevation: 5089,
    effort: "Strenuous",
    img: "Lincoln-StoryImage_2.jpg",
    desc: "Mt. Lincoln (5,089 feet), a part of the popular and scenic Franconia Ridge, bears a sharp, rugged peak with excellent views of the surrounding area and an array of alpine plants.",
    coords: {
      lat: 44.148587,
      lng: -71.644678,
    },
  },
  {
    name: "South Twin",
    elevation: 4902,
    effort: "Strenuous",
    img: "STwin-StoryImage_2.jpg",
    desc: "South Twin Mountain (4,902 feet) offers sweeping views to the south of the Franconia Ridge and Franconia Brook valleys.",
    coords: {
      lat: 44.18762,
      lng: -71.554685,
    },
  },
  {
    name: "Carter Dome",
    elevation: 4832,
    effort: "Strenuous",
    img: "CDome-StoryImage.jpg",
    desc: "Carter Dome (4,832'), in the Carter-Moriah Range, offers dramatic, close-up views of Mount Washington and the Presidential Range from its northeastern shoulder, Mount Hight.",
    coords: {
      lat: 44.267268,
      lng: -71.179004,
    },
  },
  {
    name: "Mt. Moosilauke",
    elevation: 4802,
    effort: "Moderate",
    img: "Moosilauke-StoryImage_2.jpg",
    desc: "Mount Moosilauke, at 4,802 feet, is the western-most 4,000-footer in NH. The alpine summit, on a clear day, affords hikers stunning views, to the east, of the Franconia Ridge and Presidentials, and to the west, the Green Mountains of Vermont and, in the distance, the Adirondacks in New York State.",
    coords: {
      lat: 44.024422,
      lng: -71.830974,
    },
  },
  {
    name: "Mt. Eisenhower",
    elevation: 4760,
    effort: "Moderate",
    img: "Eisenhower-StoryImage_2.jpg",
    desc: "Mount Eisenhower (4,760 ft.), part of the southern Presidential Range, has a bald summit that offers 360-degree views of the surrounding area.",
    coords: {
      lat: 44.240526,
      lng: -71.350193,
    },
  },
  {
    name: "North Twin",
    elevation: 4761,
    effort: "Strenuous",
    img: "NTwin-StoryImage_2.jpg",
    desc: "North Twin Mountain (4,761 feet), adjacent to the taller South Twin Mountain, offers a challenging climb to superb outlook ledges near its summit.",
    coords: {
      lat: 44.202482,
      lng: -71.557646,
    },
  },
  {
    name: "Mt. Carrigain",
    elevation: 4700,
    effort: "Strenuous",
    img: "Carrigain-StoryImage_2.jpg",
    desc: "Mount Carrigain, at 4,700 feet, is one of the highest peaks along the southeastern ridge bordering the Pemigewasset Wilderness Area. An observation tower on Carrigain's summit provides hikers with a stunning view of the surrounding White Mountains.",
    coords: {
      lat: 44.093411,
      lng: -71.446924,
    },
  },
  {
    name: "Mt. Bond",
    elevation: 4698,
    effort: "Strenuous",
    img: "Bond-StoryImage_3.jpg",
    desc: "Mount Bond (4,698 ft.), the highest peak in the southern Twin range, represents, with neighboring Mt. Guyot, one of the two most remote peaks in the White Mountains. From Bond's summit, there is virtually no sign of human impact in the form of roads or buildings.",
    coords: {
      lat: 44.152806,
      lng: -71.530995,
    },
  },
  {
    name: "Middle Carter",
    elevation: 4610,
    effort: "Moderate to Strenuous",
    img: "MidCarter-StoryImage.jpg",
    desc: "A part of the Carter-Moriah Range, Middle Carter Mountain (4,610'), though wooded, rewards hikers 70 yards north of its summit with a view of the Presidential Range.",
    coords: {
      lat: 44.303059,
      lng: -71.16776,
    },
  },
  {
    name: "West Bond",
    elevation: 4540,
    effort: "Strenuous",
    img: "WBond-StoryImage.jpg",
    desc: "West Bond (4,540 ft.), a spur of Mount Bond in the southern Twin range, offers extensive views of the White Mountains with virtually no sign of human interference in the form of buildings or roads from the summit.",
    coords: {
      lat: 44.154438,
      lng: -71.544085,
    },
  },
  {
    name: "Mt. Garfield",
    elevation: 4500,
    effort: "Moderate to Strenuous",
    img: "Garfield-StoryImage.jpg",
    desc: "A trip to Mt. Garfield's rocky summit (4,500 ft.) rewards hikers with a panoramic view of the surrounding Franconia Ridge and Franconia and Lincoln Brooks valleys.",
    coords: {
      lat: 44.187374,
      lng: -71.611204,
    },
  },
  {
    name: "Mt. Liberty",
    elevation: 4459,
    effort: "Strenuous",
    img: "Liberty-StoryImage_2.jpg",
    desc: "Amidst the scenic Franconia Ridge, Mt. Liberty (4,459 feet) bears a sharp, ledgy peak with excellent views of the surrounding area, including nearby Mount Bond and the Pemigewasset Wilderness.",
    coords: {
      lat: 44.115907,
      lng: -71.641974,
    },
  },
  {
    name: "South Carter",
    elevation: 4430,
    effort: "Moderate to Strenuous",
    img: "Carters-StoryImage.jpg",
    desc: "In the midst of the Carter-Moriah Range, South Carter Mountain (4,430'), fails to provide any views from its wooded peak, but offers hikers the opportunity to explore the beauty of a typical high-elevation White Mountain boreal forest.",
    coords: {
      lat: 44.289729,
      lng: -71.176472,
    },
  },
  {
    name: "Wildcat Mountain",
    elevation: 4422,
    effort: "Strenuous",
    img: "Wildcat-StoryImage.jpg",
    desc: "Wildcat Mountain (4,422'), located in the Carter-Moriah Range, offers dramatic, close-up views of Carter Notch and Carter Dome from its summit. Wildcat's D Peak (4,062'), home to Wildcat Ski Area, is considered an independent 4,000-footer and offers excellent views of Mt. Washington and the Presidential Range from an observation tower.",
    coords: {
      lat: 44.25897,
      lng: -71.201663,
    },
  },
  {
    name: "Mt. Hancock",
    elevation: 4420,
    effort: "Strenuous",
    img: "Hancock-StoryImage_2.jpg",
    desc: "Located at the southern border of the Pemigewasset Wilderness, Mt. Hancock is characterized by a long ridge with several peaks, most importantly the North Peak (4,420') and the South Peak (4,319'), also known as South Hancock. Although both peaks are wooded to the top, lookout ledges near the North Peak offer views of Mt. Osceola and the Sandwich Range to the south.",
    coords: {
      lat: 44.083331,
      lng: -71.493273,
    },
  },
  {
    name: "South Kinsman",
    elevation: 4358,
    effort: "Strenuous",
    img: "SKinsman-StoryImage.jpg",
    desc: "South Kinsman (4358') is the highest point on the Kinsman-Cannon Ridge.",
    coords: {
      lat: 44.122869,
      lng: -71.736774,
    },
  },
  {
    name: "Mt. Field",
    elevation: 4340,
    effort: "Moderate",
    img: "Field-StoryImage.jpg",
    desc: "Mt. Field (4,340') is the highest peak within the Willey Range, which rises from the western boundary of Crawford Notch State Park.",
    coords: {
      lat: 44.196174,
      lng: -71.43332,
    },
  },
  {
    name: "Mt. Osceola",
    elevation: 4340,
    effort: "Moderate",
    img: "Osceola-StoryImage_2.jpg",
    desc: "Mt. Osceola (4,340') is the highest peak in the Waterville Valley Region and offers great views of the Pemigewasset Wilderness to the north. East Osceola (4,156') is the subordinate peak to Mt. Osceola. Immediately to the south of Mt. Osceola is Mt. Tecumseh (4,003'), the shortest official 4,000 footer. East, across the valley, is the Tripyramid Massif, which includes North Tripyramid (4,180') and Middle Tripyramid (4,140').",
    coords: {
      lat: 44.001459,
      lng: -71.535802,
    },
  },
  {
    name: "Mt. Flume",
    elevation: 4328,
    effort: "Strenuous",
    img: "Flume-StoryImg_2.jpg",
    desc: "Mt. Flume (4,328'), a part of the popular and scenic Franconia Ridge, bears a sharp, rugged peak with excellent views of the surrounding area and an array of alpine plants.",
    coords: {
      lat: 44.108912,
      lng: -71.627941,
    },
  },
  {
    name: "South Hancock",
    elevation: 4319,
    effort: "Strenuous",
    img: "SHancock-StoryImg.jpg",
    desc: "Located at the southern border of the Pemigewasset Wilderness, Mt. Hancock is characterized by a long ridge with several peaks, most importantly the North Peak (4,420') and the South Peak (4,319'), also known as South Hancock. Although both peaks are wooded to the top, lookout ledges near the North Peak offer views of Mt. Osceola and the Sandwich Range to the south.",
    coords: {
      lat: 44.073311,
      lng: -71.487093,
    },
  },
  {
    name: "Mt. Pierce",
    elevation: 4312,
    effort: "Moderate",
    img: "Pierce-StoryImg.jpg",
    desc: "Mount Pierce (4,312 ft.), part of the southern Presidential Range, has a flat summit with a broad, open area on the east side that offers striking views of the surrounding area.",
    coords: {
      lat: 44.226535,
      lng: -71.365771,
    },
  },
  {
    name: "North Kinsman",
    elevation: 4293,
    effort: "Strenuous",
    img: "NKinsman-StoryImg_2.jpg",
    desc: "North Kinsman (4,293') is the second highest peak on the Kinsman-Cannon Ridge. Ledges just below the wooded summit offer great views of Mt. Lafayette and Mt. Lincoln across Franconia Notch.",
    coords: {
      lat: 44.133404,
      lng: -71.736946,
    },
  },
  {
    name: "Mt. Willey",
    elevation: 4285,
    effort: "Strenuous",
    img: "Willey-StoryImg_2.jpg",
    desc: "Mt. Willey (4,285') is the second of highest and southernmost mountain of the Willey Range, which also includes Mt. Field (4,340') and Mt. Tom (4,051').",
    coords: {
      lat: 44.183866,
      lng: -71.42096,
    },
  },
  {
    name: "Bondcliff",
    elevation: 4265,
    effort: "Strenuous",
    img: "Bond-StoryImage_3.jpg",
    desc: "Bondcliff (4,265 ft.), along with neighboring Mt. Guyot and Mt. Bond, offers some of the most stunning views in the Whites, with virtually no sign of roads or buildings visible from the summit.",
    coords: {
      lat: 44.139841,
      lng: -71.542068,
    },
  },
  {
    name: "Zealand Mountain",
    elevation: 4260,
    effort: "Strenuous",
    img: "Zeacliff-StoryImg_2.jpg",
    desc: "The summit of Zealand Mountain (4,260 feet) is wooded and viewless, but the trip is nonetheless worthwhile when hikers include a stop at the nearby Zeacliff outlook along the way.",
    coords: {
      lat: 44.179311,
      lng: -71.521254,
    },
  },
  {
    name: "North Tripyramid",
    elevation: 4180,
    effort: "Strenuous",
    img: "Tripyramids-StoryImg_2.jpg",
    desc: "The Tripyramid massif includes three peaks: North Tripyramid (4,180'), Middle Tripyramid (4,140'), and South Tripyramid (4,100'). The latter peak is not considered an official 4,000 footer because there is not a sufficient change in altitude between its neighboring peak.",
    coords: {
      lat: 43.973144,
      lng: -71.44289,
    },
  },
  {
    name: "Mt. Cabot",
    elevation: 4170,
    effort: "Moderate to Strenuous",
    img: "Cabot-StoryImg.jpg",
    desc: "Mount Cabot (4,170 ft.) is the highest peak in New Hampshire's North Country, offering interesting views from the site of a former fire tower, just southeast of the summit.",
    coords: {
      lat: 44.505963,
      lng: -71.414394,
    },
  },
  {
    name: "East Osceola",
    elevation: 4156,
    effort: "Strenuous",
    img: "EOsceola-StoryImg_2.jpg",
    desc: "Mt. Osceola (4,340') is the highest peak in the Waterville Valley Region and offers great views of the Pemigewasset Wilderness to the north. East Osceola (4,156') is the subordinate peak to Mt. Osceola. Immediately to the south of Mt. Osceola is Mt. Tecumseh (4,003'), the shortest official 4,000 footer. East, across the valley, is the Tripyramid Massif, which includes North Tripyramid (4,180') and Middle Tripyramid (4,140').",
    coords: {
      lat: 44.006089,
      lng: -71.520481,
    },
  },
  {
    name: "Middle Tripyramid",
    elevation: 4140,
    effort: "Strenuous",
    img: "M-Tripyramids-StoryImg.jpg",
    desc: "The Tripyramid massif includes three peaks: North Tripyramid (4,180'), Middle Tripyramid (4,140'), and South Tripyramid (4,100'). The latter peak is not considered an official 4,000 footer because there is not a sufficient change in altitude between its neighboring peak.",
    coords: {
      lat: 43.964619,
      lng: -71.440187,
    },
  },
  {
    name: "Cannon Mountain",
    elevation: 4100,
    effort: "Moderate",
    img: "Cannon-StoryImg_2.jpg",
    desc: "Cannon Mountain (4,100') is also known as Profile Mountain, referring to the magnificent profile of the Old Man of the Mountain, an infamous formation of three ledges on the east cliff that collapsed in May 2003.",
    coords: {
      lat: 44.156993,
      lng: -71.698794,
    },
  },
  {
    name: "Wildcat D",
    elevation: 4062,
    effort: "Strenuous",
    img: "WildcatD-StoryImg.jpg",
    desc: "Wildcat Mountain (4,422'), located in the Carter-Moriah Range, offers dramatic, close-up views of Carter Notch and Carter Dome from its summit. Wildcat's D Peak (4,062'), home to Wildcat Ski Area, is considered an independent 4,000-footer and offers excellent views of Mt. Washington and the Presidential Range from an observation tower.",
    coords: {
      lat: 44.249472,
      lng: -71.22385,
    },
  },
  {
    name: "Mt. Hale",
    elevation: 4054,
    effort: "Moderate",
    img: "Hale-StoryImg.jpg",
    desc: "Mount Hale (4,054'), one of the Little River Mountains offers hikers an easy hike.",
    coords: {
      lat: 44.221707,
      lng: -71.512113,
    },
  },
  {
    name: "Mt. Jackson",
    elevation: 4052,
    effort: "Moderate",
    img: "Jackson-StoryImg.jpg",
    desc: "Mount Jackson (4,052 ft.), part of the southern Presidential Range, has a square, ledgy summit that offers stunning views of the surrounding Presidentials.",
    coords: {
      lat: 44.203097,
      lng: -71.375299,
    },
  },
  {
    name: "Mt. Tom",
    elevation: 4051,
    effort: "Moderate",
    img: "Tom-StoryImg.jpg",
    desc: "Mt. Tom (4,051') is the northern most peak of the Willey Range, which rises from the western boundary of Crawford Notch State Park.",
    coords: {
      lat: 44.210357,
      lng: -71.445894,
    },
  },
  {
    name: "Mt. Moriah",
    elevation: 4049,
    effort: "Strenuous",
    img: "Moriah-StoryImg.jpg",
    desc: "A part of the Carter-Moriah Range, Mount Moriah (4,049 ft.), boasts a ledgy summit with views of the surrounding area.",
    coords: {
      lat: 44.340486,
      lng: -71.131926,
    },
  },
  {
    name: "Mt. Passaconaway",
    elevation: 4043,
    effort: "Strenuous",
    img: "Passaconoway-StoryImg.jpg",
    desc: "Mt. Passaconaway (4,043'), the easternmost 4,000 footer of the Sandwich Range Wilderness, shares a prominent ridge with Mt. Whiteface (4,020'). A lookout ledge just below Mt. Passaconaway's wooded summit offers great views of the Tripyramid massif to the west and South Hancock (4,319') and Mt. Carrigain (4,700') to the north.",
    coords: {
      lat: 43.954827,
      lng: -71.38092,
    },
  },
  {
    name: "Owl's Head",
    elevation: 4025,
    effort: "Strenuous",
    img: "OwlsHead-StoryImg.jpg",
    desc: "Owl's Head Mountain (4,025 feet), occupies a narrow valley created by the Twin-Bond Range to the east and the Franconia Range to the west. More than ten 4,000s surround Owl's Head. Needless to say, it is one of the more remote major summits in the White Mountains.",
    coords: {
      lat: 44.144368,
      lng: -71.604853,
    },
  },
  {
    name: "Galehead Mountain",
    elevation: 4024,
    effort: "Strenuous",
    img: "Galehead-StoryImg.jpg",
    desc: "Galehead Mountain (4,024 feet), a part of the Twin Range, offers views of nearby North and South Twin from the Frost Trail.",
    coords: {
      lat: 44.185097,
      lng: -71.573396,
    },
  },
  {
    name: "Mt. Whiteface",
    elevation: 4020,
    effort: "Strenuous",
    img: "Whiteface-StoryImg.jpg",
    desc: "Mt. Whiteface (4020') shares a prominent ridge with Mt. Passaconaway (4,043') the easternmost 4,000 footer of the Sandwich Range Wilderness. Lookout ledges south of Mt. Whiteface's wooded summit offer great views of New Hampshire's Lakes Region.",
    coords: {
      lat: 43.933815,
      lng: -71.405897,
    },
  },
  {
    name: "Mt. Waumbek",
    elevation: 4006,
    effort: "Strenuous",
    img: "Whiteface-StoryImg.jpg",
    desc: "Mt. Waumbek (4,006 ft.), is the highest peak in the Pliny Range of New Hampshire's North Country, offering views to the east just beyond the summit, along the Kilkenny Ridge Trail.",
    coords: {
      lat: 44.432677,
      lng: -71.417484,
    },
  },
  {
    name: "Mt. Isolation",
    elevation: 4003,
    effort: "Strenuous",
    img: "Isolation-StoryImg.jpg",
    desc: "Mount Isolation (4,003 ft.) is the highest peak of the Montalban Ridge, a subsidiary of the Presidentials, and offers stunning views of the Presidentials - one of the finest views in the White Mountains.",
    coords: {
      lat: 44.214756,
      lng: -71.309466,
    },
  },
  {
    name: "Mt. Tecumseh",
    elevation: 4003,
    effort: "Moderate",
    img: "Tecumseh-StoryImg.jpg",
    desc: "Mt. Tecumseh (4,003') is the shortest official 4,000 footer and home to Waterville Valley ski area. Views to the immediate north include Mt. Osceola (4,340'), the highest peak in the region. East, across the valley, is the Tripyramid Massif, which includes North Tripyramid (4,180') and Middle Tripyramid (4,140').",
    coords: {
      lat: 43.966565,
      lng: -71.556745,
    },
  },
];

const mountainSelector = document.querySelector("#mountainSelector");
const card = document.querySelector("#card");
const showCase = document.querySelector("#showCase");
const cardHeader = document.querySelector("#cardHeader");
const cardImage = document.querySelector("#cardImage");
const cardBody = document.querySelector("#cardBody");
const coordinates = document.querySelector("#coordinates");
const cardFooter = document.querySelector("#cardFooter");
const mountainImageDisplay = document.querySelector("#mountainImageDisplay");
const gridDisplay = document.querySelector("#gridDisplay");
const mountainName = document.getElementById("mountainName");
const effort = document.getElementById("stateLocation");

function populateMountainOption() {
  mountainSelector.innerHTML = "";

  let createAllOptions = document.createElement("option");
  createAllOptions.innerText = "Select...";
  createAllOptions.value = "";
  mountainSelector.appendChild(createAllOptions);

  for (let i = 0; i < mountainsArray.length; i++) {
    let createOptions = document.createElement("option");
    createOptions.innerText = mountainsArray[i].name;
    createOptions.value = mountainsArray[i].name;
    mountainSelector.appendChild(createOptions);
  }
}
populateMountainOption();

// function displayAllMountainCards(){
//   const mountains = new Set(["All"]);
//   for(let i = 0; i < mountainsArray.length; i++){
//     mountains.add(mountainsArray[i].name);
//   }
//   mountains.forEach((mountain)=>{
//     let createOptions = document.createElement("option");
//     createOptions.innerText = mountain
//     createOptions.value = mountain
//     mountainSelector.appendChild(createOptions);
//   })
// }

// displayAllMountainCards()

function displayMountainCards() {
  showCase.innerHTML = "";

  mountainsArray.forEach((mountain) => {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createElement.appendChild(createCardHeader);

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = mountain.name;
    createCardHeader.appendChild(createCardHeaderText);

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `images/${mountain.img}`);
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

        cardBodyTextTwo.style.display = "none";
        cardBodyTextThree.style.display = "none";
      } else {
        buttonForShow.innerText = "Hide";
        createCardBodyText.style.display = "block";
        cardBodyTextTwo.style.display = "block";
        cardBodyTextThree.style.display = "block";
      }
    });
    createElement.appendChild(buttonForShow);

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = mountain.desc;
    createCardBodyText.style.display = "none";
    createCardBody.appendChild(createCardBodyText);

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = "Climb difficulty: " + mountain.effort;
    cardBodyTextTwo.style.display = "none";
    createCardBody.appendChild(cardBodyTextTwo);

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Elevation is ${mountain.elevation} feet`;
    cardBodyTextThree.style.display = "none";
    createCardBody.appendChild(cardBodyTextThree);

    let createCardImageTop = document.createElement("img");
    createCardImageTop.classList.add("card-img-top");
    createElement.appendChild(createCardImageTop);

    let createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer", "text-center");
    createElement.appendChild(createCardFooter);

    let createTextFooter = document.createElement("p");
    createTextFooter.innerText = `Coordinates are ${mountain.coords.lat} and ${mountain.coords.lng}`;
    createCardFooter.appendChild(createTextFooter);

    // let data = getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);
    // console.log(data);
    // columns.appendChild(createElement);
    columns.appendChild(createElement);
    showCase.appendChild(columns);
  });
}

displayMountainCards();

function filterByName() {
  let mountainId = mountainSelector.value;
  showCase.innerHTML = "";

  for (let i = 0; i < mountainsArray.length; i++) {
    if (mountainsArray[i].name === mountainId) {
      selectedMountain = mountainsArray[i];

       let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createElement.appendChild(createCardHeader);

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = mountainsArray[i].name;
    createCardHeader.appendChild(createCardHeaderText);

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `images/${mountainsArray[i].img}`);
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

        cardBodyTextTwo.style.display = "none";
        cardBodyTextThree.style.display = "none";
      } else {
        buttonForShow.innerText = "Hide";
        createCardBodyText.style.display = "block";
        cardBodyTextTwo.style.display = "block";
        cardBodyTextThree.style.display = "block";
      }
    });
    createElement.appendChild(buttonForShow);

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = mountainsArray[i].desc;
    createCardBodyText.style.display = "none";
    createCardBody.appendChild(createCardBodyText);

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = "Climb difficulty: " + mountainsArray[i].effort;
    cardBodyTextTwo.style.display = "none";
    createCardBody.appendChild(cardBodyTextTwo);

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Elevation is ${mountainsArray[i].elevation} feet`;
    cardBodyTextThree.style.display = "none";
    createCardBody.appendChild(cardBodyTextThree);

    let createCardImageTop = document.createElement("img");
    createCardImageTop.classList.add("card-img-top");
    createElement.appendChild(createCardImageTop);

    let createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer", "text-center");
    createElement.appendChild(createCardFooter);

    let createTextFooter = document.createElement("p");
    createTextFooter.innerText = `Coordinates are ${mountainsArray[i].coords.lat} and ${mountainsArray[i].coords.lng}`;
    createCardFooter.appendChild(createTextFooter);

    // let data = getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);
    // console.log(data);
    // columns.appendChild(createElement);
    columns.appendChild(createElement);
    showCase.appendChild(columns);
    }
  }
}

function populateByEffort() {
  mountainSelector.innerHTML = "";

  let createAllOptions = document.createElement("option");
  createAllOptions.innerText = "Select...";
  createAllOptions.value = "";
  mountainSelector.appendChild(createAllOptions);

  let theEffort = new Set();
  for (let i = 0; i < mountainsArray.length; i++) {
    let mountain = mountainsArray[i];
    theEffort(mountain.effort);
  }

  for (let i = 0; i < theEffort.length; i++) {
    let createOptions = document.createElement("option");
    createOptions.innerText = mountainsArray[i].effort;
    createOptions.value = mountainsArray[i].effort;
    mountainSelector.appendChild(createOptions);
  }
}

function filterByEffort() {
  let mountainId = mountainSelector.value;
  // let mountainFilter = mountainsArray.filter((mountain)=> mountain.effort === mountainId)
  let selectedMountain = null;
  showCase.innerHTML = "";

  for (let i = 0; i < mountainsArray.length; i++) {
    if (mountainsArray[i].effort === mountainId) {
      selectedMountain = mountainsArray[i];

      let centerWrap = document.createElement("div");
      centerWrap.classList.add("center-wrapper");

      let createElement = document.createElement("div");
      createElement.classList.add("card", "col-md-4");

      let createCardHeader = document.createElement("div");
      createCardHeader.classList.add("card-header");
      createElement.appendChild(createCardHeader);

      let createCardHeaderText = document.createElement("p");
      createCardHeaderText.innerText = mountainsArray[i].name;
      createCardHeader.appendChild(createCardHeaderText);

      let mountainImage = document.createElement("img");
      mountainImage.setAttribute("src", `images/${mountainsArray[i].img}`);
      createElement.appendChild(mountainImage);

      let createCardBody = document.createElement("div");
      createCardBody.classList.add("card-body");
      createElement.appendChild(createCardBody);

      let createCardBodyText = document.createElement("p");
      createCardBodyText.innerText = mountainsArray[i].desc;
      createCardBody.appendChild(createCardBodyText);

      let createCardImageTop = document.createElement("img");
      createCardImageTop.classList.add("card-img-top");
      createElement.appendChild(createCardImageTop);

      let createCardFooter = document.createElement("div");
      createCardFooter.classList.add("card-footer");
      createElement.appendChild(createCardFooter);

      let createTextFooter = document.createElement("p");
      createTextFooter.innerText = `Coordinates are ${mountainsArray[i].coords.lat} and ${mountainsArray[i].coords.lng}`;
      createCardFooter.appendChild(createTextFooter);

      centerWrap.appendChild(createElement);

      showCase.appendChild(createElement);
    }
  }
}

function toggleFilter() {
  if (mountainName.checked) {
    populateMountainOption();
    mountainSelector.setAttribute("onchange", "filterByName()");
  } else {
    mountainSelector.setAttribute("onchange", "filterByEffort");
    populateByEffort();
  }
}

// function applyFilter() {
//   toggleFilter();
// }
