 /*
        let sayHello = function (name) {
            console.log(`Greeting mesage for ${name}`);
            console.log(`Hey ${name}`);
        }

        sayHello('John');


        let fullNameMaker = function(firstname, lastname) {
            console.log('Welcome to LCO');
            console.log(`Happy to have you, ${firstname} ${lastname}`);
        }

        fullNameMaker('John', 'Doe')

    */


    let myMultiplier = function(num1, num2) {
        return num1 * num2
    }

    let guestUser = function(name = 'name', courseCount = 0) {
        return 'Hello ' + name + ' and your course count is ' + courseCount
    }

    console.log(guestUser('John', 1));
    