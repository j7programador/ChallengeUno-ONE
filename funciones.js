let texto, salida;
function encriptar(texto){
    let encript =[];
for(let i = 0; i<texto.length;i++){
    if(texto[i] == "e") 
    encript[i] = "enter";
    else if(texto[i] == "i")
    encript[i] = "imes"; 
    else if(texto[i] == "a")
    encript[i] = "ai"; 
    else if(texto[i] == "o")
    encript[i] = "ober"; 
   else if(texto[i] == "u") 
    encript[i] = "ufat";
    else encript[i] = texto[i];
    }
    return encript.join("");

}
function desencriptar(texto=""){
    
    while(texto.includes("imes") || texto.includes("enter") || texto.includes("ai") ||
       texto.includes("ober") || texto.includes("ufat")){
           texto = texto.replace("ai","a");
           texto = texto.replace("enter","e");
           texto = texto.replace("imes","i");
           texto = texto.replace("ober","o");
           texto = texto.replace("ufat","u");
       }
    return texto;
}

function capturar(){
    texto = document.getElementById("mensaje");
    salida = document.getElementById("mensaje-encriptado");
}

function mostrarEncriptado(){
    capturar();
    salida.value = encriptar(texto.value);
    texto.value =  "";
}
function mostrarDesencriptado(){
    capturar();
    texto.value = desencriptar(salida.value);
    salida.value = "";
}



let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
botonEncriptar.onclick = mostrarEncriptado; 
botonDesencriptar.onclick = mostrarDesencriptado;