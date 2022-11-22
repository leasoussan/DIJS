const displayJson= (user) =>{
    const displyFront = document.getElementById('display_front_container');
    const divJson = document.createElement('h2')
    divJson.textContent = user;
    console.log(user);

}


    // fetch('http://localhost:8080')
    // console.log(jsonObject);
    // .then(res => res.json())
    // .then(data => {
    // console.log(data);
    // })
    // .catch(e=> {
    // console.log(e);
// })