
// Les différentes variables
var button = document.querySelector('#BoutonLangues');
var buttonFrancais = document.querySelector('#BoutonFrancais')
var buttonAnglais = document.querySelector('#BoutonAnglais')
var texteLangues = document.querySelector('.Langues');

// Les différentes fonctions
     
      button.addEventListener('click', function() {       
        texteLangues.style.opacity = 1;
      });

      buttonFrancais.addEventListener('click', function() {       
        texteLangues.style.opacity = 0;
      });

      buttonAnglais.addEventListener('click', function() {       
        texteLangues.style.opacity = 0;
      });