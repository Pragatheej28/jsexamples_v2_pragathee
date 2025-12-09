function fetchData() {
  // TODO: fetch via promise
  fetch("https://reqres.in/api/unknown", {
    // headers: { "x-api-key": "reqres_96d368b91d474e239cb2982618e4118d" }
  })
  .then((response) => {

    // if the response has an issue, throw a custom response (graceful response)
    if(response.status === 403)  
      throw new Error('Permission Denied. Please confirm authentication');
    else if(!response.ok)
      throw new Error('Network response is NOT ok.');
    

    // otherwise return the reponse in JSON format
    return response.json();
  })
  .then((result) => {
    // logs out the data from the fetch request
    console.log(result.data);
  })
  
  .catch((error) => {
    // catch any error that occurs
    console.log(error);
  })
}

fetchData();