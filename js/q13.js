let botao=document.getElementById("resultado");
let caixa=document.getElementById("recado");
botao.onclick = function(){
    console.log("wow")
    let num=Number.parseInt(document.getElementById("valor").value);
if(num>0){
   caixa.innerHTML=`<p>É positivo!</p>` ;
}else if(num<0){
    caixa.innerHTML=`<p>É negativo!</p>` ;
}else if(num==0){
    caixa.innerHTML=`<p>É zero!</p>` ;
}
}