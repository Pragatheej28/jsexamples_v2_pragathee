function fetchData(){

    // via promises
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1328&limit=5')      // (?) is a query parameter
    .then((response) => {                                               // obtain the response and return the json format

        return response.json();
    })                                            
    .then((data) => {                                                   // work on the json response
        
        // if fetched data goes beyond 1328 characters
        const returnedCharacters = data.results;

        // if fetched data goes beyond 1328 charactes, no more characters
        if(!returnedCharacters.length)
            throw new Error("No characters found.");                    // gracfully handle the 'error'
        
        console.log(data);
    })                                            
    .catch((error) => {                                                 // handle errors
        console.log(error.message);
    });                                                 

}

// call / invoke the function
fetchData();