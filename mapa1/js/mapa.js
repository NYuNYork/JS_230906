let Szamlalo = 90;
function Novel(){
    Szamlalo++;
    document.getElementById("kiir").innerHTML = Szamlalo +" mapa"
    if(Szamlalo%100==0){
        document.getElementById("like").src = "img/emoji.gif"
        document.getElementById("like").alt = "img/emoji.gif"
    } else{
        document.getElementById("like").src = "";
        document.getElementById("like").alt = "";
    }
}
document.getElementById("kiir").innerHTML = Szamlalo +" mapa"