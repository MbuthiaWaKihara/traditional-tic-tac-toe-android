import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

const GameButton = ({customStyle, text, onPress}) => {
    return(
        <>
            <TouchableOpacity
            style={{
                ...customStyle,
            }}
            onPress={onPress}
            >
                <View
                 style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                }}
                >
                    <Text
                     style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: 20,                           
                    }}
                    >
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default React.memo(GameButton);