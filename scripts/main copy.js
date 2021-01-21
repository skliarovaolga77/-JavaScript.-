// const obj = {
//     firstname : 'Maks',
//     surname : 'Leskin'
// }

// const User = function (param) {
//     console.log(this.firstname + 'прошел' + steps);
//     this.firstname  = param.firstname;
//     this.surname  = param.surname;
//     this.step  = param.step;
//     this.walk = function(step){
//         console.log(this.firstname + 'прошел ' + step + );
//     }
// }

// const dmitry = new User ({
//     firstname: 'Дмитрий',
//     surname : 'посадских'
// })

// const Character = function (param) {
//     this.name  = param.name;
//     this.server  = param.server;
//     this.gender = param.gender
// }

// Character.prototype.walk = function() {
//     console.log(this.name + 'идет');
// }

// Character.prototype.run = function() {
//     console.log(this.name + 'бежит');
// }
// //рассы
// const Race = function(param) {
//     Character.apply(this, arguments);
//     this.race = param.races;
    
// }
// Race.prototype.mainSkills = function(){
//     console.log(this.name + 'исп-т сп-ть');
// }
// Race.prototype = Object.create(Character.prototype);
// Race.prototype.constructor = Character;


// const Class = function( param){
//     Race.apply(this, arguments);
//     this.class = param.class;
//     this.spesialskill = getspesialskill();

//     function getspesialskill() {
//         if(this.class == 'war'){
//           return  this.spesialskill = 'рассекающий удар мяча';

//         }
//     }
// }

// Class.prototype.classskills = function() {
//     console.log(    `${Race}` + );
//     console.log(this.name + 'исп-т классовую сп-ть');

// }

// Class.prototype = Object.create(Race.prototype);
// Class.prototype.constructor = Race;


// // const char = new Character({});
// // const race = new Races({});
// // const class = new Class({});

// // console.log(char);
// // console.log(race);


// //создаем персонажа
// const war = new Class({
//     name: 'МаксВоин',
//     server: 'МаксВоин',
//     gender: 'муж',
//     race: 'орк',
//     class : 'war'
// });

// console.log(war);



// const obj = {
//     firstname : 'Olga',
//     surname : 'Sklarova',
// };



const Children = function(param){
    this.firstname =  param.firstname;
    this.surname =  param.surname;
    this.walk = function(step){
        console.log(`${this.firstname} прошла ${step} шагов`);
    };

}


const Katy = new Children({
    firstname : 'Katy',
    surname : 'Sklarova'
})

// const Ira = new Children(obj);

Katy.walk(5000)
// Ira.walk(2000)