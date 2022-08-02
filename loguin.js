
// Script para fins educacionais - Não utilize profissionalmente
(function Login(){var done=0;var usuario=document.login.usuario.value;var senha=document.login.senha.value;
if (usuario=="Oficial" && senha=="admin") { window.location="https://animesonline.cc/"; done=1; }
if (usuario=="joão" && senha=="123") { window.location="https://blogger-profissional.blogspot.com/"; done=1; }
if (done==0) { alert("Senha ou Usuário inválido."); }})