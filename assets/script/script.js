let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


function enviar(){
    if (nome.value.length == 0){
        alert("Pô, sem nome num dá né, coisinha?")
        }else if(email.value.length == 0) {
            alert("E tu vai pra onde sem enviar o e-mail pra eu te responder?")
        }else if (assunto.value.length == 0){
            alert("Nada mermo? nada para nada?")
        }else if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert("PRONTO! já foi :)")
        } else{
            alert("Preenche direito isso ai bença!")
        }
    
}
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
    txtNome.innerHTML = "Ox ox ox, que tamain de nome é esse?"
    }else if(nome.value.length > 4){
        txtNome.innerHTML = "AAAh! agora simm..."
        nomeOk = true
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
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtassunto")
    if(assunto.value.length <= 5){
        txtAssunto.innerHTML = "ox, poucas ideias né compaça? de boa!"
    }else if(assunto.value.length >= 15 && assunto.value.length <= 100){
        txtAssunto.innerHTML = "Dale, envia sem medo que a gente debate!"
        assuntoOk = true
    }else if(assunto.value.length >= 200){
        txtAssunto.innerHTML = "eeeeeeeeita, é uma bíblia é?"
        txtAssunto.style.color = rgb(156, 60, 156);
    }
    
}
function mapaZoom(){
    mapa.style.width = "900px"
    mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.width = "800px"
    mapa.style.height = "500px"
}