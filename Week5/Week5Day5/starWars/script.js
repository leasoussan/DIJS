const getButton = document.querySelector('#search_btn');
getButton.addEventListener('click', getData);

async function getData(event) {
    event.preventDefault();
    const usedNumbers = [];
    const randomNumber = Math.floor(Math.random() * 84)
    const getUrl = await fetch(`https://www.swapi.tech/api/people/${randomNumber}`)
    const getAvatar = await getUrl.json();
    creatdisplayAvatar(getAvatar);
}

function creatdisplayAvatar(element) {
    // console.log(Object.keys(element.result.properties));
    // const getDiv = document.querySelector('#avatar_detail_display')
    const getDiv = document.querySelector('#display_avatar');
    const createAvatarDisplay = document.createElement('div');
    getDiv.appendChild(createAvatarDisplay)
    createAvatarDisplay.setAttribute('id', 'avatar_detail_display')
    // getDiv.appendChild(creatdisplayAvatar)
    const getDetail = element.result.properties;
    // Object.keys(element)
    // console.log("getDetail first", getDetail["name"]);
    const selectDetails= ["name", "height", "gender", "birth_year", "homeworld"];
    
    selectDetails.forEach((detail) => {
        console.log("here",detail);
        const getDiv = document.querySelector('#avatar_detail_display')
        const detailBoxAvatar = document.createElement('div');
        detailBoxAvatar.setAttribute("id", "oneDetail_elem");

        const h3 = document.createElement("h3")
        const getLableDataDetail = document.createTextNode(detail.toUpperCase().replace(/_/, ' '));
        h3.appendChild(getLableDataDetail);

        const getData = getDetail[detail];

        const h4 = document.createElement("h4");
        const createResultText = document.createTextNode(getData);
        h4.appendChild(createResultText);
                detailBoxAvatar.appendChild(h3);
        detailBoxAvatar.appendChild(h4);
        getDiv.appendChild(detailBoxAvatar)

    });
    }
