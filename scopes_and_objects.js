// TODO: Create a global variable called globalCount
var globalCount=10

// TODO: Create a function that demonstrates local scope
let locallyScoped=function(){
   let count = 5

while (count > 0) { console.log(count); count-- }
}

locallyScoped()
// TODO: Create a function that tries to modify both variables
let changeBoth=()=>{
    console.log(globalCount);
    globalCount++;
    //count++ will not work

}
changeBoth()
// TODO: Create a Student constructor function
function constructorPerson(name,lastName,eye,hairType,age){

    this.name=name,
    this.lastName=lastName,
    this.hairType=hairType,
    this.eye=eye,
    this.age=age
}
// TODO: Create several student instances
let constructorStudent= new constructorPerson('Phoenix','Chung','Grey','Curly',20)
let constructorStudent2= new constructorPerson('Tylor','Mentor','Brown','Curly',23)
let constructorStudent3= new constructorPerson('Taaraa','Haron','Blue','Curly',18)
let constructorStudent4= new constructorPerson('Yaqoob','Samsodien','Brown','Wavy',19)
let constructorStudent5= new constructorPerson('Toufeeq','Farat','Brown','Straight',23)
console.log(constructorStudent);
console.log(constructorStudent2);
console.log(constructorStudent3);
console.log(constructorStudent4);
console.log(constructorStudent5);
// TODO: Create an object literal with nested properties
let individual= {
    firstName:'Yaqoob',
    lastName:'Samsodien',
    favouriteColour:'Green',
    favouriteGame:'Red Dead Redemption 2',
    favouriteHobbies:{
        sports:'Kickboxing',
        leisurely:'Gaming'
    }
}
console.log(individual)
