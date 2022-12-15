import { React, useState, useEffect } from "react";
import './GameBoard.css'
import {CheckPatterns} from "./CheckPatterns";
import Button from 'react-bootstrap/Button';

const GameBoard = () => {

    // [start, setStart] = useState('');
    const [playerOneMove, setPlayerOneMove] = useState([]);
    const [playerTwoMove, setPlayerTwoMove] = useState([]);
    const [mode, setMode] =useState('');
    const [turn, setTurn]=useState('');
    const [boardState, setBoardState] = useState([]);
    
    const playerDesk = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    useEffect(()=>{
        if(boardState.length === 0){
            setTurn('playerOne')
        }
        
    },[playerOneMove, playerTwoMove, mode, turn, boardState])


    const handleClickMove=(e)=>{
        const getPlayedRound = e.target.attributes.props
        console.log(getPlayedRound);
        console.log(turn);
        
        const checkTurn = ()=>{
            if(getPlayedRound.value === 'playerOne'){
                console.log('player one move');
                setPlayerOneMove(playerOneMove=> [...playerOneMove, e.target.id]);
                setBoardState(boardState=> [...boardState, e.target.id]);
                
            }else{
                console.log('player one move');

                setPlayerOneMove(playerTwoMove=> [...playerTwoMove, e.target.id]);
                setBoardState(boardState=> [...boardState, e.target.id]);
                
            }
           
        }
        checkTurn()

        
        const displayMoveOnBoard =(player)=>{
            if(player === 'playerOne'){
                document.querySelector('#')
            }
        } 
       
       
    }


    const handlePlayMode=(e)=>{
        console.log(e.target.value);
    }

    const handleReset=()=>{
        setBoardState([])
        console.log('board Cleared', boardState);
        setTurn('playerOne')
    }


    return (
        <>
            <div id="game_board">
                <div id='game_starter'>
                        <Button onClick={handlePlayMode} value="two_players"> Two Players</Button>
                        <Button onClick={handlePlayMode} value="computer_play">Play Linux</Button>
                        <Button onClick={handleReset} value="reste">Reset</Button>

                </div>
                    <div id='grid_board'>

                        {
                            playerDesk.map(number => {
                                return (
                                    <div key={number} id={number} props={turn === 'playerOne' ? setTurn('playerTwo' : setTurn('playerTwo'))} className='moveBox' onClick={handleClickMove}>
                            
                                    </div>
                                )

                            })
                        }



                    </div>

            </div>





        </>
    )

}

export default GameBoard