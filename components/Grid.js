import React from 'react';
import {
    View,
} from 'react-native';
import Playable from './Playable';

const Grid = ({grid, playerActivity, gameOver, aiIsThinking}) => {

    const formattedGrid = grid.map(
        (row, rowIndex) => {
           return(
                row.map(
                    (playable, playableIndex) => {
                        return(
                            <Playable
                             key={playable.gridNumber} 
                             gridInfo={playable} 
                             handlePress={playerActivity} 
                             gameOver={gameOver}
                             aiIsThinking={aiIsThinking}
                             />
                        );
                    }
                )
           );
        }
    );
    return(
        <>
            <View
            style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignSelf: 'center',
                width: '80%',
                height: '50%',
            }}
            >
                {formattedGrid}
            </View>
        </>
    );
}

export default React.memo(Grid);