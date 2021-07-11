// 1
// var hello;
// console.log(hello);
// hello= 'world';

// 2
// var needle;
// function test(){
//     var needle;
//     needle  = 'magnet';
//     console.log(needle);
// }
// needle  = 'haystack';
// test();


// 3
// var brendan ;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// 4
// var food ;
// eat();
// function eat(){
//     var food ;
//     food  = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// food= 'chicken';
// console.log(food);


//6
// function rewind() {
//     var genre 
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
//     }
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);

//7
// var dojo;
// function learn() {
//         var dojo;
//         dojo = "seattle";
//         console.log(dojo);
//         dojo = "burbank";
//         console.log(dojo);
//     }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//8
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//     }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
