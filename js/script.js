//VALIDAÇÃO CPF

function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');

    if (cpf == '') return false;
    if (cpf.length !=11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")

        return false;

        add = 0;
        for(i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if(rev == 10 || rev == 11)
        rev = 0;
        if(rev != parseInt(cpf.charAt(9)))
        return false;
        add = 0;
        for (i = 0; i < 10; i++)
        add +=parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if(rev == 10 || rev == 11)
        rev = 0;
        if(rev != parseInt(cpf.charAt(10)))
        return false;
        return true;
    }

function validarCPF(cpf){
    if( !_cpf(cpf.value)){
        alert("CPF inválido!" + cpf.value);
        //apaga o valor
        cpf.value = "";
    }
}

//Validar os demais
function validar(){

    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var endereco = document.getElementById('endereco');
    var numero = document.getElementById('numero');
    var celular = document.getElementById('celular');
    
    if (nome.value == "") {
      alert("Nome não informado");
      nome.focus();
      return false;
    }
   
    if (cpf.value == "") {
      alert("CPF não informado");
      cpf.focus();
      return false;
    }
  
    if (endereco.value == "") {
      alert("Endereço não informado");
      endereco.focus();
      return false;
    }
    
    if (numero.value == "") {
      alert("Número não informado");
      numero.focus();
      return false;
    }
         
    if (celular.value == "") {
      alert("Telefone celular não informado");
      celular.focus();
      return false;
    }

  return true; 

}