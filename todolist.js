/* Note explicative :
Possibilité pour l'utilisateur de saisir une tâche dans la barre prévue à cet effet
Cliquer sur "Ajouter une tâche" pour ajouter cette tâche à la liste
Les éléments de la liste apparaissent en bas
Possibilité de cliquer sur la croix à droite de l'élément pour le supprimer
Possibilité de cliquer n'importe où sur l'élément (sauf la croix) pour déclarer la tâche comme faite
Possibilité de réinitialiser la tâche à l'état non faite en cliquant dessus
*/

let liste =document.getElementsByTagName('ul')

let ajouteElement= function(){
    let input = document.getElementById('userInput')
	if (input.value) {
		let croix = document.createElement('button')
		croix.innerHTML = "X"
		let elementliste= document.createElement('li')
		elementliste.innerHTML = input.value
		elementliste.addEventListener("click", changeEtat)
		liste[0].appendChild(elementliste)
		elementliste.appendChild(croix)
		croix.addEventListener("click", supprimer)
		input.value=""
	}	
}

changeEtat = function()
{
	if (this.className != "done"){
		this.className="done"
	}
	else {
		this.className=""
	}
}

supprimer = function () 
{
    this.parentNode.remove(this.parentNode)
}