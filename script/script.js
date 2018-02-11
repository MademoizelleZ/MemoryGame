// choisir un nombre aleatoire entier 
function chiffreAleat(min, max) {
    return Math.round(Math.random () * (max - min)) + min;
}

//activer l'interface de jeu
function actiBtn () {
    btnNvJeu.disabled = true;
    btnJeu.disabled = false;
    inputjeu.disabled = false;
}

//jeu perdu desactivation interface de jeu
function desaBtn () {
    btnNvJeu.disabled = false;
    btnJeu.disabled = true;
    inputjeu.disabled = true;
}

function init(){
    //remise a zero du jeu
    restChance = maxChance;
    
    //nettoyage jeu
    resultatP.innerHTML = '';
    
    //nouveau nombre aleatoir
    secret= chiffreAleat (nbrMin, nbrMax);
    
    console.log('le nombre de poireaux est', secret);
    
    actiBtn ();
    
}

function veriReponse (){
    if (Number (inputjeu.value) > 10 || Number (inputjeu.value) < 1){
		resultatP.innerHTML += '<img src="images/error.png" alt="miku heureuse" id="imageError" /> <br /> ';
		
		return;
	}
	
	if (Number (inputjeu.value) > secret){
        restChance--;
        
        resultatP.innerHTML += 'Le nombre de poireaux est plus petit. ';
    } else if (Number (inputjeu.value) < secret) {
        restChance--;
        
        resultatP.innerHTML += 'Le nombre de poireaux est plus grand. ';
    } else {
        resultatP.innerHTML += '<strong>Bravo</strong> vous avez gagné !<br /> <br /> <img src="images/gagne.gif" alt="miku heureuse" id="image" />';
        
        desaBtn();
        return;
    }
    
    
    if (restChance == 0){
        resultatP.innerHTML += '<br /><strong>Perdu</strong> ! Le nombre de poireaux était <strong>' + secret.toString() +'</strong>. <br /> <br /> <img src="images/perdu.gif" alt="miku qui ce roule à tere de colère" id="image" />';
        
        desaBtn();
    } else {
        resultatP.innerHTML += 'Il vous reste <strong>' + restChance.toString() +'</strong> tentative(\s). <br /><br />';
        
    }
}


// nombre de chance avant l'echec du jeu
	var maxChance= 5;
	var restChance;
	
	// le nombre secret de poireaux
	var secret;
	

	//nombre minimum et maximum
	var nbrMin = 1;
	var nbrMax = 10;
	var nbrLimit = document.getElementById('guess');
	nbrLimit.setAttribute ("min", nbrMin);
	nbrLimit.setAttribute ("max", nbrMax);
	nbrLimit.setAttribute("value", Math.round((nbrMax - nbrMin) / 2));
	
	// injecter regles du jeux
	
	var rules = 'Vous avez <strong>' + maxChance.toString() + '</strong> essais pour trouver le nombre de poireaux que Miku a acheté. ';
	rules += 'En sachant qu\'elle en a au moins acheté <strong>' +  nbrMin + '</strong> et qu\'elle ne peut pas en avoir plus de <strong>' +  nbrMax + '</strong> inclus. <br> Bonne Chance !'
	
	var reglesP = document.getElementById('regles');
	reglesP.innerHTML = rules;

//resultat du jeu
var resultatP = document.getElementById('resultat');

// Activation bouton
var btnNvJeu = document.getElementById('nvJeu');
btnNvJeu.addEventListener('click', init);

var btnJeu = document.getElementById('jouer');
btnJeu.addEventListener('click', veriReponse);

var inputjeu = document.getElementById('guess');