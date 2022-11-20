// Exercise
// Create a shopping List
// Create an HTML file
// Create a JS file - Add the below array of objects inside your javascript file.
// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. 
// Each item is an object containing the name of the product and the price.
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) 
// and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. 
// Using the DOM display all the items that the user bought and the total price 
// he needs to pay as well as a "Submit payment" Button
// When the button is clicked 
// -> add a successful message on the page, and clear all the items from the local storage.
const products = [
        {
            id: 0,
            name: "Deluxe Bicycle",
            url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
            price: 499.98
        },
        {
            id: 1,
            name: "Super Deluxe bagpack",
            url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
            price: 134.99
        },
        {
            id: 2,
            name: "Super Duper Scooter",
            url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
            price: 1090.95
        },
        {
            id: 3,
            name: "Smartphone",
            url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
            price: 399.99
        }
    ];

function getProduct() {

    const getObject = products;

    getObject.forEach((item) => {
        const getDiv = document.querySelector('#display_item');
        const createItem = document.createElement('div');
        createItem.setAttribute('class', 'item_diplay');
        const createImg = document.createElement('img');
        createImg.src = item.url;
        createImg.setAttribute('class', 'img_display');
        const createName = document.createElement('h2');
        createName.textContent = item.name;
        createName.setAttribute('id', 'item_name');

        const createPrice = document.createElement('p');
        createPrice.textContent = item.price;
        createPrice.setAttribute('class', 'item_price_tag')
        const buyBtn = document.createElement('button');
        buyBtn.textContent= 'Add To Chart';
        buyBtn.setAttribute('id', 'add_chart_btn');
        createItem.appendChild(createImg);
        createItem.appendChild(createPrice);
        createItem.appendChild(createName);
        createItem.appendChild(buyBtn);
        getDiv.appendChild(createItem);
        buyBtn.addEventListener('click', saveToLocalStogare);

    })
}
// localStorage.removeItem(chart)

getProduct() 
const chart =[] || JSON.parse(localStorage.getItem("allproduct"))

function saveToLocalStogare(event){
    const getItemName = event.target.parentElement.children['item_name'].innerText;
    const getItemPrice = event.target.parentElement.children[1].innerText;
    console.log(getItemPrice);
    const completItem = [getItemName,getItemPrice]
    chart.push(completItem)
    localStorage.setItem('allproduct', JSON.stringify(chart))
    // localStorage.setItem('allproduct', chart)

    // needs to stringfy array 
}



// const pay_btn = document.querySelector('go_to_pay_button')
// pay_btn.addEventListener('click')

// LOCAL STORAGE
// localStorage.setItem(key, value)
// localStorage.setItem("counter", 100)
// localStorage.setItem("colors", JSON.stringify(['yellow', 'pink']))
// localStorage.setItem("colorsObj", JSON.stringify({color:'yellow'}))


// localStorage.getItem(key)
// // localStorage.getItem("counter")
// // JSON.parse(localStorage.setItem("colors"))
// // JSON.parse(localStorage.setItem("colorsObj"))

// localStorage.removeItem(key)


// localStorage.clear() //delete everything from local storage

