import fetch from 'node-fetch'

const fakeRESTApi = 'https://jsonplaceholder.typicode.com/users';
const urlNginx = 'http://localhost:8081/api/users';

fetch('http://app:9001/api/users')
    .then(res => res.json())
    .then(json => console.log(json))




    

// fetch('http://app:9000/api/users')
//         .then(res => res.json())
//         .then(json => {
//             console.log("First user in the array:")
//             console.log(json[0])
//             console.log("Name of the first user in the array:")
//             console.log(json[0].name)
// })

// async function get_request(){
//     const url = 'https://jsonplaceholder.typicode.com/todos'
//     const res = await fetch(url);
//     const data = await res.json();//assuming data is json
//     console.log(data)
//   }
//  setTimeout(get_request, 0);
//   get_request();


// var req = require('tiny_request')

// req.get({ url: 'http://localhost:8081/api/users', json: true}, function(body, response, err){
//     if ( response.statusCode == 200) {  
//         console.log(body) //body now is parsed JSON object
//     } 
//     console.log(err);
// })

// import fetch from 'node-fetch';

// const response = await fetch('http://localhost:8081/api/users');

// try {
// 	for await (const chunk of response.body) {
// 		console.dir(JSON.parse(chunk.toString()));
// 	}
// } catch (err) {
// 	console.error(err.stack);
// }
