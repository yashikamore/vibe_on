import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SongItem from '../../component/song-item';
import { fetchSongs } from '../../common/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/roots';
import styles from './styles';
import { Song } from '../../common/types';
import Loader from '../../component/loader';
type SongListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SongList'
>;

const SongList = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [songs, setSongs] = useState([]);
  const navigation = useNavigation<SongListNavigationProp>();

  const loadSongs = async () => {
    setLoading(true);
    const data = await fetchSongs();
    const sorted = data.sort(
      (a: Song, b: Song) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    );
    setSongs(sorted);
    setLoading(false);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  if (loading) {
    return <Loader color="#2196F3" />;
  }

  const renderItem = ({ item }: any) => {
    console.log(item, 'music song');
    return (
      <SongItem
        item={item}
        onPress={() => navigation.navigate('SongDetail', { song: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        keyExtractor={(item: any) => item.trackId.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadSongs} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
      />
    </View>
  );
};
export default SongList;
