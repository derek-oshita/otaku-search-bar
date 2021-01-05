// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('search');
const animeContainer = document.getElementById('anime-gallery'); 
const backBtnDiv = document.getElementById('back-btn-div'); 
let animeData = []; 

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

// EVENT LISTENER
searchButton.addEventListener('click', e => {
        handleSearch(); 
});

searchBar.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        handleSearch(); 
    }
}); 

// FUNCTIONS
const display = animeList => {
    // animeList = animeList.filter( anime => anime.sources[0])
    console.log(animeList)
    const animeString = animeList.map(series => {
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
                </a>           
                `
    })
    .join(''); 
    const backBtnString = `
    <section class="back-container">
        <a href="#top">
            <button class="back-btn btn">Back To Top</button>
        </a>
    </section>        
        `
    animeContainer.innerHTML = animeString; 
    backBtnDiv.innerHTML = backBtnString; 
}

const handleSearch = () => {
    let userInput = searchBar.value.toLowerCase(); 
    let resultsList = animeData.filter(anime => {
        return (
            (anime.title.toLowerCase().includes(userInput) ||
            anime.tags.includes(userInput))
        )
    })
    display(resultsList); 
}

// LOAD DATA
loadData(); 


