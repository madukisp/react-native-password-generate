import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import LogoImage from '../../../assets/pass-logo.png';

export function Logo() {
    return (
        <>
            <Text style={styles.title}>Password Generate</Text>
            <Image 
                source={LogoImage}
                style={{ 
                    resizeMode: 'contain',
                    height: 180,
                }}
            />
        </>
    );
}
