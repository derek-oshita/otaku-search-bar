// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementsByClassName('search-btn'); 
let animeArr = []; 

// DATA 
const loadData = async () => {
    fetch('https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json')
    // .then(
    //     function(response){
    //         if (response.status !== 200)  {
    //             console.log('Error:', response.status); 
    //             return; 
    //         }

    //         response.json().then(function(data) {
    //             console.log(data)
    //         })
    //     }
    // )
    // .catch(function(err) {
    //     console.log(err)
    // })
    .then(response => response.json())
    .then(data => console.log(data.data))
}

// EVENT LISTENERS
searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value)
})

loadData(); 

