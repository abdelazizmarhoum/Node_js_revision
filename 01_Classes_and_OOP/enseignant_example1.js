class Enseignant {
    
    constructor (nom, pre,nb_h){
        this.nom=nom
        this.pre=pre
        this.nb_h=nb_h
    }

    info(){
        console.log(`le nom est : ${this.nom} , prenom est : ${this.pre} , le nimbre des heure est : ${this.nb_h}`)
    }
}

class Enseignant_chercher extends Enseignant{

    constructor (nom,pre,nb_h,salaire,prime){
        super(nom,pre,nb_h)
        this.salaire=salaire
        this.prime=prime
    }

    info(){
        console.log(`le nom est : ${this.nom} , prenom est : ${this.pre} , le nimbre des heure est : ${this.nb_h} le saliare est : ${this.salaire} , le prime est : ${this.prime} , le total est : ${this.salaire + this.prime}`)
    }
}

class Les_vacataires extends Enseignant{
    constructor(nom,pre,nb_h,nb_c){
        super(nom,pre,nb_h)
        this.nb_c = nb_c
    }

    info(){
        console.log(`le nom est : ${this.nom} , prenom est : ${this.pre} , le nimbre des heure est : ${this.nb_h} le salire est : ${this.nb_h * this.nb_c}`)
    }
}

const ens_cher = new Enseignant_chercher('aziz','marhoum',30,4000,500)
ens_cher.info()

const vac = new Les_vacataires('ayoub','amin',50,40)
vac.info()
