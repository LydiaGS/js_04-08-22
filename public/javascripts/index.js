// vous allez creer une classe Athlete
// elle aura comme propriete nom, taille(number), poids(number) et efficacite(number entre 1 et 100 qui aura une valeur par default de 50 si aucune valeur n'est passee) 
// cette classe aura deux sous-classes Nageur et boxeur
class Athlete{
    constructor(nom,taille,poids,efficacite){
        this.nom = nom
        this.taille=Number(taille);
        this.poids = Number(poids);
        this.efficacite=Number(efficacite);
    }
}
console.log("hello world");
// les nageurs auront une methode nager()
// dans cette methode vous aller definir une variable "performance" qui sera egale a (un nombre au hazard entre 1-100 + l'efficacité de l'athlete)
// cette methode reournera aussi cette valeur (performance) 

class Nageur extends Athlete{
    constructor(nom,taille,poids,efficacite, nager){
        super(nom,taille,poids,efficacite);

this.nager= nager
    }

}
console.log ( `le nageur ${this.nom} a une taille de {taille du nageur} et une efficacité de ${this.efficacite}`);

while(amandine.Athlete<= Elouan.Athlete) {
    amandine.Athlete(Elouan)
    Elouan.Athlete(amandine)
}
    console.log(`félicitation ${this.nom}` )
    if(amandine.Athlete==Elouan.athlete){
console.log("egalité");
    }else if(Elouan.athlete>amandine.Athlete){
console.log(`tu as perdu ${this.nom}`);
    }else if(amandine.Athlete<Elouan.Athlete){
        console.log(`tu as gagner ${this.nom}`);
    }

// les boxeurs auront un attribut supplementaire, endurance(number entre 1 et 10 qui aura une valeur par default de 5)
// les boxeurs auront une methode attaquer() qui prend en parametre un autre boxeur et a une chance sur 2 de diminuer de 1 l'endurance de l'autre boxeur
// afficher si il rate ou si il reussi afficher combien d'endurance il reste au boxeur (preciser le nom du boxeur)
// vous aller creer 2 boxeur
// chaque boxeur va attaquer chacun son tour jusqu'a ce que un des deux voie son endurance tomber a 0 => afficher alors une phrase pour feliciter le gagnant 
class Boxeur extends Athlete{
    constructor(nom,taille,poids,efficacite=50, endurance=5){
        super(nom,taille,poids,efficacite);
this.endurance=endurance

    }
    attaquer(boxeur){
        let number = Math.floor(Math.random() * 2) + 1;
            // this.endurance = number +  this.endurance
            console.log(`${this.nom} attaque ${boxeur.nom}` );
            if (number === 1){
                quentin.endurance-=1;
                wallid.endurance-=1;
                console.log(`tu as réussi il reste ${this.endurance}`);
        }else(number === 2); {
                console.log(`tu as raté il reste ${this.nom}`);   
            }
        }

}
let quentin= new Boxeur("quentin", 183, 72 );
let wallid= new Boxeur("wallid", 185, 69 );

while(quentin.endurance>0 && wallid.endurance >0) {
    quentin.attaquer(wallid)
    wallid.attaquer(quentin)
}
    console.log(`félicitation ${this.nom}` )
    if(quentin.endurance==wallid.endurance){
console.log("egalité");
    }else if(wallid.endurance>quentin.endurance){
console.log(`tu as perdu ${this.nom}`);
    }else if(wallid.endurance<quentin.endurance){
        console.log(`tu as gagner ${this.nom}`);
    }
// Vous allez creer 4 nageurs, 
// pour chaque nageur vous aller afficher une phrase du genre "le nageur {nom du nageur} a une taille de {taille du nageur} et une efficacité de {efficacité du nageur}"
// vous aller ensuite appeler la methode nager pour chaque nageur et recuperer la valeur performance retournee.
let amandine= new Athlete("lydia",164,50,10, 25);
let Elouan = new Athlete("Elouan" ,59,10,5, 15);
let adelaide = new Athlete("adelaide",168,56,30, 35);
let simon = new Athlete("simon",172,90,45, 30);
// afficher ensuite un message pour feliciter le gagnant (celui avec la plus grande performance)
// si le nageur gagnant avait une efficacite plus petite que au moins deux autres nageur afficher un autre message du style "C'est incroyable mais il l'a fait !"
quentin.attaquer(wallid);
wallid.attaquer(quentin);

amandine.Athlete(adelaide);
Elouan.Athlete(amandine) ;
adelaide.Athlete(simon);
simon.Athlete(adelaide);

//---------------------------------------------------------------------------------exo2------------------------------------------------------------------------------------------------
// Vous allez creer Pilote, une nouvelle sous-classe de Athlete
// rajoutez lui les proprietes score(number) qui sera par default egal a 0 et ecurie(string) (la team pour laquelle il concours)
// les pilotes auront une methode faireUnTemps() qui prendra un circuit en parametre et retournera un temps 
// le temps retourné est calculé en faisant l'efficacité du pilote - un nombre au hazard entre 1 et l'efficacité du pilot + la longueur du circuit


// vous allez creer une classe Circuit
// proprietes: nom(string), longueur(number), maxPilotes(number), pilotes(array)
// les circuit auront une methode contreLaMontre() qui aura pour but de changer l'ordre du tableau pilotes:
// pour chaque pilote du tableau appeler sa methode faireUnTemps()
// vous allez devoir reordonner le tableau pilotes par ordre croissant de leur temps (retourner par la methode faireUnTemps())
// les circuits ont une methode donnerLesPoints() qui pour chaque pilote du tableau pilotes augmentera le score de celui-ci en fonction de sa position dans le tableau

// points = (nombre de pilotes - position dans le tableau) * 2

// POSITION    POINTS
// [0]         6       => (3 - 0) * 2
// [1]         4       => (3 - 1) * 2
// [2]         2       => (3 - 2) * 2

// n'oubliez pas d'afficher qui gagne combien de points 
// et qui est le gagnant du grand prix de [nom du circuit]

// vous aller creer 4 pilotes
// deux pilotes appartiendront a une ecurie les deux autres a une autre
// vous aller creer 2 circuits
// pour chaque circuit vous allez appellez contreLaMontre() et donnerLesPoints()
// apres tout ca afficher le pilote avec le plus gros score