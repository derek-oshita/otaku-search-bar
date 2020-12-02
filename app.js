/* 
NEED TO UNDERSTAND WHY THE HTML IS NOT POPULATING IN THE UL ANIMELIST
*/


// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementsByClassName('search-btn'); 
const animeContainer = document.getElementById('anime-list'); 
let animeData = []; 

// DATA 
const loadData = async () => {
    fetch('https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json')
    .then(response => response.json())
    .then(data => {
        animeData = data.data;
        display(animeData)
    })
    .catch(err => {
        console.log('Error: ', err)
    })
}; 

// FUNCTIONS
const display = animeList => {
    const htmlString = animeList.map( series => {
        return `
        <li>
            <p>${series.title}</p>
        </li>
        `
    })
    .join(''); 
    animeContainer.innerHTML = htmlString; 
    // console.log('htmlString', htmlString)
    // console.log('animeList UL', animeList)
}

// EVENT LISTENERS
searchBar.addEventListener('keyup', (e) => {
    const searchStr = e.target.value.toLowerCase(); 
    const resultsList = animeData.filter( anime => {
        return (
            // title
            anime.title.toLowerCase().includes(searchStr) ||
            // tags 
            anime.tags.includes(searchStr)
        )
    })
    // console.log(resultsList)
    display(resultsList)
})

loadData(); 

