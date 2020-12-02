// HTML ELEMENTS 
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementsByClassName('search-btn'); 

// DATA 
const loadData = async () => {
    fetch('https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json')
    .then(
        function(response){
            if (response.status !== 200)  {
                console.log('Error:', response.status); 
                return; 
            }

            response.json().then(function(data) {
                console.log(data)
            })
        }
    )
    .catch(function(err) {
        console.log(err)
    })
}

// EVENT LISTENERS
searchBar.addEventListener('keyup', (e) => {
    console.log(e)
})

loadData(); 

