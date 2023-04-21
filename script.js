const btAdcionar = document.querySelector('#adcionar');
const api = document.querySelector('#api'); 
const btLimpar = document.querySelector('#limpar');

const url = 'https://api.kanye.rest';

btAdcionar.addEventListener('click', (e)=>{
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        api.innerHTML = JSON.stringify(data.quote);
        console.log(data)
    })
    .catch(e => console.log('error: ' + e.message))
});

btLimpar.addEventListener('click', ()=>{
    api.innerHTML = "";
    });