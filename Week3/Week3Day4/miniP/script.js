const rightSection = document.getElementById('rightSection');
const leftSection = document.getElementById('leftSection');


function creatColorBox(){
    const colorPallette = document.createElement('div')
    colorPallette.setAttribute('class', 'colorPalette')
    leftSection.appendChild(colorPallette)

    const colorsList= colorsNames;
    for(const color of colorsList){
        const colorBox = document.createElement('div');
        colorBox.setAttribute('class', 'boxDesign');
        colorBox.style.backgroundColor = color.toLowerCase();
        colorPallette.appendChild(colorBox)
    };
}

creatColorBox()

function clearColorSelection(){

}