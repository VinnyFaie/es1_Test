//Numero delle immagini disponibili in IMG
const nImg = 7; // Constante -> non è modificabile nel codice successivo
var imgAttuale;

//MAIN
precarica();

/* PRECARICARE LE IMMAGINI: velocizzare il cambianto delle immagini  */
function precarica(){
    let img;
    //creo un oggetto html IMG
    for(let i=0; i<nImg; i++){
        img = new Image();
        img.src = "Img/img"+ i +".jpg";
        console.log(img.src);
    }

    imgAttuale = 0;
}

function succ(){
    imgAttuale= (++imgAttuale)%nImg;
    let img = document.getElementById("immagine");
    img.style.backgroundImage="url('img/img"+imgAttuale+".png')";
}

function cont(numero){
    return numero;
}

function prec(){

}

