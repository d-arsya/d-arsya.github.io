const burgerButton = document.querySelector(".burgerMenuButton");
const checkBox = document.querySelector(".burgerCheckBox");
const menuIndex = document.querySelector(".burgerMenuIndex");

checkBox.addEventListener("click",function(){
    if (checkBox.checked){
        console.log("muncul");
        menuIndex.style.visibility="visible";
        menuIndex.classList.add("animasi");
        menuIndex.style.position="relative";
        burgerButton.style.visibility="hidden";
    }else{
        console.log("hilang");
        menuIndex.classList.remove("animasi");
        menuIndex.style.visibility="hidden";
    }
})

window.addEventListener("scroll",function(){
    if(menuIndex.style.visibility=="visible"){
        menuIndex.style.position="absolute";
        burgerButton.style.visibility="visible";
        menuIndex.style.visibility="hidden";
        menuIndex.classList.remove("animasi");
        checkBox.checked=false;
        console.log("hilang");
    }
})
