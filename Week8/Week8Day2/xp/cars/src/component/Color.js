// import React from "react";


// XP DAY 2


// class Color extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             favoriteColor: "red"
//         }
//     }

//     shouldComponentUpdate() {
//         return false
//         // return true
//     }
//     componentDidMount() {

//         const changeColorTimer = setTimeout(() => {
//             this.setState({ favoriteColor: "yellow" })
//         }, 5000)
//     }


//     changeColor = () => {
//         this.setState({ favoriteColor: "blue" })
//     }

//     

//     render() {
//         return (
//             <>

//                 <h1> my Favorit Color is {this.state.favoriteColor}</h1>
//                 <button onClick={this.changeColor}>Change Color</button>

//             </>
//         )
//     }
// }




// export default Color








// -----------------------------------------------XP DAY 3
import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red",
            show:true
        }
    }

    shouldComponentUpdate() {
        // return false
        return true
    }
    componentDidMount() {
        const changeColorTimer = setTimeout(() => {
            this.setState({ favoriteColor: "yellow" })
        }, 5000)
    }


    changeColor = () => {
        this.setState({ favoriteColor: "blue" })
    }


    componentDidUpdate = (e) => {
       document.querySelector('.last_color').innerHTML =`My favorit Color  is ${this.state.favoriteColor}`
    

    //    do i have to return something here?
    }


    getSnapshotBeforeUpdate(prevprops, prevState){
        document.querySelector('.snapshot').innerHTML =`before the change the color was ${prevState.favoriteColor}`
        document.querySelector(".after_snapshot").innerHTML=`After the shot it changes with magic touch to${this.state.favoriteColor}`
        
    }
    updateShow=(e)=>{
        this.setState({show:false})
    }


    // Dont we need it??????

    // componentDidUpdate(){
    //     document.querySelector(".after_snapshot").innerHTML=`After the shot it changes with magic touch to${this.state.favoriteColor}`
    // } 



    changeColorAgain = () => {
        this.setState({ favoriteColor: "pink" })
    }

    render() {
        let header;
        if(this.state.show){
            header = <Child />
        };
        return (
            <>

                <h1> my Favorit Color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
                <button onClick={this.changeColorAgain}>Change again</button>
                <div className="last_color"></div>
                <div className="snapshot"> </div>
                <div className="after_snapshot"> </div>

                {header}
                <button onClick={this.updateShow}>Delete Header</button>
            </> 
        )
    }
}



class Child extends React.Component {

    componentWillUnmount() {
        alert("Oups are you sure about this .....you are anmounting!!!!")
    }

    render() {
            return (
                <>
                    <h1>Hello World</h1>
                </>

            )

        }
    }


// export default Child
export default Color