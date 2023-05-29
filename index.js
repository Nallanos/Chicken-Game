const form = document.getElementById('form')
const inputElement = document.getElementById('champ');
const parentElement = document.getElementById('ul');
const body = document.querySelector('body')
const children = parentElement.children
inputElement.addEventListener('input', function() {
    let value = inputElement.value;
    value = parseInt(value); // Convertit la valeur en entier
    if (isNaN(value)) {
        value = ''; // Réinitialise la valeur si ce n'est pas un entier
    }
    inputElement.value = value; // Met à jour la valeur de l'input
});

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const data = new FormData(form)
        let NumberOfBone = data.get('title')
        document.getElementById('champ').value = ''
        if(NumberOfBone<25 || NumberOfBone>1){
        TotalOfBone(NumberOfBone)
        PutListener()
        }
    })

function TotalOfBone(NumberOfBone){
    for (let i = 0; i<NumberOfBone; i ++){
        let randomNumber = Math.floor(Math.random() * 25) + 1;
        const Bones = document.getElementById(randomNumber)
        if(Bones.dataset.etat == 'Bone'){
            i--
        }
        else{
            Bones.dataset.etat = 'Bone'
        }
    }
}

function PutListener (){
for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.addEventListener('click', function(e) {
        if(e.currentTarget.dataset.etat == 'Bone'){
            e.currentTarget.children[0].src = '94937508-illustration-d-os-de-chien-une-illustration-de-dessin-animé-de-vecteur-d-un-os-de-chien.webp'
            parentElement.remove()
            form.remove()
            const h1 = document.createElement('h1')
            h1.classList.add('loose')
            h1.innerText = 'Vous avez perdu ! '
            body.appendChild(h1)
        }
        else {
            e.currentTarget.children[0].src = 'Cloche-ouverte-poulet.png'
        }
      });
  }}
