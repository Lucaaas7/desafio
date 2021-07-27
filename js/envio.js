var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
    var p=a[i].split('=', 2);
    if (p.length == 1)
    b[p[0]] = "";
    else
    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'));
  
  var varGet1 = qs["nome"]; 
  var varGet2 = qs["sexo"]; 
  var varGet3 = qs["cpf"]; 
  var varGet4 = qs["rg"]; 
  var varGet5 = qs["endereco"]; 
  var varGet6 = qs["numero"]; 
  var varGet7 = qs["complemento"]; 
  var varGet8 = qs["bairro"]; 
  var varGet9 = qs["cidade"]; 
  var varGet10 = qs["estado"]; 
  var varGet11 = qs["pais"]; 
  var varGet12 = qs["cep"];
  var varGet13 = qs["fixo"]; 
  var varGet14 = qs["celular"]; 

  alert("Nome: " + varGet1 + "\nSexo: " + varGet2 + "\nCPF: " + varGet3 + "\nRG: " + varGet4 + "\nEndereço: " + varGet5 + "\nNúmero: " + varGet6 + "\nComplemento: " + varGet7 + "\nBairro: " + varGet8 + "\nCidade: " + varGet9 + "\nEstado: " + varGet10 + "\nPaís: " + varGet11 + "\nCEP: " + varGet12 + "\nTelefone Fixo: " + varGet13 + "\nTelefone Celular: " + varGet14);


