import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '../../common/images';
import styles from './styles';

interface CustomHeaderProps {
  title: string;
  onPress?: () => void | null;
}

const Header: React.FC<CustomHeaderProps> = ({ title, onPress }) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.subView}>
        <Text style={styles.headerFontStyle}>{title}</Text>
      </View>
      {onPress && (
        <TouchableOpacity style={styles.butttonView} onPress={onPress}>
          <Image source={Images.back} style={styles.iconStyle} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Header;
