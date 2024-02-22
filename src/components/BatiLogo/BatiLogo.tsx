import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatiLogoStyles';
import batiLogo from '../../../assets/bat-logo.png';

export function BatiLogo() {
    return (
        <>
            <Text style={styles.title}>
                        BatiLogo works!
            </Text>
            <Image 
            source={batiLogo}
            style={{ 
                resizeMode: 'contain',
                height: 180,
            }}
        />
    </>
    );
}