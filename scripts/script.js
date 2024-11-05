const navbar = document.getElementById("navbar")

window.addEventListener("scroll",()=>{
if(window.scrollY >= 50){
navbar.classList.add("changeOpacity")
}else{
    navbar.classList.remove("changeOpacity")
}
})
