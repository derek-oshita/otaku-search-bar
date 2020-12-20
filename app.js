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
        display(resultsList); 
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
    // animeList = animeList.filter( anime => anime.sources[0])
    console.log(animeList)
    const htmlString = animeList.map(series => {
            return `
                <a target="_blank" rel="noopener noreferrer" href="${series.sources[0]}">
                    <div class="img-container">
                        <img class="anime-img rounded" src="${series.picture}" title="${series.title}" />
                        <div class="overlay">
                            <p class="title">${series.title}</p>
                            <p class="meta">${series.animeSeason.year}</>
                            <p class="meta">${series.tags[0]}</>
                            <p class="meta">Episodes: ${series.episodes}</>
                        </div>
                    </div>
                </a>`
    })
    .join(''); 
    animeContainer.innerHTML = htmlString; 
}

loadData(); 


