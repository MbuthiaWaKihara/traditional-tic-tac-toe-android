import React, {
  useState, 
  useReducer,
  useEffect,
} from 'react';
import {
  View,
  ImageBackground,
  Platform,
} from 'react-native';
import Title from './components/Title';
import Grid from './components/Grid';
import Footer from './components/Footer';
import GameButton from './components/GameButton';
import {
  initializeGrid,
  handlePlayableActivity,
  checkForWin,
  aiReadableTranslater,
  appReadableTranslater,
} from './components/GameLogic';

const customStyle = {
  alignSelf: 'center',
  width: '78%',
  height: '10%',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#1f9e0b',
};

const initialScore = {
  X : 0,
  O : 0,
  draw: 0,
};

const scoreReducer = (currentScore, action) => {
  switch(action.type){
    case 'XWON':
      return ({
        ...currentScore,
        X : currentScore.X + 1,
      });
    case 'OWON':
      return ({
        ...currentScore,
        O : currentScore.O + 1,
      });
    case 'DRAW':
      return ({
        ...currentScore,
        draw : currentScore.draw + 1,
      });
    case 'RESET':
      return(initialScore);
    default: 
      return(currentScore);
  }
}

export default function App() {

  var ticTacToeAiEngine = require("tic-tac-toe-ai-engine");
 
  // var gameState = ['', '', '', '', '', '', '', '', 'O'];
  // console.log(ticTacToeAiEngine.computeMove(gameState));

  const [turn, setTurn] = useState('X');
  const [grid, setGrid] = useState(initializeGrid);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, dispatchScore] = useReducer(scoreReducer, initialScore);
  const [ai, setAi] = useState(false);
  const [aiIsThinking, setAiIsThinking] = useState(false); 

  const compStyle = {
    alignSelf: 'center',
    width: '78%',
    height: '5%',
    margin: 5,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: ai ? '#d10000' : '#1f9e0b',
  };

  const launchPlayerActivity = (gridInfo) => {
    let newGrid = handlePlayableActivity(grid, gridInfo.gridNumber, turn);
    setGrid(newGrid);
    setTurn(
      previousTurn => {
        let newTurn;
        if(previousTurn === 'X'){
          newTurn = 'O';
        }else{
          newTurn = 'X';
        }

        return newTurn;
      }
    );
    
    if(ai){
      setAiIsThinking(true);
      setTimeout(
        () => {
          let gameState = aiReadableTranslater(grid);
          let response = ticTacToeAiEngine.computeMove(gameState);
          let newGrid = appReadableTranslater(response.nextBestGameState);
    
          setGrid(newGrid);
          setTurn(
            previousTurn => {
              let newTurn;
              if(previousTurn === 'X'){
                newTurn = 'O';
              }else{
                newTurn = 'X';
              }
      
              return newTurn;
            }
          );
  
          setAiIsThinking(false);
        }, 250
      );
    }else{
      
    }

  }

  useEffect(
    () => {
      if(ai){
        //check for a win
        let winStatus = checkForWin(grid, (newGrid) => {setGrid(newGrid)});
        if(winStatus.win){
          setGameOver(true);
          if(winStatus.winner === 'X'){
            dispatchScore({type: 'XWON'});
          }else{
            dispatchScore({type: 'OWON'});
          }
        }else{
          //check for a draw
          let draw = true;
          grid.forEach(
            (row, rowIndex) => {
              row.forEach(
                (square, squareIndex) => {
                  if(!square.value){
                    draw = false;
                  }
                }
              )
            }
          )

          if(draw){
            setGameOver(true);
            dispatchScore({type: 'DRAW'});
          }
        }
      }
    }, [grid]
  );

  useEffect(
    () => {
      if(!ai){
        //check for a win
        let winStatus = checkForWin(grid, (newGrid) => {setGrid(newGrid)});
        if(winStatus.win){
          setGameOver(true);
          if(winStatus.winner === 'X'){
            dispatchScore({type: 'XWON'});
          }else{
            dispatchScore({type: 'OWON'});
          }
        }else{
          //check for a draw
          let draw = true;
          grid.forEach(
            (row, rowIndex) => {
              row.forEach(
                (square, squareIndex) => {
                  if(!square.value){
                    draw = false;
                  }
                }
              )
            }
          )

          if(draw){
            setGameOver(true);
            dispatchScore({type: 'DRAW'});
          }
        }
      }
    },[turn]
  );
  
  const handleRestart = () => {
    setGrid(initializeGrid());
    setGameOver(false);
  }

  return (
      <View 
      style={{
        flex: 1,
        backgroundColor: '#000000',
      }}
      >

        <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={require('./images/wall.jpg')}
        >
          <View
          style={{
            flex: 1,
          }}
          >
            <Title/>
            <GameButton
              text={`Play ${ai ? 'a friend' : Platform.OS}`}
              customStyle={compStyle}
              onPress={() => {setAi(!ai); setTurn('X'); dispatchScore({type: 'RESET'}); handleRestart(); }}
              />
            <Grid
            grid={grid}
            playerActivity={launchPlayerActivity}
            gameOver={gameOver}
            aiIsThinking={aiIsThinking}
            />
            {
              gameOver && 
              <GameButton
              text="Restart"
              customStyle={customStyle}
              onPress={handleRestart}
              />
            }
            <Footer
            score={currentScore}
            resetScore={() => dispatchScore({type: 'RESET'})}
            />
          </View>
        </ImageBackground>
      </View>
  );
}
