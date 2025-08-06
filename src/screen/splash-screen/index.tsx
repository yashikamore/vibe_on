import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Images } from '../../common/images';
import styles from './styles';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SongList');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.headPhone} style={{ height: 100, width: 100 }} />
      <Text style={styles.title}>VibeOn</Text>
    </View>
  );
};
export default SplashScreen;
