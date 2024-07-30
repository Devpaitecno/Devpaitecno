
function preenchimentoCampos(registroPet, nomePet, tipoPet, idadePet, generoPet, descricaoPet, idadPet, fotoPet, atividadePet) {
  let registro = document.getElementById(registroPet).value;
  let nome = document.getElementById(nomePet).value;
  let tipo = document.getElementById(tipoPet).value;
  let idade = document.getElementById(idadePet).value;
    let genero = document.getElementById(generoPet).value;
     let descricao = document.getElementById(descricaoPet).value;
    let idad = document.getElementById(idadPet).value;
 let foto = document.getElementById(fotoPet).value;
let atividade = document.getElementById(atividadePet).value;

  cadastrarPet(registro, nome, tipo, idade, genero, descricao, idad, foto, atividade);
}




function cadastrarPet(registro, nome, tipo, idade, genero, descricao, idad, foto, atividade) {
  let petCadastro = { register: registro, name: nome, type: tipo, age: idade, gen:genero, des:descricao, ida:idad, photo:foto, active:atividade };
  let cadastros = localStorage.getItem("dadosCadastros"); 
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(petCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros)) 
  alert("O cadastro " + nome + " foi feito com sucesso!");
  location.reload();
}




function listarCadastros() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h1>Consulta de Cadastros:</h1>")
  if (cadastros == null)
    document.write("<h3>Ainda não há cadastros realizados para consultar.</h3>");
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach(cadastro => {
      document.write("<li class='animals'>Nome completo: <strong>" + cadastro.name + " </strong><hr>");
   
      document.write("<span>Código de Registro:<strong> " + cadastro.register + "</strong></span><hr>");
        document.write("<p>Contacto:<strong> " + cadastro.type + "</strong><hr></p>");
      document.write("<p ss='animals'>Gênero: <strong>" + cadastro.age + "</strong><hr></p>");
        document.write("<p>Endereço:<strong>" + cadastro.gen + "</strong><hr></p>");
        document.write("<p>Descrição:" + cadastro.des + "<hr></p>");
   document.write("<p>Idade:<strong>" + cadastro.ida + "_anos</strong><hr></p>");
   document.write("<p>Data da atividade:<strong>"  + cadastro.photo +"</strong><hr</p>");
   document.write("<p> Tipo de atividade:<strong>" + cadastro.active +"</strong><hr></p>")
    document.write("<p>localizaçao: <strong>" + cadastro.map +"</strong><a href='location.html'><button>procurar</button></a><hr></p>");
    
      document.write("</li><p></p>");
    });
  }
}


 

function limparStorage(limpar){
  localStorage.clear(limpar);
  window.location = window.location;
}