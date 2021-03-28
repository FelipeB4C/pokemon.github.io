var login = document.getElementById("soundLogin");
var success = document.getElementById("soundSuccess");

var inptlogin = document.getElementById('login');
var inptsenha = document.getElementById('senha');

$(".login button").click(function(){
  login.pause();
  login.currentTime = 0;
  login.play();
  setTimeout(loginSucess, 1000*2)
});

function loginSucess() {

  if(inptlogin.value === 'red' && inptsenha.value === 'charizard'){
    success.pause();
    success.currentTime = 0;
    success.play();
    setTimeout(messageLogin, 1000*2)
    
    function messageLogin(){
      alert("Login com sucesso! Bem-vindo de volta Red")
    }

  } else if (inptlogin.value !== 'red' && inptsenha.value !== 'charizard'){
    alert("Saia daqui equipe rocket!")
  }
  
}

function link1(){
  alert("Problema é seu")

}

function link2(){
  alert("Pra que quer caçar pokémon? É pra ficar em casa!")

}