// question 1

const expected_minutes_in_oven=40;
// function remainingminutesInOven(minutes){
// return expected_minutes_in_oven-minutes
// }
// console.log(remainingminutesInOven(30));


// function preparationTimeInMinutes(a){
// return 2*a
// }
// console.log(preparationTimeInMinutes(2));

// function totalTimeInMinutes(numberOfLayers,actualMinutesInOven){
//     return  (expected_minutes_in_oven-actualMinutesInOven)+2*numberOfLayers
// }
// console.log(totalTimeInMinutes(3,20));


// question2
// const number=Math.floor(234.34);
// console.log(number);

// function dayRate(a){
//     return a*8
// }
// console.log(dayRate(89));

// function daysInBudget(x,y){
// return Math.floor((x/y)/8)
// }
// console.log(daysInBudget(20000,89));

// function priceWithMonthlyDiscount(c,d,f){
//     const months=Math.floor(d/22); //10 months
//     const days=d%22; //10
//     const daily=c*8; //712
//     const monthly=daily*22; //15664
//     const discount=monthly*(1-f); //9085.12
//     return Math.ceil(discount*months+(daily*days));
// }
// console.log(priceWithMonthlyDiscount(89,230,0.42));

// const number=[1,2,3,4,5,6];
// number.push(7);
// console.log(number);
// number.pop();
// console.log(number);
// number.shift();
// console.log(number);
// number.unshift(0);
// console.log(number);

// number.splice(0,1,'one', 'two' );
// console.log(number);


// question 3 

// const position=2;
// function getItem(array, index){
//     return array[index]
// }
// console.log(getItem([1,2,4,1], position));

// const position=2;
// const replaceCard=6;
// function setItem(array, p, r){
// array.splice(2,1,6);
// return array
// }
// console.log(setItem([1,2,4,1], position, replaceCard));

// const newCard=8;
// function insertItemAtTop(array, b){
// array.push(b);
// return array
// }
// console.log(insertItemAtTop([5,9,7,1], newCard));

// const position=2;
// function removeItem(array, b){
// array.splice(b,1);
// return array
// }
// console.log(removeItem([3,2,6,4,8], position));

// function removeItemFromTop(array){
// array.pop();
// return array
// }
// console.log(removeItemFromTop([3,2,6,4,8]));

// const newCard=8;
// function insertItemAtBottom(array,b){
// array.unshift(b);
// return array
// }
// console.log(insertItemAtBottom([5,9,7,1], newCard));

// function removeitemAtBottom(array){
// array.shift();
// return array
// }
// console.log(removeitemAtBottom([8,5,9,7,1]));
// const stackSize=4;
// function checkSizeOfStack(array,b){
// return array.length==b
// }
// console.log(checkSizeOfStack([3,2,6,4,8], stackSize));

// question 4
// const birdsPerDay=[2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// let total=0;
// function totalBirdCount(array){
//     for (let index = 0; index < array.length; index++) {
//         total+=array[index]
        
//     }
//     return total
// }
// console.log(totalBirdCount(birdsPerDay));

// const birdsPerDay = [2, 5, 0, 7, 4, 1];
// function fixBirdCountLog(array){
// for (let index = 0; index < array.length; index+=2) {
//    array[index]+=1;
    
// }
// return array
// }
// console.log(fixBirdCountLog(birdsPerDay));



// question 5
// const knightIsAwake = true;
// function canExecuteFastAttack(a){
// return !a
// }
// console.log(canExecuteFastAttack(knightIsAwake));

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// function canSpy(a,b,c){
//     return a||b||c
// }
// console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

// const archerIsAwake = true;
// const prisonerIsAwake = true;
// function canSignalPrisoner(a,b){
//     return !a&&b
// }
// console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));
// const knightIsAwake = false; //a
// const archerIsAwake = true;   //b
// const prisonerIsAwake = false; //c
// const petDogIsPresent = false; //d
// function canFreePrisoner(a,b,c,d){
//     return !d&&c&&a&&b
// }
// console.log(canFreePrisoner(knightIsAwake, archerIsAwake,prisonerIsAwake,petDogIsPresent));

// question 6

// const word="Stands so high";
// function frontDoor(string){
// return string[0]
// }
// console.log(frontDoor(word));

// const word='SHIRE'
// function frontDoor(string){
// return string.toLowerCase()
// }
// console.log(frontDoor(word));



// const word='shire';
// function frontDoor(string){
// return string[0].toUpperCase()+string.slice(1)
// }
// console.log(frontDoor(word));

// const word='Stands so high ';
// const word2='Huge hooved too'
// function backDoor(string){
//     let newString=string.trim();
// return newString[newString.length-1]
// }
// console.log(backDoor(word));

// const word='horse';
// function backDoorPassword(string){
// return string[0].toUpperCase()+string.slice(1)+''+ ', please'
// }
// console.log(backDoorPassword(word));























