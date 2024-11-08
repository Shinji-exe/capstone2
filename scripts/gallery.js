const gallery = document.getElementById("gallery")
const popup = document.getElementById("popup")
const selectedImage = document.getElementById("selectedImage")
const imageIndex = [1,2,3,4,5,6,7,8,9,10,11,12]
let selectedIndex = null;

imageIndex.forEach((image)=>{
  const grid = document.createElement("div")
  grid.classList.add("galleryItem", "m-2")
 

  const theImage = document.createElement("img")
  theImage.src = `/parkandmountaingallery/image${image}.jpg`
  theImage.classList.add("galleryImg")
 

  theImage.addEventListener("click", ()=>{
    popup.style.transform = "translateY(0)";
    selectedImage.src = `/parkandmountaingallery/image${image}.jpg`

  })
  grid.appendChild(theImage)
  gallery.appendChild(grid)
})

popup.addEventListener('click', ()=> {
  popup.style.transform = "translateY(-100%)"
  popup.src = ""
  popup.alt = ""
})
