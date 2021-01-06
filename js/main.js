
function calculer()
{
let x1=document.getElementById("nbr1");
let x2=document.getElementById("nbr2");
if(x1.value!="" && x2.value!="")
{
let somme=parseInt(x1.value)+
            parseInt(x2.value);
let resSpan=document.getElementById("res");
resSpan.innerHTML=somme;
}
else
alert("veuillez renseigner tous les champs");
}