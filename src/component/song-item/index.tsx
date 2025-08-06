import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Song } from '../../common/types';
import styles from './styles';

interface Props {
  item: Song;
  onPress: () => void;
}

const SongItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image source={{ uri: item.artworkUrl100 }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title} numberOfLines={1}>
          {item.trackName}
        </Text>
        <Text style={styles.artist}>{item.artistName}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SongItem;
