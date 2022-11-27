// in order to POST
const BASE_URL = 'http://localhost:8080';

const getProducts = ()=>{
    fetch(`${BASE_URL}/api/products`)
    .then(res => res.json())
    .then(prods =>{
        console.log(prods);
    })
    .catch(err=>{
        console.log(err);
    })
}



const creatProduct = ()=>{
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;

    // fetch(url, option)
    fetch('api/products', {
        method:'POST',
        headers:{
            'Content-type':'application/json',//not mandatroy but best practice
        },
        body:JSON.stringify({name,price})//here we take the object from the body 
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    .catch(e =>{
        console.log(e);
    })
}