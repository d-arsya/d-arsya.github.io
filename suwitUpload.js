//nama player
var nama = prompt('Siapa Nama Kamu');
if(nama==""){nama="kamu"}
var player = document.getElementById('namaplay');
player.innerHTML = nama;
//nama lawan
const namaComputer= ["ABEL","AZALEYA","ELIS","LIA","DHITA","HANIFA","DEA","GHEA","ICHA","YASMIN"];
function nLawan(){
   return namaComputer[Math.floor(Math.random() * namaComputer.length)];
}
//cari pilihan computer
function pLawan(){
   //ganti gambar lawan
   let gComp=document.getElementById('pilComp');
   let pComp = Math.random();
   if(pComp<0.333){
       pComp='batu';gComp.style.backgroundImage='url(https://raw.githubusercontent.com/d-arsya/resource/gameSuwit/batu.jpg)';return 'batu';
   }
   if(pComp<0.666){
       pComp='gunting';gComp.style.backgroundImage='url(https://raw.githubusercontent.com/d-arsya/resource/gameSuwit/gunting.jpg)';return 'gunting';
   }
   if(pComp<0.999){
       pComp='kertas';gComp.style.backgroundImage='url(https://raw.githubusercontent.com/d-arsya/resource/gameSuwit/kertas.jpg)';return 'kertas';
   }
}
//transisis gambar lawan
 function putar() {
     const gLawan = document.getElementById('pilComp');
     const gambar = ['batu','gunting','kertas'];
     let i = 0;
     const waktuMulai = new Date().getTime();
     setInterval(function () {
         if(new Date().getTime() - waktuMulai>400){
             clearInterval;
             return;
           }
         gLawan.style.backgroundImage=`url(https://raw.githubusercontent.com/d-arsya/resource/gameSuwit/${gambar[i]}.jpg)`;
         i++;
         if(i==gambar.length){i=0};
     },50)
     
 }
 //acak hasil
 function putarHasil() {
   const akhir = document.getElementById('hasil');
   const listHasil = ['MENANG','KALAH','SERI'];
   let i = 0;
   const waktuMulai = new Date().getTime();
   setInterval(function () {
       if(new Date().getTime() - waktuMulai>400){
           clearInterval;
           return;
         }
       akhir.innerHTML=listHasil[i];
       i++;
       if(i==listHasil.length){i=0};
   },50) 
}  
// fungsi hasil
function cariHasil(comp,play){
    if(play==comp)return 'SERI';
    if(play=='batu')return (comp == 'gunting')? 'MENANG':'KALAH';
    if(play=='gunting')return (comp == 'kertas')? 'MENANG':'KALAH';
    if(play=='kertas')return (comp == 'batu')? 'MENANG':'KALAH';
}
   const pilihanPlayer=document.querySelectorAll('.pilPlay .pilihan');
   pilihanPlayer.forEach(function(sel){
       sel.addEventListener('click',function() {
           putar();
           putarHasil();
           setTimeout(function () {
               const pilComp = pLawan();
               const pilPlayer = sel.value;
               const hasilFinal= cariHasil(pilComp,pilPlayer);
           //ganti tulisan hasil
           const namaHasil = document.getElementById('hasil');
           namaHasil.innerHTML = hasilFinal;
           let Comp = document.getElementById("namaLawan");
           Comp.innerHTML = nLawan();
           },410); 
       });  
   });
