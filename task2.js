//1

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:',error))


//2    
fetch('https://randomuser.me/api/')
    .then( response => response.json)
    .then(data => console.log(data))
    .catch(error => console.error('Error:' , error))



//3

fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error : ',error))

