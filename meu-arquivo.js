function qualificacao(){
    document.getElementById("qualificacao").innerHTML = "Atualmente estou procurando vaga como desenvolvedor backend e frontend.Tenho conhecimento em várias linguagens de programação. Principalmente Python e C. Também em Java e Javascript.Também  html, CSS e SQL.Fiz estágio como suporte técnico de informática no Hospital das Clínicas da UNICAMP.Inglês avançado";
    document.getElementById("link1").innerHTML =""
    document.getElementById("link2").innerHTML =""
    document.getElementById("link3").innerHTML =""
    document.getElementById("link4").innerHTML =""
}

function projetos(){
    document.getElementById("qualificacao").innerHTML =""
    document.getElementById("link1").innerHTML ="01 : Site gerenciador de dieta(focado em Javascript)"
    document.getElementById("link2").innerHTML ="02 : site para gerenciar pedidos e reservas em um restaurante(foco no django)"
    document.getElementById("link3").innerHTML ="03 : site para cadastrar senha por e-mail"
    document.getElementById("link4").innerHTML ="04 : site com fotos de peixes interessantes"
}


document.addEventListener("DOMContentLoaded",()=>{
    new TypeIt(".tipagem",{
        speed:175,
        
        loop:true
    }).type("José Alexandre dos Santos Barros",{delay:500}).delete(32).type("engenheiro da computação",{delay:500})
    .go();
})