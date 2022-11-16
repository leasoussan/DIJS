// function to retrieve the value of the inputs
const getInfo = (event) => {
    event.preventDefault();
    const latituteP = event.target.latitudeParis.value;
    const longitudeP = event.target.longitudeParis.value;
    const longitudeN = event.target.longitudeNY.value;
    const latituteN = event.target.latitudeNY.value;
    fetchData(latituteP, longitudeP, longitudeN, latituteN)
}

async function fetchData (latP, latN, lonP, lonN) {
    try {
        //fetch the sunrise api
        const urlParis = `https://api.sunrise-sunset.org/json?lat=${latP}&lng=${lonP}`;
        const urlNY = `https://api.sunrise-sunset.org/json?lat=${latN}&lng=${lonN}`;

        const resultsParis = await fetch(urlParis);
        //wait for the promise to finish
        console.log(resultsParis); // Response

        if (resultsParis.status === 200) {
            ///something here
            //parse the data, we need to use the json method -- it does the job of JSON.parse()
            // json method returns a promise
            // I want to use the result of this promise
            const dataInfo = await resultsParis.json()
            //append it on the page
            appendData(dataInfo) 
            //display the information
        } else {
            throw new Error("problem");
        }

    } catch (err){
        //err gives information about the error that was thrown
        console.log("the error is", err);
    }
}

function appendData (dataInfo) {
    //retrieve the section
    const container = document.querySelector("#container");
    const p = document.createElement("p");
    p.textContent = `The sunrise is ${dataInfo.results.sunrise}`;
    container.appendChild(p)
}



//retrieve the form
const formSunriseSunset = document.querySelector("#formSunriseSunset");
formSunriseSunset.addEventListener("submit", getInfo);

