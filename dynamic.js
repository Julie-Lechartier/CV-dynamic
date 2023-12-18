//changer couleur du CV
function changeCV(color) { 
    document.body.style.background = color; 
}







//insertion de texte avec JS
class titreDuCV{
    constructor(unTitre){
        this.unTitre = unTitre
    }
}

const us1titreCV = new titreDuCV("Ingénieur Aérodynamique")
document.getElementById("titreCV").innerHTML = us1titreCV.unTitre

class aProposCV{
    constructor(propos){
        this.propos = propos
    }
}
const us1propos = new aProposCV("Recherche Alternance")
document.getElementById("aPropos").innerHTML = us1propos.propos

class nomPrenomCV{
    constructor(personne){
        this.personne = personne
    }
}
const us1nomPrenom = new nomPrenomCV("Henri Petit")
document.getElementById("nomPrenom").innerHTML = us1nomPrenom.personne


//Partie Perso
class mail{
    constructor(unMail){
        this.unMail = unMail;
    }
}
class address{
    constructor(uneAdsress){
        this.uneAdsress = uneAdsress;
    }
}

class tel{
    constructor(num){
        this.num = num;
    }
}



// Partie Compétence
class compétence{
    constructor(compt){
        this.compt = compt;
    }
}


//Partie Langue

class Langue{
    constructor(Lang){
        this.Lang = Lang
    }

}

//Partie Soft Skill

class softSkill{
    constructor(ss){
        this.ss = ss
    }
}



//Partie Expérience professionnel

//travail 1 
class titrePro01{
    constructor(titrePro1){
        this.titrePro1 = titrePro1
    }
}

class entreprise01{
    constructor(entreprise1){
        this.entreprise1 = entreprise1
    }
}

class lieu01{
    constructor(lieu1){
        this.lieu1 = lieu1
    }
} 
class poste01{
    constructor(poste1){
        this.poste1 = poste1
    }
}
class periode01{
    constructor(periode1){
        this.periode1 = periode1
    }
}


// travail 2 

class titrePro02{
    constructor(titrePro2){
        this.titrePro2 = titrePro2
    }
}

class entreprise02{
    constructor(entreprise2){
        this.entreprise2 = entreprise2
    }
}

class lieu02{
    constructor(lieu2){
        this.lieu2 = lieu2
    }
} 
class poste02{
    constructor(poste2){
        this.poste2 = poste2
    }
}
class periode02{
    constructor(periode2){
        this.periode2 = periode2
    }
}


//travail 3
class titrePro03{
    constructor(titrePro3){
        this.titrePro3 = titrePro3
    }
}

class entreprise03{
    constructor(entreprise3){
        this.entreprise3 = entreprise3
    }
}

class lieu03{
    constructor(lieu3){
        this.lieu3 = lieu3
    }
} 
class poste03{
    constructor(poste3){
        this.poste3 = poste3
    }
}
class periode03{
    constructor(periode3){
        this.periode3 = periode3
    }
}

// Utilisateur 1
    //liste
const us1Mail = new mail("Henri.petit@sfr.fr")
const us1Address = new address("Villeurbanne, Lyon")
const us1Tel = new tel("06 05 07 81 50")

const us1Compt1 = new compétence ("HTML")
const us1Compt2 = new compétence ("CSS")
const us1Compt3 = new compétence ("Python")
const us1Compt4 = new compétence ("C")
const us1Lang1 = new Langue ("Anglais")
const us1Lang2 = new Langue ("Français")
const us1Ss1 = new softSkill("Motivé")
const us1Ss2 = new softSkill("Curieux")
const us1Ss3 = new softSkill("Adaptable")
const us1Ss4 = new softSkill("Concienssieux")


let listContact = [us1Mail.unMail, us1Address.uneAdsress, us1Tel.num,];
for (i=0; i<listContact.length; i++){
    let elementListe = document.createElement("li");
    elementListe.innerHTML = listContact[i]
    document.getElementById("contact").appendChild(elementListe);
}

let listCompetence = [us1Compt1.compétence, us1Compt2.compétence, us1Compt3.compétence, us1Compt4.compétence]
for (i=0; i<listCompetence.length; i++){
    let liste = document.createElement("li");
    liste.innerHTML = listCompetence[i];
    document.getElementById("competences").appendChild(liste)
}

