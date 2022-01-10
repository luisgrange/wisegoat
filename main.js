const quotes = document.querySelector('#quotes');
const home = document.querySelector('#home');
const url = 'https://api.adviceslip.com/advice';

/*async function callApi(){
    const response = await fetch(url);
    const json = await response.json();
    const q = JSON.parse(JSON.stringify(json));

    document.querySelector('.quote').innerHTML = `${q.slip.advice}`
};*/

document.addEventListener('click', function(){
    home.classList.add('hidden');
    quotes.classList.remove('hidden');
    //callApi();
});
