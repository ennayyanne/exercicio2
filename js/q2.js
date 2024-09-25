let num=document.querySelector("#num");
let botao=document.querySelector("#resultado");
botao.onclick=function(){
    console.log('wow');

if(num>10){
    console.log('É maior que 10');
}else if(num<10){
    console.log('É menor que 10');
}else if(num==10){
    console.log('É igual a 10');
}
}
