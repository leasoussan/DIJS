import React from "react";
import robots from '../data.json'
import './Robots.css'

class Robots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots.superheroes,
            score: 0,
            topScore: 0,
        };
    }


    // componentDidUpdate() {
    //     const robotsList = this.state.robots
    //     // console.log(robotsList );

    //     let newAray = robotsList
    //                 .map(item => ({item, sort: Math.random()})) 
    //                 .sort((a,b) => a.sort - b.sort) 
    //                 .map(({item})=> item);
    //     this.setState({robots:newAray})                               
    //   }

    handleShuffle = () => {
        console.log("move");
        const robotsList = this.state.robots
        // console.log(robotsList );

        let newAray = robotsList
            .map(item => ({ item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ item }) => item);

            // console.log(robotsList);
        this.setState({robots: newAray })
        console.log(this.state.robots);
    }


    handleClick = (e) => {
        const clickedEle = e.target.parentElement.id;

        if (this.state.robots[clickedEle].clicked === false) {
            this.state.robots[clickedEle].clicked = true;

            this.setState({ score: this.state.score + 1 })
            if (this.state.score > this.state.topScore) {
                this.setState({ topScore: this.state.score })
            }
            this.handleShuffle(this.state.robots)
        } else {
            this.setState({ score: 0 })
            this.state.robots.map(robot => { robot.clicked = false })

        }


    }




    render() {
        return (
            <>
                <div>
                    your Score is {this.state.score}
                </div>
                <div>
                    your TOP SCORE**** is {this.state.topScore}
                </div>
                <div className="board_display">

                    {
                        this.state.robots.map(item => {
                            return (

                                <div key={item.id} id={item.id} onClick={this.handleClick} onChange={this.handleShuffle} className="card_style">
                                    <img src={item.image}></img>
                                    <div>

                                        <h4>{item.name}</h4>
                                        <h4>{item.occupation}</h4>

                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
            </>


        )
    }
}

export default Robots 