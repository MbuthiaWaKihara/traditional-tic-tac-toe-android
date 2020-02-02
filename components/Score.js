import React from 'react';
import {
    View,
    Text,
} from 'react-native';

const Score = ({title, value, backgroundColor}) => {
    return(
        <>
            <View
            style={{
                backgroundColor,
                width: '34%',
                height: '100%',
                alignItems: 'center',
            }}
            >
                <View
                style={{
                    marginBottom: 5,
                }}
                >
                    <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#d10000'
                    }}
                    >
                        {title}
                    </Text>
                </View>
                <View>
                    <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: 'normal',
                    }}
                    >
                        {value}
                    </Text>
                </View>
            </View>
        </>
    );
}

export default React.memo(Score);