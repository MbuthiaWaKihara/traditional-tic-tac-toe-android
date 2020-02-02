import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

const Playable = ({gridInfo, handlePress, gameOver, aiIsThinking}) => {

    return(
        <TouchableOpacity
        style={{
            width: '30%',
            height: '30%',
            backgroundColor: gridInfo.isInWin ? '#d10000': '#b1b3b1',
            border: 'none',
            borderRadius: 5,
            margin: 3,
            alignItems: 'center',
            justifyContent: 'center',
        }}
        disabled={gridInfo.value || gameOver || aiIsThinking ? true : false}
        onPress={() => {
            handlePress(gridInfo);
        }}
        >
            <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <Text
                style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    textAlign: 'center',
                    color: gridInfo.isInWin ? '#ffffff': '#000000',
                }}
                >
                    {gridInfo.value}
                </Text>
            </View>
        </TouchableOpacity>

    );
}

export default React.memo(Playable);