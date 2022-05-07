const profileButton = document.querySelectorAll(".profileButton");
const profileContent = document.querySelectorAll(".profileContent");
profileButton.forEach(function(e){
    e.addEventListener("click",function(){
        profileButton.forEach(function(d){
            d.nextElementSibling.classList.contains("check")? d.nextElementSibling.classList.remove("check") : true;
        })
        e.nextElementSibling.classList.add("check");
        profileContent.forEach(function(f){
            f.classList.contains(e.value) ? f.style.display = "flex": f.style.display = "none";
            f.classList.add("masuk");            
        })
    })
})
window.addEventListener("scroll",function(){
    const link = document.querySelector(".someLink");
    this.scrollY >= 500 ? link.classList.add("atas") : link.classList.remove("atas");
    
})
