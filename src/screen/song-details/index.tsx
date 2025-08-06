import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { Images } from '../../common/images';
import { formatTime } from '../../common/methods';

const screenWidth = Dimensions.get('screen').width;

const SongDetails = ({ route }: any) => {
  console.log(route);
  const { song } = route.params;

  console.log();
  const imageURL = song?.artworkUrl100.replace('100x100', '1000x1000');

  return (
    <View style={styles.container}>
      <View style={styles.subView}>
        <View
          style={{
            height: screenWidth,
            width: screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: imageURL }}
            style={{ height: screenWidth, width: screenWidth }}
            resizeMode="cover"
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
          <View style={styles.albumviewTexStyle}>
            <Text style={styles.subTitle} numberOfLines={2}>
              Artist:
              <Text
                style={styles.artistname}
                onPress={() => Linking.openURL(song?.artistViewUrl)}
              >
                {' ' + song?.artistName}
              </Text>
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              Album: {song?.collectionName}
            </Text>
            <Text style={styles.subTitle}>Genre: {song?.primaryGenreName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SongDetails;
