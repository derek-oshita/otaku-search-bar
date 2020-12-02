// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementsByClassName('search-btn'); 
let animeData = []; 

// DATA 
const loadData = async () => {
    fetch('https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json')
    .then(response => response.json())
    .then(data => {
        animeData = data.data; 
        // display goes here
        display(animeData)
    })
    .catch(err => {
        console.log('Error: ', err)
    })
}; 

// FUNCTIONS
const display = animeList => {
    const htmlString = animeList.map( series => {
        return `${series.title}`
    })
    console.log(htmlString)
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
    console.log(resultsList)
})

loadData(); 

