/**
 * FONCTIONS DE MANIPULATION DE CHAÎNES
 */

/**
 * Inverse une chaîne de caractères
 * @param {string} chaine - La chaîne à inverser
 * @returns {string} La chaîne inversée
 */
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
  }
  
  /**
   * Compte le nombre de caractères dans une chaîne
   * @param {string} chaine - La chaîne à compter
   * @returns {number} Le nombre de caractères
   */
  function compterCaracteres(chaine) {
    return chaine.length;
  }
  
  /**
   * Met en majuscule la première lettre de chaque mot d'une phrase
   * @param {string} phrase - La phrase à modifier
   * @returns {string} La phrase avec les mots capitalisés
   */
  function mettreEnMajuscule(phrase) {
    return phrase
      .split(' ')
      .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
      .join(' ');
  }
  
  /**
   * FONCTIONS DE TABLEAU
   */
  
  /**
   * Trouve la valeur maximale dans un tableau de nombres
   * @param {number[]} tableau - Le tableau de nombres
   * @returns {number} La valeur maximale
   */
  function trouverMaximum(tableau) {
    return Math.max(...tableau);
  }
  
  /**
   * Trouve la valeur minimale dans un tableau de nombres
   * @param {number[]} tableau - Le tableau de nombres
   * @returns {number} La valeur minimale
   */
  function trouverMinimum(tableau) {
    return Math.min(...tableau);
  }
  
  /**
   * Calcule la somme de tous les éléments d'un tableau
   * @param {number[]} tableau - Le tableau de nombres
   * @returns {number} La somme des éléments
   */
  function sommeTableau(tableau) {
    return tableau.reduce((somme, nombre) => somme + nombre, 0);
  }
  
  /**
   * Filtre les éléments d'un tableau selon une condition
   * @param {Array} tableau - Le tableau à filtrer
   * @param {Function} condition - La fonction de condition
   * @returns {Array} Le tableau filtré
   */
  function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
  }
  
  /**
   * FONCTIONS MATHÉMATIQUES
   */
  
  /**
   * Calcule la factorielle d'un nombre
   * @param {number} nombre - Le nombre dont on veut la factorielle
   * @returns {number} La factorielle du nombre
   */
  function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
      return 1;
    }
    return nombre * factorielle(nombre - 1);
  }
  
  /**
   * Vérifie si un nombre est premier
   * @param {number} nombre - Le nombre à vérifier
   * @returns {boolean} Vrai si le nombre est premier, faux sinon
   */
  function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
    
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;
    
    for (let i = 5; i * i <= nombre; i += 6) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
    }
    
    return true;
  }
  
  /**
   * Génère la suite de Fibonacci jusqu'à un nombre donné de termes
   * @param {number} nombreDeTermes - Le nombre de termes à générer
   * @returns {number[]} La suite de Fibonacci
   */
  function suiteFibonacci(nombreDeTermes) {
    if (nombreDeTermes <= 0) return [];
    if (nombreDeTermes === 1) return [0];
    
    const suite = [0, 1];
    
    for (let i = 2; i < nombreDeTermes; i++) {
      suite.push(suite[i - 1] + suite[i - 2]);
    }
    
    return suite;
  }
  
  // Exemples d'utilisation
  console.log("Inverser une chaîne:", inverserChaine("JavaScript"));
  console.log("Compter les caractères:", compterCaracteres("Bonjour"));
  console.log("Mettre en majuscule:", mettreEnMajuscule("bonjour le monde"));
  
  const tableau = [5, 2, 9, 1, 7, 3];
  console.log("Maximum:", trouverMaximum(tableau));
  console.log("Minimum:", trouverMinimum(tableau));
  console.log("Somme:", sommeTableau(tableau));
  console.log("Filtrer (> 3):", filtrerTableau(tableau, nombre => nombre > 3));
  
  console.log("Factorielle de 5:", factorielle(5));
  console.log("7 est premier:", estNombrePremier(7));
  console.log("10 est premier:", estNombrePremier(10));
  console.log("Suite de Fibonacci (10 termes):", suiteFibonacci(10));