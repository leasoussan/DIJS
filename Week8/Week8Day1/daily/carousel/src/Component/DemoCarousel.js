import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './DemoCarousel.css'


// ___________________________?????_____________________________________CAN I DO THSI TO IMPORT IMAGES?
// const createCarouselItemImages = (index, options = {}) => {
//     <div key={index}>
//         <img src={`../images${index}`} />
//     </div>
// }



class DemoCarousel extends Component {

    render() {

        return (
            <Carousel autoPlay className='carousel_container'>
                <div>
                    <img alt="" src={"images/blue_cheese.jpg"} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="" src={"images/camembert.jpeg"} />
                    <p className="legend">Camembert</p>               
                     </div>
                <div>
                    <img src={"images/dry_saussage.jpg"} />
                    <p className="legend">Dry Saussage</p>
                </div>

                <div>
                    <img src={"images/camembert.jpeg"} />
                    <p className="legend">Dry Saussage</p>
                </div>
            </Carousel>
        );
    }
}


export default DemoCarousel