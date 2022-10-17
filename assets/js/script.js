const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = String(dateToday.getHours()) .padStart(2,"0");
    let min = String(dateToday.getMinutes()) .padStart(2,"0");
    
    horas.textContent = hour;
    minutos.textContent = min;
    
    
});


const calendario = document.getElementById('data');
calendario.textContent = data();

function data(){
    var dateToday = new Date(); 
    var dia = dateToday.getDate();
    var mes = dateToday.toLocaleString("pt-BR", { month: "long" });
    var ano = dateToday.getFullYear();

    return dia + " de " + mes + " de " + ano;

}

setInterval(() => updateCounter(), 1000);
console.log("ahuihuis");
function updateCounter() {
  console.log("começo");  
  var value = document.getElementById("contador").value;
  if(!value){
    value = 600;
    
  }
  var timer = parseInt(value, 10);
  console.log('timer', timer);
  timer-=1;
document.getElementById("contador").value = timer;
  if(timer == 0){
 window.location.reload(1)
  }
}