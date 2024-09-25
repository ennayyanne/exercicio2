let n1=document.querySelector("#n1");
let n2=document.querySelector("#n2");
let botao=document.querySelector("#resultado");
botao.onclick=function(){
    console.log('wow');
let media= ((Number.parseInt(n1.value)+ Number.parseInt(n2.value))/2);
console.log(media);
if(media>7){
    console.log('Aprovado!:)');
}else if(media<7){
    console.log('Reprovado!:/');
}else if(media==7){
    console.log('Aprovado!:)')
}
}