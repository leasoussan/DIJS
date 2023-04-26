import React from "react";
import robots from '../data.json'
import './Robots.css'

class Robots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots.superheroes.map(robot => ({ ...robot, clicked: false })),
            score: 0,
            topScore: 0,
        };
    }


    handleShuffle = () => {
        this.setState(prevState => {
            const robotsList = [...prevState.robots];
            let newArray = robotsList
                .map(item => ({ item, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ item }) => item);
            console.log("newArray", newArray);
            return { robots: newArray };

        });
    };


    handleClick = (e) => {
        const clickedEle = e.target.parentElement.id;
        const robotsList =this.state.robots;

        const robotToUpdat =  
        console.log("toUp", robotToUpdat);
    
        // {
        //     if(!value.clicked){
               
        //     }
        //     console.log(this.state.robots);
        
        //   });
          
        // if (this.state.robots[clickedEle].clicked === false) {
          

        // //     this.setState(prevState => {
        // //         const updatedRobots = [...prevState.robots];
               
        // //         console.log("updated elem",  updatedRobots)
        // //           updatedRobots[clickedEle].clicked = true;
        // //           const updatedScore = prevState.score + 1;
        // //           const updatedTopScore = updatedScore > prevState.topScore ? updatedScore : prevState.topScore;
        // //           return {
        // //             robots: updatedRobots,
        // //             score: updatedScore,
        // //             topScore: updatedTopScore
        // //           };

        // //         this.handleShuffle();
        // //     })
        // //     // };
        
        // else {
        //     this.setState(prevState => {
        //         const updatedRobots = prevState.robots.map(robots => {
        //             return { ...robots, clicked: false };
        //         });
        //         return { robots: updatedRobots, score: 0 }
        //     });
        // }

    }




    render() {
        const { score, topScore, robots } = this.state

        const robotElements = robots.map((robot) => (
            <div key={robot.id} id={robot.id} onClick={this.handleClick} onChange={this.handleShuffle} className="card_style">
                <img src={robot.image} alt={robot.name} />
                <div className="title_robot">
                    <h4>{robot.name}</h4>

                    <h4>{robot.occupation}</h4>
                </div>
            </div>
        ));



        return (
            <>
                <div className="game_header">
                    <h1> Memory Game </h1>
                    <h3> Click Once on each Marvelouser....if you cliced twice ...you lose</h3>
                    <div className="scores_records">
                        <div>Your score is {score}</div>
                        <div>Your top score is {topScore}</div>
                    </div>

                </div>

                <div className="memory-game-panel">{robotElements}</div>
            </>)
    }
}

export default Robots 