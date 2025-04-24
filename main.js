const apiUri = `https://jsonplaceholder.typicode.com/photos`;

for(let i=0; i< 10; i++){
axios
.get(apiUri)
.then(response=>{console.log(i, response.data.response)})
}