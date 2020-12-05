/* 
.addEventListener is showing up as not a function when added to searchButton; 
something something it's being added to an html element before it's available 
*/


// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('search');
const animeContainer = document.getElementById('anime-list'); 
let animeData = []; 

// EVENT LISTENERS
// searchBar.addEventListener('keyup', (e) => {
//     const searchStr = e.target.value.toLowerCase(); 
//     const resultsList = animeData.filter( anime => {
//         return (
//             // title
//             anime.title.toLowerCase().includes(searchStr) ||
//             // tags 
//             anime.tags.includes(searchStr)
//         )
//     })
//     // console.log(resultsList)
//     display(resultsList)
// })

searchButton.addEventListener('click', e => {
    let userInput = searchBar.value.toLowerCase(); 
    let resultsList = animeData.filter(anime => {
        return (
            anime.title.toLowerCase().includes(userInput) ||
            anime.tags.includes(userInput)
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
        // display(animeData)
    })
    .catch(err => {
        console.log('Error: ', err)
    })
}; 

// FUNCTIONS
const display = animeList => {
    const htmlString = animeList.map(series => {
        return `
        <li class="series-card">
            <img src="${series.picture}"/>
        </li>
        `
    })
    .join(''); 
    animeContainer.innerHTML = htmlString; 
}



loadData(); 

