const articles = document.querySelector("article");
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState==4 && xhr.status==200){
    let data = JSON.parse(this.responseText).article;
    for(i=0 ; i<= data.length ; i++){
      articles.innerHTML += `<a target="_self" href="http://d-arsya.epizy.com/acmtv/kuliah/article/${data[i].link}" class="articleContents"><img src="${data[i].image}" alt=""><h3>${data[i].tagLine}</h3><h4 class="date">${data[i].dateCreated}</h4></a>`
    }
  }
}

xhr.open("GET", "http://d-arsya.epizy.com/acmtv/kuliah/script/db.json", true)
xhr.send()
