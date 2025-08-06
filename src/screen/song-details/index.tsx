import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Images } from '../../common/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { formatTime } from '../../common/methods';

const SongDetails = ({ route }: any) => {
  console.log(route);
  const { song } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
        <View style={styles.textView}>
          <Image
            source={{ uri: song?.artworkUrl100 }}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => Linking.openURL(song?.previewUrl)}
            style={styles.songButtonStyle}
          >
            <Image source={Images.play} style={styles.playIconStyle} />
          </TouchableOpacity>
          <View style={styles.sondDetailViewstye}>
            <Text style={{ color: 'white' }}>
              {formatTime(song?.trackTimeMillis)}
            </Text>
          </View>
        </View>
        <View style={styles.textViewstyle}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {song?.trackName}
          </Text>
          <View style={styles.alumviewTexStyle}>
            <Text style={styles.subTitle} numberOfLines={2}>
              Artist: {song?.artistName}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              Album: {song?.collectionName}
            </Text>
            <Text style={styles.subTitle}>Genre: {song?.primaryGenreName}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SongDetails;
