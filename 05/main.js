function load(){  // para carregar no inicio da página
    alert("Seja Bem-vindo!");
}


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<br>";
}


function redirecionar(){
    windows.open("https://globallabs.academy/");
}


function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove2").innerHTML = "Você passou o mouse, obrigado!";
    //alert("Trocar texto");
}

function voltar2(elemento){
    elemento.innerHTML = "Você passou o mouse, obrigado!";
    //alert("Trocar texto");
}

function funcaoChange(elemento){
    document.write(elemento.value);
}



