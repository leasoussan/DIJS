
// 
// async function getDataFront((req,res)=> ) {
//     try{
//         if()
//         const getApi = await fetch('http://localhost:5000/api/product')
//         const toJson = await getApi.json()
//         createProduct(toJson)    
//     }

// }

// getDataFront()
// console.log("BRAVVAA");





const getData = () =>{
    fetch('http://localhost:5000/api/product')
    .then(res => res.json())
    .then(data =>{
        createProduct(data);
    })
    .catch(e =>{
        console.log(e);
    });
}

getData();

const createProduct = (arr) =>{
    const root = document.querySelector('#root');
    arr.forEach((item, i) => {
        let div = document.createElement('div');
        div.innerText = item.name +' '+ item.price;
        root.appendChild(div)
    });
}