let listLangage = [us1Lang1.Lang, us1Lang2.Lang]
for (i=0; i<listLangage.length; i++){
    let lang = document.createElement("li");
    lang.innerHTML = listLangage[i];
    document.getElementById("langage").appendChild(lang)
}

let listSS = [us1Ss1.ss, us1Ss2.ss, us1Ss3.ss, us1Ss4.ss]
for (i=0; i<listSS.length; i++){
    let sofS = document.createElement("li");
    sofS.innerHTML = listSS[i];
    document.getElementById("softSkill").appendChild(sofS)
}



//expérience pro

const us1TitrePro1 = new titrePro01("Vente")
const us1Entreprise1 = new entreprise01("Carrefour")
const us1Lieu1 = new lieu01("Lyon")
const us1Poste1 = new poste01("tennue de caisse")
const us1Periode1 = new periode01("12 décemnbre au 15 Janvier 2021")
const us1TitrePro2 = new titrePro02("Vente")
const us1Entreprise2 = new entreprise02("Zara")
const us1Lieu2 = new lieu02("Lyon")
const us1Poste2 = new poste02("Conseille de vente")
const us1Periode2 = new periode02("Juin - Aout 2022")
const us1TitrePro3 = new titrePro03("Boulangerie")
const us1Entreprise3 = new entreprise03("Painaulait")
const us1Lieu3 = new lieu03("Villeurbanne")
const us1Poste3 = new poste03("Vente")
const us1Periode3 = new periode03("Septembre 2023")


document.getElementById("titrePro001").innerHTML = us1TitrePro1.titrePro1
document.getElementById("Entreprise001").innerHTML = us1Entreprise1.entreprise1
document.getElementById("lieu001").innerText = us1Lieu1.lieu1
document.getElementById("poste001").innerHTML = us1Poste1.poste1
document.getElementById("periode001").innerHTML = us1Periode1.periode1
document.getElementById("titrePro002").innerHTML = us1TitrePro2.titrePro2
document.getElementById("Entreprise002").innerHTML = us1Entreprise2.entreprise2
document.getElementById("lieu002").innerHTML = us1Lieu2.lieu2
document.getElementById("poste002").innerHTML = us1Poste2.poste2
document.getElementById("periode002").innerHTML = us1Periode2.periode2
document.getElementById("titrePro003").innerHTML = us1TitrePro3.titrePro3
document.getElementById("Entreprise003").innerHTML = us1Entreprise3.titrePro3
document.getElementById("lieu003").innerHTML = us1Lieu3.lieu3
document.getElementById("poste003").innerHTML = us1Poste3.poste3
document.getElementById("periode003").innerHTML = us1Periode3.periode3


//formation

class nomFormation{
    constructor(nomForma){
        this.nomForma = nomForma
    }
}

class lieuFormation{
    constructor(lieuForma){
        this.lieuForma = lieuForma
    }
}

class dateFormation{
    constructor(dateForma){
        this.dateForma = dateForma
    }
}
class autreInfo{
    constructor(autre){
        this.autre = autre
    }
}

const us1nomForma1 = new nomFormation("Ecole d'ingénieur aérodynamique")
const us1lieuForma1 = new lieuFormation("Villeurbanne")
const us1dateForma1 = new dateFormation("2021 - 2024")


const us1nomForma2 = new nomFormation("BAC S")
const us1lieuForma2 = new lieuFormation("Villeurbanne")
const us1dateForma2 = new dateFormation("2020")
const us1autre2 = new autreInfo("option physique chimie")

document.getElementById("nomFor1").innerHTML = us1nomForma1.nomForma
document.getElementById("lieufor1").innerHTML = us1lieuForma1.lieuForma
document.getElementById("quandfor1").innerHTML = us1dateForma1.dateForma

document.getElementById("nomFor2").innerHTML = us1nomForma2.nomForma
document.getElementById("lieufor2").innerHTML = us1lieuForma2.lieuForma
document.getElementById("quandfor2").innerHTML = us1dateForma2.dateForma
document.getElementById("autre2").innerHTML = us1autre2.autre
