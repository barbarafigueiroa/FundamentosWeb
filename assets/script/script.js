let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

function enviar(){
    if (nome.value.length == 0){
        alert("Pô, sem nome num dá né, coisinha?")
        }else{
            alert("TÊEILE e ZAGA mô fiu!")
        }
    
}
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
    txtNome.innerHTML = "Ox ox ox, que tamain de nome é esse?"
    }else if(nome.value.length > 4){
        txtNome.innerHTML = "AAAh! agora simm..."
    } else {
        txtNome.innerHTML = "..."
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Esse email ai tá zabriado visse?"
    } else {
        txtEmail.innerHTML = "aaaaagooooora..."
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtassunto")
    if(assunto.value.length <= 5){
        txtAssunto.innerHTML = "ox, poucas ideias né compaça? de boa!"
    }else if(assunto.value.length >= 15 && assunto.value.length <= 100){
        txtAssunto.innerHTML = "Dale, envia sem medo que a gente debate!"
    }else if(assunto.value.length >= 200){
        txtAssunto.innerHTML = "eeeeeeeeita, é uma bíblia é?"
        txtAssunto.style.color = rgb(156, 60, 156);
    }
    
}
