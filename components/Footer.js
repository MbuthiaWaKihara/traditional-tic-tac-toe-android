import React from 'react';
import {
    View,
} from 'react-native';
import Score from './Score';
import GameButton from './GameButton';

const customStyle = {
    width: '100%',
    height: '30%',
    position: 'absolute',
    backgroundColor: '#1f9e0b',
    bottom: 0,
    left: 0,
}

const Footer = ({score, resetScore}) => {
    return(
        <>
            <View
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                alignSelf: 'stretch',
                height: '20%',
                width: '100%',
                backgroundColor: '#d3d9d2',
            }}
            >
               <View
               style={{
                   flexDirection: 'row',
                   height: '70%'
               }}
               >
                <Score
                    title="X"
                    value={score.X}
                    backgroundColor="#a6a6a6"
                    />
                    <Score
                    title="Draw"
                    value={score.draw}
                    backgroundColor="#d1d4cf"
                    />
                    <Score
                    title="O"
                    value={score.O}
                    backgroundColor="#a6a6a6"
                    />
               </View>
               <GameButton
               text="Reset Score"
               customStyle={customStyle}
               onPress={resetScore}
               />
            </View>
        </>
    );
}

export default React.memo(Footer);