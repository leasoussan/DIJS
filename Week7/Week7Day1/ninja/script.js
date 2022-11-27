// EX1
const { faker } = require('@faker-js/faker');



let numbersOfUsers = 10
const fakeUsers = []
const getUsers = () => {
    for (let i of numbersOfUsers) {
        const randomName = faker.name.fullName(); 
        const randomAddress = faker.address.streetAddress(); 
        const randomCity = faker.address.cityName();
        const User = {name:randomName, street :randomAddress, city:randomCity }
    }
}

console.log("name: " + randomName, "address:" + randomAddress, "city:" + randomCity);


