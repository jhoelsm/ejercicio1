let lista=["juan","jose","pedro","raul","juana","ana", "maria","fernando","wilmer","hugo", "gabriel", "jhon","jesus","jazmin"]
function sortear(){
seleccionado=lista [parseInt(Math.random()*lista.length)];
document.getElementById("resultado").value=seleccionado;
}
function mostrar_lista(){
document.getElementById("lista").innerHTML=lista.toString
}