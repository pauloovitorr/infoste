let nome = document.querySelector('#fnome')
let sobreNome = document.querySelector('#snome')
let email = document.querySelector('#email')
let tel = document.querySelector('#telefone')
let cpf = document.querySelector('#cpf')
let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let cidade = document.querySelector('#cidade')
let botao = document.querySelector('#button')

function validaNome(){

   let nome_valor = nome.value  // pega o valor do input

   let nome_para_verificar = nome_valor.replace(' ','')  // se tiver espaços em braco retira

   let expressao_nome = /\b[a-zA-Z]{2,15}\b/ // Expressão para verificar se tem até 12 caracteres alfabeticos o 'b' indica limite

   if(expressao_nome.test(nome_para_verificar)){  // Se a expressão for verdadeira retira a classe da bordar 
        if(nome.classList.contains('border-danger')){    // verifica se contem a classe de erro e se tiver retira 
            nome.classList.remove('border-danger')
        }
        return
   }
   else nome.classList.add('border-danger')

}

function validaSobrenome(){
    
    let sobreNome_valor = sobreNome.value

    let expressao_sobrenome = /^\w[a-zA-Z]+([a-zA-Z ])*$/  // Permite apenas letras do inicio ao fim e espaços

    if(expressao_sobrenome.test(sobreNome_valor)){  
        if(sobreNome.classList.contains('border-danger')){    // verifica se contem a classe de erro e se tiver retira 
            sobreNome.classList.remove('border-danger')
        }
        
        return
   }
   else sobreNome.classList.add('border-danger')
}

 function validaEmail(){
    
    let email_valor = email.value

    let expressao_email = /[a-zA-Z0-9.]+\@[a-z0-9]+\.[a-z0-9]+(\.[a-z])?/  // expressao torna obrigatorio o @ e pelo menos um ponto e opcional o segundo

    if(expressao_email.test(email_valor)){  
        if(email.classList.contains('border-danger')){    // verifica se contem a classe de erro e se tiver retira 
            email.classList.remove('border-danger')
        }

        return
   }
   else email.classList.add('border-danger')
}


function validaTel () {
    let tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
       tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
       tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
       tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;
 }

 function validaCpf(){

    let cpf_valor = cpf.value
    let expressao_cpf = /\b[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[\-]?[0-9]{2}\b/

    if(expressao_cpf.test(cpf_valor)){  
        if(cpf.classList.contains('border-danger')){    // verifica se contem a classe de erro e se tiver retira 
            cpf.classList.remove('border-danger')
        }

        return
   }
   else cpf.classList.add('border-danger')
 }


 function mascaraCPF() {

   let cpf = document.querySelector('#cpf')
   
   const cleanedValue = cpf.value.replace(/\D/g, '');
 
  
   if (cleanedValue.length > 0) {
     
     cpf.value = cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
   } else {
     
     cpf.value = '';
   }
 }


 cep.addEventListener('focusout', function(){

   let cep_valor = cep.value.replace('-','')

   if(validacep(cep_valor)){

         validacep(cep_valor)
   
         fetch(`https://viacep.com.br/ws/${cep_valor}/json/`)

         .then((resposta)=>{
            return resposta.json()
         })
         .then((dados)=>{

         if(dados.hasOwnProperty('erro')){

               rua.value = 'CEP não encontrado'
               limpardados()
               return

          }
         else
               if(cep.classList.contains('border-danger')){
                  cep.classList.remove('border-danger')
               }
               preencher(dados)
         })



         }

   else 
      rua.value = 'CEP em Formato Inválido'
      limpardados()
      


   function preencher(dd){
      rua.value = dd.logradouro
      cidade.value = dd.localidade+'-'+dd.uf

      
   }

   function validacep(cep) {
      const regexCep = /^[0-9]{5}-?[0-9]{3}$/;
      return regexCep.test(cep);
    }

    function limpardados(){
      cidade.value=''
      cep.classList.add('border-danger')
    }

 })
 
 function validarua(){
    
   let rua_valor = rua.value

   let expressao_rua = /^\w[a-zA-Z]+([a-zA-Z ])*$/  // Permite apenas letras do inicio ao fim e espaços

   if(expressao_rua.test(rua_valor)){  
       if(rua.classList.contains('border-danger')){    // verifica se contem a classe de erro e se tiver retira 
           rua.classList.remove('border-danger')
       }
       
       return
  }
  else rua.classList.add('border-danger')
}

