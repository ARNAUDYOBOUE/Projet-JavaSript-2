
/**
 * FONCTIONS DE MANIPULATION DE CHAÎNES
 */
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

function compterCaracteres(chaine) {
    return chaine.length;
}

function mettreEnMajuscule(phrase) {
    return phrase
        .split(' ')
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(' ');
}

/**
 * FONCTIONS DE TABLEAU
 */
function trouverMaximum(tableau) {
    return Math.max(...tableau);
}

function trouverMinimum(tableau) {
    return Math.min(...tableau);
}

function sommeTableau(tableau) {
    return tableau.reduce((somme, nombre) => somme + nombre, 0);
}

function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

/**
 * FONCTIONS MATHÉMATIQUES
 */
function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    }
    
    // Pour éviter les problèmes de récursion avec de grands nombres
    let resultat = 1;
    for (let i = 2; i <= nombre; i++) {
        resultat *= i;
    }
    return resultat;
}

function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
    
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;
    
    for (let i = 5; i * i <= nombre; i += 6) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
    }
    
    return true;
}

function suiteFibonacci(nombreDeTermes) {
    if (nombreDeTermes <= 0) return [];
    if (nombreDeTermes === 1) return [0];
    
    const suite = [0, 1];
    
    for (let i = 2; i < nombreDeTermes; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    
    return suite;
}

/**
 * Fonction utilitaire pour parser une chaîne en tableau de nombres
 */
function parseTableau(input) {
    return input.split(',').map(item => parseFloat(item.trim())).filter(num => !isNaN(num));
}

// Fonctions de test
function testInverserChaine() {
    const chaine = document.getElementById('inputChaine').value;
    if (!chaine) {
        alert("Veuillez entrer une chaîne");
        return;
    }
    const resultat = inverserChaine(chaine);
    document.getElementById('output-chaines').innerHTML = `<pre>Chaîne originale: "${chaine}"\nChaîne inversée: "${resultat}"</pre>`;
}

function testCompterCaracteres() {
    const chaine = document.getElementById('inputChaine').value;
    if (!chaine) {
        alert("Veuillez entrer une chaîne");
        return;
    }
    const resultat = compterCaracteres(chaine);
    document.getElementById('output-chaines').innerHTML = `<pre>Chaîne: "${chaine}"\nNombre de caractères: ${resultat}</pre>`;
}

function testMettreEnMajuscule() {
    const phrase = document.getElementById('inputPhrase').value;
    if (!phrase) {
        alert("Veuillez entrer une phrase");
        return;
    }
    const resultat = mettreEnMajuscule(phrase);
    document.getElementById('output-chaines').innerHTML = `<pre>Phrase originale: "${phrase}"\nPhrase capitalisée: "${resultat}"</pre>`;
}

function testTrouverMaximum() {
    const input = document.getElementById('inputTableau').value;
    const tableau = parseTableau(input);
    if (tableau.length === 0) {
        alert("Veuillez entrer un tableau valide de nombres");
        return;
    }
    const resultat = trouverMaximum(tableau);
    document.getElementById('output-tableaux').innerHTML = `<pre>Tableau: [${tableau}]\nValeur maximale: ${resultat}</pre>`;
}

function testTrouverMinimum() {
    const input = document.getElementById('inputTableau').value;
    const tableau = parseTableau(input);
    if (tableau.length === 0) {
        alert("Veuillez entrer un tableau valide de nombres");
        return;
    }
    const resultat = trouverMinimum(tableau);
    document.getElementById('output-tableaux').innerHTML = `<pre>Tableau: [${tableau}]\nValeur minimale: ${resultat}</pre>`;
}

function testSommeTableau() {
    const input = document.getElementById('inputTableau').value;
    const tableau = parseTableau(input);
    if (tableau.length === 0) {
        alert("Veuillez entrer un tableau valide de nombres");
        return;
    }
    const resultat = sommeTableau(tableau);
    document.getElementById('output-tableaux').innerHTML = `<pre>Tableau: [${tableau}]\nSomme: ${resultat}</pre>`;
}

function testFiltrerTableau() {
    const input = document.getElementById('inputTableau').value;
    const tableau = parseTableau(input);
    if (tableau.length === 0) {
        alert("Veuillez entrer un tableau valide de nombres");
        return;
    }
    
    const seuil = parseFloat(document.getElementById('inputSeuil').value);
    if (isNaN(seuil)) {
        alert("Veuillez entrer une valeur seuil valide");
        return;
    }
    
    const resultat = filtrerTableau(tableau, nombre => nombre > seuil);
    document.getElementById('output-tableaux').innerHTML = `<pre>Tableau: [${tableau}]\nFiltré (> ${seuil}): [${resultat}]</pre>`;
}

function testFactorielle() {
    const nombre = parseInt(document.getElementById('inputFactorielle').value);
    if (isNaN(nombre) || nombre < 0) {
        alert("Veuillez entrer un nombre entier positif");
        return;
    }
    
    try {
        const resultat = factorielle(nombre);
        document.getElementById('output-math').innerHTML = `<pre>Nombre: ${nombre}\nFactorielle: ${resultat}</pre>`;
    } catch (error) {
        document.getElementById('output-math').innerHTML = `<pre>Erreur: Le nombre est trop grand pour calculer sa factorielle</pre>`;
    }
}

function testEstNombrePremier() {
    const nombre = parseInt(document.getElementById('inputPremier').value);
    if (isNaN(nombre) || nombre < 1) {
        alert("Veuillez entrer un nombre entier positif");
        return;
    }
    
    const resultat = estNombrePremier(nombre);
    document.getElementById('output-math').innerHTML = `<pre>${nombre} est premier: ${resultat}</pre>`;
}

function testSuiteFibonacci() {
    const termes = parseInt(document.getElementById('inputFibonacci').value);
    if (isNaN(termes) || termes < 1) {
        alert("Veuillez entrer un nombre entier positif");
        return;
    }
    
    const resultat = suiteFibonacci(termes);
    document.getElementById('output-math').innerHTML = `<pre>Suite de Fibonacci (${termes} termes):\n[${resultat}]</pre>`;
}
