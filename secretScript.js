//Input form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxGmFMYS8bBflUIwWw4lCEFgPOBzF6tabedtczsLXYaqfWVT_OwByEHRlbh32LmzvOL/exec'
const form = document.forms['secret-message'];
const reLaunch = document.querySelector(".reLaunch");
const messageForm = document.querySelector(".messageForm");
const finish = document.querySelector(".finish");
const tip = document.querySelector(".minutes");
const loading = document.querySelector(".btn");
const jamKirim = document.querySelector("#time");
const device = document.querySelector("#device");
const jam = document.querySelector('.jam');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let menit = Math.floor(Math.random() * 59) + 1;
tip.innerHTML=menit;

setInterval(realTime, 1000);

function userDevice (){
    let perangkat = navigator.appVersion;
    let awal = perangkat.indexOf(";")+2;
    let akhir = perangkat.indexOf(")");
    perangkat = perangkat.slice(awal,akhir)
    return perangkat;
}

form.addEventListener('submit', e => {
    loading.classList.toggle("hide");
    e.preventDefault()
    jamKirim.value=jam.textContent;
    device.value=userDevice();
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
    window.close()
    document.querySelector(".container").style.display="none";   
})

reLaunch.addEventListener("click",function(){
    normal();
})

function realTime() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    jam.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
function normal(){
    loading.classList.toggle("hide");
    reLaunch.style.display="none";
    finish.style.display="none";
    messageForm.style.display="block";
    form.reset();
}
function selesai(){
    reLaunch.style.display="block";
    finish.style.display="block";
    messageForm.style.display="none";
}

function randomQuotes (){
    $.getJSON('https://api.quotable.io/random?minLength=70&maxLength=130', function(data) {
        setTimeout(function(){
            quote.classList.toggle("animeQuote");
            author.classList.toggle("animeQuote");
            quote.innerHTML = `"${data.content}"`
            author.innerHTML = data.author
        },1800)
        setTimeout(function(){
            quote.classList.toggle("animeQuote");
            author.classList.toggle("animeQuote");

        },2800)
    });
}
randomQuotes()
setInterval(randomQuotes,7000)
