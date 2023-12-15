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
class compt01{
    constructor(compt1){
        this.compt1 = compt1;
    }
}

class compt02{
    constructor(compt2){
        this.compt2 = compt2;
    }
}
class compt03{
    constructor(compt3){
        this.compt3 = compt3;

    }
}

class compt04{
    constructor(compt4){
        this.compt4 = compt4;

    }
}


//Partie Langue

class Lang1{
    constructor(Lang1){
        this.Lang1 = Lang1
    }

}
class Lang2{
    constructor(Lang2){
        this.Lang2 = Lang2
    }

}

//Partie Soft Skill

class Ss1{
    constructor(Ss1){
        this.Ss1 = Ss1
    }
}

class Ss2{
    constructor(Ss2){
        this.Ss2 = Ss2
    }
}

class Ss3{
    constructor(Ss3){
        this.Ss3 = Ss3
    }
}

class Ss4{
    constructor(Ss4){
        this.Ss4 = Ss4
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

class titrePro2{
    constructor(titrePro2){
        this.titrePro2 = titrePro2
    }
}

class entreprise2{
    constructor(entreprise2){
        this.entreprise2 = entreprise2
    }
}

class lieu2{
    constructor(lieu2){
        this.lieu2 = lieu2
    }
} 
class poste2{
    constructor(poste2){
        this.poste2 = poste2
    }
}
class periode2{
    constructor(periode2){
        this.periode2 = periode2
    }
}


//travail 3
class titrePro3{
    constructor(titrePro3){
        this.titrePro3 = titrePro3
    }
}

class entreprise3{
    constructor(entreprise3){
        this.entreprise3 = entreprise3
    }
}

class lieu3{
    constructor(lieu3){
        this.lieu3 = lieu3
    }
} 
class poste3{
    constructor(poste3){
        this.poste3 = poste3
    }
}
class periode3{
    constructor(periode3){
        this.periode3 = periode3
    }
}

// Utilisateur 1
    //liste
const us1Mail = new mail("Henri.petit@sfr.fr")
const us1Address = new address("Villeurbanne, Lyon")
const us1Tel = new tel("06 05 07 81 50")

const us1Compt1 = new compt01 ("HTML")
const us1Compt2 = new compt02 ("CSS")
const us1Compt3 = new compt03 ("Python")
const us1Compt4 = new compt04 ("C")
const us1Lang1 = new Lang1 ("Anglais")
const us1Lang2 = new Lang2 ("Français")
const us1Ss1 = new Ss1("Motivé")
const us1Ss2 = new Ss2("Curieux")
const us1Ss3 = new Ss3("Adaptable")
const us1Ss4 = new Ss4("Concessieux")


let listContact = [us1Mail.unMail, us1Address.uneAdsress, us1Tel.num,];
for (i=0; i<listContact.length; i++){
    let elementListe = document.createElement("li");
    elementListe.innerHTML = listContact[i]
    document.getElementById("contact").appendChild(elementListe);
}

let listCompetence = [us1Compt1.compt1, us1Compt2.compt2, us1Compt3.compt3, us1Compt4.compt4]
for (i=0; i<listCompetence.length; i++){
    let liste = document.createElement("li");
    liste.innerHTML = listCompetence[i];
    document.getElementById("competences").appendChild(liste)
}

let listLangage = [us1Lang1.Lang1, us1Lang2.Lang2]
for (i=0; i<listLangage.length; i++){
    let lang = document.createElement("li");
    lang.innerHTML = listLangage[i];
    document.getElementById("langage").appendChild(lang)
}

let listSS = [us1Ss1.Ss1, us1Ss2.Ss2, us1Ss3.Ss3, us1Ss4.Ss4]
for (i=0; i<listSS.length; i++){
    let sofS = document.createElement("li");
    sofS.innerHTML = listSS[i];
    document.getElementById("softSkill").appendChild(sofS)
}





const us1TitrePro1 = new titrePro01("Vente")
const us1Entreprise1 = new entreprise01("Carrefour")
const us1Lieu1 = new lieu01("Lyon")
const us1Poste1 = new poste01("tennue de caisse")
const us1Periode1 = new periode01("12 décemnbre au 15 Janvier 2021")
const us1TitrePro2 = new titrePro2("Vente")
const us1Entreprise2 = new entreprise2("Zara")
const us1Lieu2 = new lieu2("Lyon")
const us1Poste2 = new poste2("Conseille de vente")
const us1Periode2 = new periode2("Juin - Aout 2022")
const us1TitrePro3 = new titrePro3("Boulangerie")
const us1Entreprise3 = new entreprise3("Painaulait")
const us1Lieu3 = new lieu3("Villeurbanne")
const us1Poste3 = new poste3("Vente")
const us1Periode3 = new periode3("Septembre 2023")


document.getElementById("titrePro001").innerHTML = us1TitrePro1.titrePro1
document.getElementById("Entreprise001").innerHTML = us1Entreprise1.entreprise1
document.getElementById("lieu001").innerText = us1Lieu1.lieu1
document.getElementById("poste001").innerHTML = us1Poste1.poste1