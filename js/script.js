// Ajoute un écouteur d'événement sur le clic du bouton qui active la fonction generateRandomHexColor et la définit comme couleur de fond du corps.
document.getElementById('btn').addEventListener('click', function() {
    // Crée un nouvel élément 'a'
    let shape = document.createElement('a');
    // Définit le texte de l'élément
    shape.textContent = 'NON';
    // Définit la taille de la police
    shape.style.fontSize = '50px';
    // Définit le poids de la police
    shape.style.fontWeight = 'bold';
    // Définit la famille de la police
    shape.style.fontFamily = "Tiny5", "serif";
    // Définit la couleur du texte en utilisant une couleur hexadécimale aléatoire
    shape.style.color = generateRandomHexColor();
    // Définit la largeur de l'élément
    shape.style.width = '50px';
    // Définit la hauteur de l'élément
    shape.style.height = '50px';
    // Définit la couleur de fond de l'élément
    shape.style.backgroundColor = 'none';
    // Définit la position de l'élément
    shape.style.position = 'absolute';
    // Définit le débordement de l'élément
    shape.style.overflow = 'visible';
    // Ajoute l'élément au corps du document
    document.body.appendChild(shape);
    // Affiche la largeur de la fenêtre dans la console
    console.log(window.innerWidth);
    // Calcule une position aléatoire pour l'élément
    let top = Math.random() * (window.innerHeight -  50);
    let left = Math.random() * (window.innerWidth - 50);
    // Définit les directions de mouvement initiales
    let moveRight = true;
    let moveDown = true;
    // Définit un intervalle pour déplacer l'élément
    setInterval(() => {
        // Déplace l'élément vers la droite ou la gauche
        if (moveRight) {
            left += 10;
        } else {
            left -= 10;
        }
        // Déplace l'élément vers le bas ou le haut
        if (moveDown) {
            top += 10;
        } else {
            top -= 10;
        }
        // Met à jour la position de l'élément
        shape.style.top = top + 'px';
        shape.style.left = left + 'px';
        // Inverse la direction horizontale si l'élément atteint les bords de la fenêtre
        if (left >= window.innerWidth - 50 || left <= 0) {
            moveRight = !moveRight;
            // Ajoute de l'aléatoire à la direction horizontale
            left += (Math.random() - 0.5) * 20;
        }
        // Inverse la direction verticale si l'élément atteint les bords de la fenêtre
        if (top >= window.innerHeight - 50 || top <= 0) {
            moveDown = !moveDown;
            // Ajoute de l'aléatoire à la direction verticale
            top += (Math.random() - 0.5) * 20;
        }
    }, 25);
});

// Fonction qui génère une couleur hexadécimale aléatoire
function generateRandomHexColor() {
    // Génère une couleur hexadécimale aléatoire
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    // Affiche la couleur générée dans la console
    console.log(randomColor);
    // Retourne la couleur générée
    return randomColor;
}

// Ajoute un écouteur d'événement sur le clic du bouton de réinitialisation qui recharge la page
document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});

//ajoute une fonction qui fait apparaitre dans le "p" portant l'id "typewriter" un texte lettre par lettre puis le fait disparaitre lettre par lettre en boucle dès le chargement de la page

// Fonction pour afficher et masquer le texte lettre par lettre
function typewriterEffect() {
    const element = document.getElementById('typewriter');
    const text = element.textContent; // Remplacez par le texte souhaité
    let index = text.length-1;
    console.log(index);
    let isAdding = true;

    setInterval(() => {
        if (isAdding) {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                isAdding = false;
                index--;
            }
        } else {
            element.textContent = element.textContent.slice(0, -1);
            index--;
            if (index < -1) {
                isAdding = true;
                index = 0;
            }
        }
    }, 200); // Ajustez la vitesse de l'effet ici
}

// Appelle la fonction dès le chargement de la page
window.onload = typewriterEffect;