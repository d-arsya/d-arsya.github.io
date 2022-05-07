const branchButton = document.querySelectorAll(".cabangSekolah");
const branchDescription = document.querySelectorAll(".cabangDeskripsi");
branchButton.forEach(function(e){
    e.addEventListener("click",function(){
        branchButton.forEach(function(d){
            d.nextElementSibling.classList.contains("check")? d.nextElementSibling.classList.remove("check") : true;
        })
        e.nextElementSibling.classList.add("check");
        branchDescription.forEach(function(f){
            f.classList.contains(e.value) ? f.style.display = "flex": f.style.display = "none";
            f.classList.add("masuk");
            
        })
    })
})
