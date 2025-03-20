// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let listaAmigos = [];
const inputAmigo = document.querySelector("#amigo");
const listaAmigosIngresados = document.querySelector("#listaAmigos");
const amigoGanador = document.getElementById("resultado");
//amigoUsuario = (`${inputAmigo.value}`).toUpperCase();


function agregarAmigo(){

        let amigoUsuario = (`${inputAmigo.value}`).toUpperCase();
        const regex = /[0-9=*+@_-]/;
        const str = `${amigoUsuario}`;
        const result = regex.test(str); // true

                      

            if (amigoUsuario == "" || listaAmigos.includes(amigoUsuario) || result==true){
                alert("¡Debes ingresar un nombre válido, que no haya sido ingresado previamente.");
                limpiarCampoAmigo();
            } else{
                listaAmigos.push(amigoUsuario);    
                alert("¡Amigo ingresado exitosamente!"); 
                console.log(listaAmigos);  
                mostrarListaAmigos();
                limpiarCampoAmigo();
                amigoGanador.textContent = "";
            }
        

}

function limpiarCampoAmigo(){
    inputAmigo.value = "";
}

function mostrarListaAmigos(){
    
    listaAmigosIngresados.innerHTML += `<Li>${inputAmigo.value.toUpperCase()}</Li>`; 
}

function sortearAmigo(){

    if (listaAmigos != ""){
    sorteo = Math.floor(Math.random()*listaAmigos.length);
    amigoSorteado = listaAmigos[sorteo];
    amigoGanador.innerHTML = "El amigo secreto es: " + amigoSorteado;
    
    //amigoGanador.innerHTML = `<Li>El amigo secreto es: ${amigoSorteado}</Li>`;
    console.log(amigoSorteado);
    }else{
        amigoGanador.textContent = "No hay amigos en la lista, ¡debes ingresar al menos uno!";
        
    }
}

    


