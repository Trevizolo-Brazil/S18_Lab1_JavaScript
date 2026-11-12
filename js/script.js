function genererContenu() {
    // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
    let demo = document.getElementById("demo");
    demo.textContent = "";



    let qty = document.getElementById("qty").value;
    let titre = document.getElementById("titre").value;
    let texte = document.getElementById("contenu").value;


    for (let i = 0; i < qty; i++) {
        
        let h = document.createElement("h2");
        h.textContent = titre + " "+ i;

        let p = document.createElement("p");

        p.textContent = texte + " " + i;
        demo.append(h,p)

    }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input

  let demo = document.getElementById("demo");
  let texte = demo.getElementsByTagName("p");

  let qty = document.getElementById("qty").value;
  for( let i =0; i<qty;i++){
    texte[i].style.color = "red";
  }

}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let buttonClass = document.getElementsByClassName("btn btn-primary");
  let text = document.getElementById("btnClass").value;
  
  for(let i=0; i<2; i++){
    
    buttonClass[i].className = text;
  }
}