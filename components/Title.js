import React from 'react';
import {
    Text,
} from 'react-native';

const Title = () => {
    return(
        <>
            <Text
            style={{
            fontSize: 40,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            fontStyle: 'italic',
            fontWeight: 'bold',
            padding: 10,
            color: '#d10000',
            fontFamily: 'sans-serif',
            }}
            >
            Tic
                <Text
                    style={{
                        color: '#1f9e0b',
                    }}
                >
                    Tac
                </Text>
            Toe
            </Text>
        </>
    );
}

export default React.memo(Title);