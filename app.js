const finalDate= new Date(2022, 10, 13);
const now = new Date();
const domDays= document.getElementById('daysLeft')

let time_difference = finalDate.getTime() - now.getTime();    
         //calcular los días dividiendo los milisegundos en un  día  
let days_difference = parseInt(time_difference / (1000 * 60 * 60 * 24));  

domDays.innerText=`Quedan ${days_difference} días`