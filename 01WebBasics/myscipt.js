// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using js'

// const myPElements = document.querySelectorAll('p')

// myPElements.forEach((p) => p.textContent = 'I am changed using js loop')


//console.log(document.getElementById('idone'));



document.querySelector('#myform').addEventListener('input', (event)=>{
    console.log(event.target.value)  
})