const fs =require('fs');

// fs.readFile('RightLeft.txt','utf-8',  (err, data)=> {
//     if(err){
//         console.error(err);
//         return
//     }
//     const display = data;
//     const splitData = display.split('')
//     // splitData.filter(elm => elm=='<' ? +1 : -1)
//     let readingPostition = 0;

//     splitData.forEach(elm => {
//         if(elm ==='>'){
//             readingPostition++;
//         }else if(elm === '<') {
//             readingPostition--;
//         }
//     })        
//     console.log(readingPostition);

//  } );
// ---------------------------------------test with async

//  async function readFile(filePath) {
//     try {
//       const data = await fs.readFile(filePath);
//       console.log(data.toString());
//     } catch (error) {
//       console.error(`Got an error trying to read the file: ${error.message}`);
//     }
//   }






// ex2


fs.readFile('RightLeft.txt', 'utf-8', (err,  data) =>{
    let counterSteps = 0;
    let position = 0
    const stepsData = data.split('');
    for(let i=0; position !== -1; i++){
        counterSteps++;
        if(stepsData[i] === '>'){
            position++;
        }else if(stepsData[i] === '<'){
            position--;
        };
        
   console.log("counterSteps", counterSteps);
    console.log("position", position);
}
})


// while(position !== -1){
//     counterSteps++;
//     if(stepsData[i] === '>'){
//         position++;
//     }else if(stepsData[i] === '<'){
//         position--;
//     }

    
// AMICHAi>>>>> What would be best usage here for loop or While loop. 
// Also Should we do these calculation inside the reading fs or out - ina function ? 
