/**
// var prompt = require('prompt-sync')();

var SE = parseFloat(prompt("enter le stock d'entrée :  "))
var SS = parseFloat(prompt('enter le stock de sortie :  '))
var SI = parseFloat(prompt('enter le stock initial :  '))

var SR = SI + (SE - SS)


console.log('-------------------')
console.log('-------------------')
console.log('-------------------')

console.log('le stock entrée est :  ' + SE)
console.log('le stock de sortie est :  ' + SS)
console.log('le stock initial est :  ' + SI)
console.log('le stock réel est :  ' + SR)

*/




// let a = ['zéro' , 'un' , 'deux' , 'trois' , 'quatre' , 'cinq']

// for(let i=0 ; i < 5 ;i++){
//     console.log(i , " : " , a[i])
// }



// for(let i=0 ; i < 5 ;i++){
//     if(i == 0){
//         console.log(i , " : zéro")
//     }else if (i == 1){
//         console.log(i , " : un")
//     }else if (i == 2){
//         console.log(i , " : deux")
//     }else if (i == 3){
//         console.log(i , " : trois")
//     }else if (i == 4){
//         console.log(i , " : quatre")
//     }
// }

// for(let i=0 ; i < 5 ;i++){
//     switch(i) {
//         case 0:
//             console.log(i , " : zéro")
//             break
//         case 1:
//             console.log(i , " : un")
//             break
//         case 2:
//             console.log(i , " : deux")
//             break
//         case 3:
//             console.log(i , " : trois")
//             break
//         case 4:
//             console.log(i , " : quatre")
//             break
//     }
// }

// var table = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]
// for(let i=0 ; i < 10 ;i++){
//     console.log(table[i])
// }




























// let emps = [
//   { mat: '1', sal: '20', pr_tr: '30', pr_log: '10' },
//   { mat: '2', sal: '20', pr_tr: '30', pr_log: '20' },
//   { mat: '3', sal: '30', pr_tr: '40', pr_log: '50' },
//   { mat: '4', sal: '1', pr_tr: '2', pr_log: '3' },
//   { mat: '5', sal: '12', pr_tr: '2', pr_log: '3' }
// ]

// for (i = 0 ; i < 5 ; i++){
//     let mat = prompt("enter le matricule de l'employé : " )
//     let sal = parseFloat(prompt("enter le salaire de l'employé : " ))
//     let pr_tr = parseFloat(prompt("enter le prime de transport : " ))
//     let pr_log = parseFloat(prompt("enter le prime de logement : " ))
//     console.log("*******")
//     console.log("*******")
//     console.log("*******")
//     emps.push({mat: mat, sal: sal, pr_tr: pr_tr, pr_log: pr_log})
// }

// console.log(emps)

// for (let i = 0; i < 5; i++){
//     console.log("salaire net de l'employé" , i+1 , "est : " , emps[i].sal)
// }

// for (let i = 0; i < 5; i++){
//     console.log("salaire net global de l'employé " , i+1 , " est : " , emps[i].sal + emps[i].pr_tr + emps[i].pr_log )
// }



// const prompt = require('prompt-sync')();

// var emps = []



// for (i = 0 ; i < 5 ; i++){
//     let mat = prompt("enter le matricule de l'employé : " )
//     let sal = parseFloat(prompt("enter le salaire de l'employé : " ))
//     let pr_tr = parseFloat(prompt("enter le prime de transport : " ))
//     let pr_log = parseFloat(prompt("enter le prime de logement : " ))
//     console.log("*******")
//     console.log("*******")
//     console.log("*******")
//     emps.push([mat, sal, pr_tr, pr_log])
// }

// console.log(emps)

// for (let i = 0; i < 5; i++){
//     console.log("salaire net de l'employé" , i+1 , "est : " , emps[i][1])
// }

// let total = 0
// for (let i = 0; i < 5; i++){
//     total += emps[i][1] 
// }

// console.log("salaire net global de l'employés est : " , total)





// class etudiant{
//     constructor(id , name , pre , age){
//         this.id = id
//         this.name = name
//         this.pre = pre
//         this.age = age
//     }

//     saisir(){
//         this.id = parseInt(prompt("id : "))
//         this.name = prompt("nom : ")
//         this.pre = prompt("pre : ")
//         this.age = parseInt(prompt("age : "))
//     }

//     afficher(){
//         console.log(`id : ${this.id} , nom : ${this.name} , pre : ${this.pre} , age : ${this.age}`)
//     }
// }


// const e1 = new etudiant()
// e1.saisir()
// e1.afficher()


// const e2 = new etudiant()
// e2.saisir()
// e2.afficher()





// class produit{
//     constructor(code , des , qaunt , prix){
//         this.code = code
//         this.des = des
//         this.qaunt = qaunt
//         this.prix = prix
//     }

//     saisir(){
//         this.code = parseInt(prompt("code : "))
//         this.des = prompt("des : ")
//         this.qaunt = parseInt(prompt("quantite : "))
//         this.prix = parseFloat(prompt("prix : "))
//     }

//     afficher(){
//         console.log(`code : ${this.code} , designation : ${this.des} , quantite : ${this.qaunt} , prix : ${this.prix}`)
//     }

//     valorisation(){
//         console.log(`la valorisation du produit est : ${this.qaunt * this.prix}`)
//     }
// }

// const p1 = new produit()

// while (true){
//     console.log("1 pour saisir , 2 pour afficher , 3 pour la valorisation , authre pour sortie")
//     const ch = prompt("choisissez une opperation : ")
    

//     if (ch == '1'){
//         p1.saisir()
//     }else if (ch == '2'){
//         p1.afficher()
//     }else if (ch == '3'){
//         p1.valorisation()
//     }else {
//         break
//     }
// }









// while (true){

//     let counter = 0

//     if (counter == 0){
//         console.log("vous devez choisir saisir 1 la premiere fois ")
//         console.log("*")
//         console.log("*")
//     }

//     console.log("1 pour saisir")
//     console.log("2 pour afficher")
//     console.log("3 pour la valorisation")
//     console.log("*exit* pour sortie")
//     console.log("*")
//     console.log("*")
//     console.log("*")

//     const ch = prompt("choisissez une opperation : ")

//     if (counter != 0){
//         console.log("vous devai saisir un produit ! " )
//     }else if (ch == '1'){
//         counter += 1
//         p1.saisir()
//     }else if (ch == '2' && counter == 0){
//         p1.afficher()
//     }else if (ch == '3' && counter == 0){
//         p1.valorisation()
//     }else if(ch == 'exit'){
//         break
//     }
// }




// let number = parseInt(prompt('inter ur number'))
// console.log(number)

// if (number == 0){
//     console.log('number is 0');
// }else if(number > 0){
//     console.log('number is positif');
    
// }else if (number < 0){
//     console.log('number is negatif');
    
// }


// if (number % 2 == 0) {
//     console.log('number is even');
    
// }else{
//     console.log('number is odd');
    
// }




// let x = 1
// let count = 0


// if (number > 1){
//     while(x < number+1){
//         if(number % x == 0){
//             count = count + 1
//         }
//         x = x + 1
//     }
// }else {
//     count = 1
// }



// if (count == 2){
//     console.log('prime');
    
// }else{
//     console.log('not prime');
    
// }
