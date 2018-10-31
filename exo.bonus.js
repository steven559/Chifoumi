var joueur=0;
var ordi;
var piere =1;
var ciseau=2;
var feuille =3;
var score = 0;
var pointbot = 0;
var ega=0;

document.getElementById("pierre").addEventListener("click",function () {
 joueur = 1;
ordi = (Math.random()*3) + 1;
ordi = Math.floor(ordi);


    if(ordi == 1 ) {

        alert("egalite");
        eg();
    }
    if (ordi == 3) {
        alert("tu a perdu ");
    de ();
    }
    if(ordi == 2) {
        alert("tu a gagner");
        scor();
    }


});


document.getElementById("feuille").addEventListener("click",function (){
   joueur = 2;
    ordi = Math.random()*3;
    ordi = Math.floor(ordi);
    if(ordi == 2 ) {

        alert("egalite");
        eg();
    }
    if (ordi == 1) {
        alert("tu a gagner ");
         scor();
    }
    if(ordi == 3) {
        alert("tu a perdu");
        de ();
    }

});

document.getElementById("ciseau").addEventListener("click",function (){
    joueur = 3;
    ordi = (Math.random()*3)+1;
    ordi = Math.floor(ordi);

    if(ordi == 2 ) {

        alert("egalite");
        eg();
    }
     if (ordi == 3) {
        alert("tu a gagner ");
        scor();
    }
     if(ordi== 1) {
        alert("tu a perdu");
         de ();
    }

});

 function scor (){

         score++;
  document.getElementById("Score").innerHTML= "tu as gagné" +"  "+score+" " +"fois";




}
function de () {

    pointbot++;
    document.getElementById("Loose").innerHTML = "tu as perdu" +" "+ pointbot +" "+ "fois";


}
function eg(){
     ega++;
    document.getElementById("egal").innerHTML = "tu es égalité" +" "+ ega +" "+ " fois";

}








