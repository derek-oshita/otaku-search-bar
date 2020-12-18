// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('search');
const animeContainer = document.getElementById('anime-gallery'); 
let animeData = []; 

// EVENT LISTENER
searchButton.addEventListener('click', e => {
    let userInput = searchBar.value.toLowerCase(); 
    let resultsList = animeData.filter(anime => {
        return (
            (anime.title.toLowerCase().includes(userInput) ||
            anime.tags.includes(userInput))
        )
    })
    display(resultsList)
}); 

// DATA 
const loadData = async () => {
    fetch('https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json')
    .then(response => response.json())
    .then(data => {
        animeData = data.data;
    })
    .catch(err => {
        console.log('Error: ', err)
    })
}; 

// FUNCTIONS
const display = animeList => {
    const htmlString = animeList.map(series => {
        return `
            <img class="anime-img rounded" src="${series.picture}" />
        `
    })
    .join(''); 
    animeContainer.innerHTML = htmlString; 
}

loadData(); 



