function myValidation() {
    let myValue = document.getElementById('myform').value;

    if(isNaN(myValue) || myValue < 1 || myValue >20) {
        console.log("Not a valid Input");
    } else {
        console.log('this input is ok')
    }
}


document.querySelector('.myform').addEventListener('submit', (event) => {
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
})
