// const sayHello = (name) => `hey there ${name} !`

// console.log(sayHello("Sammy"));

const todos =[{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go to Gym',
    isDone: true,
}, {
    title: 'Record youtube videos',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone);


const camers = {
    price: 600,
    weight:2000,
    myDes: function() {
        return `This canon camers is of $${this.price}`
    }
}

console.log(camers.myDes());

