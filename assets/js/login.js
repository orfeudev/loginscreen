function myFunction()
{
    var nomeDeUsuario = document.forms["formulario"]["yourName"].value
    var senhaDeUsuario = document.forms["formulario"]["yourPass"].value;
    if (nomeDeUsuario == "admin" && senhaDeUsuario == "admin")
    {
        window.location.href="home.html"
    }else{
        document.getElementById("hidden").classList.remove("hidden");
        document.getElementById("usuario").classList.add("bordaAmarela");
        document.getElementById("senha").classList.add("bordaAmarela");
    }
}

function removeErrors()
{
    document.getElementById("hidden").classList.add("hidden");
    document.getElementById("usuario").classList.remove("bordaAmarela");
    document.getElementById("senha").classList.remove("bordaAmarela");
}

function aumentarInput()
{   
    document.getElementById("usuario").classList.add("aumentarTamanho");
    document.getElementById("senha").classList.add("aumentarTamanho");
   
    }



// function diminuirInput()
// {
//     console.log("diminuirInput")
//     document.getElementById("usuario").classList.remove("aumentarTamanho");
//     document.getElementById("senha").classList.remove("aumentarTamanho");
// } não consegui concluir o raciocínio