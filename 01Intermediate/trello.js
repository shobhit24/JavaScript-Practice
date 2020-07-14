const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// for(let index = 0; index < days.length; index++) {
//     console.log(days[index]);

// }


// const myTodos = []

// myTodos.unshift('Buy Bread')
// myTodos.unshift('Record videos for youtube')
// myTodos.unshift('Go to Gym')

// myTodos.forEach(function(todo, index){
//     console.log(`Your task no. ${index+1} is: ${todo}`);
    
// })


console.log(days[0]);



days.forEach(function (day, index) {
    console.log(`starts with ${index+1} -- ${day}`);
})