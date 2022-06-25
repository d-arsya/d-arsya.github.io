//Input form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxGmFMYS8bBflUIwWw4lCEFgPOBzF6tabedtczsLXYaqfWVT_OwByEHRlbh32LmzvOL/exec'
const form = document.forms['secret-message'];
const reLaunch = document.querySelector(".reLaunch");
const finish = document.querySelector(".finish");
const messageForm = document.querySelector(".messageForm");
let menit = Math.floor(Math.random() * 59) + 1;
const tip = document.querySelector(".minutes");
tip.innerHTML=menit;
var jam = document.querySelector('.jam');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  jam.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);
        selesai();
    })
    .catch(error => {
        console.error('Error!', error.message)
    })
})
finish.addEventListener("click",function(){
    document.querySelector(".container").style.display="none";   
})
reLaunch.addEventListener("click",function(){
    normal();
})
function normal(){
    reLaunch.style.display="none";
    finish.style.display="none";
    messageForm.style.display="block";
    form.reset();
}
function selesai(){
    reLaunch.style.display="inline-block";
    finish.style.display="inline-block";
    messageForm.style.display="none";
    form.reset();
}
